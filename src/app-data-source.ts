import { DataSource } from "typeorm"
import 'reflect-metadata';
import { Feedback } from "@nosleepfullbuild/uniride-library/dist/entity/feedback/feedback.entity";

export const AppDataSource = new DataSource({
    host: 'localhost',
    port: 5432,
    username: 'user',
    password: 'password',
    database: 'postgres',
    type: 'postgres',
    synchronize: true,
    logging: false,
    entities: [Feedback],
    migrations: ['src/migrations/**/*{.ts,.js}'],
    subscribers: ['src/subscribers/**/*{.ts,.js}'],
});

  