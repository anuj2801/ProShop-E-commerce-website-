import mongoose from "mongoose";
const url = "mongodb+srv://gagandatt123:IRaQnoyMcAP6QAzM@cluster0.he2c7.mongodb.net/proshop?retryWrites=true&w=majority"
// const url = "mongodb://127.0.0.1/proshop"
const connectDB = async ()=>{
    try{
        const conn = await mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true})
        console.log(`MongoDB Connected :${conn.connection.host}`.cyan.underline);
    }catch(error){
        console.error(`Error: ${error.massage}`.red.underline.bold)
        process.exit(1)
    }
}
export default connectDB