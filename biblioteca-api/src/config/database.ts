import mongoose from "mongoose";

mongoose
  .connect(
    "mongodb+srv://12345:12345@cluster0.qe1gi.mongodb.net/Biblioteca?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    console.log("Aplicação conectada ao banco de dados!");
  })
  .catch((error) => {
    console.log(`Erro ao conectar com o banco: ${error}`);
  });

export { mongoose };
