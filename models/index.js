const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url;
mongoose.connect(db.url, {useNewUrlParser: true, useUnifiedTopology: true});
db.model = require("./model.js")(mongoose);

module.exports = db;
