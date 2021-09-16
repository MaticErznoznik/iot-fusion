// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_flow": [
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
        "fusionTick": 1 * 60 * 60 * 1000,
        "nodes": [
            {
                "type": "timevalue",
                "nodeid": "braila",
                "aggrConfigId": "braila_flow",
                "master": true,
                "attributes": [
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

let brailaNodeid = [
    "carouge_device_0a6a",
    "carouge_device_0a7c",
    "carouge_device_0a80",
    "carouge_device_0a83",
    "carouge_device_1efd",
    "carouge_device_1efe",
    "carouge_device_1eff",
    "carouge_device_1f02",
    "carouge_device_1f06",
    "carouge_device_1f08",
    "carouge_device_1f09",
    "carouge_device_1f0d",
    "carouge_device_1f10"
    ];

const kafka = require('kafka-node');

for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '_anomaly';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}
