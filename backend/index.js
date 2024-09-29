import express from 'express'

const app = express();

// app.get("/home",(req,res)=>{
//     return res.status(200).json({message:'i am coming from backend',success:true})
// })

const PORT = 8080;

app.listen(PORT , ()=>{
    console.log(`Server running at port ${PORT}`)
})