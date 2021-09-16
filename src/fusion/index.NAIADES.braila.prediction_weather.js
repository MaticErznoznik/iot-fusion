// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_flow": [
            { "field": "flow_rate_value", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 5 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 7 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
            ]},            
        ],
        "weather": [
            { "field": "temperature", "tick": [
                {"type": "winbuf", "winsize": 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 5 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
                {"type": "winbuf", "winsize": 7 * 24 * 60 * 60 * 1000, "sub": [
                    {"type": "ma" }
                ]},
            ]},            
        ]
    },
    "fusion": {
        "fusionModel": "braila_flow318505H498",
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 24 * 60 * 60 * 1000,
        "nodes": [
            {
                "type": "debitmeter",
                "nodeid": "braila_flow211106H360",
                "aggrConfigId": "braila_flow",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "flow_rate_value|ma|86400000" },
                        { type: "value", "name": "flow_rate_value|ma|432000000" },
                        { type: "value", "name": "flow_rate_value|ma|604800000" }
                    ]}, 
                    { "time": -1, "attributes": [
                        { type: "value", "name": "flow_rate_value|ma|86400000" },
                        { type: "value", "name": "flow_rate_value|ma|432000000" },
                        { type: "value", "name": "flow_rate_value|ma|604800000" }
                    ]},
                    { "time": -3, "attributes": [
                        { type: "value", "name": "flow_rate_value|ma|86400000" },
                        { type: "value", "name": "flow_rate_value|ma|432000000" },
                        { type: "value", "name": "flow_rate_value|ma|604800000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "flow_rate_value|ma|86400000" },
                        { type: "value", "name": "flow_rate_value|ma|432000000" },
                        { type: "value", "name": "flow_rate_value|ma|604800000" }
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

let brailaNodeid = ["braila_flow318505H498",
     "braila_flow211306H360",
     "braila_flow211106H360",
     "braila_flow211206H360"
    ];

const kafka = require('kafka-node');

for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '_prediction_24h';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}


const fetch = require('node-fetch');
const schedule = require('node-schedule');
const cron_schedule_ping = '*/30 * * * * *';
// ping WATCHDOG with scheduler
const job = schedule.scheduleJob(cron_schedule_ping, async () => {
    console.log("Checking into WatchDog");
    const componentName = "Data fusion Braila flow prediction";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
