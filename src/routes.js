const express = require("express");
const routes = express.Router();
const personagensController = require("./controllers/personagensController");
const residentesController = require("./controllers/residentesController");
const navesController = require("./controllers/navesController");


routes.get("/starwars/personagens/filmes/:numero", personagensController.arrayNomesPersonagens );
/* routes.get("/starwars/personagens/filmes", personagensController.funcaoTeste ); */
routes.get("/starwars/residentes/planetas/:numero", residentesController.arrayResidentesPlanetas );

routes.get("/starwars/naves/filmes/:numero", navesController.arrayNomesNaves);

/* function funcaoTeste(req, res){
    res.send("Oie");
};

routes.get("/pedrotestes", funcaoTeste ); */

module.exports = routes;