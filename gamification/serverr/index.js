const express = require('express');
const mongoose = require('mongoose');
const taskRouter = require('./routes/taskRoutes');
const userRouter = require('./routes/userRouter');
const rewardRouter = require('./routes/rewardRoute');
const communityRouter = require('./routes/communityRoute');
const badgesRouter = require('./routes/badgesRoute');
const dotenv = require('dotenv');

const cors = require('cors');

// mongodb+srv://HamzaNemer:DhZJfFv3zpjq6JV@cluster0.rp89krz.mongodb.net/gamification?retryWrites=true&w=majority
// mongodb://localhost:27017/lastProject
mongoose.connect('mongodb+srv://HamzaNemer:DhZJfFv3zpjq6JV@cluster0.rp89krz.mongodb.net/gamification?retryWrites=true&w=majority')
.then(()=>console.log('connect to DB'))
.then(()=>app.listen(5000,()=>{
    console.log('listining on port', 5000)
}))
.catch((error)=>{
    console.log(error)
})

//express app
const app = express();

app.use(cors())

app.use(express.json());

// routes
app.use('/task', taskRouter)
app.use('/user' , userRouter)
app.use('/reward' , rewardRouter)
app.use('/community', communityRouter)
app.use('/badges' , badgesRouter)


// listen for requets
// app.listen(5000,()=>{
//     console.log('listining on port', 5000)
// })