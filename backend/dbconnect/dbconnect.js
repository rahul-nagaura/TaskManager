import mongoose from 'mongoose';


export const dbconnect = async() => {
    mongoose.connect(process.env.mongo_url)
        .then(() => {
            console.log("mongodb connected successfully");
        })
        .catch((error) => {
            console.log("something went wrong while connecting to the server");
        })
}
