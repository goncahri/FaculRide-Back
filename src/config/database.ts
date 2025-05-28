import { Sequelize } from "sequelize";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE_URL!, {
  dialect: "postgres",
  dialectModule: pg,
  protocol: "postgres",
  dialectOptions: {
    ssl: {
      require: false, // desabilite se estiver local
      rejectUnauthorized: false
    }
  },
  logging: false
});

export default sequelize;




