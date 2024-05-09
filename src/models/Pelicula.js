import {Sequelize, DataTypes} from "sequelize";
import sequelize from "../db/database.js";

import Categoria from "./Categoria.js";

const Pelicula = sequelize.define(
    'Pelicula',
    {
        Nombre: DataTypes.STRING,
        Description: DataTypes.TEXT,
        Puntuacion: DataTypes.INTEGER,
        Duracion: DataTypes.INTEGER
    }
)

Pelicula.hasOne(Categoria);

export default Pelicula 