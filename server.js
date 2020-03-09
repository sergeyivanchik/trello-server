const mongoose = require("mongoose");
const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const server = require('http').createServer(app);
const jsonParser = express.json();
const cors = require('cors');
const toJson = require('@meanie/mongoose-to-json');
const passport = require('passport');
const port = require('./config.js').port;


mongoose.plugin(toJson);

require('./api/utils/dataBase.js').setUpConnection();
require('./api/models/board.js');
require('./api/models/list.js');
require('./api/models/task.js');
require('./api/models/user.js');
require('./api/passport/jwt.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(jsonParser);
app.use('/',require('./api/routes/index'));

app.use(passport.initialize());

server.listen(port, () => console.log('port', port));
