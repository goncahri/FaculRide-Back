import { Sequelize } from "sequelize";
import pg from "pg"; // 👈 IMPORTAÇÃO explícita do módulo pg
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  dialectModule: pg, // 👈 Aqui você força o Sequelize a usar o módulo pg
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  logging: false
});

export default sequelize;



