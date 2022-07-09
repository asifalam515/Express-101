const express=require('express')
const cors=require('cors')
const morgan=require('morgan')
const app=express()
app.use(require('./routes'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(morgan('dev'))
app.use(cors())
app.use(globalMiddleWear)
//if signature maintained ,then don't have to call the function

app.use((req,res,next)=>{
const error=new Error('404 not found')
error.status=404;
next(error)
})


//global error middleware
app.use((error,req,res,next)=>{
    console.log(
"Error",error
    )
    if(error.status){
     return   res.status(error.status).send(error.message)
    }

    res.status(500).send("something went wrong")
})

app.listen('4000',()=>{
    console.log("server running on 4000 port")
})

//this is middlewear signature
//if everything seems okay then controller will call response methods(most of the case)
//if everything seems okay then middlewear will call next
function handler(req,res,next){
//read request object
//process request
//response back the result 
}
function middlewearSignature(req,res,next){
next()
}
function localMiddleWare(req,res,next){
    console.log("i am local middleware")
    next()
}
function globalMiddleWear(req,res,next){
    console.log(`${req.method}-${req.url}`)
    console.log("i am a global middlewear")
    if(req.query.bad){
        return res.status(400).send("Bad Request")
    }
    next()
}