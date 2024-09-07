const mongoose = require('mongoose')

const connection = () => {

    mongoose.connect("mongodb+srv://bhimanisahil045:Vidhi@cluster0.gol2c.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0")

    console.log("database connected");

}

module.exports = connection;