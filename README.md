# XAIGIN 维修中心 MES 公开演示

公开预览地址：https://51best.github.io/xaigin-mes-demo/

独立静态界面原型，所有业务记录均为虚构数据，不连接生产 API 或数据库。
无须账号即可浏览。筛选、工单详情、地图切换、扫码查询与设备绑定可在页面内演示。
部分业务按钮为原型占位提示，刷新后恢复模拟数据；二维码图案不是可扫码的生产标签。
地图点位及财务数据不能作为真实经营数据使用。

本仓库仅包含公开演示前端。完整 MES 后端、真实数据库、登录凭据、客户附件不在此仓库。
访问者能查看前端资源，但没有提交或部署修改的权限。

## 独立本地运行

在本文件所在文件夹执行 `python3 -m http.server 8099 --bind 127.0.0.1`，然后打开 http://127.0.0.1:8099/。
终端按 Ctrl+C 停止。无需生产账号或数据库。

## 更新与验证

`python3 scripts/export.py` 从固定白名单导出原型；`node tests/static.cjs` 检查公开边界。
`DEMO_URL=http://127.0.0.1:8099/ node tests/browser.cjs` 检查运行界面，需 Playwright 与系统 Chrome。
浏览器测试依赖默认取本机 MES 的 node_modules/playwright；其他电脑可通过 PLAYWRIGHT_PATH 指定安装路径。
修改后通过本地测试再推送 main；GitHub Pages 从 main 根目录构建发布。
生产界面更新不会自动更新此演示，需要重新导出并检查。
