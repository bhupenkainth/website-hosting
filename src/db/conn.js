const mongoose = require("mongoose");
const express = require('express');
const app = express();


const DB = 'mongodb+srv://bhupenkainth:backend@cluster0.npn57.mongodb.net/mernstack?retryWrites=true&w=majority';

mongoose.connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false

}).then(() => {
    console.log(`connection successful`);
}).catch((err) => console.log(`no connection`));

mongoose.connect("mongodb://localhost:27017/youtubeRegistration", {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
