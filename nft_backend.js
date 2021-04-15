const express = require('express');
// const device = require('express-device');
// const useragent = require('express-useragent');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
const morgan = require('morgan');

//Config file
const config = require('./config/config');

//Init express server
const server = express();

mongoose.connect(config.mongoURI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log(`Server connected to mongoDB with params: ${config.mongoURI}`))
    .catch(err => console.log('Problem with mongoDB', err))

//Init addons
server.use(morgan('dev'));
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(require('cors')());


//Init routes
const collectionRoutes = require('./routes/collection');
const nftitemRoutes = require('./routes/nftItem');
const authRoutes = require('./routes/auth');
const listsRoutes = require('./routes/lists');
const requestRoutes = require('./routes/request');
const auctionRoutes = require('./routes/auction');

//Use routes
server.use('/v1/collection', collectionRoutes);
server.use('/v1/nftitem', nftitemRoutes);
server.use('/v1/auth', authRoutes);
server.use('/v1/lists', listsRoutes);
server.use('/v1/request', requestRoutes);
server.use('/v1/auction', auctionRoutes);

module.exports = server;