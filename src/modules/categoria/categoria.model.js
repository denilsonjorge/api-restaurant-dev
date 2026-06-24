import sequelize from "../../config/database.js"
import { DataTypes } from "sequelize"

const Categoria=sequelize.define("categoria",{
    nome:{type:DataTypes.STRING,allowNull:false},
    ativo:{type:DataTypes.BOOLEAN,defaultValue:true,allowNull:false}
})

Categoria.sync();

export default Categoria