var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var api = new ParseServer({
    appId: "appId",
    appName: "appName",
    javascriptKey: "javascriptKey",
    masterKey: "masterKey",
    directAccess: true,
    enforcePrivateUsers: true,
    allowClientClassCreation: true,
    // databaseURI: 'postgres://localhost:5432/db', // url de connexion a la bdd postgres
    databaseURI: 'mongodb://localhost:27017/db', // url de connexion a la bdd mongo
    port: 7331,
    mountPath: '/api',
    serverStartComplete: () => console.log('parse server started'),
    serverCloseComplete: () => console.log('parse server closed'),
    cloud:'cloudCode'
});

var options = {allowInsecureHTTP: false};

var dashboard = new ParseDashboard({
        "apps": [
            {
                "serverURL": "http://localhost:7331/api",
                "appId": "appId",
                "masterKey": "masterKey",
                "appName": "appName"
            }
        ]
    }
    , options);

var app = express();

// parse server
app.use('/api', api);

// parse dashboard
app.use('/dashboard', dashboard);

var httpServer = require('http').createServer(app);
httpServer.listen(7331);
