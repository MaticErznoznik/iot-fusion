const a0_0x51f8=['streamingTimeValueNode','value|variance|86400000','return\x20/\x22\x20+\x20this\x20+\x20\x22/','check\x20fusion\x20model\x20name','streamingStaticNode','feature\x20vector\x20ok','timestamp','config','stores','buildFeatureVector','nodes','timevalue','fusion','global\x20config\x20correct','lastTimestamp','processRecord','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','max','fusion_id','features_N1_24h','holiday','N1_24h','check\x20number\x20of\x20stores','timeOfDay','variance','value|ma|21600000','dayOfYear','name','value|variance|21600000','aggr','{\x22timestamp\x22:0,\x20\x22timeOfDay\x22:\x200,\x20\x22dayAfterHoliday\x22:\x200,\x20\x22dayBeforeHoliday\x22:\x200,\x20\x22dayOfYear\x22:\x201,\x20\x22dayOfWeek\x22:\x202,\x20\x22dayOfMonth\x22:\x201,\x20\x22holiday\x22:\x201,\x20\x22monthOfYear\x22:\x201,\x20\x22weekEnd\x22:\x200\x20}','value|ma|86400000','object','topic','equal','value','./db-1/','getOffsetTimestamp','min','initialization','getStats','setSlaveOffset','winbuf','dayOfWeek','createFolder','value|min|21600000','static','base','weekEnd','streamFusion','dayAfterHoliday','none','constructor','dayBeforeHoliday','floor','test','value|min|86400000','length'];(function(_0x24bd12,_0x51f83){const _0x59d1f3=function(_0x50d2f3){while(--_0x50d2f3){_0x24bd12['push'](_0x24bd12['shift']());}},_0x4b02d9=function(){const _0x2c04d2={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x13e8c5,_0x106b8a,_0x18b3f1,_0xbcf142){_0xbcf142=_0xbcf142||{};let _0x4dc164=_0x106b8a+'='+_0x18b3f1,_0x26eeb0=0x0;for(let _0x923dc4=0x0,_0x32bbf9=_0x13e8c5['length'];_0x923dc4<_0x32bbf9;_0x923dc4++){const _0x77b54=_0x13e8c5[_0x923dc4];_0x4dc164+=';\x20'+_0x77b54;const _0x37d1b3=_0x13e8c5[_0x77b54];_0x13e8c5['push'](_0x37d1b3),_0x32bbf9=_0x13e8c5['length'],_0x37d1b3!==!![]&&(_0x4dc164+='='+_0x37d1b3);}_0xbcf142['cookie']=_0x4dc164;},'removeCookie':function(){return'dev';},'getCookie':function(_0x480b11,_0x561f30){_0x480b11=_0x480b11||function(_0x47efb0){return _0x47efb0;};const _0x53cf51=_0x480b11(new RegExp('(?:^|;\x20)'+_0x561f30['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)')),_0x4faada=function(_0x1a73d1,_0x2bf749){_0x1a73d1(++_0x2bf749);};return _0x4faada(_0x59d1f3,_0x51f83),_0x53cf51?decodeURIComponent(_0x53cf51[0x1]):undefined;}},_0x15de9a=function(){const _0x63b548=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x63b548['test'](_0x2c04d2['removeCookie']['toString']());};_0x2c04d2['updateCookie']=_0x15de9a;let _0x468416='';const _0xa3fe8b=_0x2c04d2['updateCookie']();if(!_0xa3fe8b)_0x2c04d2['setCookie'](['*'],'counter',0x1);else _0xa3fe8b?_0x468416=_0x2c04d2['getCookie'](null,'counter'):_0x2c04d2['removeCookie']();};_0x4b02d9();}(a0_0x51f8,0xfe));const a0_0x59d1=function(_0x24bd12,_0x51f83){_0x24bd12=_0x24bd12-0x0;let _0x59d1f3=a0_0x51f8[_0x24bd12];return _0x59d1f3;};const a0_0x18b3f1=function(){let _0x33d258=!![];return function(_0x2e170b,_0x116087){const _0x489b77=_0x33d258?function(){if(_0x116087){const _0x1aba7c=_0x116087['apply'](_0x2e170b,arguments);return _0x116087=null,_0x1aba7c;}}:function(){};return _0x33d258=![],_0x489b77;};}(),a0_0x106b8a=a0_0x18b3f1(this,function(){const _0x266ccb=function(){const _0x18b5f2=_0x266ccb[a0_0x59d1('0x1e')](a0_0x59d1('0x26'))()[a0_0x59d1('0x1e')](a0_0x59d1('0x34'));return!_0x18b5f2[a0_0x59d1('0x21')](a0_0x106b8a);};return _0x266ccb();});a0_0x106b8a();const fileManager=require('../common/utils/fileManager.js'),StreamFusion=require('../streamFusion.js'),qm=require('qminer'),fs=require('fs');var assert=require('assert');let connectionConfig={'zookeeper':'192.168.85.98:2181'},smConf={'aggr':{'timevalue':[{'field':a0_0x59d1('0xd'),'tick':[{'type':a0_0x59d1('0x14'),'winsize':0x6*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x59d1('0x35')},{'type':'min'},{'type':a0_0x59d1('0x2')}]},{'type':a0_0x59d1('0x14'),'winsize':0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x59d1('0x35')},{'type':a0_0x59d1('0x10')},{'type':a0_0x59d1('0x2')}]},{'type':a0_0x59d1('0x14'),'winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'},{'type':a0_0x59d1('0x35')},{'type':a0_0x59d1('0x10')},{'type':a0_0x59d1('0x2')}]}]}],'static':[{'field':a0_0x59d1('0x38'),'tick':[{'type':a0_0x59d1('0x14'),'winsize':0x7*0x18*0x3c*0x3c*0x3e8,'sub':[{'type':'ma'}]}]}]},'fusion':{'fusionModel':a0_0x59d1('0x39'),'connection':{'type':a0_0x59d1('0x1d')},'fusionTick':0x3c*0x3c*0x3e8,'nodes':[{'type':a0_0x59d1('0x2f'),'nodeid':'N1','aggrConfigId':'timevalue','master':!![],'fusionTick':0x3c*0x3c*0x3e8,'attributes':[{'time':0x0,'attributes':[{'type':'value','name':a0_0x59d1('0xd')},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x3')},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x17')},{'type':a0_0x59d1('0xd'),'name':'value|max|21600000'},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x6')},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x9')},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x22')},{'type':a0_0x59d1('0xd'),'name':'value|max|86400000'},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x25')}]},{'time':-0x18,'attributes':[{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0xd')}]}]},{'type':'static','nodeid':'S1','aggrConfigId':a0_0x59d1('0x18'),'fusionTick':0x3c*0x3c*0x3e8,'master':![],'attributes':[{'time':0x18,'attributes':[{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x1')},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x1a')},{'type':a0_0x59d1('0xd'),'name':'holiday'},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x1c')},{'type':'value','name':a0_0x59d1('0x1f')},{'type':a0_0x59d1('0xd'),'name':'dayOfWeek'},{'type':a0_0x59d1('0xd'),'name':a0_0x59d1('0x4')},{'type':a0_0x59d1('0xd'),'name':'monthOfYear'}]}]}]}};describe(a0_0x59d1('0x1b'),function(){let _0x229a99;before(function(){fileManager['removeFolder'](a0_0x59d1('0xe')),fileManager[a0_0x59d1('0x16')](a0_0x59d1('0xe')),_0x229a99=new StreamFusion(connectionConfig,smConf[a0_0x59d1('0x30')],smConf[a0_0x59d1('0x7')]);}),after(function(){}),describe(a0_0x59d1('0x11'),function(){it('base\x20saved',function(){assert['equal'](typeof _0x229a99[a0_0x59d1('0x19')],a0_0x59d1('0xa'));}),it('check\x20number\x20of\x20fusion\x20objects',function(){assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x2e')][a0_0x59d1('0x23')],0x2);}),it(a0_0x59d1('0x0'),function(){assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x19')][a0_0x59d1('0x12')]()[a0_0x59d1('0x2c')][a0_0x59d1('0x23')],0x2);}),it(a0_0x59d1('0x27'),function(){assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x36')],a0_0x59d1('0x39'));}),it('check\x20features\x20topic\x20name',function(){assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0xb')],a0_0x59d1('0x37'));}),it('check\x20types\x20of\x20nodes',function(){assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x2e')][0x0][a0_0x59d1('0x1e')][a0_0x59d1('0x5')],a0_0x59d1('0x24')),assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x2e')][0x1][a0_0x59d1('0x1e')][a0_0x59d1('0x5')],a0_0x59d1('0x28'));}),it(a0_0x59d1('0x31'),function(){assert['deepEqual'](_0x229a99[a0_0x59d1('0x2b')],smConf[a0_0x59d1('0x30')]);}),it(a0_0x59d1('0x29'),function(){let _0x2ebc7a=JSON['parse'](a0_0x59d1('0x8'));_0x229a99[a0_0x59d1('0x2e')][0x1][a0_0x59d1('0x33')](_0x2ebc7a);for(let _0x3b649d=0x1;_0x3b649d<=0x49;_0x3b649d++){_0x2ebc7a[a0_0x59d1('0x2a')]=_0x3b649d*0x3c*0x3c*0x3e8,_0x2ebc7a[a0_0x59d1('0x1')]=_0x3b649d%0x18,_0x2ebc7a[a0_0x59d1('0x4')]=Math['floor'](_0x3b649d/0x18)+0x1,_0x2ebc7a[a0_0x59d1('0x15')]=Math[a0_0x59d1('0x20')](_0x3b649d/0x18)+0x2,_0x2ebc7a['dayOfMonth']=Math[a0_0x59d1('0x20')](_0x3b649d/0x18)+0x1,_0x2ebc7a[a0_0x59d1('0x4')]=Math[a0_0x59d1('0x20')](_0x3b649d/0x18)+0x1,_0x2ebc7a['holiday']=0x0,_0x229a99[a0_0x59d1('0x2e')][0x1][a0_0x59d1('0x33')](_0x2ebc7a);}for(let _0x2b458e=0x1;_0x2b458e<=0x30;_0x2b458e++){let _0x3d72aa=_0x2b458e*0x3c*0x3c;_0x229a99['nodes'][0x0]['processRecord']({'time':_0x3d72aa,'value':_0x2b458e});}_0x229a99['nodes'][0x0]['setMasterOffset'](),_0x229a99[a0_0x59d1('0x2e')][0x1][a0_0x59d1('0x13')](0x0),assert[a0_0x59d1('0xc')](_0x229a99[a0_0x59d1('0x2e')][0x0][a0_0x59d1('0xf')](),0x30*0x3c*0x3c*0x3e8),assert['deepEqual'](_0x229a99[a0_0x59d1('0x2d')](),[0x30,0x2d,0x2a,0x30,4.666666666666667,0x24,0x18,0x30,54.166666666666664,0x18,0x1,0x0,0x0,0x0,0x0,0x5,0x4,0x1]),assert['equal'](_0x229a99[a0_0x59d1('0x32')],0x30*0x3c*0x3c*0x3e8);});});});