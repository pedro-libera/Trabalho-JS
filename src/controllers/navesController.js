const axios = require("axios");
const { response } = require("express");

module.exports ={
    async arrayNomesNaves (req, res) {

        const responseFilms = await axios.get(`https://swapi.dev/api/films/${req.params.numero}`)

        const arrayUrlNaves = responseFilms.data.starships;

        let arrayNaves = []

        for (let i = 0; i < arrayUrlNaves.length; i++) {
            const responseNaves = await axios.get(arrayUrlNaves[i]);
            console.log(responseNaves.data.name);
            arrayNaves.push(responseNaves.data.name);
        }

        res.json({
            "nomes_naves": arrayNaves
        });
    }
};