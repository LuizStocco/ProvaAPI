import { Router } from "express";
import { LivrosController } from "../controllers/LivrosController";

const router = Router();
const livrosController = new LivrosController();

router.post("/livro/cadastrar", livrosController.cadastrar);
router.get("/livro/listar", livrosController.listar);

export { router };
