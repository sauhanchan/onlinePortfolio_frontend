import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config({path: "./configV2.env"});

//require("dotenv").config({path: "./configV2.env"})


async function main(){
    const dB = "mongodb+srv://schan253:0dIyNEx1OZahT30E@cluster0.1t9tfnd.mongodb.net/?retryWrites=true&w=majority";

    const client = new MongoClient(dB);

    try{
        await client.connect();
        const collections = await client.db("Projects").collections();
        collections.forEach((collection)=>console.log(collection.collectionName));
    } catch(e){
        console.error(e);
    } finally{
        await client.close();
    }
}

export default main;

main();