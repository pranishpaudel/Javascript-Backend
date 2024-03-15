import express from 'express';
import 'dotenv/config'


const app =express();

app.get('/',(req,res)=>{
    res.send('Hello world!')
})
//ok
app.get('/pranish',(req,res)=>{
    res.send('Hello world tweet!')
    console.log(req.body)
})
/dsadasda
//lindakdh
app.listen(process.env.PORT,()=>{
    console.log(`Listening on port ${process.env.PORT}`);
});
//jj
