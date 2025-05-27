// Importação da biblioteca express
import express from "express";
import cors from "cors";
import usuarioRoutes from "./src/routes/usuario.routes";
import avaliacaoRoutes from "./src/routes/avaliacao.routes";
import veiculoRoutes from "./src/routes/veiculo.routes";
import viagemRoutes from "./src/routes/viagem.routes";

// Criação da aplicação
const app = express();

// Habilita CORS (recomendado para integração com front-end)
app.use(cors());

// Configura aplicação para receber json no body das requisições
app.use(express.json());

// Prefixo /api para todas as rotas
app.use("/api/usuario", usuarioRoutes);
app.use("/api/avaliacao", avaliacaoRoutes);
app.use("/api/veiculo", veiculoRoutes);
app.use("/api/viagem", viagemRoutes);

// ✅ Exporta para uso com Vercel (sem app.listen)
export default app;
