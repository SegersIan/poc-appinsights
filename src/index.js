const fs = require('fs');
const express = require('express')
const appInsights = require('applicationinsights')
const app = express()
const port = 3000

appInsights.setup(process.env.APPINSIGHTS_INSTRUMENTATIONKEY)
    .setAutoDependencyCorrelation(true)
    .setAutoCollectRequests(true)
    .setAutoCollectPerformance(true, true)
    .setAutoCollectExceptions(true)
    .setAutoCollectDependencies(true)
    .setAutoCollectConsole(true)
    .setUseDiskRetryCaching(true)
    .setSendLiveMetrics(true)
    .setDistributedTracingMode(appInsights.DistributedTracingModes.AI_AND_W3C)
    .start();


app.get('/', async (req, res) => {
    try {
        const contents = fs.readFileSync('./src/myfile.txt');
        res.setHeader('Content-Type', 'plain/text')
        res.send("Contents : " + contents.toString('utf8'))
    } catch (e) {
        console.error(e);
        res.statusCode(500).send(e.toString());
    }
})

app.get('/ping', async (req, res) => {
    try {
        res.send("pong")
    } catch (e) {
        console.error(e);
        res.statusCode(500).send(e.toString());
    }
})

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))