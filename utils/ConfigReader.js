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

