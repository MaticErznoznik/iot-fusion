/**
 * Main stream fusion example for 
 */

const StreamFusion = require('./main.js').streamFusion;

let smConf = {
    "aggr": {
        "water_flow": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 1 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 2 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 3 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 4 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 5 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 6 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 7 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]}
            ]}
        ]
    },
    "fusion": {
        "fusionModel": "benalua_flow",   
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 24 * 60 * 60 * 1000,
        "nodes": [
            {
                "type": "timevalue",
                "nodeid": "benalua_flow",
                "aggrConfigId": "water_flow",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "value" },
                        { type: "value", "name": "value|ma|86400000" },
                        { type: "value", "name": "value|ma|172800000" }
                    ]},
                    { "time": -1, "attributes": [
                        { type: "value", "name": "value|ma|86400000" },
                    ]},
                    { "time": -2, "attributes": [
                        { type: "value", "name": "value|ma|86400000" }
                    ]},
                    { "time": -5, "attributes": [
                        { type: "value", "name": "value|ma|86400000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value|ma|86400000" }
                    ]},
                ]
            }
        ]
    }
};


// kafka connection config
let connectionConfig = {
    kafka: "localhost:9092",
}

let fusion = [];

let brailaNodeid = [
    "alicante_alipark_flow",
    "alicante_benalua_flow",
    "alicante_autobuses_flow",
    "alicante_diputacion_flow",
    "alicante_mercado_flow",
    "alicante_montaneta_flow",
    "alicante_rambla_flow"
    ];

const kafka = require('kafka-node');

for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '_raw_24h';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}

/* nodeId = "alicante_benalua_flow";
smConf["fusion"]["nodes"][0]["nodeid"] = nodeId;
smConf["fusion"]["fusionModel"] = nodeId + "_24h"; */
//smConf["fusion"]["model"]["topic"] = "predictions_" + nodeId;

//const fusion = (new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));

const fetch = require('node-fetch');
const schedule = require('node-schedule');
const cron_schedule_ping = '*/30 * * * * *';
// ping WATCHDOG with scheduler
const job = schedule.scheduleJob(cron_schedule_ping, async () => {
    console.log("Checking into WatchDog");
    const componentName = "Data fusion Alicante flow prediction";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
