import { model, Schema } from "mongoose";

const livroSchema = new Schema(
  {
    nome: {
      type: String,
      required: [true, "O campo 'nome' é obrigatório!"],
    },
    isbn: {
      type: String,
      required: [true, "O campo 'isbn' é obrigatório!"],
    },
    preco: {
      type: Number,
      required: [true, "O campo 'preço' é obrigatório!"],
    },
    criadoEm: {
      type: Date,
      default: Date.now
    }
  },
  {
    timestamps: true,
  }
);

export default model("livros", livroSchema);
