import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import playerRoutes from "./routes/playerRoutes.js";
import mapRoutes from "./routes/mapRoutes.js";
// (depois tu adiciona aqui)
// import routineRoutes from "./routes/routineRoutes.js";
// import combatRoutes from "./routes/combatRoutes.js";

dotenv.config();

const app = express();

// Middlewares globais
app.use(cors());
app.use(express.json());

// Rotas registradas
app.use("/api/player", playerRoutes);
app.use("/api/map", mapRoutes);
// app.use("/api/combat", combatRoutes);
// app.use("/api/routine", routineRoutes);

// Healthcheck — muito útil em deploy
app.get("/health", (req, res) => {
  res.json({ status: "ok", game: "Idle com Linhagens" });
});

export default app;
