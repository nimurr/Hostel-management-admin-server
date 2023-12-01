const { DataTypes } = require("sequelize");
const sequelize = require("../database/connection");

const HotelRoom = sequelize.define('hotel-room', {
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
    },
})

module.exports = HotelRoom