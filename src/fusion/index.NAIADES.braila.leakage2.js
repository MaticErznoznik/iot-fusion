// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;
// water config
let smConf = {
    "aggr": {
        "braila_pressure": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        /* "braila_pressure_2": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        "braila_pressure_3": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        "braila_pressure_4": [
            { "field": "value", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ], */
        "braila_analog": [
            { "field": "analog_input1", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        /* "braila_analog_2": [
            { "field": "analog_input1", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        "braila_analog_3": [
            { "field": "analog_input1", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ],
        "braila_analog_4": [
            { "field": "analog_input1", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
                    {"type": "ma" }
                ]}
            ]}
        ], */
    },
    "fusion": {
        "fusionModel": "presure_24h",
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
                    ]},
                    { "time": -1, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -2, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -3, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -4, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -5, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "debitmeter",
                "nodeid": "braila_flow211106H360",
                "aggrConfigId": "braila_analog",
                "master": false,
                "attributes": [
                    { "time": 0, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -1, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -2, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -3, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -4, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -5, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
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
