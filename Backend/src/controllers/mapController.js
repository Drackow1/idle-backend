import * as mapService from "../services/mapService.js";

export async function updateExploredMap(req, res) {
  try {
    const playerId = req.user.id;
    const { explored } = req.body;

    if (!explored || typeof explored !== "object") {
      return res.status(400).json({ error: "Formato inválido de 'explored'" });
    }

    await mapService.saveExploredTiles(playerId, explored);

    res.json({ ok: true });
  } catch (err) {
    console.error("Erro em updateExploredMap:", err);
    res.status(500).json({ error: "Erro interno ao salvar mapa" });
  }
}

export async function getExploredMap(req, res) {
  try {
    const playerId = req.user.id;

    const explored = await mapService.loadExploredTiles(playerId);

    res.json({ explored });
  } catch (err) {
    console.error("Erro em getExploredMap:", err);
    res.status(500).json({ error: "Erro interno ao carregar mapa" });
  }
}
