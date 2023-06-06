// connect mongodb
const server = process.env.DB_HOST;
const db_name = process.env.DB_NAME;
const mongoose = require("mongoose");
class Database{
    constructor(){
        this._connect();
    }
    _connect(){
        mongoose.connect(`${server}/${db_name}`)
        .then(()=>{  // call back function
            console.log("Connect successfully");
        })
        .catch(err=>{
            console.log(err);
        });
    }
}

module.exports = new Database();