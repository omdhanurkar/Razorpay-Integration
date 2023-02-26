const Razorpay = require("razorpay")
require('dotenv').config();
const crypto = require("crypto")
const Payment = require("../models/paymentModel")


//===========================configure razorpay=================================================
const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_APT_SECRET,
});


//================================================================================================

const checkout = async (req, res) => {
    var options = {
        amount: Number(req.body.amount * 100), //convert paise to rs 
        currency: "INR",

    };
    const order = await instance.orders.create(options)
    res.status(200).json({ success: true, order })

}
//====================================================================================================

const paymentVerification = async (req, res) => {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = req.body;

    const body = razorpay_order_id + "|" + razorpay_payment_id;

    const expectedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_APT_SECRET)
        .update(body.toString())
        .digest("hex");

    

    const isAuthentic = expectedSignature === razorpay_signature;

    if (isAuthentic) {
        // Database comes here

        await Payment.create({
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature,
        });

        res.redirect(
            `http://localhost:3000/PaymentSuccess?reference=${razorpay_payment_id}`
        );
    } else {
        res.status(400).json({
            success: false,
        });
    }
    
}

module.exports = { checkout, paymentVerification }