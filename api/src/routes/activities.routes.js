const Activities = require('../models/Activities.js')
const Country = require('../models/Country.js')

const express = require('express');


const router = express();


router.post('/', async (req, res)=>{
    let {name, dificulty, duration, season, country} = req.body.input;
    
    if(name && dificulty && duration && season){
        console.log("llego " + country)
        try {
            console.log(name, dificulty, duration, season, country)
            const act = await Activities.create({
                name: name,
                dificulty: dificulty,
                duration: duration,
                season: season
            })
            

            const pais = await Country.findAll({
                where: {id: country}
            })
            
            const union = await act.addCountry(pais)
            res.json(union);
        } catch (error) {
            console.log(error)
        }
    }
})

router.get('/', async (req, res)=>{
    let actividades = await Activities.findAll({
        include: [Country]
    })
    res.json(actividades);
})

router.put('/', async (req, res)=>{
    let {name, dificulty, duration, season, country} = req.body.input;
        
    if(name && dificulty && duration && season && country){

        let id = parseInt(country);

        await Activities.update({
            name: name,
            dificulty: dificulty,
            duration: duration,
            season: season
        },{
            where: {id: id}
        })
        res.status(200).send("Success");
    }else{
        res.status(404).send("Missing data...")
    }
})

router.delete('/:id', async (req, res)=>{
    
    let {id} = req.params;

    if(id){
        await Activities.destroy({
            where: {id: id}
        })
        res.status(200).send("Success")
    }else{
        res.status(404).send("Missing data...")
    }
})

module.exports = router;