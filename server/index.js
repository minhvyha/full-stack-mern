const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModal = require('./models/Users')

const cors = require('cors')

app.use(express.json())
app.use(cors())

mongoose.connect('mongodb+srv://Minhvy828:???@cluster0.jxniums.mongodb.net/mern-tutorial?retryWrites=true&w=majority')

app.get('/getUsers', (req, res) => {
    UserModal.find({}, (err, result) =>{
        if (err){
            res.json(err)
        }
        else{
            res.json(result)
        }
    })
})

app.post('/createUser', async (req, res) =>{
    const user = req.body
    const newUser = new UserModal(user)
    await newUser.save()

    res.json(user)
})

app.listen(3001, ()=>{
    console.log('server runs')
})
