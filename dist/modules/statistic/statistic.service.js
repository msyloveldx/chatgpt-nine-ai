'use strict';const _0x30281b=_0x4306;function _0x50e1(){const _0x520250=['baiduSiteId','M.DD','getOwnPropertyDescriptor','orderBy','HttpStatus','getBaiduStatistics','design:paramtypes','setDate','@nestjs/common','andWhere','getBaseStatistic','&site_id=','get','configKey','getRawMany','ConfigEntity','../user/user.entity','DeductionKey','getChatStatistic','countNewDrawsToday','configVal','baiduToken','InjectRepository','请先配置百度统计siteId','__metadata','Injectable','where','map','获取百度统计数据失败','user','chatlog.createdAt\x20>=\x20:startDate','@nestjs/typeorm','CHAT_TYPE','now','decorate','90765biGxrh','push','&start_date=','chatLog.createdAt\x20<\x20:tomorrow','&method=','344184UpSDvp','__param','getTime','groupBy','请先配置百度统计accessToken','199892EAyIee','countChatsByTimeRange','StatisticService','https://openapi.baidu.com/rest/2.0/tongji/report/getData?access_token=','axios','&metrics=','date','../chatLog/chatLog.entity','../../common/utils/date','createQueryBuilder','find','function','chatLog.createdAt\x20>=\x20:today','countNewChatsToday','metadata','userEntity','7498810RRhXgb','ChatLogEntity','data','typeorm','length','chatLog.type\x20=\x20:type','user.createdAt\x20>=\x20:today','value','countDraws','chatLog','../globalConfig/config.entity','getBaiduVisit','chatlog','百度授权码过期','configEntity','16OZnUya','setHours','8pNCCLp','countNewUsersToday','countChats','chatLogEntity','BAD_REQUEST','YYYYMMDD','overview/getTimeTrendRpt','1377404QhrMVv','defineProperty','default','PAINT_TYPE','190iXiBPy','getDate','84185ifmZKg','126HrBiCF','result','getCount','object','Repository','HttpException','pv_count,visitor_count,ip_count,bounce_ratio,avg_visit_time','UserEntity','3168WDNrrk','countUsers','chatlog.type\x20=\x20:type','select','count','../../common/constants/balance.constant','formatDate','countDrawsByTimeRange'];_0x50e1=function(){return _0x520250;};return _0x50e1();}(function(_0x5b3d0a,_0x2c1db4){const _0x235afb=_0x4306,_0x307c5f=_0x5b3d0a();while(!![]){try{const _0x46211c=-parseInt(_0x235afb(0x21f))/0x1+parseInt(_0x235afb(0x21a))/0x2+parseInt(_0x235afb(0x1ea))/0x3*(-parseInt(_0x235afb(0x240))/0x4)+parseInt(_0x235afb(0x1e1))/0x5*(parseInt(_0x235afb(0x1e2))/0x6)+-parseInt(_0x235afb(0x1db))/0x7*(-parseInt(_0x235afb(0x23e))/0x8)+parseInt(_0x235afb(0x215))/0x9*(parseInt(_0x235afb(0x1df))/0xa)+-parseInt(_0x235afb(0x22f))/0xb;if(_0x46211c===_0x2c1db4)break;else _0x307c5f['push'](_0x307c5f['shift']());}catch(_0x13317f){_0x307c5f['push'](_0x307c5f['shift']());}}}(_0x50e1,0x3772a));var __decorate=this&&this['__decorate']||function(_0x5d74cd,_0x2b2501,_0xab4ba4,_0x5df738){const _0x43cb6d=_0x4306;var _0x3f10eb=arguments['length'],_0x157d3e=_0x3f10eb<0x3?_0x2b2501:_0x5df738===null?_0x5df738=Object[_0x43cb6d(0x1f4)](_0x2b2501,_0xab4ba4):_0x5df738,_0x3c6e29;if(typeof Reflect===_0x43cb6d(0x1e5)&&typeof Reflect[_0x43cb6d(0x214)]===_0x43cb6d(0x22a))_0x157d3e=Reflect['decorate'](_0x5d74cd,_0x2b2501,_0xab4ba4,_0x5df738);else{for(var _0x2af50d=_0x5d74cd[_0x43cb6d(0x233)]-0x1;_0x2af50d>=0x0;_0x2af50d--)if(_0x3c6e29=_0x5d74cd[_0x2af50d])_0x157d3e=(_0x3f10eb<0x3?_0x3c6e29(_0x157d3e):_0x3f10eb>0x3?_0x3c6e29(_0x2b2501,_0xab4ba4,_0x157d3e):_0x3c6e29(_0x2b2501,_0xab4ba4))||_0x157d3e;}return _0x3f10eb>0x3&&_0x157d3e&&Object[_0x43cb6d(0x1dc)](_0x2b2501,_0xab4ba4,_0x157d3e),_0x157d3e;},__metadata=this&&this[_0x30281b(0x20a)]||function(_0x156568,_0x149f88){const _0x471840=_0x30281b;if(typeof Reflect===_0x471840(0x1e5)&&typeof Reflect['metadata']===_0x471840(0x22a))return Reflect[_0x471840(0x22d)](_0x156568,_0x149f88);},__param=this&&this[_0x30281b(0x21b)]||function(_0x221afa,_0x1aa05d){return function(_0x556123,_0x5415f3){_0x1aa05d(_0x556123,_0x5415f3,_0x221afa);};};Object[_0x30281b(0x1dc)](exports,'__esModule',{'value':!![]}),exports[_0x30281b(0x221)]=void 0x0;const common_1=require(_0x30281b(0x1fa)),typeorm_1=require(_0x30281b(0x211)),user_entity_1=require(_0x30281b(0x202)),typeorm_2=require(_0x30281b(0x232)),chatLog_entity_1=require(_0x30281b(0x226)),balance_constant_1=require(_0x30281b(0x1ef)),date_1=require(_0x30281b(0x227)),axios_1=require(_0x30281b(0x223)),config_entity_1=require(_0x30281b(0x239));function _0x4306(_0x33dda5,_0x20a276){const _0x50e110=_0x50e1();return _0x4306=function(_0x4306a3,_0x576c78){_0x4306a3=_0x4306a3-0x1da;let _0x6a6cc3=_0x50e110[_0x4306a3];return _0x6a6cc3;},_0x4306(_0x33dda5,_0x20a276);}let StatisticService=class StatisticService{constructor(_0x139630,_0x1db1ef,_0x5c671a){const _0x2db331=_0x30281b;this[_0x2db331(0x22e)]=_0x139630,this[_0x2db331(0x243)]=_0x1db1ef,this['configEntity']=_0x5c671a;}async[_0x30281b(0x1fc)](){const _0x1619a8=_0x30281b,_0x4a7804=await this['countUsers'](),_0x9effe8=await this['countNewUsersToday'](),_0x36c8a9=await this[_0x1619a8(0x242)](),_0x185d7c=await this[_0x1619a8(0x22c)](),_0x56367c=await this[_0x1619a8(0x237)](),_0x3b4e97=await this[_0x1619a8(0x205)]();return{'userCount':_0x4a7804,'newUserCount':_0x9effe8,'chatCount':_0x36c8a9,'newChatCount':_0x185d7c,'drawCount':_0x56367c,'newDrawCount':_0x3b4e97};}async[_0x30281b(0x204)]({days:days=0x7}){const _0x559cbd=_0x30281b,_0x503473=await this[_0x559cbd(0x220)](days),_0x55fa55=await this[_0x559cbd(0x1f1)](days);return{'date':_0x503473[_0x559cbd(0x20d)](_0x3ef1e0=>_0x3ef1e0['date']),'chat':_0x503473[_0x559cbd(0x20d)](_0x1fb262=>_0x1fb262[_0x559cbd(0x236)]),'draw':_0x55fa55['map'](_0x2e49a4=>_0x2e49a4['value'])};}async[_0x30281b(0x23a)]({days:days=0x7}){const _0x3bd767=_0x30281b,_0x5d847c=await this[_0x3bd767(0x1f7)](days);return _0x5d847c;}async[_0x30281b(0x1eb)](){const _0x53ebeb=_0x30281b,_0x147182=await this[_0x53ebeb(0x22e)]['count']();return _0x147182;}async[_0x30281b(0x241)](){const _0x27d344=_0x30281b,_0x1c7818=new Date();_0x1c7818[_0x27d344(0x23f)](0x0,0x0,0x0,0x0);const _0x57647e=new Date(_0x1c7818[_0x27d344(0x21c)]()+0x18*0x3c*0x3c*0x3e8),_0x28ec23=this[_0x27d344(0x22e)]['createQueryBuilder'](_0x27d344(0x20f)),_0x43b907=await _0x28ec23[_0x27d344(0x20c)](_0x27d344(0x235),{'today':_0x1c7818})[_0x27d344(0x1fb)]('user.createdAt\x20<\x20:tomorrow',{'tomorrow':_0x57647e})[_0x27d344(0x1e4)]();return _0x43b907;}async[_0x30281b(0x242)](){const _0x1d49cd=_0x30281b,_0x50f05a=await this[_0x1d49cd(0x243)][_0x1d49cd(0x1ee)]({'where':{'type':balance_constant_1[_0x1d49cd(0x203)][_0x1d49cd(0x212)]}});return _0x50f05a;}async[_0x30281b(0x22c)](){const _0x5b7863=_0x30281b,_0x589d80=new Date();_0x589d80[_0x5b7863(0x23f)](0x0,0x0,0x0,0x0);const _0x27a8e3=new Date(_0x589d80[_0x5b7863(0x21c)]()+0x18*0x3c*0x3c*0x3e8),_0x4fdf74=this['chatLogEntity'][_0x5b7863(0x228)]('chatLog'),_0x279c75=await _0x4fdf74[_0x5b7863(0x20c)](_0x5b7863(0x234),{'type':balance_constant_1[_0x5b7863(0x203)][_0x5b7863(0x212)]})[_0x5b7863(0x1fb)](_0x5b7863(0x22b),{'today':_0x589d80})[_0x5b7863(0x1fb)](_0x5b7863(0x218),{'tomorrow':_0x27a8e3})['getCount']();return _0x279c75;}async[_0x30281b(0x237)](){const _0x2b0dab=_0x30281b,_0x22cde2=await this[_0x2b0dab(0x243)]['count']({'where':{'type':balance_constant_1[_0x2b0dab(0x203)][_0x2b0dab(0x1de)]}});return _0x22cde2;}async[_0x30281b(0x205)](){const _0x185157=_0x30281b,_0x167cfe=new Date();_0x167cfe[_0x185157(0x23f)](0x0,0x0,0x0,0x0);const _0x173614=new Date(_0x167cfe[_0x185157(0x21c)]()+0x18*0x3c*0x3c*0x3e8),_0x2f48e4=this[_0x185157(0x243)][_0x185157(0x228)](_0x185157(0x238)),_0x55e9ed=await _0x2f48e4[_0x185157(0x20c)]('chatLog.type\x20=\x20:type',{'type':balance_constant_1['DeductionKey']['PAINT_TYPE']})[_0x185157(0x1fb)](_0x185157(0x22b),{'today':_0x167cfe})['andWhere']('chatLog.createdAt\x20<\x20:tomorrow',{'tomorrow':_0x173614})[_0x185157(0x1e4)]();return _0x55e9ed;}async[_0x30281b(0x220)](_0x594e9b){const _0xb5370b=_0x30281b;var _0x3390ee,_0x36c173;const _0x5d6a29=new Date();_0x5d6a29[_0xb5370b(0x23f)](0x0,0x0,0x0,0x0);const _0x113770=new Date(_0x5d6a29[_0xb5370b(0x21c)]()-(_0x594e9b-0x1)*0x18*0x3c*0x3c*0x3e8),_0x6ca5d7=this[_0xb5370b(0x243)][_0xb5370b(0x228)](_0xb5370b(0x23b)),_0x2fc667=await _0x6ca5d7[_0xb5370b(0x1ed)]('DATE(chatlog.createdAt)\x20as\x20date,\x20COUNT(*)\x20as\x20count')[_0xb5370b(0x20c)]('chatlog.type\x20=\x20:type',{'type':balance_constant_1[_0xb5370b(0x203)][_0xb5370b(0x212)]})[_0xb5370b(0x1fb)](_0xb5370b(0x210),{'startDate':_0x113770})[_0xb5370b(0x21d)](_0xb5370b(0x225))[_0xb5370b(0x1f5)](_0xb5370b(0x225))[_0xb5370b(0x200)](),_0x1199ae=[],_0x4b9e53=_0x113770;for(let _0x3db8c0=0x0;_0x3db8c0<_0x594e9b;_0x3db8c0++){const _0x28466f=(0x0,date_1[_0xb5370b(0x1f0)])(new Date(_0x4b9e53),_0xb5370b(0x1f3)),_0x3719da=(_0x36c173=(_0x3390ee=_0x2fc667[_0xb5370b(0x229)](_0x353240=>(0x0,date_1['formatDate'])(new Date(_0x353240[_0xb5370b(0x225)]),'M.DD')===_0x28466f))===null||_0x3390ee===void 0x0?void 0x0:_0x3390ee[_0xb5370b(0x1ee)])!==null&&_0x36c173!==void 0x0?_0x36c173:0x0;_0x3719da>0x0?_0x1199ae['push']({'date':_0x28466f,'value':Number(_0x3719da)}):_0x1199ae[_0xb5370b(0x216)]({'date':_0x28466f,'value':0x0}),_0x4b9e53[_0xb5370b(0x1f9)](_0x4b9e53[_0xb5370b(0x1e0)]()+0x1);}return _0x1199ae;}async[_0x30281b(0x1f1)](_0x16fb99){const _0x3452e3=_0x30281b;var _0x29e2be,_0x1f16ff;const _0x50d840=new Date();_0x50d840[_0x3452e3(0x23f)](0x0,0x0,0x0,0x0);const _0x80effe=new Date(_0x50d840[_0x3452e3(0x21c)]()-(_0x16fb99-0x1)*0x18*0x3c*0x3c*0x3e8),_0x3b0e4b=this[_0x3452e3(0x243)]['createQueryBuilder']('chatlog'),_0x19400a=await _0x3b0e4b[_0x3452e3(0x1ed)]('DATE(chatlog.createdAt)\x20as\x20date,\x20COUNT(*)\x20as\x20count')[_0x3452e3(0x20c)](_0x3452e3(0x1ec),{'type':balance_constant_1['DeductionKey'][_0x3452e3(0x1de)]})[_0x3452e3(0x1fb)](_0x3452e3(0x210),{'startDate':_0x80effe})[_0x3452e3(0x21d)](_0x3452e3(0x225))[_0x3452e3(0x1f5)](_0x3452e3(0x225))['getRawMany'](),_0x4c8624=[],_0x4a79f5=_0x80effe;for(let _0xad2056=0x0;_0xad2056<_0x16fb99;_0xad2056++){const _0x103826=(0x0,date_1[_0x3452e3(0x1f0)])(new Date(_0x4a79f5),'M.DD'),_0x2f5edb=(_0x1f16ff=(_0x29e2be=_0x19400a[_0x3452e3(0x229)](_0x5f4b8d=>(0x0,date_1['formatDate'])(new Date(_0x5f4b8d[_0x3452e3(0x225)]),_0x3452e3(0x1f3))===_0x103826))===null||_0x29e2be===void 0x0?void 0x0:_0x29e2be['count'])!==null&&_0x1f16ff!==void 0x0?_0x1f16ff:0x0;_0x2f5edb>0x0?_0x4c8624[_0x3452e3(0x216)]({'date':_0x103826,'value':Number(_0x2f5edb)}):_0x4c8624[_0x3452e3(0x216)]({'date':_0x103826,'value':0x0}),_0x4a79f5[_0x3452e3(0x1f9)](_0x4a79f5[_0x3452e3(0x1e0)]()+0x1);}return _0x4c8624;}async['getBaiduStatistics'](_0x4e682e){const _0xe10ec0=_0x30281b;var _0x373459,_0x428146;const _0x17fc2d=(0x0,date_1[_0xe10ec0(0x1f0)])(new Date(),_0xe10ec0(0x245)),_0x124cee=(0x0,date_1['formatDate'])(new Date(Date[_0xe10ec0(0x213)]()-Number(_0x4e682e-0x1)*0x18*0x3c*0x3c*0x3e8),_0xe10ec0(0x245)),_0x3e1788=_0xe10ec0(0x1e8),_0x523486=_0xe10ec0(0x1da),_0x12fec1=await this[_0xe10ec0(0x23d)][_0xe10ec0(0x229)]({'where':{'configKey':(0x0,typeorm_2['In'])([_0xe10ec0(0x207),_0xe10ec0(0x1f2)])}}),_0x286716=(_0x373459=_0x12fec1['find'](_0x122c5a=>_0x122c5a[_0xe10ec0(0x1ff)]===_0xe10ec0(0x1f2)))===null||_0x373459===void 0x0?void 0x0:_0x373459['configVal'],_0x44d85c=(_0x428146=_0x12fec1[_0xe10ec0(0x229)](_0x338672=>_0x338672[_0xe10ec0(0x1ff)]===_0xe10ec0(0x207)))===null||_0x428146===void 0x0?void 0x0:_0x428146[_0xe10ec0(0x206)];if(!_0x286716)throw new common_1[(_0xe10ec0(0x1e7))](_0xe10ec0(0x209),common_1[_0xe10ec0(0x1f6)]['BAD_REQUEST']);if(!_0x44d85c)throw new common_1['HttpException'](_0xe10ec0(0x21e),common_1['HttpStatus']['BAD_REQUEST']);const _0x369c2f=_0xe10ec0(0x222)+_0x44d85c+_0xe10ec0(0x1fd)+_0x286716+_0xe10ec0(0x219)+_0x523486+_0xe10ec0(0x217)+_0x124cee+'&end_date='+_0x17fc2d+_0xe10ec0(0x224)+_0x3e1788,_0x45504c=await axios_1[_0xe10ec0(0x1dd)][_0xe10ec0(0x1fe)](_0x369c2f),{error_code:_0x476d61,message:_0x3ae7cc}=_0x45504c[_0xe10ec0(0x231)];if(_0x476d61===0x6f)throw new common_1[(_0xe10ec0(0x1e7))](_0x3ae7cc||_0xe10ec0(0x23c),common_1['HttpStatus'][_0xe10ec0(0x244)]);if(_0x476d61&&_0x476d61!==0xc8)throw new common_1[(_0xe10ec0(0x1e7))](_0x3ae7cc||_0xe10ec0(0x20e),common_1['HttpStatus'][_0xe10ec0(0x244)]);return _0x45504c['data'][_0xe10ec0(0x1e3)];}};StatisticService=__decorate([(0x0,common_1[_0x30281b(0x20b)])(),__param(0x0,(0x0,typeorm_1['InjectRepository'])(user_entity_1[_0x30281b(0x1e9)])),__param(0x1,(0x0,typeorm_1[_0x30281b(0x208)])(chatLog_entity_1[_0x30281b(0x230)])),__param(0x2,(0x0,typeorm_1[_0x30281b(0x208)])(config_entity_1[_0x30281b(0x201)])),__metadata(_0x30281b(0x1f8),[typeorm_2[_0x30281b(0x1e6)],typeorm_2[_0x30281b(0x1e6)],typeorm_2[_0x30281b(0x1e6)]])],StatisticService),exports[_0x30281b(0x221)]=StatisticService;