const express = require('express')
const app = express();
const port = 3003;
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/Login')
const cors = require('cors')
// const session = require('express-session');
// const passport = require('passport')
// const LocalStrategy = require('passport-local')


app.use(express.json())
app.use(cors())
app.listen(port,()=> {
    console.log('App in istening on :', port )
})

const signupSchema = new mongoose.Schema({
    "email":String,
    "password": {
        type:String,
        min:8
    },
    "confirm_password":Boolean,
    "firstName":String,
    "surName":String,
    date_of_birthday: {
        type: String
    }
})

const SignupModel = mongoose.model("sign",signupSchema)

app.post('/signup',async(req,res,next) => {
    const body = req.body;
    console.log(body)
    const newSign = new  SignupModel(body)
    try {
        const sign = await newSign.save()
        res.json(sign)
    }catch(err) {
        console.log(err)
        res;status(500).send("internal sever error")
    }
})
// passport.use(new LocalStrategy(async(username,password,done) => {
//    try {
//        const user = await UserModel.findOne({
//            username
//        }).exec()
//            console.log('user', user)
      
//    } catch(err) {
//        console.error(err)
//        done(null,false)
//    }
// }))