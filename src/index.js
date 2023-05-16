const express=require("express")
require("dotenv").config()
const cors=require("cors")

const recipeRouter=require('./routers/recipesRoutes')
const app=express()

app.use(cors())

app.use((req,res,next)=>{
    const {method,path}=req
    console.log(`New Request to: ${method} at ${path} at ${new Date().toISOString()}`)
    next()
})

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/v1/receipes',recipeRouter)

app.get("/",(req,res)=>{
    res.send(`<h1>hello world from REST API</h1>`)
})
app.get("/user/:name",(req,res)=>{
    res.send(`<h1>hello world <u>${req.params.name}</u> from REST API </h1>`)
})

const port=process.env.PORT || 8080

app.listen(port,()=>{
    console.log(`Server is running on : http://localhost:${port}/api/v1/receipes `)
})