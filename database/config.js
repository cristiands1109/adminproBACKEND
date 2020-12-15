const mongoose = require('mongoose');

const dbConnection = async () => {

    try {
        
        await mongoose.connect(process.env.DB_CNN,{
            useUnifiedTopology: true,
            useCreateIndex: true,
            useNewUrlParser: true
        });

        console.log('DB ONline');

    } catch (error) {

        console.log(error);
        throw new Error('Error al inicializar la BD');
        
    }


    // user: mean_user
    // pass: afF65hNTfWFTblWK



}
module.exports = {
    dbConnection
}