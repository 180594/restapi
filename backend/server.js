const express = require('express');
const app = express();
const port = 4000 ;
const connectdb = require('./config/envi');
const userSchema = require ('./models/User')

connectdb ();
app.listen(port , (res,req)=>{
    console.log('server started');
});


const createUser = async(res,req)=>{
    try{
    const newUser= await userSchema.create(req.body);
    res.status(200).json({msg:'user created',newUser})
    }catch(err){
        res.status(500).json({msg:"err"})
    
    }
    };
    const getallUser = async(res,req)=>{
        try{
        const getUser= await userSchema.find(req.body);
        res.status(200).json({msg:' get user ',getUser})
        }catch(err){
            res.status(500).json({msg:"err"})}};
            const updateUser = async(res,req)=>{
                try{
                const upUser= await userSchema.updateOne(req.body);
                res.status(200).json({msg:' put user ',upUser})
                }catch(err){
                    res.status(500).json({msg:"err"})}};
                    const removeUser = async(res,req)=>{
                        try{
                        const deleteUser= await userSchema.deleteOne(req.body);
                        res.status(200).json({msg:' delete user ',deleteUser})
                        }catch(err){
                            res.status(500).json({msg:"err"})}};







const userRouter = express.Router();
userRouter.post('./add',createUser);
userRouter.get('./get',getallUser)
userRouter.put('./put',updateUser)
userRouter.delete('./del',removeUser)

app.use(express.json)