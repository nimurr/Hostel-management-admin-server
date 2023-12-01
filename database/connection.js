const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  username: 'root',
  database: "hostel-management",
  password: ""
});

sequelize.authenticate().then(() => console.log("DB connected")).catch(error => {
  console.log('CONNECTION ERROR:', error?.message)
})

sequelize.sync({ force: false });

module.exports = sequelize;