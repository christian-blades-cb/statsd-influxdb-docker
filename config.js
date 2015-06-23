{
    port: 8125,
    backends: [ "statsd-influxdb-backend" ],
    
    influxdb: {
        host: process.env.INFLUXDB_HOST || "localhost",                                                             // default localhost
        port: parseInt(process.env.INFLUXDB_PORT) || 8086,                                                          // default 8086
        version: parseFloat(process.env.INFLUXDB_VERSION) || 0.8,                                                   // default 0.8
        ssl: (process.env.INFLUXDB_SSL || "false").toLowerCase() == "true",                                         // default false
        database: process.env.INFLUXDB_DATABASE || "stats",                                                         // default stats
        username: process.env.INFLUXDB_USERNAME || "root",                                                          // default root
        password: process.env.INFLUXDB_PASSWORD || "root",                                                          // default root
        flush: {
            enable: (process.env.STATSD_FLUSH_ENABLE || "true").toLowerCase() == "true"                             // default true
        },
        proxy: {
            enable: (process.env.STATSD_PROXY_ENABLE || "false").toLowerCase() == "true",                           // default false
            suffix: process.env.STATSD_PROXY_SUFFIX || "raw",                                                       // default "raw"
            flushInterval: parseInt(process.env.STATSD_PROXY_FLUSHINTERVAL) || 1000                                 // default 1000
        },
        includeStatsdMetrics: (process.env.INFLUXDB_INCLUDE_STATSD_METRICS || "false").toLowerCase() == "true",     // default false
        includeInfluxdbMetrics: (process.env.INFLUXDB_INCLUDE_INFLUXDB_METRICS || "false").toLowerCase() == "true"  // default false
    }
    
}

