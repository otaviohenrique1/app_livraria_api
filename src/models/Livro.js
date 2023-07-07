import mongoose from "mongoose";

const livroSchema = new mongoose.Schema(
  {
    id: { type: String },
    titulo: { type: String, required: true },
    autor: { type: String, required: true },
    editora: { type: String, required: true },
    preco: { type: Number, required: true },
    numeroPaginas: { type: Number, required: true },
  }
);

const livros = mongoose.model("livros", livroSchema);

export default livros;