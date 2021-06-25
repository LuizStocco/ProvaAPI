import { Request, Response } from "express";
import LivroSchema from "../models/LivroSchema";

class LivrosController {
  async listar(request: Request, response: Response) {
    response.status(200).json(await LivroSchema.find({}));
  }

  async cadastrar(request: Request, response: Response) {
    const novoLivro = await LivroSchema.create(request.body);
    response.status(201).json(novoLivro);
  }
}

export { LivrosController };
