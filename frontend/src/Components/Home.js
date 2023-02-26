import React from 'react'
import { Box, Stack } from "@chakra-ui/react"
import Card from "./Card"
import axios from "axios"

const Home = () => {

  const checkoutHandler = async (amount) => {

    const { data: { key } } = await axios.get("http://localhost:4000/getkey")

    const { data: { order } } = await axios.post("http://localhost:4000/checkout", {
      amount
    })
    
    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Omprakash Dhanurkar",
      description: "Backend Developer",
      image: "https://media.licdn.com/dms/image/D4D03AQHtq1ZYGhbeUw/profile-displayphoto-shrink_800_800/0/1674893032172?e=1683158400&v=beta&t=z1jQulU8NVVvA7a0LNCmbLK3A6DeloU53fGmFXMx5sU",
      order_id: order.id,
      callback_url: "http://localhost:4000/paymentverification",
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999"
      },
      notes: {
        "address": "Razorpay Corporate Office"
      },
      theme: {
        "color": "#121212"
      }
    };
    const razor = new window.Razorpay(options);
    razor.open();
    
  }
  return (
    <Box>
      <Stack h={"100vh"} alignItems="center" justifyContent='center' direction={["column", "row"]}>
        <Card amount={15000} img={"https://m.media-amazon.com/images/I/71geVdy6-OS._SX679_.jpg"} checkoutHandler={checkoutHandler} />
        <Card amount={10000} img={"https://m.media-amazon.com/images/I/71KCwNV6MuL._SL1500_.jpg"} checkoutHandler={checkoutHandler} />
      </Stack>
    </Box>
  )
}

export default Home