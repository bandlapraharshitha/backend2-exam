const express = require('express');
const app = express();
app.use(express.json())
PORT = 4000

const users = [
    {email:"princy@gmail.com", password:"princy"}
]

app.post('/login',(req,res) => {
    const {email,password} = req.body;
    if (!email) {
        return res.status(400).json({error:"Email cannot be empty"})
    }
    if (!password) {
        return res.status(400).json({error:"Password cannot be empty"})
    }
    const user = users.find(p => p.email === email && p.password === password )
    if (!user) {
        return res.status(400).json({error:"User not found"})
    } else {
        return res.status(200).json({message:"Successfully logged in", user: {email}})
    }
})

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`)
})