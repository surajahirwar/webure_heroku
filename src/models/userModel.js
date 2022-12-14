const mongoose=require("mongoose")

const bcrypt = require('bcrypt');
const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}

},{
    timestamps:true,
    versionKey:false
    
})

userSchema.pre("save",function(next){
    const hash = bcrypt.hashSync(this.password, 10)
    this.password=hash
    return next()
})

userSchema.methods.checkpassword=function(password){
    return bcrypt.compareSync(password,this.password)
}
const User=mongoose.model("users",userSchema)

module.exports=User