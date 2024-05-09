import sequelize from "../db/database.js"
import {DataTypes} from 'sequelize'

const Categoria = sequelize.define(
    'Categorias',
    {
        nombre: DataTypes.STRING
    }
)

export default Categoria