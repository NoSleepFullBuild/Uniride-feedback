import { DataSource } from "typeorm"
import { Feedback } from "@nosleepfullbuild/uniride-library/dist/entity/feedback/feedback.entity";
import { User } from "@nosleepfullbuild/uniride-library/dist/entity/user/user.entity";
import { Trip } from "@nosleepfullbuild/uniride-library/dist/entity/trip/trip.entity";

// read .env
require('dotenv').config();

export const AppDataSource = new DataSource({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    type: 'postgres',
    synchronize: false,
    logging: false,
    entities: [Feedback, User, Trip],
    // migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscribers/**/*{.ts,.js}'],
});

  