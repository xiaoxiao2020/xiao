const _0x8e3719=_0x1482;(function(_0x4d5cb5,_0x3b724e){const _0x1245d0=_0x1482,_0xcdce73=_0x4d5cb5();while(!![]){try{const _0x4821bf=parseInt(_0x1245d0(0x197))/0x1+-parseInt(_0x1245d0(0x1d9))/0x2+-parseInt(_0x1245d0(0x1d6))/0x3*(-parseInt(_0x1245d0(0x1af))/0x4)+parseInt(_0x1245d0(0x1ae))/0x5*(parseInt(_0x1245d0(0x1e7))/0x6)+parseInt(_0x1245d0(0x1c6))/0x7*(-parseInt(_0x1245d0(0x1cf))/0x8)+parseInt(_0x1245d0(0x19f))/0x9*(-parseInt(_0x1245d0(0x1b0))/0xa)+parseInt(_0x1245d0(0x1d1))/0xb;if(_0x4821bf===_0x3b724e)break;else _0xcdce73['push'](_0xcdce73['shift']());}catch(_0x4ef56e){_0xcdce73['push'](_0xcdce73['shift']());}}}(_0x4670,0xb3770));const _0x2219b0=(function(){let _0x389686=!![];return function(_0x2ef1b0,_0x6d3007){const _0x45a50d=_0x389686?function(){const _0x4b5141=_0x1482;if(_0x6d3007){const _0x2c3991=_0x6d3007[_0x4b5141(0x1d0)](_0x2ef1b0,arguments);return _0x6d3007=null,_0x2c3991;}}:function(){};return _0x389686=![],_0x45a50d;};}()),_0x197847=_0x2219b0(this,function(){const _0x3a1b45=_0x1482;let _0x400047;try{const _0x5aef40=Function(_0x3a1b45(0x201)+_0x3a1b45(0x20f)+(_0x3a1b45(0x1bb)+_0x3a1b45(0x1a1)+_0x3a1b45(0x18d)+'\x20)')+');');_0x400047=_0x5aef40();}catch(_0x1ee5cc){_0x400047=window;}const _0x52614f=_0x400047[_0x3a1b45(0x1e8)]=_0x400047['console']||{},_0x2ce8df=[_0x3a1b45(0x1c2),_0x3a1b45(0x20d),'info','error',_0x3a1b45(0x189),_0x3a1b45(0x1f7),'trace'];for(let _0x5aedc3=0x0;_0x5aedc3<_0x2ce8df[_0x3a1b45(0x1e2)];_0x5aedc3++){const _0x3c1910=_0x2219b0['constructo'+'r']['prototype'][_0x3a1b45(0x1bf)](_0x2219b0),_0x1765a1=_0x2ce8df[_0x5aedc3],_0x33dc3f=_0x52614f[_0x1765a1]||_0x3c1910;_0x3c1910['__proto__']=_0x2219b0['bind'](_0x2219b0),_0x3c1910[_0x3a1b45(0x1f9)]=_0x33dc3f[_0x3a1b45(0x1f9)]['bind'](_0x33dc3f),_0x52614f[_0x1765a1]=_0x3c1910;}});_0x197847();import{load,_,Uri}from'assets://js/lib/cat.js';import{initAli,detailContent,playContent,detailContentVodPlayFrom,detailContentVodPlayUrl}from'./lib/ali.js';let siteKey='',siteType=0x0,siteUrl=_0x8e3719(0x1eb)+_0x8e3719(0x203),UA=_0x8e3719(0x1f3)+_0x8e3719(0x1f6),CHROME=_0x8e3719(0x1c4)+_0x8e3719(0x208)+_0x8e3719(0x1b2)+_0x8e3719(0x1b8)+_0x8e3719(0x1d7)+_0x8e3719(0x1b9)+_0x8e3719(0x18c)+_0x8e3719(0x1bd)+'\x20Chrome/11'+_0x8e3719(0x191)+'fari/537.3'+'6',patternAli=/(https:\/\/www\.aliyundrive\.com\/s\/[^"]+)/g;async function init(_0x4db129){const _0x41ceea=_0x8e3719;let _0x1ae4aa='';typeof _0x4db129==_0x41ceea(0x1ff)?(siteKey=_0x4db129['skey'],siteType=_0x4db129[_0x41ceea(0x20c)],_0x1ae4aa=_0x4db129['ext']):_0x1ae4aa=_0x4db129,await initAli(_0x1ae4aa);}async function request(_0x29427e,_0xbe7a89){const _0x5b701c=_0x8e3719,_0x5a43e1={};_0x5a43e1[_0x5b701c(0x1a3)]=_0xbe7a89||_0x5b701c(0x1f3)+_0x5b701c(0x1f6);let _0x287789=_0x5a43e1,_0x33f0e6=new Uri(_0x29427e);const _0x54d844={};_0x54d844[_0x5b701c(0x19a)]=_0x287789,_0x54d844[_0x5b701c(0x1f2)]=0x2710;let _0x1fcd0f=await req(_0x33f0e6['toString'](),_0x54d844),_0x430378=_0x1fcd0f[_0x5b701c(0x1a4)];return _0x430378;}function getHeader(){const _0x758aeb=_0x8e3719;let _0x436dfc={};return _0x436dfc[_0x758aeb(0x1c1)]=UA,_0x436dfc;}async function getString(_0xa98eb2){const _0x5801be=_0x8e3719;let _0x3bb58a=await req(_0xa98eb2,{'headers':getHeader()});return _0x3bb58a[_0x5801be(0x1a4)];}const regexCategory=/\/vodtype\/(\w+).html/,_0x4496a7={};_0x4496a7['n']='全部',_0x4496a7['v']='';const _0x33a59e={};_0x33a59e['n']='喜剧',_0x33a59e['v']='喜剧';const _0xb64f60={};_0xb64f60['n']='爱情',_0xb64f60['v']='爱情';const _0xf98988={};_0xf98988['n']='恐怖',_0xf98988['v']='恐怖';const _0x554b53={};_0x554b53['n']='动作',_0x554b53['v']='动作';const _0x2f769a={};_0x2f769a['n']='科幻',_0x2f769a['v']='科幻';const _0x5c770b={};_0x5c770b['n']='剧情',_0x5c770b['v']='剧情';const _0x1db1fc={};_0x1db1fc['n']='战争',_0x1db1fc['v']='战争';const _0x2ebe8={};_0x2ebe8['n']='警匪',_0x2ebe8['v']='警匪';const _0x44a1ab={};_0x44a1ab['n']='犯罪',_0x44a1ab['v']='犯罪';const _0x4fedb2={};_0x4fedb2['n']='动画',_0x4fedb2['v']='动画';const _0x2d152d={};_0x2d152d['n']='奇幻',_0x2d152d['v']='奇幻';const _0x53b705={};_0x53b705['n']='武侠',_0x53b705['v']='武侠';const _0x4f7ecf={};_0x4f7ecf['n']='冒险',_0x4f7ecf['v']='冒险';const _0x3b8d5f={};_0x3b8d5f['n']='枪战',_0x3b8d5f['v']='枪战';const _0x5963bd={};_0x5963bd['n']='恐怖',_0x5963bd['v']='恐怖';const _0x431258={};_0x431258['n']='悬疑',_0x431258['v']='悬疑';const _0x49d3a2={};_0x49d3a2['n']='惊悚',_0x49d3a2['v']='惊悚';const _0x5e3d85={};_0x5e3d85['n']='经典',_0x5e3d85['v']='经典';const _0xf4454b={};_0xf4454b['n']='青春',_0xf4454b['v']='青春';const _0x51fa74={};_0x51fa74['n']='文艺',_0x51fa74['v']='文艺';const _0x314cc6={};_0x314cc6['n']='古装',_0x314cc6['v']='古装';const _0x276771={};_0x276771['n']='历史',_0x276771['v']='历史';const _0x56c676={};_0x56c676['n']=_0x8e3719(0x205),_0x56c676['v']='微电影';const _0x5d4886={};_0x5d4886['key']='3',_0x5d4886[_0x8e3719(0x1c8)]='剧情',_0x5d4886[_0x8e3719(0x209)]=[_0x4496a7,_0x33a59e,_0xb64f60,_0xf98988,_0x554b53,_0x2f769a,_0x5c770b,_0x1db1fc,_0x2ebe8,_0x44a1ab,_0x4fedb2,_0x2d152d,_0x53b705,_0x4f7ecf,_0x3b8d5f,_0x5963bd,_0x431258,_0x49d3a2,_0x5e3d85,_0xf4454b,_0x51fa74,_0x314cc6,_0x276771,_0x56c676],_0x5d4886['init']='';const _0x3bee1d={};_0x3bee1d['n']='全部',_0x3bee1d['v']='';const _0x36aff4={};_0x36aff4['n']='大陆',_0x36aff4['v']='大陆';const _0x50146e={};_0x50146e['n']='香港',_0x50146e['v']='香港';const _0x23acca={};_0x23acca['n']='台湾',_0x23acca['v']='台湾';const _0x3702c6={};_0x3702c6['n']='美国',_0x3702c6['v']='美国';const _0x3bb2c0={};_0x3bb2c0['n']='法国',_0x3bb2c0['v']='法国';const _0x1cd779={};_0x1cd779['n']='英国',_0x1cd779['v']='英国';const _0x92a68e={};_0x92a68e['n']='日本',_0x92a68e['v']='日本';const _0x56b934={};_0x56b934['n']='韩国',_0x56b934['v']='韩国';const _0x3a79f7={};_0x3a79f7['n']='德国',_0x3a79f7['v']='德国';const _0x4381e1={};_0x4381e1['n']='泰国',_0x4381e1['v']='泰国';const _0x4b3179={};_0x4b3179['n']='印度',_0x4b3179['v']='印度';const _0x312864={};_0x312864['n']=_0x8e3719(0x1a6),_0x312864['v']='意大利';const _0x5a4c9a={};_0x5a4c9a['n']='西班牙',_0x5a4c9a['v']=_0x8e3719(0x1c7);const _0x8ffc4f={};_0x8ffc4f['n']='加拿大',_0x8ffc4f['v']=_0x8e3719(0x1f1);const _0x3b4dcb={};_0x3b4dcb['n']='其他',_0x3b4dcb['v']='其他';const _0x5464b9={};_0x5464b9['key']='1',_0x5464b9[_0x8e3719(0x1c8)]='地区',_0x5464b9[_0x8e3719(0x209)]=[_0x3bee1d,_0x36aff4,_0x50146e,_0x23acca,_0x3702c6,_0x3bb2c0,_0x1cd779,_0x92a68e,_0x56b934,_0x3a79f7,_0x4381e1,_0x4b3179,_0x312864,_0x5a4c9a,_0x8ffc4f,_0x3b4dcb],_0x5464b9[_0x8e3719(0x1dd)]='';const _0x18e5e3={};_0x18e5e3['n']='全部',_0x18e5e3['v']='';const _0x39f3e4={};_0x39f3e4['n']=_0x8e3719(0x195),_0x39f3e4['v']='2023';const _0x5060ca={};_0x5060ca['n']=_0x8e3719(0x19d),_0x5060ca['v']='2022';const _0x507f86={};_0x507f86['n']='2021',_0x507f86['v']=_0x8e3719(0x1c5);const _0x19e7e3={};_0x19e7e3['n']=_0x8e3719(0x1ad),_0x19e7e3['v']=_0x8e3719(0x1ad);const _0x4987cb={};_0x4987cb['n']=_0x8e3719(0x1a8),_0x4987cb['v']=_0x8e3719(0x1a8);const _0xbc08ac={};_0xbc08ac['n']=_0x8e3719(0x1fc),_0xbc08ac['v']=_0x8e3719(0x1fc);const _0x11ca4c={};_0x11ca4c['n']=_0x8e3719(0x1f8),_0x11ca4c['v']=_0x8e3719(0x1f8);const _0xd2da12={};_0xd2da12['n']=_0x8e3719(0x198),_0xd2da12['v']=_0x8e3719(0x198);const _0x168af8={};_0x168af8['n']=_0x8e3719(0x202),_0x168af8['v']=_0x8e3719(0x202);const _0xc960e5={};_0xc960e5['n']='2014',_0xc960e5['v']=_0x8e3719(0x1e6);const _0x3f5984={};_0x3f5984['n']=_0x8e3719(0x1c0),_0x3f5984['v']=_0x8e3719(0x1c0);const _0x3641d5={};_0x3641d5['n']=_0x8e3719(0x1ea),_0x3641d5['v']=_0x8e3719(0x1ea);const _0xc5cf09={};_0xc5cf09['n']=_0x8e3719(0x1f0),_0xc5cf09['v']=_0x8e3719(0x1f0);const _0x144a83={};_0x144a83['n']=_0x8e3719(0x1e1),_0x144a83['v']='2010';const _0x3d5f89={};_0x3d5f89['key']='11',_0x3d5f89[_0x8e3719(0x1c8)]='年份',_0x3d5f89[_0x8e3719(0x209)]=[_0x18e5e3,_0x39f3e4,_0x5060ca,_0x507f86,_0x19e7e3,_0x4987cb,_0xbc08ac,_0x11ca4c,_0xd2da12,_0x168af8,_0xc960e5,_0x3f5984,_0x3641d5,_0xc5cf09,_0x144a83],_0x3d5f89[_0x8e3719(0x1dd)]='';const _0x4146cf={};_0x4146cf['n']='全部',_0x4146cf['v']='';const _0x1770bb={};_0x1770bb['n']='A',_0x1770bb['v']='A';const _0x17d7bf={};_0x17d7bf['n']='B',_0x17d7bf['v']='B';const _0x47bd21={};_0x47bd21['n']='C',_0x47bd21['v']='C';const _0x3c3dda={};_0x3c3dda['n']='D',_0x3c3dda['v']='D';const _0x269bb8={};_0x269bb8['n']='E',_0x269bb8['v']='E';const _0x1d46dc={};_0x1d46dc['n']='F',_0x1d46dc['v']='F';const _0x3873e6={};_0x3873e6['n']='G',_0x3873e6['v']='G';const _0x36356c={};_0x36356c['n']='H',_0x36356c['v']='H';const _0x265478={};_0x265478['n']='I',_0x265478['v']='I';const _0x1f4d0f={};_0x1f4d0f['n']='J',_0x1f4d0f['v']='J';const _0x459483={};_0x459483['n']='K',_0x459483['v']='K';const _0x3a7747={};_0x3a7747['n']='L',_0x3a7747['v']='L';const _0x55d200={};_0x55d200['n']='M',_0x55d200['v']='M';const _0x583e14={};_0x583e14['n']='N',_0x583e14['v']='N';const _0x5c9062={};_0x5c9062['n']='O',_0x5c9062['v']='O';const _0x5cc37d={};_0x5cc37d['n']='P',_0x5cc37d['v']='P';const _0x37e270={};_0x37e270['n']='Q',_0x37e270['v']='Q';const _0x71b5a4={};_0x71b5a4['n']='R',_0x71b5a4['v']='R';const _0x2feb1d={};_0x2feb1d['n']='S',_0x2feb1d['v']='S';const _0x1d000b={};_0x1d000b['n']='T',_0x1d000b['v']='T';const _0x25104d={};_0x25104d['n']='U',_0x25104d['v']='U';const _0x527dc2={};_0x527dc2['n']='V',_0x527dc2['v']='V';const _0x348364={};_0x348364['n']='W',_0x348364['v']='W';const _0x286dca={};_0x286dca['n']='X',_0x286dca['v']='X';const _0x3fc615={};_0x3fc615['n']='Y',_0x3fc615['v']='Y';const _0x36176f={};_0x36176f['n']='Z',_0x36176f['v']='Z';const _0x523e1d={};_0x523e1d['n']=_0x8e3719(0x1b7),_0x523e1d['v']=_0x8e3719(0x1b7);const _0xfacfe3={};_0xfacfe3[_0x8e3719(0x1ef)]='5',_0xfacfe3['name']='字母',_0xfacfe3[_0x8e3719(0x209)]=[_0x4146cf,_0x1770bb,_0x17d7bf,_0x47bd21,_0x3c3dda,_0x269bb8,_0x1d46dc,_0x3873e6,_0x36356c,_0x265478,_0x1f4d0f,_0x459483,_0x3a7747,_0x55d200,_0x583e14,_0x5c9062,_0x5cc37d,_0x37e270,_0x71b5a4,_0x2feb1d,_0x1d000b,_0x25104d,_0x527dc2,_0x348364,_0x286dca,_0x3fc615,_0x36176f,_0x523e1d],_0xfacfe3[_0x8e3719(0x1dd)]='';const _0x189eb0={};_0x189eb0['n']='时间',_0x189eb0['v']='time';const _0x128444={};_0x128444['n']='人气',_0x128444['v']=_0x8e3719(0x1f5);const _0x3841c7={};_0x3841c7['n']='评分',_0x3841c7['v']='score';const _0x57b39f={};_0x57b39f['key']='2',_0x57b39f[_0x8e3719(0x1c8)]='排序',_0x57b39f[_0x8e3719(0x209)]=[_0x189eb0,_0x128444,_0x3841c7],_0x57b39f[_0x8e3719(0x1dd)]='time';const _0x5f2c35={};_0x5f2c35['n']='全部',_0x5f2c35['v']='';const _0x3f45fa={};_0x3f45fa['n']='大陆',_0x3f45fa['v']='大陆';const _0x26e43b={};_0x26e43b['n']='香港',_0x26e43b['v']='香港';const _0x10d293={};_0x10d293['n']='台湾',_0x10d293['v']='台湾';const _0x4f52a5={};_0x4f52a5['n']='美国',_0x4f52a5['v']='美国';const _0x50aded={};_0x50aded['n']='法国',_0x50aded['v']='法国';const _0x7b445c={};_0x7b445c['n']='英国',_0x7b445c['v']='英国';const _0x4709b7={};_0x4709b7['n']='日本',_0x4709b7['v']='日本';const _0x466d48={};_0x466d48['n']='韩国',_0x466d48['v']='韩国';const _0x4f7827={};_0x4f7827['n']='德国',_0x4f7827['v']='德国';const _0x273288={};_0x273288['n']='泰国',_0x273288['v']='泰国';const _0x4e23b0={};_0x4e23b0['n']='印度',_0x4e23b0['v']='印度';const _0x15eb76={};_0x15eb76['n']=_0x8e3719(0x1a6),_0x15eb76['v']=_0x8e3719(0x1a6);const _0x58963d={};_0x58963d['n']=_0x8e3719(0x1c7),_0x58963d['v']=_0x8e3719(0x1c7);const _0x53ac9d={};_0x53ac9d['n']=_0x8e3719(0x1f1),_0x53ac9d['v']=_0x8e3719(0x1f1);const _0x2069bd={};_0x2069bd['n']='其他',_0x2069bd['v']='其他';const _0x577871={};_0x577871[_0x8e3719(0x1ef)]='1',_0x577871[_0x8e3719(0x1c8)]='地区',_0x577871[_0x8e3719(0x209)]=[_0x5f2c35,_0x3f45fa,_0x26e43b,_0x10d293,_0x4f52a5,_0x50aded,_0x7b445c,_0x4709b7,_0x466d48,_0x4f7827,_0x273288,_0x4e23b0,_0x15eb76,_0x58963d,_0x53ac9d,_0x2069bd],_0x577871['init']='';const _0x1c4d0f={};_0x1c4d0f['n']='全部',_0x1c4d0f['v']='';const _0x29e5a4={};_0x29e5a4['n']='国语',_0x29e5a4['v']='国语';const _0x51e64a={};_0x51e64a['n']='英语',_0x51e64a['v']='英语';const _0x8a3099={};_0x8a3099['n']='粤语',_0x8a3099['v']='粤语';const _0x4f27fe={};_0x4f27fe['n']=_0x8e3719(0x1ba),_0x4f27fe['v']=_0x8e3719(0x1ba);const _0x22e300={};_0x22e300['n']='韩语',_0x22e300['v']='韩语';const _0x280e3c={};_0x280e3c['n']='日语',_0x280e3c['v']='日语';const _0xb1ff89={};_0xb1ff89['n']='法语',_0xb1ff89['v']='法语';const _0x9a2628={};_0x9a2628['n']='德语',_0x9a2628['v']='德语';const _0x4d3f0b={};_0x4d3f0b['n']='其它',_0x4d3f0b['v']='其它';const _0x532e15={};_0x532e15[_0x8e3719(0x1ef)]='4',_0x532e15['name']='语言',_0x532e15[_0x8e3719(0x209)]=[_0x1c4d0f,_0x29e5a4,_0x51e64a,_0x8a3099,_0x4f27fe,_0x22e300,_0x280e3c,_0xb1ff89,_0x9a2628,_0x4d3f0b],_0x532e15['init']='';const _0xd27560={};_0xd27560['n']='全部',_0xd27560['v']='';const _0x41684e={};_0x41684e['n']='2023',_0x41684e['v']='2023';const _0x4736bf={};_0x4736bf['n']=_0x8e3719(0x19d),_0x4736bf['v']=_0x8e3719(0x19d);const _0x292f8b={};_0x292f8b['n']=_0x8e3719(0x1c5),_0x292f8b['v']=_0x8e3719(0x1c5);const _0x4631cc={};_0x4631cc['n']=_0x8e3719(0x1ad),_0x4631cc['v']='2020';const _0x323878={};_0x323878['n']='2019',_0x323878['v']='2019';const _0x2ea1c8={};_0x2ea1c8['n']='2018',_0x2ea1c8['v']=_0x8e3719(0x1fc);const _0x1d95de={};_0x1d95de['n']=_0x8e3719(0x1f8),_0x1d95de['v']=_0x8e3719(0x1f8);const _0xddae39={};_0xddae39['n']=_0x8e3719(0x198),_0xddae39['v']=_0x8e3719(0x198);const _0x10bb11={};_0x10bb11['n']=_0x8e3719(0x202),_0x10bb11['v']=_0x8e3719(0x202);const _0x62821a={};_0x62821a['n']=_0x8e3719(0x1e6),_0x62821a['v']=_0x8e3719(0x1e6);const _0x3485d8={};_0x3485d8['n']=_0x8e3719(0x1c0),_0x3485d8['v']=_0x8e3719(0x1c0);const _0x4f8532={};_0x4f8532['n']='2012',_0x4f8532['v']='2012';const _0x3813aa={};_0x3813aa['n']=_0x8e3719(0x1f0),_0x3813aa['v']=_0x8e3719(0x1f0);const _0x33922e={};_0x33922e['n']='2010',_0x33922e['v']='2010';const _0x2899e1={};_0x2899e1[_0x8e3719(0x1ef)]='11',_0x2899e1['name']='年份',_0x2899e1[_0x8e3719(0x209)]=[_0xd27560,_0x41684e,_0x4736bf,_0x292f8b,_0x4631cc,_0x323878,_0x2ea1c8,_0x1d95de,_0xddae39,_0x10bb11,_0x62821a,_0x3485d8,_0x4f8532,_0x3813aa,_0x33922e],_0x2899e1[_0x8e3719(0x1dd)]='';const _0x3ccf0f={};_0x3ccf0f['n']='全部',_0x3ccf0f['v']='';const _0x37dbc4={};_0x37dbc4['n']='A',_0x37dbc4['v']='A';const _0x459020={};_0x459020['n']='B',_0x459020['v']='B';const _0x289f1d={};_0x289f1d['n']='C',_0x289f1d['v']='C';const _0x2269e3={};_0x2269e3['n']='D',_0x2269e3['v']='D';const _0x2fede8={};_0x2fede8['n']='E',_0x2fede8['v']='E';const _0x379eb2={};_0x379eb2['n']='F',_0x379eb2['v']='F';const _0x13a0f8={};_0x13a0f8['n']='G',_0x13a0f8['v']='G';const _0x31177b={};_0x31177b['n']='H',_0x31177b['v']='H';const _0xc25da={};_0xc25da['n']='I',_0xc25da['v']='I';const _0xeaf812={};_0xeaf812['n']='J',_0xeaf812['v']='J';const _0x21c8bd={};_0x21c8bd['n']='K',_0x21c8bd['v']='K';const _0x278f8c={};_0x278f8c['n']='L',_0x278f8c['v']='L';const _0x3f8e21={};_0x3f8e21['n']='M',_0x3f8e21['v']='M';const _0xbb28c2={};_0xbb28c2['n']='N',_0xbb28c2['v']='N';const _0x30053c={};_0x30053c['n']='O',_0x30053c['v']='O';const _0x30d26d={};_0x30d26d['n']='P',_0x30d26d['v']='P';const _0x19aef2={};_0x19aef2['n']='Q',_0x19aef2['v']='Q';const _0x585f80={};_0x585f80['n']='R',_0x585f80['v']='R';const _0x2fe768={};_0x2fe768['n']='S',_0x2fe768['v']='S';const _0x4fbfcc={};_0x4fbfcc['n']='T',_0x4fbfcc['v']='T';const _0x528d1d={};_0x528d1d['n']='U',_0x528d1d['v']='U';const _0x4a30b8={};_0x4a30b8['n']='V',_0x4a30b8['v']='V';const _0x2eb40f={};_0x2eb40f['n']='W',_0x2eb40f['v']='W';const _0x3f2334={};_0x3f2334['n']='X',_0x3f2334['v']='X';const _0x1e9d5e={};_0x1e9d5e['n']='Y',_0x1e9d5e['v']='Y';const _0x2d98c7={};_0x2d98c7['n']='Z',_0x2d98c7['v']='Z';const _0x256604={};_0x256604['n']=_0x8e3719(0x1b7),_0x256604['v']=_0x8e3719(0x1b7);const _0x21fdd8={};_0x21fdd8[_0x8e3719(0x1ef)]='5',_0x21fdd8[_0x8e3719(0x1c8)]='字母',_0x21fdd8[_0x8e3719(0x209)]=[_0x3ccf0f,_0x37dbc4,_0x459020,_0x289f1d,_0x2269e3,_0x2fede8,_0x379eb2,_0x13a0f8,_0x31177b,_0xc25da,_0xeaf812,_0x21c8bd,_0x278f8c,_0x3f8e21,_0xbb28c2,_0x30053c,_0x30d26d,_0x19aef2,_0x585f80,_0x2fe768,_0x4fbfcc,_0x528d1d,_0x4a30b8,_0x2eb40f,_0x3f2334,_0x1e9d5e,_0x2d98c7,_0x256604],_0x21fdd8[_0x8e3719(0x1dd)]='';const _0x12ed56={};_0x12ed56['n']='时间',_0x12ed56['v']='time';const _0x295aa4={};_0x295aa4['n']='人气',_0x295aa4['v']='hits';const _0x422751={};_0x422751['n']='评分',_0x422751['v']=_0x8e3719(0x18f);const _0x318b3b={};_0x318b3b[_0x8e3719(0x1ef)]='2',_0x318b3b['name']='排序',_0x318b3b[_0x8e3719(0x209)]=[_0x12ed56,_0x295aa4,_0x422751],_0x318b3b[_0x8e3719(0x1dd)]=_0x8e3719(0x1a0);const _0x4ed400={};_0x4ed400['n']='全部',_0x4ed400['v']='';const _0x2993e9={};_0x2993e9['n']='大陆',_0x2993e9['v']='大陆';const _0x5277c3={};_0x5277c3['n']='香港',_0x5277c3['v']='香港';const _0x283587={};_0x283587['n']='台湾',_0x283587['v']='台湾';const _0x2c3cbc={};_0x2c3cbc['n']='美国',_0x2c3cbc['v']='美国';const _0x4a7462={};_0x4a7462['n']='法国',_0x4a7462['v']='法国';const _0x270ffa={};_0x270ffa['n']='英国',_0x270ffa['v']='英国';const _0x269c76={};_0x269c76['n']='日本',_0x269c76['v']='日本';const _0x536687={};_0x536687['n']='韩国',_0x536687['v']='韩国';const _0x3fab7e={};_0x3fab7e['n']='德国',_0x3fab7e['v']='德国';const _0x4d6e0c={};_0x4d6e0c['n']='泰国',_0x4d6e0c['v']='泰国';const _0x2eb404={};_0x2eb404['n']='印度',_0x2eb404['v']='印度';const _0x1cfc97={};_0x1cfc97['n']=_0x8e3719(0x1a6),_0x1cfc97['v']='意大利';const _0x320a02={};_0x320a02['n']=_0x8e3719(0x1c7),_0x320a02['v']='西班牙';const _0x2f972b={};_0x2f972b['n']=_0x8e3719(0x1f1),_0x2f972b['v']=_0x8e3719(0x1f1);const _0x4fc008={};_0x4fc008['n']='其他',_0x4fc008['v']='其他';const _0x1112c2={};_0x1112c2[_0x8e3719(0x1ef)]='1',_0x1112c2['name']='地区',_0x1112c2[_0x8e3719(0x209)]=[_0x4ed400,_0x2993e9,_0x5277c3,_0x283587,_0x2c3cbc,_0x4a7462,_0x270ffa,_0x269c76,_0x536687,_0x3fab7e,_0x4d6e0c,_0x2eb404,_0x1cfc97,_0x320a02,_0x2f972b,_0x4fc008],_0x1112c2[_0x8e3719(0x1dd)]='';const _0x5c2c3f={};_0x5c2c3f['n']='全部',_0x5c2c3f['v']='';const _0x127280={};_0x127280['n']='国语',_0x127280['v']='国语';const _0x2cb3bb={};_0x2cb3bb['n']='英语',_0x2cb3bb['v']='英语';const _0x1ccabd={};_0x1ccabd['n']='粤语',_0x1ccabd['v']='粤语';const _0x50d4f1={};_0x50d4f1['n']=_0x8e3719(0x1ba),_0x50d4f1['v']=_0x8e3719(0x1ba);const _0x412ea4={};_0x412ea4['n']='韩语',_0x412ea4['v']='韩语';const _0x3eb55e={};function _0x4670(){const _0x5304a9=['.tag-link','attribs','2014','56772WUOyjN','console','o-item\x20a','2012','https://wo','filters','vod_id','href','key','2011','加拿大','timeout','okhttp/3.1','\x20.page-tit','hits','2.0','table','2017','toString','em-text','.module-it','2018','o-item','home','object','category','return\x20(fu','2015','gg.xyz','一页)','微电影','find','k\x20a','0\x20(Windows','value','detail','vod_actor','stype','warn','push','nction()\x20','last','vod_name','includes','debug','title','m-pic\x20img','vod_direct','exception','ule-list\x20>','play','\x20(KHTML,\x20l','rn\x20this\x22)(','\x20.module-i','score','/index.php','7.0.0.0\x20Sa','stringify','.video-inf','iv.tag-lin','2023','isEmpty','52636OKTmDQ','2016','.module-se','headers','em-cover\x20.','(3)\x20\x20.modu','2022','item','6634431bzFiSa','time','ctor(\x22retu','trim','user-agent','content','first','意大利','o-itemtitl','2019','em-pic\x20>\x20i','attr','le-list\x20.m','.sqjj_a','2020','205etsIlB','1108gmViQO','10vdayoU','----.html?','\x20NT\x2010.0;\x20','module-ite','data-src','/---------','each','0-9','Win64;\x20x64','Kit/537.36','闽南语','{}.constru','wd=','ike\x20Gecko)','#page\x20>\x20a:','bind','2013','User-Agent','log','list','Mozilla/5.','2021','14gQqxei','西班牙','name','.video-ser','vod_year','vod_pic','join','homeVod','match','1060696JHUTLF','apply','20448340SxSdeS','text','.module:eq','/vodshow/','class','3PVQGEI',')\x20AppleWeb','odule-item','1124748ghRPkZ','vod_remark','/vodsearch','o-items','init','.module:lt','.module-ro','m-pic\x20a','2010','length','em-pic\x20img'];_0x4670=function(){return _0x5304a9;};return _0x4670();}_0x3eb55e['n']='日语',_0x3eb55e['v']='日语';const _0x5b81f9={};_0x5b81f9['n']='法语',_0x5b81f9['v']='法语';const _0x26ff28={};_0x26ff28['n']='德语',_0x26ff28['v']='德语';const _0x4e5fb3={};_0x4e5fb3['n']='其它',_0x4e5fb3['v']='其它';const _0x4e606a={};_0x4e606a['key']='4',_0x4e606a[_0x8e3719(0x1c8)]='语言',_0x4e606a[_0x8e3719(0x209)]=[_0x5c2c3f,_0x127280,_0x2cb3bb,_0x1ccabd,_0x50d4f1,_0x412ea4,_0x3eb55e,_0x5b81f9,_0x26ff28,_0x4e5fb3],_0x4e606a[_0x8e3719(0x1dd)]='';const _0x4898d2={};_0x4898d2['n']='全部',_0x4898d2['v']='';const _0x2fdb74={};_0x2fdb74['n']=_0x8e3719(0x195),_0x2fdb74['v']='2023';const _0x534c4d={};_0x534c4d['n']=_0x8e3719(0x19d),_0x534c4d['v']=_0x8e3719(0x19d);const _0x1f25bf={};_0x1f25bf['n']=_0x8e3719(0x1c5),_0x1f25bf['v']=_0x8e3719(0x1c5);const _0x4b7fe3={};_0x4b7fe3['n']=_0x8e3719(0x1ad),_0x4b7fe3['v']=_0x8e3719(0x1ad);const _0x146327={};_0x146327['n']='2019',_0x146327['v']='2019';const _0x4c5ee7={};_0x4c5ee7['n']=_0x8e3719(0x1fc),_0x4c5ee7['v']='2018';const _0x3cc137={};_0x3cc137['n']='2017',_0x3cc137['v']=_0x8e3719(0x1f8);const _0x4afba9={};_0x4afba9['n']=_0x8e3719(0x198),_0x4afba9['v']='2016';const _0x367091={};_0x367091['n']=_0x8e3719(0x202),_0x367091['v']='2015';const _0x19014d={};_0x19014d['n']=_0x8e3719(0x1e6),_0x19014d['v']=_0x8e3719(0x1e6);const _0x29f43a={};_0x29f43a['n']=_0x8e3719(0x1c0),_0x29f43a['v']='2013';const _0x2015fb={};_0x2015fb['n']=_0x8e3719(0x1ea),_0x2015fb['v']='2012';const _0xed5124={};_0xed5124['n']=_0x8e3719(0x1f0),_0xed5124['v']='2011';const _0x40b6d7={};_0x40b6d7['n']=_0x8e3719(0x1e1),_0x40b6d7['v']='2010';const _0x59c087={};_0x59c087['key']='11',_0x59c087['name']='年份',_0x59c087[_0x8e3719(0x209)]=[_0x4898d2,_0x2fdb74,_0x534c4d,_0x1f25bf,_0x4b7fe3,_0x146327,_0x4c5ee7,_0x3cc137,_0x4afba9,_0x367091,_0x19014d,_0x29f43a,_0x2015fb,_0xed5124,_0x40b6d7],_0x59c087[_0x8e3719(0x1dd)]='';const _0x27dfe0={};_0x27dfe0['n']='全部',_0x27dfe0['v']='';const _0x78f097={};_0x78f097['n']='A',_0x78f097['v']='A';const _0x2a451a={};_0x2a451a['n']='B',_0x2a451a['v']='B';const _0x2f3cfa={};_0x2f3cfa['n']='C',_0x2f3cfa['v']='C';const _0x47700a={};_0x47700a['n']='D',_0x47700a['v']='D';const _0x4a5dd6={};_0x4a5dd6['n']='E',_0x4a5dd6['v']='E';const _0x3823bd={};_0x3823bd['n']='F',_0x3823bd['v']='F';const _0x42703c={};_0x42703c['n']='G',_0x42703c['v']='G';const _0x386084={};_0x386084['n']='H',_0x386084['v']='H';const _0x46c4ce={};_0x46c4ce['n']='I',_0x46c4ce['v']='I';const _0x528b1f={};_0x528b1f['n']='J',_0x528b1f['v']='J';const _0x3cc3c9={};_0x3cc3c9['n']='K',_0x3cc3c9['v']='K';const _0x36401c={};_0x36401c['n']='L',_0x36401c['v']='L';const _0x3f427b={};_0x3f427b['n']='M',_0x3f427b['v']='M';const _0x2f9279={};_0x2f9279['n']='N',_0x2f9279['v']='N';const _0x44fc36={};_0x44fc36['n']='O',_0x44fc36['v']='O';const _0x57bc7e={};_0x57bc7e['n']='P',_0x57bc7e['v']='P';const _0x58264f={};_0x58264f['n']='Q',_0x58264f['v']='Q';const _0xfe93a8={};_0xfe93a8['n']='R',_0xfe93a8['v']='R';const _0x45fcba={};_0x45fcba['n']='S',_0x45fcba['v']='S';const _0x12fb2b={};_0x12fb2b['n']='T',_0x12fb2b['v']='T';const _0x321154={};_0x321154['n']='U',_0x321154['v']='U';const _0x1f0dc2={};_0x1f0dc2['n']='V',_0x1f0dc2['v']='V';const _0x1cfa13={};_0x1cfa13['n']='W',_0x1cfa13['v']='W';const _0x1c2dc2={};_0x1c2dc2['n']='X',_0x1c2dc2['v']='X';const _0x1140e7={};_0x1140e7['n']='Y',_0x1140e7['v']='Y';const _0x384aac={};_0x384aac['n']='Z',_0x384aac['v']='Z';const _0x2addc0={};_0x2addc0['n']='0-9',_0x2addc0['v']='0-9';const _0x1c3119={};_0x1c3119[_0x8e3719(0x1ef)]='5',_0x1c3119['name']='字母',_0x1c3119[_0x8e3719(0x209)]=[_0x27dfe0,_0x78f097,_0x2a451a,_0x2f3cfa,_0x47700a,_0x4a5dd6,_0x3823bd,_0x42703c,_0x386084,_0x46c4ce,_0x528b1f,_0x3cc3c9,_0x36401c,_0x3f427b,_0x2f9279,_0x44fc36,_0x57bc7e,_0x58264f,_0xfe93a8,_0x45fcba,_0x12fb2b,_0x321154,_0x1f0dc2,_0x1cfa13,_0x1c2dc2,_0x1140e7,_0x384aac,_0x2addc0],_0x1c3119[_0x8e3719(0x1dd)]='';const _0x4a4b0f={};_0x4a4b0f['n']='时间',_0x4a4b0f['v']=_0x8e3719(0x1a0);const _0x5f3dcf={};_0x5f3dcf['n']='人气',_0x5f3dcf['v']='hits';const _0x52a3c3={};_0x52a3c3['n']='评分',_0x52a3c3['v']=_0x8e3719(0x18f);const _0x5a2fdd={};_0x5a2fdd[_0x8e3719(0x1ef)]='2',_0x5a2fdd['name']='排序',_0x5a2fdd[_0x8e3719(0x209)]=[_0x4a4b0f,_0x5f3dcf,_0x52a3c3],_0x5a2fdd[_0x8e3719(0x1dd)]=_0x8e3719(0x1a0);const _0x22e796={};_0x22e796['n']='全部',_0x22e796['v']='';const _0x11aa62={};_0x11aa62['n']='国产',_0x11aa62['v']='国产';const _0xfdcba6={};_0xfdcba6['n']='日韩',_0xfdcba6['v']='日韩';const _0x3250f8={};_0x3250f8['n']='欧美',_0x3250f8['v']='欧美';const _0x1c23b4={};_0x1c23b4[_0x8e3719(0x1ef)]='1',_0x1c23b4[_0x8e3719(0x1c8)]='地区',_0x1c23b4['value']=[_0x22e796,_0x11aa62,_0xfdcba6,_0x3250f8],_0x1c23b4[_0x8e3719(0x1dd)]='';const _0x53c7a0={};_0x53c7a0['n']='全部',_0x53c7a0['v']='';const _0xc3261={};_0xc3261['n']=_0x8e3719(0x195),_0xc3261['v']=_0x8e3719(0x195);const _0x12f925={};_0x12f925['n']=_0x8e3719(0x19d),_0x12f925['v']='2022';const _0x2329ac={};_0x2329ac['n']=_0x8e3719(0x1c5),_0x2329ac['v']=_0x8e3719(0x1c5);const _0x232064={};_0x232064['n']=_0x8e3719(0x1ad),_0x232064['v']=_0x8e3719(0x1ad);const _0x2e9659={};_0x2e9659['n']=_0x8e3719(0x1a8),_0x2e9659['v']='2019';const _0x4e670f={};_0x4e670f['n']=_0x8e3719(0x1fc),_0x4e670f['v']='2018';const _0x4bf69b={};_0x4bf69b['n']=_0x8e3719(0x1f8),_0x4bf69b['v']=_0x8e3719(0x1f8);const _0x4fe370={};_0x4fe370['n']='2016',_0x4fe370['v']='2016';const _0x40f4c7={};_0x40f4c7['n']=_0x8e3719(0x202),_0x40f4c7['v']=_0x8e3719(0x202);const _0x3e325f={};_0x3e325f['n']=_0x8e3719(0x1e6),_0x3e325f['v']=_0x8e3719(0x1e6);const _0x50ccc3={};_0x50ccc3['n']=_0x8e3719(0x1c0),_0x50ccc3['v']='2013';const _0x5bd6a8={};_0x5bd6a8['n']=_0x8e3719(0x1ea),_0x5bd6a8['v']='2012';const _0x2be2db={};_0x2be2db['n']=_0x8e3719(0x1f0),_0x2be2db['v']=_0x8e3719(0x1f0);const _0x33395b={};_0x33395b['n']=_0x8e3719(0x1e1),_0x33395b['v']=_0x8e3719(0x1e1);const _0x54d99e={};_0x54d99e[_0x8e3719(0x1ef)]='11',_0x54d99e['name']='年份',_0x54d99e[_0x8e3719(0x209)]=[_0x53c7a0,_0xc3261,_0x12f925,_0x2329ac,_0x232064,_0x2e9659,_0x4e670f,_0x4bf69b,_0x4fe370,_0x40f4c7,_0x3e325f,_0x50ccc3,_0x5bd6a8,_0x2be2db,_0x33395b],_0x54d99e[_0x8e3719(0x1dd)]='';const _0xd77fd9={};_0xd77fd9['n']='全部',_0xd77fd9['v']='';const _0x391c84={};_0x391c84['n']='A',_0x391c84['v']='A';const _0x5700e2={};_0x5700e2['n']='B',_0x5700e2['v']='B';const _0x46918={};_0x46918['n']='C',_0x46918['v']='C';const _0x3a7192={};_0x3a7192['n']='D',_0x3a7192['v']='D';const _0x3d1748={};_0x3d1748['n']='E',_0x3d1748['v']='E';const _0x196ef3={};_0x196ef3['n']='F',_0x196ef3['v']='F';const _0x28d60e={};_0x28d60e['n']='G',_0x28d60e['v']='G';const _0x27e9a3={};_0x27e9a3['n']='H',_0x27e9a3['v']='H';const _0x5de2c9={};_0x5de2c9['n']='I',_0x5de2c9['v']='I';const _0x58f765={};_0x58f765['n']='J',_0x58f765['v']='J';const _0x203cf3={};_0x203cf3['n']='K',_0x203cf3['v']='K';const _0x222b71={};_0x222b71['n']='L',_0x222b71['v']='L';const _0x3c715a={};_0x3c715a['n']='M',_0x3c715a['v']='M';const _0x5cfe9d={};_0x5cfe9d['n']='N',_0x5cfe9d['v']='N';const _0x4dc2db={};_0x4dc2db['n']='O',_0x4dc2db['v']='O';const _0x556f65={};_0x556f65['n']='P',_0x556f65['v']='P';const _0x33e629={};_0x33e629['n']='Q',_0x33e629['v']='Q';const _0x48d778={};_0x48d778['n']='R',_0x48d778['v']='R';const _0x581c2c={};_0x581c2c['n']='S',_0x581c2c['v']='S';const _0x2d077c={};_0x2d077c['n']='T',_0x2d077c['v']='T';const _0x3210d1={};_0x3210d1['n']='U',_0x3210d1['v']='U';const _0xbc6a8a={};_0xbc6a8a['n']='V',_0xbc6a8a['v']='V';const _0x23f791={};_0x23f791['n']='W',_0x23f791['v']='W';const _0x161cea={};_0x161cea['n']='X',_0x161cea['v']='X';const _0x50970d={};_0x50970d['n']='Y',_0x50970d['v']='Y';const _0x240e80={};_0x240e80['n']='Z',_0x240e80['v']='Z';const _0x46da2e={};_0x46da2e['n']='0-9',_0x46da2e['v']=_0x8e3719(0x1b7);const _0x1a2465={};_0x1a2465[_0x8e3719(0x1ef)]='5',_0x1a2465['name']='字母',_0x1a2465['value']=[_0xd77fd9,_0x391c84,_0x5700e2,_0x46918,_0x3a7192,_0x3d1748,_0x196ef3,_0x28d60e,_0x27e9a3,_0x5de2c9,_0x58f765,_0x203cf3,_0x222b71,_0x3c715a,_0x5cfe9d,_0x4dc2db,_0x556f65,_0x33e629,_0x48d778,_0x581c2c,_0x2d077c,_0x3210d1,_0xbc6a8a,_0x23f791,_0x161cea,_0x50970d,_0x240e80,_0x46da2e],_0x1a2465[_0x8e3719(0x1dd)]='';const _0x37c36e={};_0x37c36e['n']='时间',_0x37c36e['v']=_0x8e3719(0x1a0);const _0x48bb69={};_0x48bb69['n']='人气',_0x48bb69['v']='hits';const _0x53cf6d={};_0x53cf6d['n']='评分',_0x53cf6d['v']='score';const _0x365049={};_0x365049['key']='2',_0x365049[_0x8e3719(0x1c8)]='排序',_0x365049[_0x8e3719(0x209)]=[_0x37c36e,_0x48bb69,_0x53cf6d],_0x365049[_0x8e3719(0x1dd)]=_0x8e3719(0x1a0);const _0x306f1f={};_0x306f1f['n']='全部',_0x306f1f['v']='';const _0x38371c={};_0x38371c['n']='A',_0x38371c['v']='A';const _0x4f6e52={};_0x4f6e52['n']='B',_0x4f6e52['v']='B';const _0x43698a={};_0x43698a['n']='C',_0x43698a['v']='C';const _0x369fd4={};_0x369fd4['n']='D',_0x369fd4['v']='D';const _0x1dbcce={};_0x1dbcce['n']='E',_0x1dbcce['v']='E';const _0x5eb3ba={};_0x5eb3ba['n']='F',_0x5eb3ba['v']='F';const _0x3f83b3={};_0x3f83b3['n']='G',_0x3f83b3['v']='G';const _0x3ed848={};_0x3ed848['n']='H',_0x3ed848['v']='H';const _0x1afd4b={};_0x1afd4b['n']='I',_0x1afd4b['v']='I';const _0x5176f7={};_0x5176f7['n']='J',_0x5176f7['v']='J';const _0x14db3b={};_0x14db3b['n']='K',_0x14db3b['v']='K';const _0x23d5e1={};_0x23d5e1['n']='L',_0x23d5e1['v']='L';const _0x112d7f={};_0x112d7f['n']='M',_0x112d7f['v']='M';const _0x1b6d55={};_0x1b6d55['n']='N',_0x1b6d55['v']='N';const _0x577a0e={};_0x577a0e['n']='O',_0x577a0e['v']='O';const _0x317af5={};_0x317af5['n']='P',_0x317af5['v']='P';const _0x205c34={};_0x205c34['n']='Q',_0x205c34['v']='Q';const _0x80f2ce={};_0x80f2ce['n']='R',_0x80f2ce['v']='R';const _0x5a0842={};_0x5a0842['n']='S',_0x5a0842['v']='S';const _0x46950a={};_0x46950a['n']='T',_0x46950a['v']='T';const _0x2c0bb4={};_0x2c0bb4['n']='U',_0x2c0bb4['v']='U';const _0x26f4ec={};_0x26f4ec['n']='V',_0x26f4ec['v']='V';const _0x2bc9d5={};_0x2bc9d5['n']='W',_0x2bc9d5['v']='W';const _0x2782c9={};function _0x1482(_0x3611e8,_0x367474){const _0x45d21c=_0x4670();return _0x1482=function(_0x197847,_0x2219b0){_0x197847=_0x197847-0x185;let _0x1f71eb=_0x45d21c[_0x197847];return _0x1f71eb;},_0x1482(_0x3611e8,_0x367474);}_0x2782c9['n']='X',_0x2782c9['v']='X';const _0x4c644c={};_0x4c644c['n']='Y',_0x4c644c['v']='Y';const _0x16c401={};_0x16c401['n']='Z',_0x16c401['v']='Z';const _0x1127be={};_0x1127be['n']='0-9',_0x1127be['v']=_0x8e3719(0x1b7);const _0x3b0d30={};_0x3b0d30[_0x8e3719(0x1ef)]='5',_0x3b0d30[_0x8e3719(0x1c8)]='字母',_0x3b0d30[_0x8e3719(0x209)]=[_0x306f1f,_0x38371c,_0x4f6e52,_0x43698a,_0x369fd4,_0x1dbcce,_0x5eb3ba,_0x3f83b3,_0x3ed848,_0x1afd4b,_0x5176f7,_0x14db3b,_0x23d5e1,_0x112d7f,_0x1b6d55,_0x577a0e,_0x317af5,_0x205c34,_0x80f2ce,_0x5a0842,_0x46950a,_0x2c0bb4,_0x26f4ec,_0x2bc9d5,_0x2782c9,_0x4c644c,_0x16c401,_0x1127be],_0x3b0d30[_0x8e3719(0x1dd)]='';const _0x546280={};_0x546280['n']='时间',_0x546280['v']=_0x8e3719(0x1a0);const _0x34a7ff={};_0x34a7ff['n']='人气',_0x34a7ff['v']=_0x8e3719(0x1f5);const _0x34c697={};_0x34c697['n']='评分',_0x34c697['v']=_0x8e3719(0x18f);const _0x94db14={};_0x94db14[_0x8e3719(0x1ef)]='2',_0x94db14[_0x8e3719(0x1c8)]='排序',_0x94db14[_0x8e3719(0x209)]=[_0x546280,_0x34a7ff,_0x34c697],_0x94db14['init']=_0x8e3719(0x1a0);const _0x2a0073={};_0x2a0073['1']=[_0x5d4886,_0x5464b9,_0x3d5f89,_0xfacfe3,_0x57b39f],_0x2a0073['2']=[_0x577871,_0x532e15,_0x2899e1,_0x21fdd8,_0x318b3b],_0x2a0073['3']=[_0x1112c2,_0x4e606a,_0x59c087,_0x1c3119,_0x5a2fdd],_0x2a0073['4']=[_0x1c23b4,_0x54d99e,_0x1a2465,_0x365049],_0x2a0073['5']=[_0x3b0d30,_0x94db14];let filterObj=_0x2a0073;async function home(_0x1da93f){const _0x1e6de4=_0x8e3719;let _0x290647=[],_0x1f9857=siteUrl,_0x5097ed=await request(_0x1f9857,UA);const _0x249717=load(_0x5097ed);let _0xe3b6d9=_0x249717('.nav-link');for(var _0x3efa06 of _0xe3b6d9){let _0x553923=_0x249717(_0x3efa06),_0x11fb3c=_0x553923['attr']('href'),_0x586f40=_0x11fb3c[_0x1e6de4(0x1ce)](regexCategory);if(!_['isEmpty'](_0x586f40)){let _0x18c859=_0x586f40[0x1],_0x1a1a43={'type_id':_0x18c859,'type_name':_0x553923[_0x1e6de4(0x1d2)]()['trim']()};_0x290647[_0x1e6de4(0x20e)](_0x1a1a43);}}const _0x23ee56={};return _0x23ee56[_0x1e6de4(0x1d5)]=_0x290647,_0x23ee56[_0x1e6de4(0x1ec)]=filterObj,JSON[_0x1e6de4(0x192)](_0x23ee56);}async function homeVod(){const _0x4ce2c4=_0x8e3719;let _0x571ffc=siteUrl,_0x407c6e=await request(_0x571ffc,UA);const _0x4433dd=load(_0x407c6e);let _0x2ede4c=_0x4433dd(_0x4ce2c4(0x1de)+_0x4ce2c4(0x19c)+_0x4ce2c4(0x1ab)+_0x4ce2c4(0x1d8)+'s\x20.module-'+_0x4ce2c4(0x19e)),_0x2cc586=[];for(var _0x1079cc of _0x2ede4c){let _0x13eeb4=_0x4433dd(_0x1079cc)[_0x4ce2c4(0x206)]('.module-it'+_0x4ce2c4(0x19b)+_0x4ce2c4(0x1b3)+_0x4ce2c4(0x1e0))['first'](),_0x2779fe=_0x13eeb4[_0x4ce2c4(0x1aa)](_0x4ce2c4(0x1ee)),_0x8b04c6=_0x13eeb4[_0x4ce2c4(0x1aa)](_0x4ce2c4(0x186)),_0x3c8378=_0x4433dd(_0x1079cc)[_0x4ce2c4(0x206)](_0x4ce2c4(0x1fb)+'em-cover\x20.'+_0x4ce2c4(0x1b3)+_0x4ce2c4(0x187))[_0x4ce2c4(0x1a5)](),_0x3db3ab=_0x3c8378[_0x4ce2c4(0x1aa)](_0x4ce2c4(0x1b4)),_0x47bd9a=_0x4433dd(_0x1079cc)[_0x4ce2c4(0x206)](_0x4ce2c4(0x1fb)+_0x4ce2c4(0x1fa))[_0x4ce2c4(0x1a5)]()['text']();const _0x28c73e={};_0x28c73e['vod_id']=_0x2779fe,_0x28c73e[_0x4ce2c4(0x211)]=_0x8b04c6,_0x28c73e[_0x4ce2c4(0x1cb)]=_0x3db3ab,_0x28c73e[_0x4ce2c4(0x1da)+'s']=_0x47bd9a,_0x2cc586[_0x4ce2c4(0x20e)](_0x28c73e);}const _0x34d3ee={};return _0x34d3ee[_0x4ce2c4(0x1c3)]=_0x2cc586,JSON[_0x4ce2c4(0x192)](_0x34d3ee);}async function category(_0x15fbb9,_0x4decfd,_0x5c0d50,_0x202f7d){const _0x1f9143=_0x8e3719;let _0x26d430=[_0x15fbb9,'','','','','','','',_0x4decfd,'','',''];if(!_[_0x1f9143(0x196)](_0x202f7d))for(let _0x543e5b in _0x202f7d){_0x26d430[parseInt(_0x543e5b)]=_0x202f7d[_0x543e5b];}const _0x35ba28=_0x26d430['join']('-');let _0x29bf29=siteUrl+(_0x1f9143(0x190)+_0x1f9143(0x1d4))+_0x35ba28+'.html';console[_0x1f9143(0x185)](_0x29bf29);let _0x383aeb=await request(_0x29bf29,UA);console['debug'](_0x383aeb);const _0x4c62c0=load(_0x383aeb);let _0x6dd85e=_0x4c62c0(_0x1f9143(0x1d3)+'(0)\x20>\x20.mod'+_0x1f9143(0x18a)+_0x1f9143(0x18e)+'tems\x20>\x20.mo'+'dule-item'),_0x35613f=[];for(var _0x302519 of _0x6dd85e){let _0x3cd79b=_0x4c62c0(_0x302519)[_0x1f9143(0x206)](_0x1f9143(0x1fb)+_0x1f9143(0x19b)+_0x1f9143(0x1b3)+_0x1f9143(0x1e0))[_0x1f9143(0x1a5)](),_0x3c7efb=_0x3cd79b[_0x1f9143(0x1aa)](_0x1f9143(0x1ee)),_0xda0894=_0x3cd79b[_0x1f9143(0x1aa)](_0x1f9143(0x186)),_0x234559=_0x4c62c0(_0x302519)[_0x1f9143(0x206)](_0x1f9143(0x1fb)+_0x1f9143(0x19b)+'module-ite'+'m-pic\x20img')[_0x1f9143(0x1a5)](),_0x40fd7a=_0x234559[_0x1f9143(0x1aa)](_0x1f9143(0x1b4)),_0x4cd258=_0x4c62c0(_0x302519)[_0x1f9143(0x206)](_0x1f9143(0x1fb)+_0x1f9143(0x1fa))[_0x1f9143(0x1a5)]()[_0x1f9143(0x1d2)]();const _0x4055d1={};_0x4055d1[_0x1f9143(0x1ed)]=_0x3c7efb,_0x4055d1[_0x1f9143(0x211)]=_0xda0894,_0x4055d1[_0x1f9143(0x1cb)]=_0x40fd7a,_0x4055d1['vod_remark'+'s']=_0x4cd258,_0x35613f[_0x1f9143(0x20e)](_0x4055d1);}const _0x248baf=_0x4c62c0(_0x1f9143(0x1be)+'contains(下'+_0x1f9143(0x204))[_0x1f9143(0x1e2)]>0x0,_0x21311f=_0x248baf?parseInt(_0x4decfd)+0x1:parseInt(_0x4decfd);return JSON[_0x1f9143(0x192)]({'page':parseInt(_0x4decfd),'pagecount':_0x21311f,'limit':0x48,'total':0x48*_0x21311f,'list':_0x35613f});}async function detail(_0x3460aa){const _0x2de278=_0x8e3719;let _0x1bd0b9=siteUrl+_0x3460aa,_0x528242=await request(_0x1bd0b9,UA);const _0x12c546=load(_0x528242);let _0x1927bf=_0x12c546(_0x2de278(0x1df)+'w-text'),_0x5d10b7=[];_0x1927bf[_0x2de278(0x1b6)](function(_0x3884cb,_0xde0cb8){const _0x475197=_0x2de278;let _0x3597b1=_0x12c546(this)[_0x475197(0x1aa)]('data-clipb'+'oard-text');_0x5d10b7[_0x475197(0x20e)](_0x3597b1['trim']());});let _0x487f73=await detailContentVodPlayUrl(_0x5d10b7),_0x574248=detailContentVodPlayFrom(_0x5d10b7),_0x2911f5=_0x12c546('.video-inf'+'o-header\x20d'+_0x2de278(0x194)+_0x2de278(0x207)),_0x3df303=[];_0x2911f5['each'](function(_0x9cc0e6,_0x148ae9){const _0x1e50e7=_0x2de278;_0x3df303[_0x1e50e7(0x20e)](_0x12c546(this)[_0x1e50e7(0x1d2)]());});let _0x1cf3e1={'vod_id':_0x3460aa,'vod_content':_0x3460aa,'vod_pic':_0x12c546(_0x2de278(0x1fb)+_0x2de278(0x1e3))[_0x2de278(0x1a5)]()[_0x2de278(0x1aa)](_0x2de278(0x1b4)),'vod_name':_0x12c546(_0x2de278(0x193)+'o-header\x20>'+_0x2de278(0x1f4)+'le')[_0x2de278(0x1a5)]()[_0x2de278(0x1d2)](),'vod_play_url':_0x487f73,'vod_play_from':_0x574248,'type_name':_0x3df303['join'](','),'vod_year':'','vod_area':_0x12c546('.video-inf'+'o-header\x20a'+_0x2de278(0x1e4))[_0x2de278(0x210)]()['text']()['trim'](),'vod_remarks':'','vod_actor':'','vod_director':''},_0x24a5df=_0x12c546(_0x2de278(0x193)+_0x2de278(0x1dc));_0x24a5df[_0x2de278(0x1b6)](function(_0x59502d,_0x578c80){const _0x51e499=_0x2de278;let _0x4d5c93=_0x12c546(this)[_0x51e499(0x206)](_0x51e499(0x193)+_0x51e499(0x1a7)+'e')[_0x51e499(0x1a5)]()['text']();if(_0x4d5c93[_0x51e499(0x212)]('导演')){let _0x4835cf=_0x12c546(this)[_0x51e499(0x206)]('.video-inf'+_0x51e499(0x1e9)),_0x2176b0=[];_0x4835cf[_0x51e499(0x1b6)](function(_0x4e7d17,_0x2e818c){const _0x4632ea=_0x51e499;_0x2176b0[_0x4632ea(0x20e)](_0x12c546(this)[_0x4632ea(0x1d2)]());}),_0x1cf3e1[_0x51e499(0x188)+'or']=_0x2176b0[_0x51e499(0x1cc)](',');}else{if(_0x4d5c93[_0x51e499(0x212)]('主演')){let _0x361481=_0x12c546(this)['find'](_0x51e499(0x193)+_0x51e499(0x1e9)),_0x3f5d6b=[];_0x361481[_0x51e499(0x1b6)](function(_0x281ec5,_0x5124ea){const _0xd7d48=_0x51e499;_0x3f5d6b[_0xd7d48(0x20e)](_0x12c546(this)[_0xd7d48(0x1d2)]());}),_0x1cf3e1[_0x51e499(0x20b)]=_0x3f5d6b[_0x51e499(0x1cc)](',');}else{if(_0x4d5c93['includes']('年代'))_0x1cf3e1[_0x51e499(0x1ca)]=_0x12c546(this)[_0x51e499(0x206)](_0x51e499(0x193)+_0x51e499(0x1fd))[_0x51e499(0x1a5)]()[_0x51e499(0x1d2)]()[_0x51e499(0x1a2)]();else{if(_0x4d5c93['includes']('备注'))_0x1cf3e1[_0x51e499(0x1da)+'s']=_0x12c546(this)[_0x51e499(0x206)](_0x51e499(0x193)+_0x51e499(0x1fd))[_0x51e499(0x1a5)]()[_0x51e499(0x1d2)]()[_0x51e499(0x1a2)]();else _0x4d5c93[_0x51e499(0x212)]('剧情')&&(_0x1cf3e1['vod_conten'+'t']=_0x12c546(this)[_0x51e499(0x206)](_0x51e499(0x1ac))['first']()[_0x51e499(0x1d2)]()[_0x51e499(0x1a2)]());}}}});const _0x149a1c={};_0x149a1c[_0x2de278(0x1c3)]=[_0x1cf3e1];let _0x30768b=JSON[_0x2de278(0x192)](_0x149a1c);return _0x30768b;}async function play(_0x40de2f,_0x494f43,_0x3b3956){return await playContent(_0x40de2f,_0x494f43,_0x3b3956);}async function search(_0x52382a,_0x2d049b){const _0x2fe1eb=_0x8e3719;let _0x144739=siteUrl+(_0x2fe1eb(0x190)+_0x2fe1eb(0x1db)+_0x2fe1eb(0x1b5)+_0x2fe1eb(0x1b1)+_0x2fe1eb(0x1bc))+_0x52382a,_0x57a28f=await getString(_0x144739),_0x5ddc5b=load(_0x57a28f),_0x1f4002=_0x5ddc5b(_0x2fe1eb(0x199)+'arch-item'),_0x3dbb04=[];for(var _0x4404e4 of _0x1f4002){let _0x3073c9=_0x5ddc5b(_0x4404e4)[_0x2fe1eb(0x206)](_0x2fe1eb(0x1c9)+'ial')[0x0][_0x2fe1eb(0x1e5)]['href'],_0x475398=_0x5ddc5b(_0x4404e4)[_0x2fe1eb(0x206)](_0x2fe1eb(0x1c9)+'ial')[0x0][_0x2fe1eb(0x1e5)][_0x2fe1eb(0x186)],_0x1f2157=_0x5ddc5b(_0x4404e4)[_0x2fe1eb(0x206)](_0x2fe1eb(0x1fb)+_0x2fe1eb(0x1a9)+'mg')[0x0]['attribs'][_0x2fe1eb(0x1b4)],_0xebdfd4='';const _0x3edbb8={};_0x3edbb8[_0x2fe1eb(0x1ed)]=_0x3073c9,_0x3edbb8[_0x2fe1eb(0x211)]=_0x475398,_0x3edbb8[_0x2fe1eb(0x1cb)]=_0x1f2157,_0x3edbb8[_0x2fe1eb(0x1da)+'s']=_0xebdfd4,_0x3dbb04[_0x2fe1eb(0x20e)](_0x3edbb8);}const _0x360f75={};return _0x360f75[_0x2fe1eb(0x1c3)]=_0x3dbb04,JSON[_0x2fe1eb(0x192)](_0x360f75);}export function __jsEvalReturn(){const _0x47981b=_0x8e3719,_0x335ab8={};return _0x335ab8[_0x47981b(0x1dd)]=init,_0x335ab8[_0x47981b(0x1fe)]=home,_0x335ab8[_0x47981b(0x1cd)]=homeVod,_0x335ab8[_0x47981b(0x200)]=category,_0x335ab8[_0x47981b(0x20a)]=detail,_0x335ab8[_0x47981b(0x18b)]=play,_0x335ab8['search']=search,_0x335ab8;}