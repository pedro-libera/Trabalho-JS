const express = require("express");
const routes = express.Router();
const personagensController = require("./controllers/personagensController");
const residentesController = require("./controllers/residentesController");


routes.get("/starwars/personagens/filmes/:numero", personagensController.arrayNomesPersonagens );
/* routes.get("/starwars/personagens/filmes", personagensController.funcaoTeste ); */
routes.get("/starwars/residentes/planetas/:numero", residentesController.arrayResidentesPlanetas );

/* function funcaoTeste(req, res){
    res.send("Oie");
};

routes.get("/pedrotestes", funcaoTeste ); */

module.exports = routes;