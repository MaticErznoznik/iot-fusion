// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;



// config for the forecasting component
let smConf = {
    "aggr": {
        "alicante_alipark": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ]
    },
    "fusion": {
        "fusionModel": "alicante_alipark_forecasting",
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 30 * 60 * 1000,
        "nodes": [
            {
                "type": "timevalue",
                "nodeid": "alicante_alipark_flow",
                "aggrConfigId": "alicante_alipark",
                "master": true,
                "attributes": [
                    { "time": -23, "attributes": [
                        { type: "value", "name": "value" }
                    ]}, 
                    { "time": -22, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -13, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -12, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -11, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -10, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -9, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -8, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -7, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -6, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -5, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -4, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -3, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -2, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": -1, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
					{ "time": 0, "attributes": [
                        { type: "value", "name": "value" }
                    ]}

                ]
            }
        ]
    }
};

// kafka connection config
let connectionConfig = {
    // kafka: "172.29.12.94:9092",
    kafka: "localhost:9092",
}

let fusion = [];

let alicanteNodeid = [
    "alicante_alipark_flow",
    "alicante_autobuses_flow",
    "alicante_benalua_flow",
    "alicante_diputacion_flow",
    "alicante_mercado_flow",
    "alicante_montaneta_flow",
    "alicante_rambla_flow",
    ];

const kafka = require('kafka-node');

for (var i = 0; i < alicanteNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = alicanteNodeid[i] + '_forecasting';
    smConf["fusion"]["nodes"][0]["nodeid"] = alicanteNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}

const fetch = require('node-fetch');
const schedule = require('node-schedule');
const cron_schedule_ping = '*/30 * * * * *';
// ping WATCHDOG with scheduler
const job = schedule.scheduleJob(cron_schedule_ping, async () => {
    console.log("Checking into WatchDog");
    const componentName = "Data fusion AD pressure";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            //console.log(res)
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
