const express = require("express");
const fs = require("fs");
const path = require("path")
const app = express();
const port =  80;
// const firebase = require('firebase');
// const firebaseConfig = {
//     apiKey: "AIzaSyAfcELjuq5W4MdUABqxDh9j1c4OTXTlTYI",
//     authDomain: "finhack2.firebaseapp.com",
//     projectId: "finhack2",
//     storageBucket: "finhack2.appspot.com",
//     messagingSenderId: "366774345785",
//     appId: "1:366774345785:web:d88fea9b91b7bb712aade8"
//   };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
app.use('/static', express.static('static'));
app.use(express.urlencoded());

app.set('view engine', 'pug');
// app.set('view engine', 'html');
app.set('views', path.join(__dirname,'public'));

app.get('/', (req,res)=>{
    const con = "Trust the process..."
    const params = {"title":"Believe", "content":con};
    res.status(200).render('../public/index.pug',params);
});
app.post('/',(req,res)=>{
    form = JSON.stringify(req.body);
    fs.writeFileSync('output.txt',form);
    const params = {"message": 'Your form has been submitted'};
    res.status(200).render('../public/index.pug', params);
});
app.get('/register',(req,res)=>{
    res.render('form.pug');
});
app.post('/register', async(req, res) => {
    try {
    const {email, username, password} = req.body;
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user);
    })
    .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(error);
    });
    res.redirect('/');
    } catch(e) {
    res.redirect('register');
    }
    form = JSON.stringify(req.body);
    fs.writeFileSync('output.txt',form);
    res.render('form.pug');
    })
app.listen(port, ()=>{
    console.log(`started on port ${port}`);
});