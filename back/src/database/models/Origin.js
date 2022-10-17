const sequelize = require("sequelize");

module.exports = (sequelize, dataTypes) =>{
    let alias = "Origins";
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true, 
            autoIncrement: true
        } ,
        name: {
            type: dataTypes.STRING 
        }
    }; 
    let config = {
        tableName : "origins",
        timestamps : false
    }

    const Origin = sequelize.define(alias , cols , config)

    Origin.associate = function (models) {
        Origin.hasMany (models.Products, {
            as : "products",
            foreignKey: "origin_id"
        })         
    }

    return Origin;
}