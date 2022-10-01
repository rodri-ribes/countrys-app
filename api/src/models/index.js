const Country = require('./Country.js')
const Activities = require('./Activities.js')

Country.belongsToMany(Activities, {
    through: 'country_act',
    targetKey: 'id'
})

Activities.belongsToMany(Country, {
    through: 'country_act'
})
