
const server = require('./src/app.js');
const sequelize = require('./src/db.js');

async function main(){
  try {
    await sequelize.sync({force: false})
    server.listen(process.env.PORT || 3001, ()=>console.log("server is listening"))
  } catch (error) {
    console.log(error)
  }
}

main();


