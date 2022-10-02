const Activities = require('../models/Activities.js')
const Country = require('../models/Country.js')

const express = require('express');
const { getCountrys, getCountry } = require('../controllers/countries.controller.js');

const router = express();


router.get('/all', getCountrys)

router.get('/one/:id', getCountry)



module.exports = router;