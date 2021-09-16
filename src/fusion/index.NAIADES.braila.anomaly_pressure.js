// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_pressure": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ]
    },
    "fusion": {
        "fusionModel": "braila_pressure5771_10d",
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 15 * 60 * 1000,
        "nodes": [
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5771",
                "aggrConfigId": "braila_pressure",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "value" }
                    ]}, 
                    { "time": -1, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -2, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -3, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -4, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -5, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "value" }
                    ]},
                    { "time": -9, "attributes": [
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

let brailaNodeid = ["braila_pressure5771",
     "braila_pressure5772",
     "braila_pressure5770",
     "braila_pressure5773"
    ];

const kafka = require('kafka-node');

for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '_anomaly';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

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
