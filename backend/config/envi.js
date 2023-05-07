const mongoose = require ('mongoose')



const connectdb = async()=>{
await mongoose.connect('mongodb+srv://29461627amira:<KP8S8EVn9JeGHxsm>@cluster0.rshw9be.mongodb.net/restapi',{ useNewUrlParser: true, useUnifiedTopology: true }).then(()=>{
    console.log('database connect');
}).catch(console.log('err'))
}

module.exports = connectdb