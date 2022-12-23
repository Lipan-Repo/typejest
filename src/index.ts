import  express, { Application }  from "express";
import routes from "./app";
const app:Application=express();
//const port=3000
routes(app)


app.get('/',(req,res,next)=>{
     let user=[{name:"lipan",id:1}]
    
    res.send(user)
    next()
})
export default app;