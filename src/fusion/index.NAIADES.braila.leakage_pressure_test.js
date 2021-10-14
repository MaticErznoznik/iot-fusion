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
        "fusionModel": "flow_24",
        "connection": {
            "type": "kafka"
        },
        "fusionTick": 1 * 60 * 60 * 1000,
        "nodes": [
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5770",
                "aggrConfigId": "braila_pressure",
                "master": true,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
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

connectionConfig.clientId = 'clientSubstation_' + Math.random().toString(16).substr(2, 8);

let fusion = [];

fusion.push( new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]) );
