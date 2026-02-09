/* =========================================================
   BANCO EM MEMÓRIA — DEPOIS TROCA POR POSTGRES
========================================================= */

const mapExplorationDB = new Map();
// estrutura:
// mapExplorationDB.set(playerId, { "0,0": true, "1,0": true, ... })


/* =========================================================
   SALVAR MAPA EXPLORADO
========================================================= */

export async function saveExploredTiles(playerId, exploredTiles) {
  // exploredTiles pode ser um objeto ou array — tu decide no front
  const data = {};

  // transforma em chave:valor => "x,y": true
  for (const key in exploredTiles) {
    data[key] = true;
  }

  mapExplorationDB.set(playerId, data);
}


/* =========================================================
   CARREGAR MAPA EXPLORADO
========================================================= */

export async function loadExploredTiles(playerId) {
  return mapExplorationDB.get(playerId) || {};
}
