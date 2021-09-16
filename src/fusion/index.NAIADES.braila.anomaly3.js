// const StreamFusion = require('nrg-stream-fusion').streamFusion;
const StreamFusion = require('./main.js').streamFusion;

// water config
let smConf = {
    "aggr": {
        "braila_pressure": [
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
                "nodeid": "",
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
    "braila_pressure5770_night",
    "braila_pressure5771_night",
    "braila_pressure5772_night",
    "braila_pressure5773_night"
    ];

const kafka = require('kafka-node');

for (var i = 0; i < brailaNodeid.length; i++){
    smConf["fusion"]["fusionModel"] = brailaNodeid[i] + '_anomaly';
    smConf["fusion"]["nodes"][0]["nodeid"] = brailaNodeid[i];

    fusion.push(new StreamFusion(connectionConfig, smConf["fusion"], smConf["aggr"]));
}



//////////////
const watchdog_ping = {
    url: "localhost",
    port: 5001,
    path: "/ping?id=4&secret=051de32597041e41f73b97d61c67a13b"
}

const watchdog_cron_schedule = '0 * * * * *'; // every 1 minute

// WATCHDOG

// start scheduler
var j = schedule.scheduleJob(watchdog_cron_schedule, async () => {
    console.log("Checking into WatchDog");

    const options = {
        hostname: watchdog_ping.url,
        port: watchdog_ping.port,
        path: watchdog_ping.path,
        method: 'GET'
    }

    const req = http.request(options, res => {
        // console.log(`statusCode: ${res.statusCode}`)

         res.on('data', d => {
            // process.stdout.write(d)
        })
    })

    req.on('error', error => {
        console.error(error)
    })

    req.end()
});