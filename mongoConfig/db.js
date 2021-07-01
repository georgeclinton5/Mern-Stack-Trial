const mongoose = require('mongoose')


const connectDB = async () => {
    try {
        //database Name
        const databaseName='TestDatabase';
        const connection = await mongoose.connect(`mongodb://127.0.0.1:27017/${databaseName}`, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
        console.log(`Database connected : ${connection.connection.host}`)
    } 
    catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
};

module.exports = connectDB;