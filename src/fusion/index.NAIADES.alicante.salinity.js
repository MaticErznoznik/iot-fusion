const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "salinity": [
            { "field": "value", "tick": [
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
                "type": "timevalue",
                "nodeid": "braila_pressure5770_night",
                "aggrConfigId": "salinity",
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
    "alicante_salinity_EA003_36_conductivity"
    ];


for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}

const fetch = require('node-fetch');
const schedule = require('node-schedule');
const cron_schedule_ping = '*/30 * * * * *';
// ping WATCHDOG with scheduler
const job = schedule.scheduleJob(cron_schedule_ping, async () => {
    console.log("Checking into WatchDog");
    const componentName = "Data fusion salinity";
    fetch('http://localhost:5001/pingCheckIn/' + componentName)
        .then(res => {
            if(res.ok) {
                console.log("Ping was successful!");
            }
        });
});
 