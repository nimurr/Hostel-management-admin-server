const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const CoreMembers = sequelize.define('coremember', {
    image: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    roomName: {
        type: DataTypes.STRING,
    },
    roomPrice: {
        type: DataTypes.STRING,
    },
    roomDetails: {
        type: DataTypes.STRING,
    }
})

module.exports = CoreMembers