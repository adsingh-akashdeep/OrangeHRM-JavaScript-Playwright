import dotenv from 'dotenv';
dotenv.config();


export class ConfigReader{

    static getProperty(key){
        return process.env[key]
    }

    static getLongProperty(key){
        const value = process.env[key];
        return value ? Number(value) : null;
    }

}

/*
| Term   | ------------- Meaning ---------| ------------ Example -----------------|
| `.env` | File that stores configuration | `BASE_URL=https://jmird.testrail.io/` |
| `dotenv` | Library that reads `.env` and injects values into`process.env` | `dotenv.config()` |
*/ 
