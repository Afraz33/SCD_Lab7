import express from 'express';
import mongoose from 'mongoose';
import dotenv from "dotenv";

const app = express();
dotenv.config();
app.get('/',function(req, res){
res.send('I am Afraz')
})


const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!");
});

app.get("/",function(req,res){

    res.send("Hello World");
  
   
  
  })
  
  app.post("/",function(req,res){
  
    res.send("Hello World");
  
   
  
  })
  
  app.listen(3000, () => {
    connect();
    console.log("Server is running on port 3000")
  })