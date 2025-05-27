import express from "express";
import cors from "cors";

import usuarioRoutes from "./routes/usuario.routes";
import avaliacaoRoutes from "./routes/avaliacao.routes";
import veiculoRoutes from "./routes/veiculo.routes";
import viagemRoutes from "./routes/viagem.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/usuario", usuarioRoutes);
app.use("/api/avaliacao", avaliacaoRoutes);
app.use("/api/veiculo", veiculoRoutes);
app.use("/api/viagem", viagemRoutes);

// Exporta para uso pelo Vercel (sem app.listen)
export default app;
