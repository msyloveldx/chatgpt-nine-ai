'use strict';var _0x25cc3e=_0x458c;function _0x1647(){var _0x100b55=['Column','9134696RhMmnZ','bad_words','length','Entity','decorate','142fZeCIR','__esModule','status','word','39192TuOyiw','46484937cLCVbe','function','BadWordsEntity','design:type','1179299HlpSIl','object','3565OZsKNk','prototype','__decorate','../../common/entity/baseEntity','2662450CTzRzo','defineProperty','6677800YBajeI','metadata','10524BGASFY','BaseEntity'];_0x1647=function(){return _0x100b55;};return _0x1647();}(function(_0x85726b,_0x17a184){var _0xd544bc=_0x458c,_0x316b5a=_0x85726b();while(!![]){try{var _0x2682e4=-parseInt(_0xd544bc(0x85))/0x1+parseInt(_0xd544bc(0x7c))/0x2*(-parseInt(_0xd544bc(0x80))/0x3)+-parseInt(_0xd544bc(0x8d))/0x4+parseInt(_0xd544bc(0x87))/0x5*(-parseInt(_0xd544bc(0x8f))/0x6)+-parseInt(_0xd544bc(0x8b))/0x7+parseInt(_0xd544bc(0x77))/0x8+parseInt(_0xd544bc(0x81))/0x9;if(_0x2682e4===_0x17a184)break;else _0x316b5a['push'](_0x316b5a['shift']());}catch(_0x26d31c){_0x316b5a['push'](_0x316b5a['shift']());}}}(_0x1647,0xdba01));var __decorate=this&&this[_0x25cc3e(0x89)]||function(_0x16032d,_0x3860d1,_0x528645,_0x3be5ea){var _0x1d207a=_0x25cc3e,_0xa8313a=arguments['length'],_0x35f2cf=_0xa8313a<0x3?_0x3860d1:_0x3be5ea===null?_0x3be5ea=Object['getOwnPropertyDescriptor'](_0x3860d1,_0x528645):_0x3be5ea,_0x2e9855;if(typeof Reflect===_0x1d207a(0x86)&&typeof Reflect[_0x1d207a(0x7b)]===_0x1d207a(0x82))_0x35f2cf=Reflect[_0x1d207a(0x7b)](_0x16032d,_0x3860d1,_0x528645,_0x3be5ea);else{for(var _0x310294=_0x16032d[_0x1d207a(0x79)]-0x1;_0x310294>=0x0;_0x310294--)if(_0x2e9855=_0x16032d[_0x310294])_0x35f2cf=(_0xa8313a<0x3?_0x2e9855(_0x35f2cf):_0xa8313a>0x3?_0x2e9855(_0x3860d1,_0x528645,_0x35f2cf):_0x2e9855(_0x3860d1,_0x528645))||_0x35f2cf;}return _0xa8313a>0x3&&_0x35f2cf&&Object['defineProperty'](_0x3860d1,_0x528645,_0x35f2cf),_0x35f2cf;},__metadata=this&&this['__metadata']||function(_0x1c5d40,_0x228fc8){var _0x77579c=_0x25cc3e;if(typeof Reflect===_0x77579c(0x86)&&typeof Reflect[_0x77579c(0x8e)]===_0x77579c(0x82))return Reflect[_0x77579c(0x8e)](_0x1c5d40,_0x228fc8);};Object[_0x25cc3e(0x8c)](exports,_0x25cc3e(0x7d),{'value':!![]}),exports[_0x25cc3e(0x83)]=void 0x0;const typeorm_1=require('typeorm'),baseEntity_1=require(_0x25cc3e(0x8a));function _0x458c(_0x52c14f,_0xfb5056){var _0x164741=_0x1647();return _0x458c=function(_0x458c27,_0x43bd33){_0x458c27=_0x458c27-0x75;var _0x36ea22=_0x164741[_0x458c27];return _0x36ea22;},_0x458c(_0x52c14f,_0xfb5056);}let BadWordsEntity=class BadWordsEntity extends baseEntity_1[_0x25cc3e(0x75)]{};__decorate([(0x0,typeorm_1[_0x25cc3e(0x76)])({'length':0x14,'comment':'敏感词'}),__metadata('design:type',String)],BadWordsEntity[_0x25cc3e(0x88)],_0x25cc3e(0x7f),void 0x0),__decorate([(0x0,typeorm_1[_0x25cc3e(0x76)])({'default':0x1,'comment':'敏感词开启状态'}),__metadata(_0x25cc3e(0x84),Number)],BadWordsEntity['prototype'],_0x25cc3e(0x7e),void 0x0),__decorate([(0x0,typeorm_1[_0x25cc3e(0x76)])({'default':0x0,'comment':'敏感词触发次数'}),__metadata(_0x25cc3e(0x84),Number)],BadWordsEntity[_0x25cc3e(0x88)],'count',void 0x0),BadWordsEntity=__decorate([(0x0,typeorm_1[_0x25cc3e(0x7a)])({'name':_0x25cc3e(0x78)})],BadWordsEntity),exports[_0x25cc3e(0x83)]=BadWordsEntity;