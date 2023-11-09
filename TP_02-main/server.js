const express=require("express")
const app=express()

require("dotenv").config()

const port=process.env.PORT || 3000


app.set("view engine","ejs")
app.set("views","views")


app.get("/",(req,res,next)=>{
    res.render("index.ejs")
})



app.listen(port,()=>{
    console.log("server is on",port)
})