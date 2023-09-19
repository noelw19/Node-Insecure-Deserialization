import express from "express";
import { serialize, unserialize } from "node-serialize";
import cookieParser from "cookie-parser";


let app = express();
app.use(cookieParser())

let PORT = 8080;
let HOST = '0.0.0.0';

// {"username":"Noel","country":"PNG","city":"Port Moresby"}
app.get('/', function(req, res) {
    if (req.cookies.profile) {
      var str = new Buffer.from(req.cookies.profile, 'base64').toString();
      var obj = unserialize(str);
      if (obj.username) {
        let {username, country, city} = obj;
        res.send(`Logged In:\n\nUsername: ${username}\nCountry: ${country}\nCity: ${city}`);
      }
    } else {
        res.send('No User Logged In')
    } 
});

app.listen(PORT, HOST, () => {
    console.log('Server running on ', PORT)
})
