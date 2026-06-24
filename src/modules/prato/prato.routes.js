import PratosController from "./prato.controller.js";
import {Router} from "express";
const pratoRouter=Router();


pratoRouter.get("/pratos",PratosController.pratos);
pratoRouter.get("/pratos/categoria",PratosController.buscarPorCategoria);
pratoRouter.post("/prato",PratosController.criar);
pratoRouter.get("/prato/:id",PratosController.BuscarPratoPorId);
pratoRouter.put("/prato/:id",PratosController.atualiza);
pratoRouter.delete("/prato/:id",PratosController.apagar);

export default pratoRouter;