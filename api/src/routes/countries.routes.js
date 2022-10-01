const Activities = require('../models/Activities.js')
const Country = require('../models/Country.js')

const express = require('express');

const router = express();

router.get('/', async (req, res)=>{
    let {name} = req.query;
    let country;
    try {
        if(name){
            try {
                country = await Country.findAll({
                    where: {name: name},
                    include: [Activities]
                })
                if(country.length == 0) res.status(404).json({message: 'Country not found'})
                res.status(200).json(country)
            } catch (error) {
                console.log(error)
            }
        }else{
            country = await Country.findAll({
                include: [Activities]
            })
            res.json(country);
        }
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})

router.get('/:idPais', async (req, res)=>{
    
    let { idPais } = req.params;
    try {
        let pais = await Country.findOne({
            where: {id: idPais}
        })
        res.json(pais)
    } catch (error) {
        return res.status(404).json({message: error.message})
    }
})



module.exports = router;