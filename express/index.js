import express from 'express';
import 'dotenv/config'


const app =express();

app.get('/',(req,res)=>{
    res.send('Hello world!')
})

app.get('/pranish',(req,res)=>{
    res.send('Hello world tweet!')
    console.log(req.body)
})

//linda
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});
