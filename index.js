const dotenv = require('dotenv')
const cors = require('cors')
dotenv.config()
var express=require("express");
var port=process.env.PORT;
console.log(port)
var app=express();

let invitations = [
    {
        'name': 'invitation 1',
        'image_url':'https://img.freepik.com/free-psd/wedding-invitation-greeting-cards-elegant-vintage-style_1340-49454.jpg',
    },
    {
        'name': 'invitation 2',
        'image_url':'https://d3jmn01ri1fzgl.cloudfront.net/photoadking/webp_thumbnail/elegant-grand-opening-invitation-template-8ayyrh220da5a4.webp',
    }
    
]

app.use(cors())
app.use(express.json())
app.get("/hello",(req,res)=>res.send("helloworldaa"));
app.post("/count",(req,res)=>{
console.log(req.body);
res.end()
});
app.get("/invitationcards",(req,res)=>{
    res.json(invitations);
})




app.listen(port,()=>console.log("server started"));