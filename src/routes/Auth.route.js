const router =require("express").Router()
router.get("/",(req,res)=>{
    res.json({msg:"checking done"})
})
module.exports= router