var express = require('express');
var ParseServer = require('parse-server').ParseServer;
var ParseDashboard = require('parse-dashboard');

var api = new ParseServer({
    appId: "APP_ID",
    appNAme: "APP_NAME",
    javascriptKey: "JAVASCRIPT_KEY",
    masterKey: "MASTER_KEY",
    directAccess: true,
    enforcePrivateUsers: true,
    // databaseURI: 'postgres://localhost:5432/db?ssl=true&rejectUnauthorized=false', // url de connexion a la bdd
    port: 3000,
    mountPath: '/api',
    serverStartComplete: () => console.log('parse server started'),
    serverCloseComplete: () => console.log('parse server closed')
});

var options = {allowInsecureHTTP: false};

var dashboard = new ParseDashboard({
        "apps": [
            {
                "serverURL": "http://localhost:3000/api",
                "appId": "APP_ID",
                "masterKey": "MASTER_KEY",
                "appName": "APP_NAME"
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
httpServer.listen(3000);