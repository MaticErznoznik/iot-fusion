const a0_0x12ea=['exports','partialFit','return\x20/\x22\x20+\x20this\x20+\x20\x22/','save','constructor','structuralFactorPosition','options','./abstractIncrementalModel','test','value','predict','load','qminer','EMA'];(function(_0x453bd4,_0x12ea26){const _0x19f0e4=function(_0x153434){while(--_0x153434){_0x453bd4['push'](_0x453bd4['shift']());}},_0x3093ca=function(){const _0x317726={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x5ec0a8,_0x2ddfca,_0x150abf,_0x4e2806){_0x4e2806=_0x4e2806||{};let _0x5657cf=_0x2ddfca+'='+_0x150abf,_0x560b1b=0x0;for(let _0x167774=0x0,_0xa47979=_0x5ec0a8['length'];_0x167774<_0xa47979;_0x167774++){const _0x4d1a8f=_0x5ec0a8[_0x167774];_0x5657cf+=';\x20'+_0x4d1a8f;const _0x1689ce=_0x5ec0a8[_0x4d1a8f];_0x5ec0a8['push'](_0x1689ce),_0xa47979=_0x5ec0a8['length'],_0x1689ce!==!![]&&(_0x5657cf+='='+_0x1689ce);}_0x4e2806['cookie']=_0x5657cf;},'removeCookie':function(){return'dev';},'getCookie':function(_0x309628,_0x4ca4cd){_0x309628=_0x309628||function(_0x2f956b){return _0x2f956b;};const _0x5bd969=_0x309628(new RegExp('(?:^|;\x20)'+_0x4ca4cd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4d76fb=function(_0x276ace,_0x229f8a){_0x276ace(++_0x229f8a);};return _0x4d76fb(_0x19f0e4,_0x12ea26),_0x5bd969?decodeURIComponent(_0x5bd969[0x1]):undefined;}},_0x18e2ea=function(){const _0x651bf8=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x651bf8['test'](_0x317726['removeCookie']['toString']());};_0x317726['updateCookie']=_0x18e2ea;let _0x555fa7='';const _0x1e5d43=_0x317726['updateCookie']();if(!_0x1e5d43)_0x317726['setCookie'](['*'],'counter',0x1);else _0x1e5d43?_0x555fa7=_0x317726['getCookie'](null,'counter'):_0x317726['removeCookie']();};_0x3093ca();}(a0_0x12ea,0x187));const a0_0x19f0=function(_0x453bd4,_0x12ea26){_0x453bd4=_0x453bd4-0x0;let _0x19f0e4=a0_0x12ea[_0x453bd4];return _0x19f0e4;};const a0_0x150abf=function(){let _0x487149=!![];return function(_0x475474,_0x150eeb){const _0x349cd7=_0x487149?function(){if(_0x150eeb){const _0x253a30=_0x150eeb['apply'](_0x475474,arguments);return _0x150eeb=null,_0x253a30;}}:function(){};return _0x487149=![],_0x349cd7;};}(),a0_0x2ddfca=a0_0x150abf(this,function(){const _0x3d8453=function(){const _0x3209e5=_0x3d8453['constructor'](a0_0x19f0('0x3'))()[a0_0x19f0('0x5')]('^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}');return!_0x3209e5[a0_0x19f0('0x9')](a0_0x2ddfca);};return _0x3d8453();});a0_0x2ddfca();const qm=require(a0_0x19f0('0xd')),la=require('qminer')['la'],fs=require('fs'),AbstractIncrementalModel=require(a0_0x19f0('0x8'));class StructuredEMAIncrementalModel extends AbstractIncrementalModel{constructor(_0x185fc4,_0x3d9a4d){super(_0x185fc4,_0x3d9a4d),this['options']=_0x185fc4,this[a0_0x19f0('0xa')]=0x0;let _0x4ca4cd=_0x185fc4['N']!==undefined?_0x185fc4['N']:0x5;this['k']=0x2/(_0x4ca4cd+0x1),this[a0_0x19f0('0x0')]={};}[a0_0x19f0('0x2')](_0x1b399a,_0x457a37){const _0x9a20d0=_0x1b399a[this[a0_0x19f0('0x7')][a0_0x19f0('0x6')]];this['EMA'][_0x9a20d0]===undefined?this[a0_0x19f0('0x0')][_0x9a20d0]=_0x457a37:this[a0_0x19f0('0x0')][_0x9a20d0]=_0x457a37*this['k']+(0x1-this['k'])*this[a0_0x19f0('0x0')][_0x9a20d0];}[a0_0x19f0('0xb')](_0x54e56a){const _0xed1560=_0x54e56a[this[a0_0x19f0('0x7')]['structuralFactorPosition']];if(this[a0_0x19f0('0x0')][_0xed1560]===undefined)return null;return this[a0_0x19f0('0x0')][_0xed1560];}[a0_0x19f0('0x4')](_0x1b5d82){}[a0_0x19f0('0xc')](_0x3741f6){}}module[a0_0x19f0('0x1')]=StructuredEMAIncrementalModel;