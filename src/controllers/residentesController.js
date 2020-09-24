const axios = require("axios");

module.exports = {
    async arrayResidentesPlanetas (req, res){

        const responsePlanets = await axios.get(`https://swapi.dev/api/planets/${req.params.numero}`);

        const arrayUrlResidentes = responsePlanets.data.residents;

        let arrayResidentes = [];

        for (let i = 0; i < arrayUrlResidentes.length; i++) {
            let responseResidentes = await axios.get(arrayUrlResidentes[i]);
            console.log(responseResidentes.data.residents)
            arrayResidentes.push(responseResidentes.data.residents);
        }

        res.json({
            "data": arrayResidentes
        });
    }
};