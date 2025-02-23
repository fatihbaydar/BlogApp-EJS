"use strict"

const mongoose = require("mongoose")

// const MONGODB = process.env.MONGODB || "mongodb://localhost:27017/blogAPI"
// mongoose.connect(MONGODB)

mongoose.connect(process.env.MONGODB)
    .then(() => console.log(" Connected to Database "))
    .catch((err) => console.log(" Failed to Connect to Database ", err))