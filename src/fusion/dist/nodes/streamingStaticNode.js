var _0x5b12=['buffer','push','processRecordCb','parent','exports','./streamingNode.js','base','createStore','nodeId','Time','datetime','float','dayBeforeHoliday','dayOfWeek','holiday','monthOfYear','weekEnd','rawstore','store','createAggregates','aggrConfigId','postConstructor','timestamp','timeOfDay','dayAfterHoliday','dayOfMonth','undefined','rawRecord','newRecord','triggerOnAddCallbacks','stampm','dayOfYear'];(function(_0x32c6fa,_0x552733){var _0x18e137=function(_0x168352){while(--_0x168352){_0x32c6fa['push'](_0x32c6fa['shift']());}};var _0xa8a714=function(){var _0x2bc767={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x269c3b,_0x4c02f9,_0xdc43e6,_0x2bf256){_0x2bf256=_0x2bf256||{};var _0x3312c7=_0x4c02f9+'='+_0xdc43e6;var _0x48f3da=0x0;for(var _0x48f3da=0x0,_0x4c6699=_0x269c3b['length'];_0x48f3da<_0x4c6699;_0x48f3da++){var _0x960312=_0x269c3b[_0x48f3da];_0x3312c7+=';\x20'+_0x960312;var _0x2b95e0=_0x269c3b[_0x960312];_0x269c3b['push'](_0x2b95e0);_0x4c6699=_0x269c3b['length'];if(_0x2b95e0!==!![]){_0x3312c7+='='+_0x2b95e0;}}_0x2bf256['cookie']=_0x3312c7;},'removeCookie':function(){return'dev';},'getCookie':function(_0x148db8,_0x527213){_0x148db8=_0x148db8||function(_0x37165b){return _0x37165b;};var _0x1f4065=_0x148db8(new RegExp('(?:^|;\x20)'+_0x527213['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x266f43=function(_0x4bec60,_0x2cd3d5){_0x4bec60(++_0x2cd3d5);};_0x266f43(_0x18e137,_0x552733);return _0x1f4065?decodeURIComponent(_0x1f4065[0x1]):undefined;}};var _0x17911e=function(){var _0x53c517=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x53c517['test'](_0x2bc767['removeCookie']['toString']());};_0x2bc767['updateCookie']=_0x17911e;var _0x33c813='';var _0x4c2221=_0x2bc767['updateCookie']();if(!_0x4c2221){_0x2bc767['setCookie'](['*'],'counter',0x1);}else if(_0x4c2221){_0x33c813=_0x2bc767['getCookie'](null,'counter');}else{_0x2bc767['removeCookie']();}};_0xa8a714();}(_0x5b12,0x145));var _0x1001=function(_0x34fd85,_0x3060e1){_0x34fd85=_0x34fd85-0x0;var _0x1e8c62=_0x5b12[_0x34fd85];return _0x1e8c62;};var _0x5a2acb=function(){var _0x143edc=!![];return function(_0x477781,_0x27b42f){var _0x1ebaa5=_0x143edc?function(){if(_0x27b42f){var _0x501119=_0x27b42f['apply'](_0x477781,arguments);_0x27b42f=null;return _0x501119;}}:function(){};_0x143edc=![];return _0x1ebaa5;};}();var _0x55d9da=_0x5a2acb(this,function(){var _0x2fbeca=function(){return'\x64\x65\x76';},_0x302170=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x3f855b=function(){var _0x2e1d0e=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x2e1d0e['\x74\x65\x73\x74'](_0x2fbeca['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x4a0d87=function(){var _0x1725a4=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x1725a4['\x74\x65\x73\x74'](_0x302170['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x36a12e=function(_0x3adbd4){var _0x1ac61c=~-0x1>>0x1+0xff%0x0;if(_0x3adbd4['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x1ac61c)){_0x1d98dd(_0x3adbd4);}};var _0x1d98dd=function(_0x455447){var _0xf707e7=~-0x4>>0x1+0xff%0x0;if(_0x455447['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0xf707e7){_0x36a12e(_0x455447);}};if(!_0x3f855b()){if(!_0x4a0d87()){_0x36a12e('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x36a12e('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x36a12e('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0x55d9da();const streamingNode=require(_0x1001('0x0'));class streamingStaticNode extends streamingNode{constructor(_0x1d80d6,_0x177a2f,_0x52f4d9,_0x264e3d,_0x35cd68,_0x13a119,_0x1963a3){super(_0x1d80d6,_0x177a2f,_0x52f4d9,_0x264e3d,_0x35cd68,_0x13a119,_0x1963a3);this[_0x1001('0x1')][_0x1001('0x2')]({'name':this[_0x1001('0x3')],'fields':[{'name':_0x1001('0x4'),'type':_0x1001('0x5')},{'name':'dayAfterHoliday','type':_0x1001('0x6')},{'name':_0x1001('0x7'),'type':_0x1001('0x6')},{'name':'dayOfMonth','type':_0x1001('0x6')},{'name':_0x1001('0x8'),'type':_0x1001('0x6')},{'name':'dayOfYear','type':'float'},{'name':_0x1001('0x9'),'type':'float'},{'name':_0x1001('0xa'),'type':'float'},{'name':_0x1001('0xb'),'type':'float'}]});this[_0x1001('0xc')]=this[_0x1001('0x1')][_0x1001('0xd')](this['nodeId']);super[_0x1001('0xe')](_0x264e3d[_0x52f4d9[_0x1001('0xf')]]);super[_0x1001('0x10')]();}['processRecord'](_0x66d993){let _0x1902a2=_0x66d993[_0x1001('0x11')];let _0x5dee97=_0x66d993[_0x1001('0x12')];let _0x27fbd4=_0x66d993[_0x1001('0x7')];let _0x17b4e6=_0x66d993[_0x1001('0x13')];let _0x75fb72=_0x66d993[_0x1001('0x14')];let _0x158bd9=_0x66d993['dayOfWeek'];let _0x55d532=_0x66d993['dayOfYear'];let _0x208c9c=_0x66d993[_0x1001('0x9')];let _0x5dbd16=_0x66d993[_0x1001('0xa')];let _0x15ee68=_0x66d993[_0x1001('0xb')];if(typeof _0x1902a2==_0x1001('0x15'))return;let _0x45f191={'Time':_0x1902a2,'timeOfDay':_0x5dee97,'dayBeforeHoliday':_0x27fbd4,'dayAfterHoliday':_0x17b4e6,'dayOfMonth':_0x75fb72,'dayOfWeek':_0x158bd9,'dayOfYear':_0x55d532,'holiday':_0x208c9c,'monthOfYear':_0x5dbd16,'weekEnd':_0x15ee68};this[_0x1001('0x16')]=this['rawstore'][_0x1001('0x17')](_0x45f191);this[_0x1001('0xc')][_0x1001('0x18')](this[_0x1001('0x16')]);let _0x4e7925=super['getAggregates']();let _0x28352e=_0x4e7925;_0x28352e[_0x1001('0x19')]=new Date(_0x1902a2)['getTime']();_0x28352e[_0x1001('0x12')]=_0x5dee97;_0x28352e[_0x1001('0x7')]=_0x27fbd4;_0x28352e['dayAfterHoliday']=_0x17b4e6;_0x28352e[_0x1001('0x14')]=_0x75fb72;_0x28352e['dayOfWeek']=_0x158bd9;_0x28352e[_0x1001('0x1a')]=_0x55d532;_0x28352e[_0x1001('0x9')]=_0x208c9c;_0x28352e[_0x1001('0xa')]=_0x5dbd16;_0x28352e[_0x1001('0xb')]=_0x15ee68;this[_0x1001('0x1b')][_0x1001('0x1c')](_0x28352e);super['broadcastAggregates'](_0x4e7925);this[_0x1001('0x1d')](this['fusionNodeI'],this[_0x1001('0x1e')]);}}module[_0x1001('0x1f')]=streamingStaticNode;