import express from "express";
import { mongoose } from "./config/database";
import { router } from "./config/routes";
import cors from "cors";

console.clear();

const app = express();
const db = mongoose;

app.use(cors());
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log("O servidor está rodando...");
});
