import mongoose from "mongoose";



const connectWithDb = () => {
    mongoose.connect("mongodb://localhost:27017/TEST", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Facing Connection Issues");
        console.log(error);
        process.exit(1);
    } ) 
};

export default connectWithDb;