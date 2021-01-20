export const DATA = [
  // 连线
  { type: 'line', from: [2, 0, 0], to: [5.5, 0, 0] },
  { type: 'line', from: [-2, 0, 0], to: [-5.5, 0, 0] },
  { type: 'line', from: [0, 0, -5], to: [0, 0, -6.5] },
  { type: 'line', from: [0, 0, -8.5], to: [0, 0, -12] },
  { type: 'line', from: [0, 0, 5], to: [0, 0, 7] },
  { type: 'line', from: [0, 0, 7], to: [-5.25, 0, 7] },
  { type: 'line', from: [0, 0, 7], to: [5.25, 0, 7] },
  { type: 'line', from: [-6, 0, 7], to: [-6, 0, 8.5] },
  { type: 'line', from: [6, 0, 7], to: [6, 0, 9] },
  { type: 'line', from: [9, 0, -10], to: [-9, 0, -10] },
  { type: 'line', from: [9, 0, -10], to: [9, 0, -12] },
  { type: 'line', from: [-9, 0, -10], to: [-9, 0, -12] },

  // 底座
  { type: 'plant', size: [380, 120, 1], position: [0, -160, 0], bgcolor: 0x041435, text: '底座', opacity: 0.95},
  { type: 'plant', size: [380, 120, 1], position: [0, -60, 0], bgcolor: 0x041435, text: '底座', opacity: 0.95},
  { type: 'plant', size: [380, 120, 1], position: [0, 40, 0], bgcolor: 0x041435, text: '底座', opacity: 0.95},

  // -------------------------------------上层：横向攻击----------------------------------------------
  // ip1端口
  { type: 'block', size: [60, 70, 1], position: [-120, 41, 0], bgcolor: 0x4c86ce, text: 'IP1', opacity: 0.35  },
  { type: 'block', size: [10, 10, 1], position: [-142, 42, 25], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-131, 42, 25], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-120, 42, 25], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-109, 42, 25], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-98, 42, 25], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },
  // ip2端口
  { type: 'block', size: [60, 70, 1], position: [-45, 41, 0], bgcolor: 0x4c86ce, text: 'IP2', opacity: 0.35  },
  { type: 'block', size: [10, 10, 1], position: [-67, 42, 25], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-56, 42, 25], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-45, 42, 25], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-34, 42, 25], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [-23, 42, 25], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },
  // ip3端口
  { type: 'block', size: [60, 70, 1], position: [30, 41, 0], bgcolor: 0x4c86ce, text: 'IP3', opacity: 0.35  },
  { type: 'block', size: [10, 10, 1], position: [8, 42, 25], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [19, 42, 25], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [30, 42, 25], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [41, 42, 25], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [52, 42, 25], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },
  // ip4端口
  { type: 'block', size: [60, 70, 1], position: [105, 41, 0], bgcolor: 0x4c86ce, text: 'IP4', opacity: 0.35  },
  { type: 'block', size: [10, 10, 1], position: [83, 42, 25], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [94, 42, 25], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [105, 42, 25], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [116, 42, 25], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
  { type: 'block', size: [10, 10, 1], position: [127, 42, 25], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },

  // ----------------------------------------------中层：攻击目标域------------------------------------------------
   // 入端口
   { type: 'block', size: [10, 10, 1], position: [-180, -59, 50], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [-169, -59, 50], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [-158, -59, 50], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [-147, -59, 50], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [-136, -59, 50], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },

   // 出端口
   { type: 'block', size: [10, 10, 1], position: [180, -59, -50], bgcolor: 0x2b85f5, text: '80', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [169, -59, -50], bgcolor: 0x2b85f5, text: '8080', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [158, -59, -50], bgcolor: 0x2b85f5, text: '200', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [147, -59, -50], bgcolor: 0x2b85f5, text: '600', opacity: 0.9  },
   { type: 'block', size: [10, 10, 1], position: [136, -59, -50], bgcolor: 0x2b85f5, text: '100', opacity: 0.9  },

   // 异常行为链
   { type: 'block', size: [260, 35, 1], position: [0, -59, 25], bgcolor: 0x4c86ce, text: '异常行为链', opacity: 0.35  },

   { type: 'block', size: [55, 25, 1], position: [-95, -58, 25], bgcolor: 0x2b85f5, text: '提权' , opacity: 0.9  },
   { type: 'block', size: [55, 25, 1], position: [-35, -58, 25], bgcolor: 0xfac146, text: '异常脚本下载' , opacity: 0.9  },
   { type: 'block', size: [55, 25, 1], position: [35, -58, 25], bgcolor: 0x2b85f5, text: '挖矿外联' , opacity: 0.9  },
   { type: 'block', size: [55, 25, 1], position: [95, -58, 25], bgcolor: 0x2b85f5, text: '横向暴力破解' , opacity: 0.9  },

   // 环境感知区
   { type: 'block', size: [350, 45, 1], position: [0, -59, -20], bgcolor: 0x4c86ce, text: '环境感知区', opacity: 0.1  },

   { type: 'block', size: [70, 40, 1], position: [-120, -58, -20], bgcolor: 0x2b85f5, text: '异常文件', opacity: 0.3   },
   { type: 'block', size: [50, 12, 1], position: [-120, -57, -25], bgcolor: 0xfac146, text: '异常文件名1' , opacity: 0.9},
   { type: 'block', size: [50, 12, 1], position: [-120, -57, -10], bgcolor: 0xfac146, text: '异常文件名2' , opacity: 0.9},
  //  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, -57, -12], bgcolor: 0xfac146, text: '异常文件名3' , opacity: 0.9},
  //  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, -57, -12], bgcolor: 0xfac146, text: '异常文件名4' , opacity: 0.9},

   { type: 'block', size: [70, 40, 1], position: [-40, -58, -20], bgcolor: 0xfac146, text: '异常配置' , opacity: 0.3  },
   { type: 'block', size: [50, 12, 1], position: [-40, -57, -25], bgcolor: 0xfac146, text: '注册信息1' , opacity: 0.9},
   { type: 'block', size: [50, 12, 1], position: [-40, -57, -10], bgcolor: 0xfac146, text: '注册信息2' , opacity: 0.9},

   { type: 'block', size: [70, 40, 1], position: [40, -58, -20], bgcolor: 0xfac146, text: '异常服务', opacity: 0.3   },
   { type: 'block', size: [50, 12, 1], position: [40, -57, -25], bgcolor: 0xfac146, text: '异常服务1' , opacity: 0.9},
   { type: 'block', size: [50, 12, 1], position: [40, -57, -10], bgcolor: 0xfac146, text: '异常服务2', opacity: 0.9 },

   { type: 'block', size: [70, 40, 1], position: [120, -58, -20], bgcolor: 0xfac146, text: '异常进程' , opacity: 0.3  },
   { type: 'block', size: [50, 12, 1], position: [120, -57, -25], bgcolor: 0xfac146, text: '异常进程1' , opacity: 0.9},
   { type: 'block', size: [50, 12, 1], position: [120, -57, -10], bgcolor: 0xfac146, text: '异常进程2' , opacity: 0.9},

  // -------------------------------------------------下层：攻击源-------------------------------------------------------
  // 攻击链
  { type: 'block', size:  [50, 12, 1], position: [-9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '侦察', opacity: 0.9 },
  { type: 'block', size:  [50, 12, 1], position: [-9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '工具制作', opacity: 0.9 },
  { type: 'block', size:  [50, 12, 1], position: [-9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '投送', opacity: 0.9 },
  { type: 'block', size:  [50, 12, 1], position: [6.5, 0.25, 0], bgcolor: 0x2c55d6, text: '攻击渗透', opacity: 0.9 },
  { type: 'block', size:  [50, 12, 1], position: [9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '安装' , opacity: 0.9},
  { type: 'block', size:  [50, 12, 1], position: [9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '执行活动', opacity: 0.9 },
  { type: 'block', size:  [50, 12, 1], position: [9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '目标行动', opacity: 0.9 },

  // 侦察ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '侦察', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3', opacity: 0.9 },
  // 工具制作ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '工具制作', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5' , opacity: 0.9},
  // 投送ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '投送', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2', opacity: 0.9 },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3', opacity: 0.9 },
  // 攻击渗透ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '攻击渗透', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },
  // 安装ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '安装', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },
  // 执行活动ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '执行活动', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '1.1.1.1' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '2.2.2.2' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '3.3.3.3' , opacity: 0.9},
  // 目标行动ip
  { type: 'block', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '目标行动', opacity: 0.3  },
  { type: 'block', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '4.4.4.4' , opacity: 0.9},
  { type: 'block', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '5.5.5.5', opacity: 0.9 },

];



