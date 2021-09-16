// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_flow": [
            { "field": "flow_rate_value", "tick": [
                {"type": "winbuf", "winsize": 2 * 60 * 60 * 1000, "sub": [         // 24h sliding window
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
        "fusionTick": 24 * 60 * 60 * 1000,
        "nodes": [
            {
                "type": "debitmeter",
                "nodeid": "",
                "aggrConfigId": "braila_flow",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "flow_rate_value" }
                    ]}
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
    "braila_flow211206H360_night",
    "braila_flow211106H360_night",
    "braila_flow211306H360_night",
    "braila_flow318505H498_night"
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
    const componentName = "Data fusion AD flow night";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
