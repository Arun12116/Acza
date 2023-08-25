import React, { useEffect } from 'react'
import imge from '../../Assets/imge.jpg'
import "./FilterData.css"
import {addMeansClothes} from '../../../Redux/CreateAction/Action'
import { Box, Button, Center, Heading } from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'






import { Link } from "react-router-dom"

import { addTocart} from '../../../Redux/CreateAction/Action'
import {  Flex, CardFooter,  Card, Image, Stack, CardBody } from "@chakra-ui/react"
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const FilterData = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(addMeansClothes("all"))
    }, [dispatch])


    let data = useSelector((mystore) => {

        return mystore
    })

    console.log(data.meanData);


    const catogery = (cat) => {
        dispatch(addMeansClothes(cat))

    }
    const addtocartdata = useDispatch();
    const addItems = (items) => {
      addtocartdata(addTocart(items))
      toast.success("Items Added To A Cart")
  
  
    }

    return (
        <div>
            <div className="home_container" >

                <div className="banner">
                    <img src={imge} alt="banner" className='banner-image' />

                </div>

                <Box>
                    <Heading mt={2}>
                        <Center>
                            Diffrent Types Of Product

                        </Center>
                    </Heading>
                </Box>

                <Box mt={5}>

                    <Center gap={2}>
                        <Button color={"Black"} bgColor={"gray.500"} onClick={() => catogery("all")}>
                            AllProduct
                        </Button>

                        <Button onClick={() => catogery("men's clothing")} color={"Black"} bgColor={"gray.500"}>
                            Men's clothing
                        </Button>
                        <Button color={"Black"} bgColor={"gray.500"} onClick={() => catogery("women's clothing")}>
                            WomenClothing
                        </Button>
                        <Button color={"Black"} bgColor={"gray.500"} onClick={() => catogery("jewelery")} >
                            Jwelary
                        </Button>

                        <Button color={"Black"} bgColor={"gray.500"} onClick={() => catogery("electronics")}>
                            Electronic
                        </Button>



                    </Center>

                </Box>

                {
                    data.meanData === 0 ? <h1>Data lodaing</h1> :
                      <div className="product_Container" style={{ padding: "1rem" }}>
                
                        <Flex flexWrap={"wrap"} justifyContent={"space-around"} my={5} >
                          {
            
                            data.meanData.map((items) => {
            
                              return <Box>
                                <Card my={3} p={5} boxShadow='dark-lg' rounded='md' bg='white'
                                  className='card'
                                  direction={{ base: 'column', sm: 'row' }}
                                  overflow='hidden'
                                  variant='outline'
            
            
            
                                >
                                  <Image
                                    objectFit='cover'
                                    src={items.image}
                                    alt='Caffe Latte'
                                    className='image'
                                  />
            
                                  <Stack ml={5}>
                                    <CardBody my={5}>
                                      <Heading className='category' size='sm'>{items.category
                                      }</Heading>
                                      <Heading size='sm'>${items.price
                                      }</Heading>
                                      <Heading className='title' size='sm'>${items.title
                                      }</Heading>
            
                                    </CardBody>
                                    <CardFooter>
                                      <Box className='btn'>
                                        <Button variant='solid' colorScheme='green' onClick={() => addItems(items)}>
                                          AddToCart
                                        </Button>
                                        <ToastContainer autoClose={200} />
            
                                        <Link to={`/ProductDeatiles/${items.id}`} >
                                          <Button ml={6} variant='solid' colorScheme='blue'>
                                            Deatiles
                                          </Button>
                                        </Link>
                                      </Box>
            
                                    </CardFooter>
                                  </Stack>
                                </Card>
            
                              </Box>
                            })
                          }
            
                        </Flex>
            
            
            
                      </div>
                  }
            
            


            </div>

        </div>
    )
}

export default FilterData