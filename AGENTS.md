# 公开演示版开发与同步规则

用户于 2026-10-11 明确要求：以后在桌面本地文件夹开发更新，并同步 GitHub 演示页面。

- 正式 MES 开发路径：`/Users/hz/Desktop/XAIGIN维修中心MES`。遵循该项目自己的开发规则；真实后端、数据库、账号和附件不可进入公开演示仓库。
- 演示版本地路径：`/Users/hz/Desktop/XAIGIN-MES公开演示版`。仅关联 `51best/xaigin-mes-demo`，Pages 地址为 `https://51best.github.io/xaigin-mes-demo/`。
- 官网项目与 `51best/xaigin-company-website` 不属于此任务；不得为演示更新修改官网。
- 先检查工作区并保留他人改动。先在本地完成相关修改，更新 `DEVLOG.md` 与 `docs/release-log.md`，再测试和推送；不要直接在 GitHub 网页编辑代替本地开发。
- `scripts/export.py` 仅导出正式项目 `web/reference` 中五个白名单文件；该目录是虚构数据原型。正式 `web/app.js` 和后端的功能改动不会自动出现在演示中，需要把相应交互做成模拟版本再导出。
- 任何导出前审阅模拟数据来源；禁止导出生产数据、登录秘密、私有数据库备份、客户附件。公开前端可以被阅读，不承诺代码不可查看。
- 演示修改只保存页面内存，刷新恢复。不能暗示模拟扫码、财务、合同、设备状态或地图点位已对接真实系统。
- 发布前执行 `node tests/static.cjs` 和本地 `node tests/browser.cjs`；测试使用独立静态端口 8099，不访问正式 8088 或 mes.db。
- 检查 `git diff`，只提交本次文件，然后推送本仓库 main。用户已授权后续相关演示开发同步发布；无关改动不要一起推送。
- 发布后核对 GitHub Pages 构建结果，再用 `DEMO_URL=https://51best.github.io/xaigin-mes-demo/ node tests/browser.cjs` 验证公网，确认匿名 HTTP200 和本地资源一致。
- 若测试或发布失败，记录失败项并明确通知用户，不声称同步成功。没有新修改时无需重复构建；不要自动定时发布。
