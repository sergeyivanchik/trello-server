const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json'); 
const port = require('./config.js').port;


mongoose.plugin(toJson);
mongoose.connect('mongodb+srv://267696:cthutq9874123@cluster0-r2jfp.azure.mongodb.net/test?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(async() => console.log('Connection to DB established successfully'))
  .catch((error) => {
    console.log('Connection to DB failed', error);
  });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(jsonParser);

app.use('/',require('./api/routes/index'));

server.listen(port, () => console.log('port', port));
