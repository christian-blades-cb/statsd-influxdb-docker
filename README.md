# StatsD InfluxDB Docker #

Docker image ready to collect statsd metrics and send them to InfluxDB

[statsd-influxdb-backend](https://github.com/bernd/statsd-influxdb-backend)
[statsd](https://github.com/etsy/statsd)
[influxdb](https://github.com/influxdb/influxdb)

## Usage

The collector is waiting for stats on port 8125 over UDP
Admin port is available on TCP port 8126

Ex:
```shell
$ docker run -p 8125:8125/udp -p 8126:8126 --name=statsd -d christianbladescb/statsd-influxdb
$ echo "hello:1|c" | nc -u -w0 localhost 8125
$ echo "stats" | nc localhost 8126
```

## Settings

| environment variable | description | default |
| -------------------- | ----------- | ------- |
| INFLUXDB_HOST | hostname/ip of your influxdb instance | localhost |
| INFLUXDB_PORT | port of your influxdb instance | 8086 |
| INFLUXDB_VERSION | version of influxdb | 0.8 |
| INFLUXDB_SSL | enable ssl encryption for influxdb payloads | false |
| INFLUXDB_DATABASE | database to store the metrics | stats |
| INFLUXDB_USERNAME | username for the influxdb database | root |
| INFLUXDB_PASSWORD | password for the influxdb database | root |
| STATSD_FLUSH_ENABLE | enable regular flushes of the statsd metrics | true |
| STATSD_PROXY_ENABLE | enable proxy strategy | false |
| STATSD_PROXY_SUFFIX | suffix for the metric name | raw |
| STATSD_PROXY_FLUSHINTERVAL | how often to flush the metrics | 1000 |
| INFLUXDB_INCLUDE_STATSD_METRICS | send internal statsd metrics to influxdb | false |
| INFLUXDB_INCLUDE_INFLUXDB_METRICS | send internal influxdb backend metrics to influxdb (requires INFLUXDB_INCLUDE_STATSD_METRICS to also be enabled) | false |

