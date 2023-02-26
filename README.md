# Razorpay-Integration

### Payment Integration with Razorpay
***
# Razorpay Test App for Nodejs
Sample App for Razorpay Nodejs Integration

This app uses a non composer integration, ideally you should use composer to integrate the Razorpay API.

# Demo
1. Copy the contents of config sample to config.
2. Enter your key id / key secret in the config file.
3. If you'd like a currency other than INR, change the displayCurrency to whatever currency you'd like.
4. Watch the demo to test out automatic or manual checkout.

An easy way to test this is to run `npm run start` in the root directory
and opening <http://localhost:3000> in your browser.

## Contents:
1. Automatic checkout test app
2. Manual checkout test app

# Steps for Integration:
## Automatic Checkout
1. Make a checkout form using our Checkout Integration
2. Accept the `razorpay_payment_id` parameter in the form submission
3. Run the capture code to capture the payment

If you are re-using this as your final code, please make sure you do the following:
- Edit the keyId inside .env/config
- Edit the keyId/keySecret in .env/config

## Manual Checkout
1. Create an order using razorpay orders api
2. Accept the `razorpay_payment_id` parameter and `razorpay_signature` in the form submission
3. Store the `razorpay_order_id` as a sessions variable
3. Verify the signature emitted from our server based on the algorithm given at https://docs.razorpay.com/docs/orders


# Razorpay NODEJD SDK
Make sure that you download the latest version of `razorpay` file from
You can extract that to the npm i razorpay directory as well.

This release currently uses the ^2.8.6 version of the SDK. Please ensure that you are
using the latest as the test app might lag behind.
