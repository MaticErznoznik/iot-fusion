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
        "braila_analog": [
            { "field": "analog_input1", "tick": [
                {"type": "winbuf", "winsize": 1 * 60 * 60 * 1000, "sub": [         // 24h sliding window
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "debitmeter",
                "nodeid": "braila_flow211206H360",
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "debitmeter",
                "nodeid": "braila_flow211306H360",
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]}

                ]
            }, 
            {
                "type": "debitmeter",
                "nodeid": "braila_flow318505H498",
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "analog_input1|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5770",
                "aggrConfigId": "braila_pressure",
                "master": false,
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5771",
                "aggrConfigId": "braila_pressure",
                "master": false,
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5772",
                "aggrConfigId": "braila_pressure",
                "master": false,
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]}

                ]
            },
            {
                "type": "timevalue",
                "nodeid": "braila_pressure5773",
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
                    ]},
                    { "time": -6, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -7, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -8, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -9, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -10, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -11, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -12, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -13, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -14, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -15, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -16, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -17, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -18, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -19, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -20, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -21, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -22, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]},
                    { "time": -23, "attributes": [
                        { type: "value", "name": "value|ma|3600000" }
                    ]}

                ]
            },

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
