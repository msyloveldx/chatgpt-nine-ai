'use strict';const _0x490928=_0x5cf0;(function(_0x147d56,_0x59e1de){const _0x1b5899=_0x5cf0,_0x513c95=_0x147d56();while(!![]){try{const _0x18b289=-parseInt(_0x1b5899(0x112))/0x1+parseInt(_0x1b5899(0x107))/0x2*(parseInt(_0x1b5899(0x12b))/0x3)+-parseInt(_0x1b5899(0xf0))/0x4+-parseInt(_0x1b5899(0xff))/0x5+-parseInt(_0x1b5899(0xf5))/0x6+parseInt(_0x1b5899(0x104))/0x7+parseInt(_0x1b5899(0x123))/0x8;if(_0x18b289===_0x59e1de)break;else _0x513c95['push'](_0x513c95['shift']());}catch(_0x3d1eae){_0x513c95['push'](_0x513c95['shift']());}}}(_0x46b4,0xb6039));function _0x5cf0(_0x305dec,_0x309404){const _0x46b46a=_0x46b4();return _0x5cf0=function(_0x5cf085,_0x277cbf){_0x5cf085=_0x5cf085-0xe5;let _0x387e3f=_0x46b46a[_0x5cf085];return _0x387e3f;},_0x5cf0(_0x305dec,_0x309404);}var __decorate=this&&this[_0x490928(0x106)]||function(_0x2c0025,_0x3d7b99,_0x10bfa9,_0x59ccf1){const _0x53ff38=_0x490928;var _0x432e65=arguments[_0x53ff38(0x10c)],_0xfc1adf=_0x432e65<0x3?_0x3d7b99:_0x59ccf1===null?_0x59ccf1=Object[_0x53ff38(0xfe)](_0x3d7b99,_0x10bfa9):_0x59ccf1,_0x4bee21;if(typeof Reflect==='object'&&typeof Reflect[_0x53ff38(0x11d)]===_0x53ff38(0x10d))_0xfc1adf=Reflect['decorate'](_0x2c0025,_0x3d7b99,_0x10bfa9,_0x59ccf1);else{for(var _0x45b4e1=_0x2c0025[_0x53ff38(0x10c)]-0x1;_0x45b4e1>=0x0;_0x45b4e1--)if(_0x4bee21=_0x2c0025[_0x45b4e1])_0xfc1adf=(_0x432e65<0x3?_0x4bee21(_0xfc1adf):_0x432e65>0x3?_0x4bee21(_0x3d7b99,_0x10bfa9,_0xfc1adf):_0x4bee21(_0x3d7b99,_0x10bfa9))||_0xfc1adf;}return _0x432e65>0x3&&_0xfc1adf&&Object[_0x53ff38(0x108)](_0x3d7b99,_0x10bfa9,_0xfc1adf),_0xfc1adf;},__metadata=this&&this['__metadata']||function(_0x535fd7,_0x19ba4a){const _0x392a22=_0x490928;if(typeof Reflect===_0x392a22(0x100)&&typeof Reflect['metadata']==='function')return Reflect[_0x392a22(0x12c)](_0x535fd7,_0x19ba4a);},__param=this&&this[_0x490928(0x102)]||function(_0x4a5fc1,_0x5ab665){return function(_0x191c9d,_0x1bd50f){_0x5ab665(_0x191c9d,_0x1bd50f,_0x4a5fc1);};};Object['defineProperty'](exports,'__esModule',{'value':!![]}),exports[_0x490928(0x126)]=void 0x0;const jwtAuth_guard_1=require(_0x490928(0x109)),swagger_1=require(_0x490928(0x128)),chatgpt_service_1=require('./chatgpt.service'),common_1=require(_0x490928(0x122)),chatProcess_dto_1=require('./dto/chatProcess.dto'),chatDraw_dto_1=require(_0x490928(0x113)),addKey_dto_1=require(_0x490928(0x116)),getKeyList_dto_1=require(_0x490928(0x12f)),updateKey_dto_1=require(_0x490928(0xfd)),addWhiteUser_dto_1=require(_0x490928(0xf8)),getWhiteUserList_dto_1=require(_0x490928(0xf7)),updateWhiteUser_dto_1=require(_0x490928(0x10e)),adminAuth_guard_1=require(_0x490928(0xe9)),superAuth_guard_1=require(_0x490928(0xee));let ChatgptController=class ChatgptController{constructor(_0x475082){this['chatgptService']=_0x475082;}[_0x490928(0x127)](_0xf682db,_0x4c1e2d,_0x5cd0ea){const _0x374d6d=_0x490928;return this['chatgptService'][_0x374d6d(0x127)](_0xf682db,_0x4c1e2d,_0x5cd0ea);}async['draw'](_0x248dd1,_0x159edf){const _0x11fbf2=_0x490928;return await this[_0x11fbf2(0xfb)][_0x11fbf2(0x105)](_0x248dd1,_0x159edf);}['getConfig'](){const _0x12b3d9=_0x490928;return this[_0x12b3d9(0xfb)][_0x12b3d9(0x12e)]();}async[_0x490928(0x103)](_0x2fddb1){const _0x201eb7=_0x490928;return await this[_0x201eb7(0xfb)][_0x201eb7(0x103)](_0x2fddb1);}async['getKeyList'](_0x77036a,_0x11511b){const _0x100be0=_0x490928;return await this[_0x100be0(0xfb)][_0x100be0(0xe7)](_0x77036a,_0x11511b);}async['getGptModelList'](_0x308e0f){const _0x38b853=_0x490928;return await this[_0x38b853(0xfb)][_0x38b853(0x120)](_0x308e0f);}async[_0x490928(0xea)](_0x2684f2){const _0x35a225=_0x490928;return await this[_0x35a225(0xfb)][_0x35a225(0xea)](_0x2684f2);}async[_0x490928(0x125)](_0x342d3f){const _0x1683aa=_0x490928;return await this[_0x1683aa(0xfb)][_0x1683aa(0x125)](_0x342d3f);}async[_0x490928(0xe5)](_0x2a8bff){const _0x224a7f=_0x490928;return this[_0x224a7f(0xfb)]['addWhiteUser'](_0x2a8bff);}async[_0x490928(0x124)](_0x215bc2){const _0x3d4878=_0x490928;return this['chatgptService'][_0x3d4878(0x124)](_0x215bc2);}async[_0x490928(0xec)](_0x5396c2,_0x547c5a){const _0x5cb06b=_0x490928;return this[_0x5cb06b(0xfb)][_0x5cb06b(0xec)](_0x5396c2,_0x547c5a);}};function _0x46b4(){const _0x1febcd=['ApiTags','16587pPxALY','metadata','查询key的列表','chatConfig','./dto/getKeyList.dto','ApiBearerAuth','addWhiteUser','SuperAuthGuard','getKeyList','gpt聊天对话','../../common/auth/adminAuth.guard','addKey','GetKeyListDto','getWhiteListUser','getConfig','../../common/auth/superAuth.guard','design:type','5399680Begefc','添加白名单用户','AdminAuthGuard','userWhiteList','prototype','3262746UCUpGW','Body','./dto/getWhiteUserList.dto','./dto/addWhiteUser.dto','获取key支持的model列表','design:returntype','chatgptService','JwtAuthGuard','./dto/updateKey.dto','getOwnPropertyDescriptor','5106860vGJtUz','object','添加key','__param','getKeyDetail','7697396nRIIWs','draw','__decorate','212nTqKHl','defineProperty','./../../common/auth/jwtAuth.guard','UseGuards','keyDetail','length','function','./dto/updateWhiteUser.dto','gpt配置信息','Req','Query','458937KLWhzv','./dto/chatDraw.dto','design:paramtypes','keyModelList','./dto/addKey.dto','UpdateKeyDto','修改白名单用户','Controller','查询白名单用户','Res','Post','decorate','Get','key','getGptModelList','chatgpt','@nestjs/common','19470776sXwxUg','updateWhiteUser','updateKey','ChatgptController','chatProcess','@nestjs/swagger','ApiOperation'];_0x46b4=function(){return _0x1febcd;};return _0x46b4();}__decorate([(0x0,common_1['Post'])('chat-process'),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0xe8)}),(0x0,common_1[_0x490928(0x10a)])(jwtAuth_guard_1[_0x490928(0xfc)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0xf6)])()),__param(0x1,(0x0,common_1[_0x490928(0x110)])()),__param(0x2,(0x0,common_1[_0x490928(0x11b)])()),__metadata('design:type',Function),__metadata(_0x490928(0x114),[chatProcess_dto_1['ChatProcessDto'],Object,Object]),__metadata(_0x490928(0xfa),void 0x0)],ChatgptController[_0x490928(0xf4)],_0x490928(0x127),null),__decorate([(0x0,common_1[_0x490928(0x11c)])('chat-draw'),(0x0,swagger_1['ApiOperation'])({'summary':'gpt绘画'}),(0x0,common_1[_0x490928(0x10a)])(jwtAuth_guard_1[_0x490928(0xfc)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1['Body'])()),__param(0x1,(0x0,common_1[_0x490928(0x110)])()),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[chatDraw_dto_1['ChatDrawDto'],Object]),__metadata(_0x490928(0xfa),Promise)],ChatgptController[_0x490928(0xf4)],_0x490928(0x105),null),__decorate([(0x0,common_1[_0x490928(0x11e)])('config'),(0x0,swagger_1['ApiOperation'])({'summary':_0x490928(0x10f)}),__metadata(_0x490928(0xef),Function),__metadata('design:paramtypes',[]),__metadata(_0x490928(0xfa),void 0x0)],ChatgptController['prototype'],_0x490928(0xed),null),__decorate([(0x0,common_1['Get'])(_0x490928(0x10b)),(0x0,swagger_1[_0x490928(0x129)])({'summary':'gpt\x20key详情'}),__param(0x0,(0x0,common_1[_0x490928(0x111)])('key')),__metadata('design:type',Function),__metadata('design:paramtypes',[String]),__metadata(_0x490928(0xfa),Promise)],ChatgptController['prototype'],_0x490928(0x103),null),__decorate([(0x0,common_1[_0x490928(0x11e)])('keyList'),(0x0,swagger_1['ApiOperation'])({'summary':_0x490928(0x12d)}),(0x0,common_1[_0x490928(0x10a)])(adminAuth_guard_1[_0x490928(0xf2)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0x111)])()),__param(0x1,(0x0,common_1[_0x490928(0x110)])()),__metadata('design:type',Function),__metadata(_0x490928(0x114),[getKeyList_dto_1[_0x490928(0xeb)],Object]),__metadata(_0x490928(0xfa),Promise)],ChatgptController['prototype'],'getKeyList',null),__decorate([(0x0,common_1['Get'])(_0x490928(0x115)),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0xf9)}),(0x0,common_1[_0x490928(0x10a)])(adminAuth_guard_1[_0x490928(0xf2)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1['Query'])(_0x490928(0x11f))),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[String]),__metadata('design:returntype',Promise)],ChatgptController[_0x490928(0xf4)],_0x490928(0x120),null),__decorate([(0x0,common_1[_0x490928(0x11c)])(_0x490928(0xea)),(0x0,swagger_1[_0x490928(0x129)])({'summary':'添加key'}),(0x0,common_1[_0x490928(0x10a)])(superAuth_guard_1[_0x490928(0xe6)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0xf6)])()),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[addKey_dto_1['AddKeyDto']]),__metadata(_0x490928(0xfa),Promise)],ChatgptController[_0x490928(0xf4)],_0x490928(0xea),null),__decorate([(0x0,common_1[_0x490928(0x11c)])(_0x490928(0x125)),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0x101)}),(0x0,common_1[_0x490928(0x10a)])(superAuth_guard_1[_0x490928(0xe6)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0xf6)])()),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[updateKey_dto_1[_0x490928(0x117)]]),__metadata(_0x490928(0xfa),Promise)],ChatgptController['prototype'],_0x490928(0x125),null),__decorate([(0x0,common_1['Post'])(_0x490928(0xe5)),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0xf1)}),(0x0,common_1[_0x490928(0x10a)])(superAuth_guard_1[_0x490928(0xe6)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0xf6)])()),__metadata(_0x490928(0xef),Function),__metadata('design:paramtypes',[addWhiteUser_dto_1['AddWhiteUserDto']]),__metadata(_0x490928(0xfa),Promise)],ChatgptController[_0x490928(0xf4)],'addWhiteUser',null),__decorate([(0x0,common_1[_0x490928(0x11c)])('updateWhiteUser'),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0x118)}),(0x0,common_1[_0x490928(0x10a)])(superAuth_guard_1[_0x490928(0xe6)]),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1[_0x490928(0xf6)])()),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[updateWhiteUser_dto_1['UpdateWhiteUserDto']]),__metadata(_0x490928(0xfa),Promise)],ChatgptController[_0x490928(0xf4)],_0x490928(0x124),null),__decorate([(0x0,common_1['Get'])(_0x490928(0xf3)),(0x0,swagger_1[_0x490928(0x129)])({'summary':_0x490928(0x11a)}),(0x0,common_1[_0x490928(0x10a)])(adminAuth_guard_1['AdminAuthGuard']),(0x0,swagger_1[_0x490928(0x130)])(),__param(0x0,(0x0,common_1['Query'])()),__param(0x1,(0x0,common_1[_0x490928(0x110)])()),__metadata(_0x490928(0xef),Function),__metadata(_0x490928(0x114),[getWhiteUserList_dto_1['GetWhiteUserListDto'],Object]),__metadata(_0x490928(0xfa),Promise)],ChatgptController['prototype'],'getWhiteListUser',null),ChatgptController=__decorate([(0x0,swagger_1[_0x490928(0x12a)])(_0x490928(0x121)),(0x0,common_1[_0x490928(0x119)])(_0x490928(0x121)),__metadata('design:paramtypes',[chatgpt_service_1['ChatgptService']])],ChatgptController),exports[_0x490928(0x126)]=ChatgptController;