const axios = require('axios');
const { Router } = require('express');

const router = Router();

/** TABLAS CREADAS */

const Activities = require('../models/Activities.js');
const Country = require('../models/Country.js');


/** RUTAS CREADAS */

const countriesRouter = require('./countries.routes.js')
const activitiesRouter = require('./activities.routes.js')

/**CARGA DE LA TABLA DE COUNTRY, SE RESETEA EN CADA LLAMADA SYNC{FORCE: TRUE} */

axios.get("https://restcountries.com/v3/all")
    .then(async response => {
        await Country.sync({ force: true })
        response.data.map(async pais => {
            if(pais.flags && pais.capital){
                await Country.create({
                    id: pais.cca3,
                    name: pais.name.common,
                    flag: pais.flags[1],
                    continent: pais.continents[0],
                    capital: pais.capital[0],
                    subregion: pais.subregion,
                    area: pais.area,
                    population: pais.population
                })
            }
        })
    });



/**RUTAS PRINCIPALES */

router.get('/', (req, res)=>{
    res.sendStatus(200)
})

router.use('/countries', countriesRouter)
router.use('/activities', activitiesRouter)

module.exports = router;
