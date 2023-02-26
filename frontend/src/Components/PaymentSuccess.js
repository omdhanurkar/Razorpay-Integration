import React from 'react'
import swal from 'sweetalert';
import { Box, Heading, Text, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"

const PaymentSuccess = () => {

    swal("Thank you!", "Your Payment is Done!", "success");

    const seachQuery = useSearchParams()[0]

    const referenceNum = seachQuery.get("reference")

    return (

        <Box>
            <VStack h="100vh" justifyContent={"center"}>

                <Heading textTransform={"uppercase"}>Payment Details</Heading>

                <Text>
                    Reference No.{referenceNum}
                </Text>

            </VStack>
        </Box>


    )
}

export default PaymentSuccess