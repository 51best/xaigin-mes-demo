const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');
assert.match(html, /公开演示/);
assert.match(html, /connect-src 'none'/);
assert.ok(!html.includes('/static/'), 'GitHub project subpath must use relative assets');
for (const match of html.matchAll(/(?:src|href)="\.\/([^"?#]+)"/g)) {
  assert.ok(fs.existsSync(path.join(root, match[1])), `missing resource ${match[1]}`);
}
const scripts = ['prototype.js', 'demo-data.js', 'map-geometry.js'];
for (const name of scripts) {
  const text = fs.readFileSync(path.join(root, name), 'utf8');
  assert.ok(!/\bfetch\s*\(|XMLHttpRequest|WebSocket|\/api\/|sendBeacon/.test(text), `network capability in ${name}`);
  assert.ok(!/gh[pousr]_[A-Za-z0-9]{20,}|sk-[A-Za-z0-9]{20,}|PRIVATE KEY/.test(text), `secret-like material in ${name}`);
}
assert.match(fs.readFileSync(path.join(root, 'demo-data.js'), 'utf8'), /entirely fictional/);
function inspect(dir) {
  for (const entry of fs.readdirSync(dir, {withFileTypes: true})) {
    if (['.git', 'artifacts'].includes(entry.name)) continue;
    const file = path.join(dir, entry.name);
    if (entry.isDirectory()) inspect(file);
    else assert.ok(!/(?:\.db|\.sqlite|\.key|\.pem|\.fernet)$|^\.env$/.test(entry.name), `private file ${file}`);
  }
}
inspect(root);
console.log('PASS: relative resources, simulated data, network isolation, no database or key files');
