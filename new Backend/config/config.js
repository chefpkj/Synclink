const {devDBurl,secretKey,DBUSERNAME,DBPASSWORD,DBHOST,DBNAME}=process.env
let configs={
    "development":{
        "dbUrl":devDBurl,
        "auth":{
            secret:secretKey
        }

    },
    "staging":{
        "dbUrl":devDBurl,
        "auth":{
            secret:secretKey
        }

    },
    "production":{
        "dbUrl":`mongodb+srv://${DBUSERNAME}:${DBPASSWORD}@${DBHOST}/${DBNAME}`,
        "auth":{
            secret:secretKey
        }

    }
}

let env=process.env.NODE_ENV || "development";

configs=configs[env];

let {dbUrl,auth}=configs;
export {dbUrl,auth};