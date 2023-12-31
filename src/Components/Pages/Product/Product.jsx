import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addTocart, filterDataAction, productAction } from '../../../Redux/CreateAction/Action'
import { Heading, Flex, CardFooter, Button, Text, Divider, ButtonGroup, Card, Image, Stack, CardBody } from "@chakra-ui/react"
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import "./Product.css"
import "react-toastify/dist/ReactToastify.css";
const Product = () => {

  let dispatch = useDispatch();


  let productData = useSelector((mystore) => {

    return mystore
  })
  console.log(productData.product);

  const addtocartdata = useDispatch();
  const addItems = (items) => {
    addtocartdata(addTocart(items))
    toast.success("Items Added To A Cart")


  }
  useEffect(() => {
    let response = _ => {

      axios.get("https://fakestoreapi.com/products").then((res) => {
        // console.log(res.data);
        // Dispatch(filterdata(res.data))
        dispatch(filterDataAction(res.data))
        dispatch(productAction(res.data)



        )

      }).catch(() => {
        alert("api error")

      })

    }

    response();

  }, [dispatch])
  return (
    <>

      {
        productData.product === 0 ? <h1>Data lodaing</h1> :
          <div className="product_Container" style={{ padding: "1rem" }} id='allProduct'>

            <Flex flexWrap={"wrap"}  justifyContent={"space-around"} my={5} >
              {

                productData.product.map((items) => {
                  return <Card  width='sm' height={"sm"} m={3} boxShadow='dark-lg' p='2' rounded='md' bg='white' className='card' >
                    <CardBody className='card-body'>
                      <Image
                        src={items.image}
                        alt='Green double couch with wooden legs'
                        borderRadius='lg'
                        boxSize={90}

                      />
                      <Stack mt='2' spacing='3' className='stack'>
                        <Heading size='sm'>{items.category} </Heading>
                        <Text maxWidth={400} className='text'>
                          {items.title}
                        </Text>
                        <Text color='blue.600' fontSize='md'>
                          ${items.price}
                        </Text>
                      </Stack>
                    </CardBody>
                    <Divider />
                    <CardFooter>
                      <ButtonGroup spacing='10' className='spacing'>
                        <Button variant='solid' className='add' colorScheme='green' onClick={() => addItems(items)} size={"sm"}>
                          Add to cart
                        </Button>
                        <ToastContainer autoClose={200} />

                        <Link to={`/ProductDeatiles/${items.id}`} >
                          <Button variant='solid' colorScheme='blue' size={"sm"}>
                            View More
                          </Button>
                        </Link>

                      </ButtonGroup>
                    </CardFooter>
                  </Card>
                })
              }

            </Flex>



          </div>
      }


    </>
  )
}

export default Product