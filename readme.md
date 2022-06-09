# utilisation de parse

## utilisation de ce projet
- cloner le depot `git clone https://github.com/okobsamoht/standaloneparse.git`
- installer les dependances `npm install` ou `yarn install`
- demarrer l'instance de parse server  + dashboard `npm run start` ou `yarn start`

le endpoint principale de parse tourne sur le route `http://127.0.0.1:3000/api`
pour verifier si tout va bien utiliser votre avigateur pour aller a l'addresse `http://127.0.0.1:3000/api/health`
vous devez voir ```{ status: "ok"}```

## dans une app client qui tourne avec nodejs
- installer parse client: `npm install parse`
- inclure dans le projet: `import Parse from 'parse'`

## dans une app client html5 et javascript pure
- inclure dans le projet: `<script src="https://npmcdn.com/parse/dist/parse.min.js"></script>`

## initialiser parse

```js
Parse.initialize("APP_ID", "JAVASCRIPT_KEY");
Parse.serverURL = 'http://{SERVER_ADDRESS:3000}/api'
```

## faire un test
utiliser le scrit suivant:

```js
const gameScore = new Parse.Object.extend("GameScore");
gameScore.set("score", 1337);
gameScore.set("playerName", "Sean Plott");
gameScore.set("cheatMode", false);

gameScore.save()
    .then((gameScore) => {
        console.log('New object created with objectId: ' + gameScore.id);
    }, (error) => {
        console.log('Failed to create new object, with error code: ' + error.message);
    });
```

## pour aller dans le dashboard utiliser l'url suivant:
`http://127.0.0.1:3000/dashboard`