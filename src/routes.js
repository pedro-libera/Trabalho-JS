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

    console.log(arrayUrlPersonagens)
    console.log(arrayNomes)

    // const createArrayNomes = arrayUrl => new Promise((resolve, reject) => {
    //     try {
    //         const arrayNomesResponse = arrayUrl.map( async url => await axios.get(url))
    //         resolve(arrayNomesResponse)
    //     } catch (error) {
    //         reject(error)
    //     }
    // })

    // const arrayNomes = await createArrayNomes(arrayUrlPersonagens);


    // async function nomesPersonagens() {
    //    /*  let arrayNomes = []; */

    //     const arrayNomes = await arrayUrlPersonagens.map(async (url) => {

    //         const personagem = await axios.get(url);

    //         return personagem.data.name ;
    //     });

    //     console.log(arrayNomes)

    //     return  new Promise((resolve, reject)=>{
    //         if(arrayNomes){
    //             resolve(arrayNomes)
    //         }else{
    //             reject("deu errado")
    //         }
    //     });
    // };

    // const resposta = await nomesPersonagens();

    res.json({
        "data": arrayNomes
    });
});



module.exports = routes;