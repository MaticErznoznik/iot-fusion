const a0_0x521c=['error','StreamFusion\x20MQTT\x20producer:\x20','publish','return\x20/\x22\x20+\x20this\x20+\x20\x22/','StreamFusion\x20MQTT\x20listener:\x20','exports','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','addPublisher','stringify','constructor','log','mqttEndpoint','Constructor\x20MQTT\x20-\x20client\x20id:\x20','connect','config','client','MQTT\x20Error','parse','MESSAGE:\x20','publishTopic','topic','clientId'];(function(_0x3b19ca,_0x521c92){const _0x1e4be5=function(_0x986dd7){while(--_0x986dd7){_0x3b19ca['push'](_0x3b19ca['shift']());}},_0x25e14c=function(){const _0x284b82={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x2344e3,_0x4b7bf0,_0x897bb8,_0x9a2cf0){_0x9a2cf0=_0x9a2cf0||{};let _0x4fd706=_0x4b7bf0+'='+_0x897bb8,_0xa0239=0x0;for(let _0x3491bf=0x0,_0x44a118=_0x2344e3['length'];_0x3491bf<_0x44a118;_0x3491bf++){const _0x455a7b=_0x2344e3[_0x3491bf];_0x4fd706+=';\x20'+_0x455a7b;const _0x5ceb21=_0x2344e3[_0x455a7b];_0x2344e3['push'](_0x5ceb21),_0x44a118=_0x2344e3['length'],_0x5ceb21!==!![]&&(_0x4fd706+='='+_0x5ceb21);}_0x9a2cf0['cookie']=_0x4fd706;},'removeCookie':function(){return'dev';},'getCookie':function(_0x57b709,_0x59801f){_0x57b709=_0x57b709||function(_0x14fa6e){return _0x14fa6e;};const _0x18702a=_0x57b709(new RegExp('(?:^|;\x20)'+_0x59801f['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x2be72a=function(_0x4ad672,_0x2b9f29){_0x4ad672(++_0x2b9f29);};return _0x2be72a(_0x1e4be5,_0x521c92),_0x18702a?decodeURIComponent(_0x18702a[0x1]):undefined;}},_0x597a2e=function(){const _0x19c939=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x19c939['test'](_0x284b82['removeCookie']['toString']());};_0x284b82['updateCookie']=_0x597a2e;let _0x247874='';const _0x370392=_0x284b82['updateCookie']();if(!_0x370392)_0x284b82['setCookie'](['*'],'counter',0x1);else _0x370392?_0x247874=_0x284b82['getCookie'](null,'counter'):_0x284b82['removeCookie']();};_0x25e14c();}(a0_0x521c,0x15c));const a0_0x1e4b=function(_0x3b19ca,_0x521c92){_0x3b19ca=_0x3b19ca-0x0;let _0x1e4be5=a0_0x521c[_0x3b19ca];return _0x1e4be5;};const a0_0x897bb8=function(){let _0x288fed=!![];return function(_0x5e3d30,_0x3cfd05){const _0xc4b8f=_0x288fed?function(){if(_0x3cfd05){const _0x3f61c2=_0x3cfd05['apply'](_0x5e3d30,arguments);return _0x3cfd05=null,_0x3f61c2;}}:function(){};return _0x288fed=![],_0xc4b8f;};}(),a0_0x4b7bf0=a0_0x897bb8(this,function(){const _0x28f604=function(){const _0x25a976=_0x28f604[a0_0x1e4b('0xd')](a0_0x1e4b('0x7'))()[a0_0x1e4b('0xd')](a0_0x1e4b('0xa'));return!_0x25a976['test'](a0_0x4b7bf0);};return _0x28f604();});a0_0x4b7bf0();let Broker=require('./abstract.js');const mqtt=require('mqtt');class MQTTBroker extends Broker{constructor(_0x2a7d27,_0x8c550b,_0x260691){console[a0_0x1e4b('0xe')](a0_0x1e4b('0x10')+_0x2a7d27[a0_0x1e4b('0x3')],_0x260691),super(_0x2a7d27,_0x8c550b,_0x260691),this['config'][a0_0x1e4b('0x3')]=this[a0_0x1e4b('0x12')]['clientId']+_0x260691,this[a0_0x1e4b('0x13')]=mqtt[a0_0x1e4b('0x11')](this['config'][a0_0x1e4b('0xf')],this['config']),this[a0_0x1e4b('0x13')]['on'](a0_0x1e4b('0x4'),function(_0x308514){console[a0_0x1e4b('0xe')](a0_0x1e4b('0x14'),_0x308514);});}[a0_0x1e4b('0xb')](){console['log'](a0_0x1e4b('0x5')+this[a0_0x1e4b('0x2')]),this[a0_0x1e4b('0x1')]=this[a0_0x1e4b('0x2')];}['addListener'](_0x32a36c){console[a0_0x1e4b('0xe')](a0_0x1e4b('0x8')+this[a0_0x1e4b('0x2')]),this[a0_0x1e4b('0x13')]['subscribe'](this[a0_0x1e4b('0x2')],{'qos':0x2}),this[a0_0x1e4b('0x13')]['on']('message',function(_0x302b73,_0x3b9421){try{_0x32a36c(JSON[a0_0x1e4b('0x15')](_0x3b9421));}catch(_0x1884bb){console[a0_0x1e4b('0xe')](_0x1884bb);}});}[a0_0x1e4b('0x6')](_0x22f31b){console[a0_0x1e4b('0xe')]('TOPIC:\x20',this[a0_0x1e4b('0x1')],a0_0x1e4b('0x0'),_0x22f31b),this[a0_0x1e4b('0x13')][a0_0x1e4b('0x6')](this[a0_0x1e4b('0x1')],JSON[a0_0x1e4b('0xc')](_0x22f31b));}}module[a0_0x1e4b('0x9')]=MQTTBroker;