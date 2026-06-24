import { Sequelize } from "sequelize";

const sequelize=new Sequelize({
    dialect:"sqlite",
    storage:"./restaurant.sqlite"
});

try {
    sequelize.authenticate();
    console.log("base de dados conectado")
} catch (error) {
    console.log("erro ao conectar base de dados")    
}

export default sequelize;