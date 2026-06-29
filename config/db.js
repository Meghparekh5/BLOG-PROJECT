const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://parekhmegh155_db_user:Cookie11@admin-management.fa6kttj.mongodb.net/?appName=admin-management');

const db = mongoose.connection;

db.once('open',(err) =>{
    if(err){
        console.log(err);
        return false;
    }
    console.log('DATABASE CONNECTION SUCCESFULLY');
});

module.exports = db;
