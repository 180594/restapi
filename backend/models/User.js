const mongoose= require('mongoose')
const { Schema } = mongoose;


const userSchema = new mongoose.Schema({

    name: String,
         
    age: Number ,
   
    

})
module.exports = mongoose.model('user',userSchema)