export const DATA = [
    { type: 'line', from: [2, 0, 0], to: [5.5, 0, 0] },       // 办公域
    { type: 'line', from: [-2, 0, 0], to: [-5.5, 0, 0] },        // 无线接入域
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
    // { type: 'area', size: [4, 10], position: [0, 0, 0], text: '核心交换', textPosition: [-2, 0, -5.5], bgcolor: 0x0c214e }, // 核心交换
    // { type: 'area', size: [5, 8], position: [8, 0, 0], text: '办公域', textPosition: [6, 0, 4.5], bgcolor: 0x0c214e },
    // { type: 'area', size: [5, 8], position: [-8, 0, 0], text: '无线接入域', textPosition: [-10.5, 0, 4.5], bgcolor: 0x0c214e },
    // { type: 'area', size: [8, 5], position: [6, 0, 11], text: '管理域', textPosition: [4, 0, 14], bgcolor: 0x0c214e},
    // { type: 'area', size: [8, 5], position: [-6, 0, 11], text: '业务域', textPosition: [-7, 0, 14], bgcolor: 0x0c214e },
    // { type: 'area', size: [20, 6], position: [0, 0, -13], text: '', bgcolor: 0x0c214e },
    { type: 'switchesBig', size: [2.4, 0.5, 2.4], position: [0, 0.25, -2.5], bgcolor: 0x2c55d6, text: '交换机', opacity: 0.7 },  // 核心交换右
    { type: 'switchesBig', size: [2.4, 0.5, 2.4], position: [0, 0.25, 2.5], bgcolor: 0x2c55d6, text: '交换机' }, // 核心交换左
    { type: 'switchesSmall', size: [2, 0.5, 2], position: [-6.5, 0.25, 0], bgcolor: 0x2c55d6, text: '交换机' },       // 无线接入域交换机
    { type: 'host', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '无线设备' },  // 0x2c55d6
    { type: 'host', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '无线设备' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [-9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '无线设备' },
    { type: 'switchesSmall', size: [2, 0.5, 2], position: [6.5, 0.25, 0], bgcolor: 0x2c55d6, text: '交换机' },         // 办公域
    { type: 'host', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, 0], bgcolor: 0x2c55d6, text: '办公电脑' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, -3.25], bgcolor: 0x2c55d6, text: '办公电脑' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [9.75, 0.75, 3.25], bgcolor: 0x2c55d6, text: '办公电脑' },
    { type: 'fire', size: [1.5, 1.5, 1.5], position: [6, 0.75, 7], bgcolor: 0xfac146, text: '防火墙' },         // 防火墙
    { type: 'fire', size: [1.5, 1.5, 1.5], position: [-6, 0.75, 7], bgcolor: 0xfac146, text: '防火墙' },
    { type: 'fire', size: [1.5, 1.5, 1.5], position: [0, 0.75, -12], bgcolor: 0xfac146, text: '防火墙' },
    { type: 'fire', size: [1.5, 1.5, 1.5], position: [9, 0.75, -12], bgcolor: 0xfac146, text: '防火墙' },
    { type: 'fire', size: [1.5, 1.5, 1.5], position: [-9, 0.75, -12], bgcolor: 0xfac146, text: '防火墙' },
    { type: 'switchesSmall', size: [2, 0.5, 2], position: [0, 0.25, -7.5], bgcolor: 0x2c55d6, text: '' },     // (web)交换机
    { type: 'switchesSmall', size: [2, 0.5, 2], position: [-6, 0.25, 9.5], bgcolor: 0x2c55d6, text: '' },       // 业务域交换机
    { type: 'switchesSmall', size: [2, 0.5, 2], position: [6, 0.25, 9.5], bgcolor: 0x2c55d6, text: '' },   // 管理域交换机
    { type: 'host', size: [1.5, 1.5, 1.5], position: [9.25, 0.75, 12.75], bgcolor: 0x2c55d6, text: '' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [6, 0.75, 12.75], bgcolor: 0x2c55d6, text: '' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [2.75, 0.75, 12.75], bgcolor: 0x2c55d6, text: '' },
    { type: 'host', size: [1.5, 1.5, 1.5], position: [-8.25, 0.75, 12.75], bgcolor: 0x2c55d6, text: '' },     // 业务域
    { type: 'host', size: [1.5, 1.5, 1.5], position: [-3.75, 0.75, 12.75], bgcolor: 0x2c55d6, text: '' },
    // { type: 'surface', size: [1.2, 2.4], position: [0, 3.25, -1.6], bgcolor: 0x01ffe6 }, // 四个面
    { type: 'web', position: [-0.5, 0, -16], bgcolor: 0x01ffe6, radius: 0.5 },   // 网站
    { type: 'web', position: [8.5, 0, -16], bgcolor: 0x01ffe6, radius: 0.5 },
    { type: 'web', position: [-8.5, 0, -16], bgcolor: 0x01ffe6, radius: 0.5},
    { type: 'attacker', value: [
        { path: [
            [6, 0, 9.5],
            [6, 0, 6.5],
            [0, 0, 9.5]
        ] }
    ] }
];



