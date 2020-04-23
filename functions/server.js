const express = require('express');
const bodyParser = require("body-parser");
const { ApolloServer } = require("apollo-server-express");
// const cors = require("cors");
const typeDefs = require('./schema/typeDefs');
const resolvers = require('./schema/resolvers');


function gqlServer(){
    const app = express();

    app.use(bodyParser.urlencoded({limit: "100kb", extended: false}))
    app.use(bodyParser.json({limit: '100kb'}));
    app.use(bodyParser.raw({ limit: '100kb' }));
    app.use(bodyParser.text({limit: '100kb'}));

    const server = new ApolloServer({
        typeDefs,
        resolvers
    })
    
    server.applyMiddleware({ app, path: '/',cors: true });

    return app;
}

module.exports = gqlServer;

// var server=gqlServer()
// var port = process.env.PORT || 4000

// server.listen({port:port}, ()=>
//   console.log(`🚀 Server ready at http://localhost:${port}`)
// )



