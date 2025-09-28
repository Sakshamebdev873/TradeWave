import express, { Request, Response } from 'express';
const app = express()
import * as dotenv from 'dotenv'
import sequelize from './config/database';

dotenv.config()
const PORT = process.env.PORT || 3001;
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the TradeWave API!');
});

const start = async () =>{
try {
  await sequelize.authenticate()
  await sequelize.sync({ alter: true });
   console.log('[database]: Connection has been established successfully.');
   console.log('[database]: All models were synchronized successfully.');

    app.listen(PORT, () => {
      console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });
} catch (error) {
  console.error('[server]: Unable to connect to the database:', error);

}
}
start()