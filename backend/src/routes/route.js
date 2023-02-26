const express = require("express")

const { checkout, paymentVerification } = require("../controllers/paymentController")
const router = express.Router();
require('dotenv').config();


router.post("/checkout", checkout)

router.post("/paymentverification", paymentVerification)

router.get("/getkey", (req, res) =>
    res.status(200).json({ key: process.env.RAZORPAY_API_KEY })
);
module.exports = router;
