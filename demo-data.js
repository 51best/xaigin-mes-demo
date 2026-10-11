/* MES-UIREF-DATA-001: entirely fictional preview records; never read from mes.db. */
window.referenceData = Object.freeze({
  workorders: [
    {id:'WO-260925-018',customer:'示例客户·算力云',sn:'XA-DEMO-B300-018',model:'HGX B300',status:'入场检测',priority:'加急',owner:'周工',updated:'09:42',fault:'GPU 3 未识别，压力测试出现 XID 79',zone:'来料检测区'},
    {id:'WO-260925-017',customer:'示例客户·智算中心',sn:'XA-DEMO-GB300-017',model:'GB300 NVL72',status:'维修中',priority:'普通',owner:'陈工',updated:'09:18',fault:'液冷回路温差异常，待更换快接组件',zone:'液冷维修区'},
    {id:'WO-260925-016',customer:'示例客户·研究院',sn:'XA-DEMO-H200-016',model:'HGX H200',status:'待出厂检验',priority:'加急',owner:'李工',updated:'08:55',fault:'修复后需完成 8 小时压力测试',zone:'OQC 检验区'},
    {id:'WO-260925-015',customer:'示例客户·云图科技',sn:'XA-DEMO-B200-015',model:'HGX B200',status:'等待备件',priority:'普通',owner:'林工',updated:'08:26',fault:'PSU2 输出波动，申请电源模块',zone:'待料区'},
    {id:'WO-260925-014',customer:'示例客户·北辰实验室',sn:'XA-DEMO-H100-014',model:'HGX H100',status:'维修中',priority:'普通',owner:'赵工',updated:'昨天 18:46',fault:'PCIe 链路降速，需复测主板插槽',zone:'硬件维修区'},
    {id:'WO-260925-013',customer:'示例客户·星河智算',sn:'XA-DEMO-A100-013',model:'HGX A100',status:'完成 OQC',priority:'低',owner:'许工',updated:'昨天 17:32',fault:'GPU 风扇转速波动，已更换风扇组件',zone:'成品待发区'}
  ],
  assets: [
    {sn:'XA-DEMO-B300-018',customer:'示例客户·算力云',model:'HGX B300',warranty:'待核验',location:'来料检测区',received:'09:32'},
    {sn:'XA-DEMO-GB300-017',customer:'示例客户·智算中心',model:'GB300 NVL72',warranty:'客户送修',location:'液冷维修区',received:'09:08'},
    {sn:'XA-DEMO-H200-016',customer:'示例客户·研究院',model:'HGX H200',warranty:'客户送修',location:'OQC 检验区',received:'昨天 16:20'},
    {sn:'XA-DEMO-B200-015',customer:'示例客户·云图科技',model:'HGX B200',warranty:'待核验',location:'待料区',received:'昨天 14:03'},
    {sn:'XA-DEMO-H100-014',customer:'示例客户·北辰实验室',model:'HGX H100',warranty:'客户送修',location:'硬件维修区',received:'昨天 11:41'},
    {sn:'XA-DEMO-A100-013',customer:'示例客户·星河智算',model:'HGX A100',warranty:'已确认',location:'成品待发区',received:'09-23 15:12'}
  ],
  categories: [
    {code:'gpu',name:'GPU 与加速卡',icon:'▦',subs:[{code:'gpu-module',name:'GPU 计算模块'},{code:'gpu-board',name:'载板与转接板'},{code:'gpu-cooling',name:'GPU 散热组件'}]},
    {code:'boards',name:'主板与控制板',icon:'▧',subs:[{code:'mainboard',name:'服务器主板'},{code:'bmc',name:'BMC 与控制板'},{code:'backplane',name:'背板与配电板'}]},
    {code:'compute',name:'处理器与内存',icon:'▨',subs:[{code:'cpu',name:'服务器处理器'},{code:'ecc-memory',name:'ECC 内存'},{code:'memory-parts',name:'内存配件'}]},
    {code:'storage',name:'存储设备',icon:'▤',subs:[{code:'nvme',name:'NVMe 固态盘'},{code:'sata',name:'SATA 固态盘'},{code:'storage-parts',name:'存储配件'}]},
    {code:'network',name:'网络与互联',icon:'⌁',subs:[{code:'nic',name:'网卡'},{code:'optics',name:'光模块'},{code:'cables',name:'高速线缆'}]},
    {code:'power',name:'电源与供电',icon:'ϟ',subs:[{code:'psu',name:'热插拔电源'},{code:'pdu',name:'电源分配'},{code:'power-parts',name:'电源配件'}]},
    {code:'thermal',name:'散热与液冷',icon:'❋',subs:[{code:'air-cooling',name:'风扇与散热器'},{code:'liquid',name:'冷板与液冷管'},{code:'sensors',name:'温度与漏液传感器'}]},
    {code:'structure',name:'机箱结构件',icon:'▣',subs:[{code:'chassis',name:'机箱结构'},{code:'fasteners',name:'螺丝与紧固件'},{code:'structure-parts',name:'结构附件'}]},
    {code:'consumables',name:'维修耗材与工具',icon:'✣',subs:[{code:'bga',name:'BGA 焊接耗材'},{code:'thermal-paste',name:'导热与焊接耗材'},{code:'tools',name:'维修工具'}]}
  ],
  inventory: [
    {sku:'DEMO-PART-GPU-001',name:'B300 GPU 模块（示例）',category:'gpu',sub:'gpu-module',qty:8,reserved:2,unit:'件',bin:'A-01-03',health:'充足'},
    {sku:'DEMO-PART-GPU-002',name:'HGX GPU 载板（示例）',category:'gpu',sub:'gpu-board',qty:4,reserved:1,unit:'件',bin:'A-02-01',health:'充足'},
    {sku:'DEMO-PART-GPU-003',name:'GPU 导热组件（示例）',category:'gpu',sub:'gpu-cooling',qty:13,reserved:2,unit:'套',bin:'A-03-02',health:'充足'},
    {sku:'DEMO-PART-BRD-001',name:'HGX 服务器主板（示例）',category:'boards',sub:'mainboard',qty:3,reserved:1,unit:'块',bin:'B-01-01',health:'偏低'},
    {sku:'DEMO-PART-BRD-002',name:'BMC 管理控制板（示例）',category:'boards',sub:'bmc',qty:7,reserved:1,unit:'块',bin:'B-02-04',health:'充足'},
    {sku:'DEMO-PART-BRD-003',name:'高速背板组件（示例）',category:'boards',sub:'backplane',qty:5,reserved:0,unit:'件',bin:'B-03-02',health:'充足'},
    {sku:'DEMO-PART-CPU-001',name:'服务器处理器（示例）',category:'compute',sub:'cpu',qty:6,reserved:0,unit:'颗',bin:'C-01-02',health:'充足'},
    {sku:'DEMO-PART-MEM-001',name:'DDR5 ECC 内存（示例）',category:'compute',sub:'ecc-memory',qty:28,reserved:4,unit:'条',bin:'C-02-03',health:'充足'},
    {sku:'DEMO-PART-MEM-002',name:'内存导风罩（示例）',category:'compute',sub:'memory-parts',qty:12,reserved:1,unit:'件',bin:'C-03-01',health:'充足'},
    {sku:'DEMO-PART-SSD-001',name:'企业级 NVMe SSD（示例）',category:'storage',sub:'nvme',qty:16,reserved:3,unit:'块',bin:'D-01-04',health:'充足'},
    {sku:'DEMO-PART-SSD-002',name:'SATA SSD（示例）',category:'storage',sub:'sata',qty:5,reserved:0,unit:'块',bin:'D-02-02',health:'充足'},
    {sku:'DEMO-PART-SSD-003',name:'NVMe 固定支架（示例）',category:'storage',sub:'storage-parts',qty:9,reserved:1,unit:'件',bin:'D-03-02',health:'充足'},
    {sku:'DEMO-PART-NET-001',name:'800G 网卡（示例）',category:'network',sub:'nic',qty:3,reserved:2,unit:'张',bin:'E-01-01',health:'偏低'},
    {sku:'DEMO-PART-NET-002',name:'800G 光模块（示例）',category:'network',sub:'optics',qty:18,reserved:2,unit:'只',bin:'E-02-03',health:'充足'},
    {sku:'DEMO-PART-NET-003',name:'高速 DAC 线缆（示例）',category:'network',sub:'cables',qty:24,reserved:4,unit:'条',bin:'E-03-01',health:'充足'},
    {sku:'DEMO-PART-PWR-001',name:'冗余热插拔电源（示例）',category:'power',sub:'psu',qty:11,reserved:2,unit:'个',bin:'F-01-02',health:'充足'},
    {sku:'DEMO-PART-PWR-002',name:'机架电源分配模块（示例）',category:'power',sub:'pdu',qty:4,reserved:0,unit:'个',bin:'F-02-01',health:'充足'},
    {sku:'DEMO-PART-PWR-003',name:'电源连接器组件（示例）',category:'power',sub:'power-parts',qty:7,reserved:1,unit:'套',bin:'F-03-01',health:'充足'},
    {sku:'DEMO-PART-THM-001',name:'高静压风扇模块（示例）',category:'thermal',sub:'air-cooling',qty:22,reserved:3,unit:'个',bin:'G-01-02',health:'充足'},
    {sku:'DEMO-PART-THM-002',name:'GPU 液冷冷板（示例）',category:'thermal',sub:'liquid',qty:6,reserved:2,unit:'套',bin:'G-02-01',health:'偏低'},
    {sku:'DEMO-PART-THM-003',name:'液冷漏液传感器（示例）',category:'thermal',sub:'sensors',qty:10,reserved:0,unit:'只',bin:'G-03-01',health:'充足'},
    {sku:'DEMO-PART-STR-001',name:'HGX 机箱导轨（示例）',category:'structure',sub:'chassis',qty:8,reserved:1,unit:'套',bin:'H-01-02',health:'充足'},
    {sku:'DEMO-PART-STR-002',name:'服务器螺丝套件（示例）',category:'structure',sub:'fasteners',qty:36,reserved:5,unit:'包',bin:'H-02-03',health:'充足'},
    {sku:'DEMO-PART-STR-003',name:'理线与固定组件（示例）',category:'structure',sub:'structure-parts',qty:15,reserved:2,unit:'套',bin:'H-03-02',health:'充足'},
    {sku:'DEMO-PART-CNS-001',name:'BGA 焊球耗材包（示例）',category:'consumables',sub:'bga',qty:7,reserved:1,unit:'包',bin:'J-01-01',health:'充足'},
    {sku:'DEMO-PART-CNS-002',name:'导热硅脂与清洁耗材（示例）',category:'consumables',sub:'thermal-paste',qty:3,reserved:1,unit:'套',bin:'J-02-01',health:'偏低'},
    {sku:'DEMO-PART-CNS-003',name:'BGA 返修定位工具（示例）',category:'consumables',sub:'tools',qty:2,reserved:0,unit:'套',bin:'J-03-01',health:'偏低'}
  ],
  purchases: [
    {id:'DEMO-PO-25031',supplier:'示例供应商·芯联',item:'800G 网卡',ordered:8,received:5,status:'分批到货',date:'09-25'},
    {id:'DEMO-PO-25030',supplier:'示例供应商·冷链',item:'GPU 液冷冷板',ordered:6,received:0,status:'待审批',date:'09-25'},
    {id:'DEMO-PO-25029',supplier:'示例供应商·存储',item:'企业级 NVMe SSD',ordered:12,received:12,status:'已收齐',date:'09-24'},
    {id:'DEMO-PO-25028',supplier:'示例供应商·电源',item:'冗余热插拔电源',ordered:4,received:2,status:'分批到货',date:'09-24'}
  ],
  contracts: [
    {id:'DEMO-HT-008',customer:'示例客户·智算中心',quote:'DEMO-QT-018',amount:1840000,revenue:1840000,received:1200000,status:'已签署',signed:'09-18'},
    {id:'DEMO-HT-007',customer:'示例客户·云图科技',quote:'DEMO-QT-017',amount:2130000,revenue:1800000,received:1450000,status:'已签署',signed:'09-16'},
    {id:'DEMO-HT-006',customer:'示例客户·北辰实验室',quote:'DEMO-QT-016',amount:1486000,revenue:1086000,received:986000,status:'已签署',signed:'09-12'},
    {id:'DEMO-HT-005',customer:'示例客户·星河智算',quote:'DEMO-QT-015',amount:1290000,revenue:1290000,received:1290000,status:'已签署',signed:'09-09'},
    {id:'DEMO-HT-004',customer:'示例客户·算力云',quote:'DEMO-QT-014',amount:825000,revenue:600000,received:450000,status:'已签署',signed:'09-03'}
  ],
  financeCosts: [
    {category:'物料采购',amount:1180000,type:'procurement',note:'本月已下采购单金额'},
    {category:'备件库存账面值',amount:2680000,type:'inventory',note:'期末账面估值'},
    {category:'房租',amount:450000,type:'expense',note:'本月费用'},
    {category:'水电',amount:180000,type:'expense',note:'本月费用'},
    {category:'厂区维护',amount:96000,type:'expense',note:'本月费用'},
    {category:'人员工资',amount:2050000,type:'expense',note:'本月汇总，不展示个人薪酬'},
    {category:'社保福利',amount:420000,type:'expense',note:'本月汇总'}
  ],
  mapSites: [
    {id:'SITE-CN-001',name:'示例客户·智算中心',city:'深圳',province:'广东',kind:'business',contractId:'DEMO-HT-008',product:'B300系列',years:3,china:true,lon:114.0579,lat:22.5431,labelDx:9,labelDy:-10},
    {id:'SITE-CN-002',name:'示例客户·云图科技',city:'北京',province:'北京',kind:'business',contractId:'DEMO-HT-007',product:'H系列',years:2,china:true,lon:116.4074,lat:39.9042,labelDx:-30,labelDy:-10},
    {id:'SITE-CN-003',name:'示例客户·北辰实验室',city:'上海',province:'上海',kind:'business',contractId:'DEMO-HT-006',product:'H系列',years:5,china:true,lon:121.4737,lat:31.2304,labelDx:8,labelDy:-8},
    {id:'SITE-CN-004',name:'示例客户·星河智算',city:'成都',province:'四川',kind:'business',contractId:'DEMO-HT-005',product:'GB系列',years:3,china:true,lon:104.0665,lat:30.5728,labelDx:-28,labelDy:18},
    {id:'SITE-CN-005',name:'示例客户·算力云',city:'广州',province:'广东',kind:'business',contractId:'DEMO-HT-004',product:'B300系列',years:1,china:true,lon:113.2644,lat:23.1291,labelDx:-28,labelDy:18},
    {id:'SITE-CN-006',name:'目标客户·长三角智算园',city:'杭州',province:'浙江',kind:'target',product:'GB系列',years:2,china:true,lon:120.1551,lat:30.2741,labelDx:9,labelDy:14},
    {id:'SITE-CN-007',name:'目标客户·华中算力中心',city:'武汉',province:'湖北',kind:'target',product:'H系列',years:4,china:true,lon:114.3054,lat:30.5931,labelDx:-30,labelDy:-9},
    {id:'SITE-CN-008',name:'目标客户·西安云基地',city:'西安',province:'陕西',kind:'target',product:'B300系列',years:5,china:true,lon:108.9398,lat:34.3416,labelDx:-25,labelDy:-10},
    {id:'SITE-CN-009',name:'目标客户·成渝智算园',city:'重庆',province:'重庆',kind:'target',product:'GB系列',years:1,china:true,lon:106.5516,lat:29.563,labelDx:8,labelDy:-9},
    {id:'SITE-CN-010',name:'目标客户·中原数据港',city:'郑州',province:'河南',kind:'target',product:'H系列',years:3,china:true,lon:113.6254,lat:34.7466,labelDx:8,labelDy:-10},
    {id:'SITE-CN-011',name:'目标客户·青岛云枢',city:'青岛',province:'山东',kind:'target',product:'B300系列',years:2,china:true,lon:120.3826,lat:36.0671,labelDx:8,labelDy:-10},
    {id:'SITE-CN-012',name:'目标客户·粤港澳智算园',city:'香港',province:'香港',kind:'target',product:'GB系列',years:4,china:true,lon:114.1694,lat:22.3193,labelDx:8,labelDy:14},
    {id:'SITE-GL-013',name:'目标客户·星洲算力园',city:'新加坡',province:'新加坡',kind:'target',product:'GB系列',years:3,china:null,lon:103.8198,lat:1.3521,labelDx:8,labelDy:14},
    {id:'SITE-GL-014',name:'目标客户·东京智算基地',city:'东京',province:'日本',kind:'target',product:'H系列',years:2,china:null,lon:139.6917,lat:35.6895,labelDx:8,labelDy:-8},
    {id:'SITE-GL-015',name:'目标客户·法兰克福云枢',city:'法兰克福',province:'德国',kind:'target',product:'B300系列',years:5,china:null,lon:8.6821,lat:50.1109,labelDx:8,labelDy:-8}
  ],
  mapHubs: [
    {id:'HUB-01',name:'京津冀枢纽',cluster:'张家口集群',lon:114.89,lat:40.77,labelDx:-55,labelDy:-13},
    {id:'HUB-02',name:'长三角枢纽',cluster:'沪苏浙示范区 / 芜湖集群',lon:121.47,lat:31.23,labelDx:13,labelDy:-18},
    {id:'HUB-03',name:'粤港澳枢纽',cluster:'韶关集群',lon:113.59,lat:24.81,labelDx:-18,labelDy:27},
    {id:'HUB-04',name:'成渝枢纽',cluster:'天府 / 重庆集群',lon:104.07,lat:30.67,labelDx:-46,labelDy:-17},
    {id:'HUB-05',name:'内蒙古枢纽',cluster:'和林格尔集群',lon:111.82,lat:40.54,labelDx:13,labelDy:10},
    {id:'HUB-06',name:'贵州枢纽',cluster:'贵安集群',lon:106.63,lat:26.35,labelDx:-44,labelDy:25},
    {id:'HUB-07',name:'甘肃枢纽',cluster:'庆阳集群',lon:107.63,lat:35.71,labelDx:13,labelDy:-10},
    {id:'HUB-08',name:'宁夏枢纽',cluster:'中卫集群',lon:105.19,lat:37.50,labelDx:-48,labelDy:15}
  ],
  people: [
    {name:'周工',department:'收货检测组',role:'来料检验',state:'在岗'}, {name:'陈工',department:'液冷维修组',role:'维修工程师',state:'在岗'},
    {name:'李工',department:'质量检验组',role:'质量检验',state:'在岗'}, {name:'林工',department:'仓储物流组',role:'仓库管理员',state:'在岗'},
    {name:'赵工',department:'硬件维修组',role:'维修工程师',state:'在岗'}, {name:'许工',department:'质量检验组',role:'测试工程师',state:'外出'}
  ],
  roles: [
    {name:'经营负责人',scope:'全公司',members:2,permissions:['工单与经营总览','报价与合同管理','组织及权限维护','查看审计记录']},
    {name:'维修工程师',scope:'本人负责工单',members:8,permissions:['查看本人维修工单','填写维修执行记录','申请备件领料','提交维修测试数据']},
    {name:'仓库管理员',scope:'所属仓库',members:3,permissions:['查看仓储台账','采购收货入库','维修领料与退料','管理物料二维码']},
    {name:'质量检验',scope:'全公司工单',members:4,permissions:['查看质量工单','填写入场/故障诊断','提交 OQC 放行','查询检测报告']}
  ],
  devices: [
    {id:'DEMO-MOB-001',kind:'员工手机',owner:'周工',area:'个人绑定',state:'已绑定',last:'09:42 · 入场工单扫码',connection:'在线'},
    {id:'DEMO-SCN-001',kind:'固定扫码枪',owner:'来料拆包台 01',area:'收货检测区',state:'已绑定',last:'09:38 · 资产标签核验',connection:'在线'},
    {id:'DEMO-SCN-002',kind:'固定扫码枪',owner:'备件库位终端 02',area:'备件仓库',state:'待绑定',last:'—',connection:'未连接'}
  ],
  qrLabels: [
    {code:'XA-DEMO-B300-018',kind:'客户资产',name:'HGX B300 · 示例客户·算力云'},
    {code:'XA-DEMO-REPORT-018-IQC',kind:'检测报告',name:'入场检测报告 · WO-260925-018'},
    {code:'XA-DEMO-PART-GPU-001',kind:'备件物料',name:'B300 GPU 模块（示例）'},
    {code:'XA-DEMO-PO-25031',kind:'采购单',name:'800G 网卡 · 示例采购单'},
    {code:'XA-DEMO-MOV-0918',kind:'库存流水',name:'备件入库交接记录'},
    {code:'XA-DEMO-WO-260925-018',kind:'维修工单',name:'入场检测 · WO-260925-018'}
  ],
  qrEvents: [
    {time:'09:42:16',user:'周工',code:'XA-DEMO-B300-018',use:'来料核验',result:'已建档'},
    {time:'09:38:44',user:'林工',code:'XA-DEMO-PART-GPU-001',use:'备件入库',result:'已核验'},
    {time:'09:31:08',user:'陈工',code:'XA-DEMO-WO-260925-017',use:'维修交接',result:'已记录'},
    {time:'09:16:27',user:'李工',code:'XA-DEMO-REPORT-018-IQC',use:'检测复核',result:'报告已查阅'},
    {time:'08:56:02',user:'许工',code:'XA-DEMO-MOV-0918',use:'领料出库',result:'已核验'}
  ],
  audit: [
    {time:'09:45:02',user:'林工',action:'登记采购收货',target:'DEMO-PO-25031',result:'5 / 8 件入库'},
    {time:'09:42:16',user:'周工',action:'扫码核验设备',target:'XA-DEMO-B300-018',result:'来料信息匹配'},
    {time:'09:31:08',user:'陈工',action:'更新维修记录',target:'WO-260925-017',result:'补充液冷快接检查项'},
    {time:'09:16:27',user:'李工',action:'查阅检测报告',target:'XA-DEMO-REPORT-018-IQC',result:'仅预览引用记录'}
  ]
});
