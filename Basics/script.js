const mongoose = require("mongoose");

//import model
const User = require('./Users');


main().catch(err=>{console.log(err.message)});

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/testdb");

    // Creating document
    //    const user1 = await User.create({
    //         name:"Rohit Kumar",
    //         age:26,
    //         email:"AjithShanmugam040597@gmail.com",
    //         bestFriend:"65acd280aa19119c4d8f7a6c",
    //         hobbies:["Coding", "Cooking"],
    //         address:{
    //             street:"big Street",
    //             city:"Vellore"
    //         }
    //     });
    //     console.log(user1);
                            
    // query the data
        
        // findById
            // const userFind = await User.findById('65acca71218e13c8e717e691');
            // console.log(userFind);

        // find by value
            // const userFind = await User.find({name:"Ajith"});
            // console.log(userFind);

        // set bestfriend value
            // User[10].bestFriend ="65accbc7b3653f3fa59881bf"
            // await User[10].save()
        
        // mongoose simplify searches 
            // const userFind = await User
            // .where("name").equals("ROHIT KUMAR")
            // .where("age").lt(30)
            // .select("name")
            // .select("age")
            // .select("bestFriend")
            // .populate("bestFriend")
            // console.log(userFind);
        
        // Delete
             await User.deleteOne({name:"ajith"});

}




