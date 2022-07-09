const fs=require('fs')

exports.homeController=(req,res)=>{
   //Error test 
   /* const error=new Error("bad request")
    error.status=400
    throw error*/
    fs.readFile('./home/home.html',(err,data)=>{
        if(err){
            console.log("Error",err)
            res.send("something went wrong")
        }else{
            res.write(data)
            res.end()
        }
    })
}

exports.aboutController=(req,res)=>{
    console.log(req.url)
    fs.readFile('./about/about.html',(err,data)=>{
    if(err){
        console.log("Error",err)
        res.send("something went wrong")
    } else{
        res.write(data)
        res.end()
    }
    })
}
