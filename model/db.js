const sequelize = require("sequelize");
var Seq = require("sequelize")
var seq;

seq = new Seq.Sequelize("study", "root", "vkfksshdmf0207",{
    host:"localhost",
    port:3306,
    dialect:"mysql",
    timezone:"+09:00",
    define: {
        charset:"utf8",
        collate:"utf8_general_ci",
        timestamps:true,
        freezeTableName:true
    }
})

var db = {};
db.users = seq.import(__dirname+"/users.js");

db.seq = seq;
db.Seq = Seq;

module.exports = db;
