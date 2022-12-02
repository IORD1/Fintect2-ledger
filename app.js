const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();
const port =  80;

app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
app.set('public',path.join(__dirname,'public'));

app.get('/', (req,res)=>{
    const con = "Trust the process..."
    const params = {"title":"Believe", "content":con};
    res.status(200).render('form.pug',params);
});
app.post('/',(req,res)=>{
    form = JSON.stringify(req.body);
    fs.writeFileSync('output.txt',form);
    const params = {"message": 'Your form has been submitted'};
    res.status(200).render('form.pug', params);
});

app.listen(port, ()=>{
    console.log(`started on port ${port}`);
});