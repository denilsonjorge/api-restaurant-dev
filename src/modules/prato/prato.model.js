import sequelize from "../../config/database.js"
import { DataTypes } from "sequelize"

const Prato=sequelize.define("prato",{
    nome:{type:DataTypes.STRING,allowNull:false},
    preco:{type:DataTypes.DECIMAL(10,2),allowNull:false},
    categoriaId:{type:DataTypes.INTEGER,allowNull:false},
})

Prato.sync();

export default Prato