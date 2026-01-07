const mongoose = require('mongoose');

const con = async () => {
    try{
        await mongoose.connect("mongodb://localhost:27017/portfoliodb");
        console.log("conexao bem sucedida");
    }catch (error){
        console.error("conexao falhou:", error);
        process.exit(1);
    }
}
module.exports = con;