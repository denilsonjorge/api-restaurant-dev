import { Router } from "express";
import CategoriaController from "./categoria.controller.js";
const router = Router();

router.get("/categorias",CategoriaController.categorias);
router.post("/categoria", CategoriaController.criarCategoria);
router.get("/categoria/:id", CategoriaController.categoria);
router.put("/categoria/:id", CategoriaController.atualizaCategoria);
router.delete("/categoria/:id", CategoriaController.ApagarCategoria);

export default router