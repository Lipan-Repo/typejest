import { Application } from "express";

const routes=(app:Application)=>{
    app.listen(3000,()=>{
        console.log("server is running now")
    })
}
export default routes;