'use strict';const _0x593b3b=_0xf8e9;(function(_0x40161b,_0x14332b){const _0x5ed31c=_0xf8e9,_0x310641=_0x40161b();while(!![]){try{const _0xc8c660=-parseInt(_0x5ed31c(0xdc))/0x1*(parseInt(_0x5ed31c(0xb9))/0x2)+parseInt(_0x5ed31c(0xbe))/0x3+-parseInt(_0x5ed31c(0xd6))/0x4+-parseInt(_0x5ed31c(0xc5))/0x5*(-parseInt(_0x5ed31c(0xbf))/0x6)+-parseInt(_0x5ed31c(0xb8))/0x7+parseInt(_0x5ed31c(0xbc))/0x8*(parseInt(_0x5ed31c(0xd9))/0x9)+parseInt(_0x5ed31c(0xc2))/0xa;if(_0xc8c660===_0x14332b)break;else _0x310641['push'](_0x310641['shift']());}catch(_0x3ff4b3){_0x310641['push'](_0x310641['shift']());}}}(_0x305a,0xecb34));function _0x305a(){const _0x13ea77=['setGlobalPrefix','4903716ymZsid','getInstance','initDatabase','9WWGIJM','@nestjs/common','SWAGGERPREFIX','1zdPQBM','AppModule','use','dotenv','log','服务已经启动,接口请访问:\x20http://localhost:','ValidationPipe','./app.module','useGlobalFilters','listen','Main','./common/filters/allExceptions.filter','static','4015270xjHcBh','2436014HWoLsX','defineProperty','swagger文档已经就绪,文档地址请访问:\x20http://localhost:','3750360VqOcDU','PORT','1522167PDRrLi','774294dzjoZS','config','templates/pages','27527880QGjcKa','Logger','public','10ngfSJZ','getHttpAdapter','express','NestFactory','APIPREFIX','enableCors','createSwagger','views','compression','hbs','./common/interceptors/transform.interceptor','timeout','TypeOrmQueryFailedFilter','./modules/database/initDatabase','@nestjs/core','AllExceptionsFilter'];_0x305a=function(){return _0x13ea77;};return _0x305a();}Object[_0x593b3b(0xba)](exports,'__esModule',{'value':!![]});const core_1=require(_0x593b3b(0xd3)),app_module_1=require(_0x593b3b(0xe3)),swagger_1=require('./common/swagger'),allExceptions_filter_1=require(_0x593b3b(0xe7)),typeOrmQueryFailed_filter_1=require('./common/filters/typeOrmQueryFailed.filter'),common_1=require(_0x593b3b(0xda)),transform_interceptor_1=require(_0x593b3b(0xcf)),express=require(_0x593b3b(0xc7)),Dotenv=require(_0x593b3b(0xdf));Dotenv[_0x593b3b(0xc0)]({'path':'.env'});const main_1=require('./config/main'),initDatabase_1=require(_0x593b3b(0xd2)),compression=require(_0x593b3b(0xcd));async function bootstrap(){const _0x54c561=_0x593b3b;await(0x0,initDatabase_1[_0x54c561(0xd8)])();const _0x4d1822=await core_1[_0x54c561(0xc8)]['create'](app_module_1[_0x54c561(0xdd)]);_0x4d1822[_0x54c561(0xde)](compression()),_0x4d1822[_0x54c561(0xde)]('/',express[_0x54c561(0xe8)](_0x54c561(0xc4))),_0x4d1822[_0x54c561(0xca)](),_0x4d1822[_0x54c561(0xd5)](main_1[_0x54c561(0xc9)]),_0x4d1822['useGlobalInterceptors'](new transform_interceptor_1['TransformInterceptor']()),_0x4d1822[_0x54c561(0xe4)](new typeOrmQueryFailed_filter_1[(_0x54c561(0xd1))]()),_0x4d1822['useGlobalFilters'](new allExceptions_filter_1[(_0x54c561(0xd4))]()),_0x4d1822['useGlobalPipes'](new common_1[(_0x54c561(0xe2))]()),_0x4d1822[_0x54c561(0xc6)]()['getInstance']()['set'](_0x54c561(0xcc),_0x54c561(0xc1)),_0x4d1822[_0x54c561(0xc6)]()[_0x54c561(0xd7)]()['set']('view\x20engine',_0x54c561(0xce)),(0x0,swagger_1[_0x54c561(0xcb)])(_0x4d1822);const _0xc4b0d0=await _0x4d1822[_0x54c561(0xe5)](main_1['PORT'],()=>{const _0x32c152=_0x54c561;common_1[_0x32c152(0xc3)][_0x32c152(0xe0)](_0x32c152(0xe1)+main_1[_0x32c152(0xbd)]+main_1[_0x32c152(0xc9)],'Main'),common_1[_0x32c152(0xc3)][_0x32c152(0xe0)](_0x32c152(0xbb)+main_1[_0x32c152(0xbd)]+main_1[_0x32c152(0xdb)],_0x32c152(0xe6));});_0xc4b0d0[_0x54c561(0xd0)]=0x5*0x3c*0x3e8;}function _0xf8e9(_0x4fc88d,_0x4ea6fa){const _0x305a90=_0x305a();return _0xf8e9=function(_0xf8e962,_0x56ad32){_0xf8e962=_0xf8e962-0xb8;let _0x32ddc9=_0x305a90[_0xf8e962];return _0x32ddc9;},_0xf8e9(_0x4fc88d,_0x4ea6fa);}bootstrap();