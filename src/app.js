import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended : true}));
//require paths get
import UserRouter from "./Routes/User.route.js";


app.use("/api/user",UserRouter)



export default app;