import * as dotenv from 'dotenv'
import { Sequelize } from 'sequelize'
dotenv.config()


if(!process.env.DATABASE_URL){
    throw new Error('DATABASE_URL environment variable is not set')
}
const sequelize = new Sequelize(process.env.DATABASE_URL,{
    dialect : 'postgres',
    protocol : 'postgres',
    dialectOptions : {
        ssl : {
            require : true,
            rejectUnauthorized: false,
        }
    },logging: false,
})
export default sequelize