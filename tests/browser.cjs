const {chromium} = require(process.env.PLAYWRIGHT_PATH || '/Users/hz/Desktop/XAIGIN维修中心MES/node_modules/playwright');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const url = process.env.DEMO_URL || 'http://127.0.0.1:8099/';
const routes = ['front/overview','front/production','data/assets','data/inventory','data/purchasing','data/commercial','data/finance','admin/people','admin/roles','admin/audit','qr/scan','qr/devices','qr/labels','qr/history'];
(async () => {
  fs.mkdirSync('artifacts', {recursive:true});
  const browser = await chromium.launch({channel:'chrome', headless:true});
  try {
    const page = await browser.newPage();
    const errors = [], requests = [];
    page.on('pageerror', error => errors.push(error.message));
    page.on('response', response => {if(response.status() >= 400) errors.push(`${response.status()} ${response.url()}`)});
    page.on('request', request => requests.push(request.url()));
    for (const width of [1440,390]) {
      await page.setViewportSize({width,height:960});
      await page.goto(url, {waitUntil:'networkidle'});
      assert.equal(await page.evaluate(() => getComputedStyle(document.body).backgroundColor), 'rgb(8, 19, 31)', 'dark page background');
      assert.match(await page.locator('.demo-banner').innerText(), /全部业务数据为模拟/);
      for (const route of routes) {
        await page.locator(`#sideNav a[href="#/${route}"]`).click();
        await page.waitForFunction(() => document.querySelector('#view h1')?.textContent.length > 0);
        await page.waitForFunction(expected => location.hash === '#/' + expected, route);
        await page.waitForFunction(expected => document.querySelector('#sideNav a.active')?.getAttribute('href') === '#/' + expected, route);
        assert.ok(await page.locator('#view').innerText().then(text => text.length > 100), `empty view ${route}`);
        assert.equal(await page.locator('#view h1').evaluate(el => getComputedStyle(el).color), 'rgb(245, 249, 255)', `light heading ${route}`);
        assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), `overflow ${width}: ${route}`);
      }
      await page.goto(`${url}#/front/overview`, {waitUntil:'networkidle'});
      await page.screenshot({path:`artifacts/overview-${width}.png`,fullPage:true});
    }
    await page.setViewportSize({width:1440,height:960});
    await page.goto(`${url}#/front/overview`, {waitUntil:'networkidle'});
    await page.locator('[data-map-view="world"]').click();
    await page.locator('.world-map').waitFor();
    await page.locator('[data-map-view="china"]').click();
    await page.locator('.china-map').waitFor();
    await page.locator('[name="mapProduct"]').selectOption('B300系列');
    assert.ok(await page.locator('[data-map-site]').count() > 0, 'filtered map sites');
    await page.locator('[data-map-site]').first().click();
    await page.goto(`${url}#/front/production`, {waitUntil:'networkidle'});
    await page.locator('[data-work]').first().click();
    assert.equal(await page.locator('#drawer').getAttribute('aria-hidden'), 'false');
    assert.match(await page.locator('#drawer').innerText(), /实景机房压测/);
    assert.match(await page.locator('#drawer').innerText(), /包装发货/);
    await page.locator('[data-action="close-drawer"]').click();
    await page.goto(`${url}#/data/inventory`, {waitUntil:'networkidle'});
    await page.locator('#view a[href^="#/data/inventory/"]').first().click();
    await page.waitForFunction(() => location.hash.startsWith('#/data/inventory/'));
    assert.ok((await page.locator('#view').innerText()).length > 100);
    await page.goto(`${url}#/data/finance`, {waitUntil:'networkidle'});
    await page.locator('.finance-cost-track').first().waitFor();
    await page.screenshot({path:'artifacts/finance-1440.png',fullPage:true});
    await page.goto(`${url}#/qr/scan`, {waitUntil:'networkidle'});
    await page.locator('[data-scan-sample]').first().click();
    await page.locator('.result-box').waitFor();
    assert.match(await page.locator('.result-box').innerText(), /核验成功/);
    await page.goto(`${url}#/qr/devices`, {waitUntil:'networkidle'});
    const button = page.locator('[data-unbind]').first();
    const id = await button.getAttribute('data-unbind');
    await button.click();
    await page.locator(`[data-bind-existing="${id}"]`).waitFor();
    await page.locator(`[data-bind-existing="${id}"]`).click();
    await page.locator(`[data-unbind="${id}"]`).waitFor();
    assert.deepEqual(errors, [], 'runtime and resource errors');
    assert.ok(requests.every(value => new URL(value).origin === new URL(url).origin), 'unexpected external request');
    assert.ok(requests.every(value => !value.includes('/api/')), 'production API requested');
    console.log('PASS: 14 pages × 2 widths; map, workorder, inventory, finance, QR, device binding; zero runtime/resource/API errors');
  } finally {await browser.close()}
})().catch(error => {console.error(error);process.exit(1)});
