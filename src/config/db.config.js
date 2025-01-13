const { default: mongoose } = require("mongoose");
const { PUBLIC_DATA } = require("../../constant")

exports.ConnectDB = async()=>{
    try{
        await mongoose.connect(PUBLIC_DATA.mongo_uri)
        console.log(`you are connected with ${mongoose.Connection.host}`);
        
    }catch(error){
        mongoose.disconnect();
        process.exit(1)
    }
    
}