import mongoose from "mongoose";


const MONGODB_URI = "mongodb+srv://adeeshakavindu8_db_user:mxwfU4WkL2pVlBt5@cluster0.qmbdeny.mongodb.net/?appName=Cluster0";


if (!MONGODB_URI) {
    throw new Error (
        `MONGODB_URI not found ${Error}`
    );
}

interface MongooseCache {
    conn : typeof mongoose | null; 
    promise : Promise<typeof mongoose > | null; 
}

declare global {
    var mongoose : MongooseCache | undefined;
}

let cached : MongooseCache = global.mongoose || {conn : null , promise : null};

if (!global.mongoose) {
    global.mongoose = cached ;
}

async function connectDB() {

    if (cached.conn)return cached.conn;

    if (!cached.promise) {
        const opts = {
            bufferCommands : false ,
        };

        cached.promise = mongoose.connect(MONGODB_URI ,opts).then((mongoose)=>{
            return mongoose;
        }
        
     )};

    try {
        cached.conn = await cached.promise ;
    } catch (error) {
        cached.promise = null ;
        throw error ;
    }
    
    return cached.conn;
}