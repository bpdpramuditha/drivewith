
import express from "express";
import mongoose from "mongoose";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/drivewith");

const ContactSchema = new mongoose.Schema({
  name:String,
  email:String,
  message:String
});

const Contact = mongoose.model("Contact", ContactSchema);

app.post("/api/contact", async (req,res)=>{
  const msg = new Contact(req.body);
  await msg.save();
  res.json({success:true});
});

app.listen(5000, ()=>console.log("Server running on 5000"));
