const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModal = require('./models/Users')

mongoose.connect('mongodb+srv://Minhvy828:btePbYdd3W4XfAHM@cluster0.jxniums.mongodb.net/mern-tutorial?retryWrites=true&w=majority')

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
// btePbYdd3W4XfAHM