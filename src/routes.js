const express = require("express");
const routes = express.Router();
const axios = require("axios");

routes.get("/starwars/filmes/:numero", async (req, res) => {

    const response = await axios.get(`https://swapi.dev/api/films/${req.params.numero}`);

    const arrayUrlPersonagens = response.data.characters;

    let arrayNomes = []

    for(let i = 0; i < arrayUrlPersonagens.length; i++) {
        let nome =  await axios.get(arrayUrlPersonagens[i]);
        console.log(nome.data.name)        
        arrayNomes.push(nome.data.name);
    }  

    res.json({
        "data": arrayNomes
    });
});



module.exports = routes;