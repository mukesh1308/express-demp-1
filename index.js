const express=require("express");
const favicon=require("express-favicon")


const app=express();
const port=3030;

app.use(favicon(__dirname+"/node-js-black-icon.png"));
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.set('view engine',"hbs");
app.set("views",__dirname+"/view");

app.get("/",async(req,res)=>{
    try{
        res.sendFile(__dirname+"/view/form.html");
    }
    catch(err){
        res.status(500);
        res.send("Error");
    }
});

app.post("/validate",async(req,res)=>{
    try{
        res.render("display",req.body);
    }
    catch(err){
        res.status(500);
        res.send("Error");
    }
})


app.listen(port,()=>{
    console.log(`listening to port ${port}`);
})