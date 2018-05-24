const functions = require('firebase-functions');
const express = require('express');

const app = express();
app.use(express.static(__dirname + '/html'));
app.use('/js',express.static(__dirname + '/js'));
app.use('/css', express.static(__dirname + '/css'));
app.use("/image", express.static(__dirname + '/image'));

  app.get('/', function(request, response) {
    response.sendfile('index.html');
  });

exports.app = functions.https.onRequest(app);
