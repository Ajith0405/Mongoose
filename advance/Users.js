const mongoose = require('mongoose');

// another schema for address
    const addressSchema = new mongoose.Schema({
        street:String,
        city:String
    })

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        uppercase:true,
        minLength:5,
    },
    // validate min max in age
    age:{
        type:Number,
        min:18,
        max:120,
        // custom validation
        validate:{
            validator: v => v%2 === 0,
            message: props => `${props.value} is not an even number`
        }
    },
    // validation email
    email:{
        type:String,
        required:true,
        lowercase:true
    },
    // default Value
    createdAt:{
        type:Date,
        // never change - immutable
        immutable:true,
        default: ()=> Date.now()
    },
    updatedAt: {
        type:Date,
        default: ()=> Date.now()
    },
    bestFriend: {
        type: mongoose.SchemaTypes.ObjectId,
        ref:"User"
        },
    hobbies: [String],
    address:addressSchema
});


// Advance concepts

    //  creating function - don't use arrow function here
    userSchema.methods.sayHi = function(){
        console.log(`Hi! My name is ${this.name}`);
    }

    // statics - own function to findByName 
    userSchema.statics.findByName = function(name){
        return this.where({name: new RegExp(name, "i")})
    }

    // query - own query finction
    userSchema.query.ByName = function(name){
        return this.where({name: new RegExp(name, "i")})
    }

    // virtual property
    userSchema.virtual("namedEmail").get(function(){
        return `${this.name} <${this.email}>`
    })

    // middleware - for updatedAt property 
    userSchema.pre("save", function(next){
        this.updatedAt = Date.now()
        next()
    })

    userSchema.post("save", function(doc, next){
        doc.sayHi();
        next()
    })

module.exports = mongoose.model("User",userSchema);