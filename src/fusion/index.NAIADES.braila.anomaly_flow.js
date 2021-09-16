// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_flow": [
            { "field": "flow_rate_value", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ]
    },
    "fusion": {
        "fusionModel": "",
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 1 * 60 * 1000,
        "nodes": [
            {
                "type": "debitmeter",
                "nodeid": "braila",
                "aggrConfigId": "braila_flow",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]}, 
                    { "time": -1, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -2, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -3, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -4, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -5, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
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

let brailaNodeid = [
     "braila_flow211106H360",
     "braila_flow211206H360",
     "braila_flow211306H360",
     "braila_flow318505H498"
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
    const componentName = "Data fusion AD flow";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
