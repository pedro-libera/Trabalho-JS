const axios = require("axios");

module.exports = {
    async arrayNomesPersonagens (req, res) {

        const responseFilms = await axios.get(`https://swapi.dev/api/films/${req.params.numero}`);

        const arrayUrlPersonagens = responseFilms.data.characters;

        let arrayNomes = []

        for (let i = 0; i < arrayUrlPersonagens.length; i++) {
            let responsePersonagens = await axios.get(arrayUrlPersonagens[i]);
            console.log(responsePersonagens.data.name)
            arrayNomes.push(responsePersonagens.data.name);
        }

        res.json({
            "data": arrayNomes
        });
    }

    /* funcaoTeste(req, res) {
        return res.send("fdc")
    } */
};
