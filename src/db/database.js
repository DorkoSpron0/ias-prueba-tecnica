import { Sequelize } from "sequelize";
import {} from 'dotenv/config'

const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    dialect: 'mssql',
    host: process.env.DB_HOST,
    operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
})

export default sequelize