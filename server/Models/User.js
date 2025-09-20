import mongoose from "mongoose"
import bcrypt from 'bcryptjs'


const userSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    }, 
    email:{
        type:String,
        required:true,
        unique:true
    
    },
    password:{
        type: String,
        required: true,
        minLength: 3,
    },
    role:{
        type: String,
        default:'user',
        enum:["user", "admin"]
    }
},
{timestamps:true}
)



const User = mongoose.model('User', userSchema)
export default User