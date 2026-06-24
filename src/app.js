import express from "express";
import sequelize from "./config/database.js";
import categoriaRouter from "./modules/categoria/categoria.routes.js";
import pratoRouter from "./modules/prato/prato.routes.js";

const app = express();
const port = 8080

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use("/",categoriaRouter,pratoRouter);

app.listen(port,()=>console.log(`Server listenning on port ${port}`));