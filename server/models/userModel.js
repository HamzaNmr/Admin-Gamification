const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    firstName: {
        type:String,

    },

    lastName: {
        type:String,

    },

    name: {
        type:String,

    },

    username: {
        type:String,

    },
    email: {
        type:String,

    },
    password: {
        type:String,

    },
    bio: {
        type:String,

    },
    level: {
        type:String,

    },
    experience: {
        type:String,

    },
    balance: {
        type:String,

    },
    
   

     profile: {
        type:String,

    },
    badges:[],
    rewards:[]
    
}, {timestamps:true}
)










module.exports = mongoose.model('userModel' , userSchema)