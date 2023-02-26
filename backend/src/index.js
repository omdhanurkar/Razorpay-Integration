const express = require("express");
const app = express();
const mongoose = require("mongoose");
const router = require("./routes/route")
require('dotenv').config();
mongoose.set('strictQuery', true)
const cors = require("cors")

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://localhost:27017/razorpay", {
    useNewUrlParser: true
})
    .then(() => console.log("MongoDB is Connected"))
    .catch(err => console.log(err))

app.use("/", router)


app.listen(process.env.PORT || 4000, () => {
    console.log(`Express app running on port ${process.env.PORT || 4000}`)
})
