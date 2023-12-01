const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const Gallery = sequelize.define('gallery', {
    image: {
        type: DataTypes.STRING,
    }
})

module.exports = Gallery