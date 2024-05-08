const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const noteRoutes = require('./routes/note-routes');

const app = express();
const uri = process.env.MONGO_DB_URI;
// const uri = "mongodb+srv://mrabbi:Frr123456789$@cluster0.3dhv2rr.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// const uri = ""
console.log("uri: ", uri);
mongoose.connect(uri);

app.use(cors());
app.use(express.json());
app.use('/notes', noteRoutes);



app.get('/', (req, res)=>{
    res.json({message: "API Works"});
});

app.listen(5777, ()=>{
    console.log("Server is running on port 5777");
});