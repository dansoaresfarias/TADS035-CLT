//console.log("TADS035 vai vencer! Escutei um amém?!");
import { AppDataSource } from "./db/data-source";
AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))