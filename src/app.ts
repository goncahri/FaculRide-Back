import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuario.routes";
// outras rotas...

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/usuario", usuarioRoutes);
// outras rotas...

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});

