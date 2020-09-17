const express = require("express");
const routes = express.Router();
const axios = require("axios");

routes.get("/starwars/filmes/:numero", async (req, res) => {


    const response = await axios.get(`https://swapi.dev/api/films/${req.params.numero}`);

    const arrayUrlPersonagens = response.data.characters;

    async function nomesPersonagens() {
       /*  let arrayNomes = []; */

        const arrayNomes = await arrayUrlPersonagens.map(async (url) => {

            const personagem = await axios.get(url);

            return personagem.data.name ;
        });

        console.log(arrayNomes)

        return  new Promise((resolve, reject)=>{
            if(arrayNomes){
                resolve(arrayNomes)
            }else{
                reject("deu errado")
            }
        });
    };

    const resposta = await nomesPersonagens();

    res.json({
        "data": resposta
    });
});



module.exports = routes;