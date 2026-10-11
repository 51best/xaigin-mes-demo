"""MES-PUBLIC-DEMO-001: export only the fictional, API-free reference UI."""
from pathlib import Path

SOURCE = Path('/Users/hz/Desktop/XAIGIN-MES-GitHub/web/reference')
TARGET = Path(__file__).resolve().parents[1]
FILES = ('index.html', 'prototype.css', 'prototype.js', 'demo-data.js', 'map-geometry.js')

for name in FILES:
    content = (SOURCE / name).read_text()
    if name == 'index.html':
        content = content.replace('/static/reference/', './')
        content = content.replace('<link rel="stylesheet" href="./prototype.css">', '<link rel="stylesheet" href="./prototype.css">\n  <link rel="stylesheet" href="./public-demo.css">')
        content = content.replace('XAIGIN · MES 界面参考原型', 'XAIGIN · 维修中心 MES 公开演示')
        content = content.replace('原型演示 · 虚拟数据 · 不会写入生产系统', '公开演示 · 全部业务数据为模拟 · 刷新恢复 · 不连接生产系统')
        content = content.replace('原型预览 · 管理视角', '公开体验 · 模拟管理视角')
        content = content.replace('<title>', '<meta http-equiv="Content-Security-Policy" content="default-src \'self\'; script-src \'self\'; style-src \'self\' \'unsafe-inline\'; img-src \'self\' data:; connect-src \'none\'; object-src \'none\'; base-uri \'self\'; form-action \'none\'">\n  <link rel="icon" href="./favicon.png">\n  <title>')
    if name == 'prototype.js':
        content = content.replace('已保存到本页临时演示状态', '演示操作完成，不保存真实业务数据')
    (TARGET / name).write_text(content)

print('Exported 5 fictional reference files; no production files included.')
