require('dotenv').config();
const express=require('express');
const router=require('./Router/Router');
const port=process.env.PORT;
const cors=require('cors');
const app=express();

app.use(express.json());
app.use(cors());
app.use("/pessoa",router);


app.listen(port,()=>{
    console.log("Servidor Rodando");
})