const Country = require('../models/Country.js')
const Activities = require('../models/Activities.js')

const getCountrys = async (req, res) => {
    let countrys = await Country.findAll({
        include: [Activities]
    })
    res.json(countrys);
}

const getCountry = async (req, res) => {

    let { id } = req.params;

    try {
        if (id) {
            try {
                let country = await Country.findOne({
                    where: { id: id.toUpperCase() },
                    include: [Activities]
                })
                if (!country) res.status(404).json({ message: 'Country not found' })
                // console.log(country)
                res.status(200).json(country)
            } catch (error) {
                console.log(error)
            }
        }
    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

module.exports = {
    getCountry,
    getCountrys
}