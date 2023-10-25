import "reflect-metadata"
import { DataSource } from "typeorm"
import app from "../app/app"

import { Users1698244426218 } from "../migrations/1698244426218-users"
import { Tasks1698254835589 } from "../migrations/1698254835589-tasks"
import { Products1698256636046 } from "../migrations/1698256636046-products"
import { UsersProducts1698257086131 } from "../migrations/1698257086131-users_products"

const database = new DataSource({
    type: "mysql",
    host: app.get("DB_HOST"),
    port: app.get("DB_PORT"),
    username: app.get("DB_USERNAME"),
    password: app.get("DB_PASSWORD"),
    database: app.get("DB_NAME"),
    migrations: [
        Users1698244426218,
        Tasks1698254835589,
        Products1698256636046,
        UsersProducts1698257086131
    ],
    entities: [],
    synchronize: false,
    logging: false,
})

export default database