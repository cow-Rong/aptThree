export const DATA = [
  // 连线
  { type: 'verticalLine', from: [-150, -159, 20], to: [-180, -59, 50], dir: 'y' },
  { type: 'verticalLine', from: [-50, -159, -5], to: [-169, -59, 50], dir: 'y' },
  { type: 'verticalLine', from: [100, -159, 20], to: [-158, -59, 50], dir: 'y' },
  { type: 'verticalLine', from: [136, -59, -50], to: [-142, 42, 25], dir: 'y' },
  { type: 'verticalLine', from: [136, -59, -50], to: [-67, 42, 25], dir: 'y' },
  { type: 'verticalLine', from: [136, -59, -50], to: [8, 42, 25], dir: 'y' },
  { type: 'verticalLine', from: [136, -59, -50], to: [83, 42, 25], dir: 'y' },
  { type: 'verticalLine', from: [35, -58, 40], to: [-158, -59, 45], dir: 'z', dis: 2 },
  { type: 'line', from: [125, -58, 25], to: [180, -59, -50], dir: 'x' },
  // { type: 'line', from: [9, 0, -10], to: [-9, 0, -10] },
  // { type: 'line', from: [9, 0, -10], to: [9, 0, -12] },
  // { type: 'line', from: [-9, 0, -10], to: [-9, 0, -12] },

  // 底座
  { type: 'plant', size: [380, 120, 1], position: [0, -160, 0], bgcolor: 0x041435, text: '底座', textdir: 'left', opacity: 0.95 },
  { type: 'plant', size: [380, 120, 1], position: [0, -60, 0], bgcolor: 0x041435, text: '底座', textdir: 'left', opacity: 0.95 },
  { type: 'plant', size: [380, 120, 1], position: [0, 40, 0], bgcolor: 0x041435, text: '底座', textdir: 'left', opacity: 0.95 },

  // -------------------------------------上层：横向攻击----------------------------------------------
  // ip1端口
  { type: 'block', size: [60, 70, 1], position: [-120, 41, 0], bgcolor: 0x4c86ce, text: 'IP1', textdir: 'center', opacity: 0.35 },
  { type: 'block', size: [10, 10, 1], position: [-142, 42, 25], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-131, 42, 25], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-120, 42, 25], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-109, 42, 25], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-98, 42, 25], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },
  // ip2端口
  { type: 'block', size: [60, 70, 1], position: [-45, 41, 0], bgcolor: 0x4c86ce, text: 'IP2', textdir: 'center', opacity: 0.35 },
  { type: 'block', size: [10, 10, 1], position: [-67, 42, 25], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-56, 42, 25], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-45, 42, 25], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-34, 42, 25], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-23, 42, 25], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },
  // ip3端口
  { type: 'block', size: [60, 70, 1], position: [30, 41, 0], bgcolor: 0x4c86ce, text: 'IP3', textdir: 'center', opacity: 0.35 },
  { type: 'block', size: [10, 10, 1], position: [8, 42, 25], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [19, 42, 25], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [30, 42, 25], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [41, 42, 25], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [52, 42, 25], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },
  // ip4端口
  { type: 'block', size: [60, 70, 1], position: [105, 41, 0], bgcolor: 0x4c86ce, text: 'IP4', textdir: 'center', opacity: 0.35 },
  { type: 'block', size: [10, 10, 1], position: [83, 42, 25], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [94, 42, 25], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [105, 42, 25], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [116, 42, 25], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [127, 42, 25], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },

  // ----------------------------------------------中层：攻击目标域------------------------------------------------
  // 入端口
  { type: 'block', size: [10, 10, 1], position: [-180, -59, 50], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-169, -59, 50], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-158, -59, 50], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-147, -59, 50], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [-136, -59, 50], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },

  // 出端口
  { type: 'block', size: [10, 10, 1], position: [180, -59, -50], bgcolor: 0x2b85f5, text: '80', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [169, -59, -50], bgcolor: 0x2b85f5, text: '8080', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [158, -59, -50], bgcolor: 0x2b85f5, text: '200', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [147, -59, -50], bgcolor: 0x2b85f5, text: '600', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [10, 10, 1], position: [136, -59, -50], bgcolor: 0x2b85f5, text: '100', textdir: 'center', opacity: 0.9 },

  // 异常行为链
  { type: 'block', size: [260, 35, 1], position: [0, -59, 25], bgcolor: 0x4c86ce, text: '异常行为链', textdir: 'left', opacity: 0.35 },

  { type: 'block', size: [55, 25, 1], position: [-95, -58, 25], bgcolor: 0x2b85f5, text: '提权', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [55, 25, 1], position: [-35, -58, 25], bgcolor: 0xfac146, text: '异常脚本下载', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [55, 25, 1], position: [35, -58, 25], bgcolor: 0x2b85f5, text: '挖矿外联', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [55, 25, 1], position: [95, -58, 25], bgcolor: 0x2b85f5, text: '横向暴力破解', textdir: 'center', opacity: 0.9 },

  // 环境感知区
  { type: 'block', size: [350, 45, 1], position: [0, -59, -20], bgcolor: 0x4c86ce, text: '环境感知区', textdir: 'left', opacity: 0.1 },

  { type: 'block', size: [70, 40, 1], position: [-120, -58, -20], bgcolor: 0x2b85f5, text: '异常文件', textdir: 'left', opacity: 0.3 },
  { type: 'block', size: [50, 12, 1], position: [-120, -57, -25], bgcolor: 0xfac146, text: '异常文件名1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [50, 12, 1], position: [-120, -57, -10], bgcolor: 0xfac146, text: '异常文件名2', textdir: 'center', opacity: 0.9 },
  //  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, -57, -12], bgcolor: 0xfac146, text: '异常文件名3' , opacity: 0.9},
  //  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, -57, -12], bgcolor: 0xfac146, text: '异常文件名4' , opacity: 0.9},

  { type: 'block', size: [70, 40, 1], position: [-40, -58, -20], bgcolor: 0xfac146, text: '异常配置', textdir: 'left', opacity: 0.3 },
  { type: 'block', size: [50, 12, 1], position: [-40, -57, -25], bgcolor: 0xfac146, text: '注册信息1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [50, 12, 1], position: [-40, -57, -10], bgcolor: 0xfac146, text: '注册信息2', textdir: 'center', opacity: 0.9 },

  { type: 'block', size: [70, 40, 1], position: [40, -58, -20], bgcolor: 0xfac146, text: '异常服务', textdir: 'left', opacity: 0.3 },
  { type: 'block', size: [50, 12, 1], position: [40, -57, -25], bgcolor: 0xfac146, text: '异常服务1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [50, 12, 1], position: [40, -57, -10], bgcolor: 0xfac146, text: '异常服务2', textdir: 'center', opacity: 0.9 },

  { type: 'block', size: [70, 40, 1], position: [120, -58, -20], bgcolor: 0xfac146, text: '异常进程', textdir: 'left', opacity: 0.3 },
  { type: 'block', size: [50, 12, 1], position: [120, -57, -25], bgcolor: 0xfac146, text: '异常进程1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [50, 12, 1], position: [120, -57, -10], bgcolor: 0xfac146, text: '异常进程2', textdir: 'center', opacity: 0.9 },

  // -------------------------------------------------下层：攻击源-------------------------------------------------------
  // 攻击链
  { type: 'block', size: [45, 12, 1], position: [-150, -159, 50], bgcolor: 0x2c55d6, text: '侦察', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [-100, -159, 50], bgcolor: 0x2c55d6, text: '工具制作', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [-50, -159, 50], bgcolor: 0x2c55d6, text: '投送', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [0, -159, 50], bgcolor: 0x2c55d6, text: '攻击渗透', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [50, -159, 50], bgcolor: 0x2c55d6, text: '安装', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [100, -159, 50], bgcolor: 0x2c55d6, text: '执行活动', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [45, 12, 1], position: [150, -159, 50], bgcolor: 0x2c55d6, text: '目标行动', textdir: 'center', opacity: 0.9 },

  // 侦察ip
  { type: 'block', size: [45, 80, 1], position: [-150, -159, -5], bgcolor: 0xfac146, text: '侦察', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [-150, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-150, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-150, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 工具制作ip
  { type: 'block', size: [45, 80, 1], position: [-100, -159, -5], bgcolor: 0xfac146, text: '工具制作', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [-100, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-100, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-100, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 投送ip
  { type: 'block', size: [45, 80, 1], position: [-50, -159, -5], bgcolor: 0xfac146, text: '投送', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [-50, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-50, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [-50, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 攻击渗透ip
  { type: 'block', size: [45, 80, 1], position: [0, -159, -5], bgcolor: 0xfac146, text: '攻击渗透', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [0, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [0, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [0, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 安装ip
  { type: 'block', size: [45, 80, 1], position: [50, -159, -5], bgcolor: 0xfac146, text: '安装', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [50, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [50, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [50, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 执行活动ip
  { type: 'block', size: [45, 80, 1], position: [100, -159, -5], bgcolor: 0xfac146, text: '执行活动', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [100, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [100, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [100, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },
  // 目标行动ip
  { type: 'block', size: [45, 80, 1], position: [150, -159, -5], bgcolor: 0xfac146, text: '目标行动', opacity: 0.3 },
  { type: 'block', size: [40, 20, 1], position: [150, -159, 20], bgcolor: 0xfac146, text: '1.1.1.1', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [150, -159, -5], bgcolor: 0xfac146, text: '2.2.2.2', textdir: 'center', opacity: 0.9 },
  { type: 'block', size: [40, 20, 1], position: [150, -159, -30], bgcolor: 0xfac146, text: '3.3.3.3', textdir: 'center', opacity: 0.9 },

];



