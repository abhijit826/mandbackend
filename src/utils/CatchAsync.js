const CatchAsync =(fn)=>(req,res,next)=>{
    return Promise.resolve(fn(req,res,next)).catch((e)=>{
        console.log("API BLASTED!");
        next(e)
        

    })
}
module.exports= CatchAsync