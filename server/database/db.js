import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;


const Connection= async()=>{

    const  URL=`mongodb://${USERNAME}:${PASSWORD}@ac-0kgypz1-shard-00-00.6hhb1si.mongodb.net:27017,ac-0kgypz1-shard-00-01.6hhb1si.mongodb.net:27017,ac-0kgypz1-shard-00-02.6hhb1si.mongodb.net:27017/?ssl=true&replicaSet=atlas-ggnkyr-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
await mongoose.connect(URL,{useUnifiedTopology:true});
console.log('database conected successfully');
    }catch (error) {
console.log('database not connected error:',error.message);
    }
}
export default Connection;