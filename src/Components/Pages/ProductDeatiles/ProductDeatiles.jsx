import React from 'react'
import { useParams } from "react-router-dom"
import axios from "axios"
import { Heading, Text, CardFooter, Card, Image, Stack, CardBody, Center, Box } from "@chakra-ui/react"
import { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { productDeatilesAction } from '../../../Redux/CreateAction/Action'
const ProductDeatiles = () => {
  const singleData = useDispatch()
  let { id } = useParams();

  const getSingleData = useSelector((mystore) => {

    return mystore;

  })
  // console.log(getDataSingleItems);

  useEffect(() => {
    const singleItems = () => {

      axios.get(`https://fakestoreapi.com/products/${id}`).then((res) => {
        console.log(res.data);
        singleData(productDeatilesAction(res.data))

      }).catch(() => {

        alert("api error")
      })

    }
    singleItems();

  }, [singleData,id])

  return (
    <>
      <Box mt={20}>
        <Center>
          <Card
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            height={"50vh"}
            width={"40vw"}
            p={10}
          >
            <Image
              objectFit='cover'
              maxW={{ base: '100%', sm: '300px' }}
              src={getSingleData.productDeatiles.image}
              alt='Caffe Latte'
            />

            <Stack>
              <CardBody>
                <Heading size='md'>{getSingleData.productDeatiles.category}</Heading>

                <Text py='2'>
                  {getSingleData.productDeatiles.description
                  }
                </Text>
              </CardBody>

              <CardFooter>
                <Heading color={"green"}>
                  ${getSingleData.productDeatiles.price}
                </Heading>
              </CardFooter>
            </Stack>
          </Card>
        </Center>


      </Box>


    </>
  )
}

export default ProductDeatiles