const a0_0x5136=['humidity','\x20records\x20needed)!','fusionNodeI','exports','fieldTypes','hourly','processRecordCb','return\x20/\x22\x20+\x20this\x20+\x20\x22/','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','datatype','float','stampm','temperature','fieldtypes','push','cloudCover','rawstore','base','parent','parse','./streamingNode.js','fields','windBearing','windSpeed','log','datasize','pressure','NO\x20WEATHER/WEATHER\x20RECORD\x20TOO\x20SHORT\x20(','createStore','currently','test','data','aggrConfigId','apply','nodeId'];(function(_0x4fd632,_0x51364a){const _0x4c0cad=function(_0x14c0de){while(--_0x14c0de){_0x4fd632['push'](_0x4fd632['shift']());}},_0x24e6ac=function(){const _0x530421={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x11a686,_0x25428b,_0x5badb7,_0x25af1a){_0x25af1a=_0x25af1a||{};let _0x41003a=_0x25428b+'='+_0x5badb7,_0x55c016=0x0;for(let _0x39bd3d=0x0,_0x4ffe0d=_0x11a686['length'];_0x39bd3d<_0x4ffe0d;_0x39bd3d++){const _0x1723ad=_0x11a686[_0x39bd3d];_0x41003a+=';\x20'+_0x1723ad;const _0x3ebe2e=_0x11a686[_0x1723ad];_0x11a686['push'](_0x3ebe2e),_0x4ffe0d=_0x11a686['length'],_0x3ebe2e!==!![]&&(_0x41003a+='='+_0x3ebe2e);}_0x25af1a['cookie']=_0x41003a;},'removeCookie':function(){return'dev';},'getCookie':function(_0x191c5c,_0x3a23dd){_0x191c5c=_0x191c5c||function(_0x4ecdfb){return _0x4ecdfb;};const _0xd04fa8=_0x191c5c(new RegExp('(?:^|;\x20)'+_0x3a23dd['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x5d1118=function(_0x59ca56,_0x231613){_0x59ca56(++_0x231613);};return _0x5d1118(_0x4c0cad,_0x51364a),_0xd04fa8?decodeURIComponent(_0xd04fa8[0x1]):undefined;}},_0x459c5a=function(){const _0x54838c=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x54838c['test'](_0x530421['removeCookie']['toString']());};_0x530421['updateCookie']=_0x459c5a;let _0x1a3ae9='';const _0x8c8b0f=_0x530421['updateCookie']();if(!_0x8c8b0f)_0x530421['setCookie'](['*'],'counter',0x1);else _0x8c8b0f?_0x1a3ae9=_0x530421['getCookie'](null,'counter'):_0x530421['removeCookie']();};_0x24e6ac();}(a0_0x5136,0x1b3));const a0_0x4c0c=function(_0x4fd632,_0x51364a){_0x4fd632=_0x4fd632-0x0;let _0x4c0cad=a0_0x5136[_0x4fd632];return _0x4c0cad;};const a0_0x5badb7=function(){let _0x594131=!![];return function(_0x4e16c3,_0x1bea35){const _0x28f3f7=_0x594131?function(){if(_0x1bea35){const _0x57eeca=_0x1bea35[a0_0x4c0c('0x12')](_0x4e16c3,arguments);return _0x1bea35=null,_0x57eeca;}}:function(){};return _0x594131=![],_0x28f3f7;};}(),a0_0x25428b=a0_0x5badb7(this,function(){const _0x3e1da1=function(){const _0x1f99a1=_0x3e1da1['constructor'](a0_0x4c0c('0x1b'))()['constructor'](a0_0x4c0c('0x1c'));return!_0x1f99a1[a0_0x4c0c('0xf')](a0_0x25428b);};return _0x3e1da1();});a0_0x25428b();const streamingNode=require(a0_0x4c0c('0x5'));class streamingWeatherNode extends streamingNode{constructor(_0x5aa18c,_0x239c8a,_0x396fe4,_0x205b7e,_0x33349b,_0x45008a,_0x32d4cd){super(_0x5aa18c,_0x239c8a,_0x396fe4,_0x205b7e,_0x33349b,_0x45008a,_0x32d4cd),this[a0_0x4c0c('0xa')]=_0x396fe4[a0_0x4c0c('0xa')]===undefined?0x30:_0x396fe4['datasize'],this['datatype']=_0x396fe4['datatype']===undefined?a0_0x4c0c('0x19'):_0x396fe4['datatype'],this[a0_0x4c0c('0x6')]=[],this['fieldTypes']=_0x396fe4[a0_0x4c0c('0x21')]===undefined?[a0_0x4c0c('0x20'),a0_0x4c0c('0x14'),a0_0x4c0c('0xb'),a0_0x4c0c('0x8'),a0_0x4c0c('0x7'),a0_0x4c0c('0x0')]:_0x396fe4[a0_0x4c0c('0x21')],console['log'](this['datatype'],this['fieldTypes']);for(let _0x18c8e8=0x0;_0x18c8e8<this[a0_0x4c0c('0xa')];_0x18c8e8++){for(let _0x29b38b in this['fieldTypes']){let _0x1c7c62=this[a0_0x4c0c('0x18')][_0x29b38b]+_0x18c8e8;this[a0_0x4c0c('0x6')][a0_0x4c0c('0x22')]({'name':_0x1c7c62,'type':a0_0x4c0c('0x1e')});}}this[a0_0x4c0c('0x2')][a0_0x4c0c('0xd')]({'name':this[a0_0x4c0c('0x13')],'fields':this[a0_0x4c0c('0x6')]}),this[a0_0x4c0c('0x1')]=this['base']['store'](this[a0_0x4c0c('0x13')]),super['createAggregates'](_0x205b7e[_0x396fe4[a0_0x4c0c('0x11')]]),super['postConstructor']();}['processRecord'](_0x5e7913){typeof _0x5e7913=='string'&&(console['log'](_0x5e7913),_0x5e7913=JSON[a0_0x4c0c('0x4')](_0x5e7913));let _0x394198={};if(this[a0_0x4c0c('0x1d')]in _0x5e7913&&a0_0x4c0c('0x10')in _0x5e7913[this['datatype']]&&_0x5e7913[this[a0_0x4c0c('0x1d')]]['data']['length']>=this[a0_0x4c0c('0xa')]){_0x394198[a0_0x4c0c('0x1f')]=_0x5e7913[a0_0x4c0c('0xe')]['time']*0x3e8;for(let _0x44aeff=0x0;_0x44aeff<this['datasize'];_0x44aeff++){for(let _0x2b9da6 in this[a0_0x4c0c('0x18')]){let _0x2cdfd1=this[a0_0x4c0c('0x18')][_0x2b9da6]+_0x44aeff;_0x394198[_0x2cdfd1]=_0x5e7913[this['datatype']]['data'][_0x44aeff][this[a0_0x4c0c('0x18')][_0x2b9da6]];if(_0x394198[_0x2cdfd1]==null)_0x5e7913[_0x2cdfd1]=0x0;}}let _0x5e4e71=_0x394198;this['buffer'][a0_0x4c0c('0x22')](_0x5e4e71),this[a0_0x4c0c('0x1a')](this[a0_0x4c0c('0x16')],this[a0_0x4c0c('0x3')]);}else console[a0_0x4c0c('0x9')](a0_0x4c0c('0xc')+this[a0_0x4c0c('0xa')]+'\x20'+this['datatype']+a0_0x4c0c('0x15'));}}module[a0_0x4c0c('0x17')]=streamingWeatherNode;