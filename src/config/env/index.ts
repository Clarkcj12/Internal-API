import * as dotenv from 'dotenv';

dotenv.config();

const config = {
    mongodb: {
        username: process.env.dbUsername,
        password: process.env.dbPassword,
        address: process.env.dbAddress,
        port: process.env.dbPort,
        database: process.env.dbDatabase
    },
    sql: {
        username: process.env.sqlUsername,
        password: process.env.sqlPassword,
        address: process.env.sqlAddress,
        port: process.env.sqlPort,
        database: process.env.sqlDatabase
    },
    oauth: {
        clientSecret: process.env.oauthClientSecret,
        clientId: process.env.oauthClientId,
        allowedGroups: [8, 4, 44]
    },
}

export default config;
