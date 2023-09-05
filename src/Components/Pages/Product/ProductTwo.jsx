// import React from 'react'
// import { useDispatch, useSelector } from "react-redux"
// import { addTocart } from '../../../Redux/CreateAction/Action'
// import "react-toastify/dist/ReactToastify.css";
// import { Link } from "react-router-dom"
// import "./Product.css"

// import { Box, Heading, Flex, CardFooter, Button, Card, Image, Stack, CardBody } from "@chakra-ui/react"
// import { ToastContainer } from 'react-toastify'
// import { toast } from "react-toastify";
// const ProductTwo = () => {

//     const addtocartdata = useDispatch();
//     const addItems = (items) => {
//         addtocartdata(addTocart(items))
//         toast.success("Items Added To A Cart")


//     }



//     let productData = useSelector((mystore) => {

//         return mystore
//     })
//     console.log(productData.product);

//     return (
//         <>
//             {
//                 productData.product === 0 ? <h1>Data lodaing</h1> :
//                     <div className="product_Container" style={{ padding: "1rem" }}>

//                         <Flex flexWrap={"wrap"} justifyContent={"space-around"} my={5} >

//                             {

//                                 productData.product.map((items) => {

//                                     return <Box>
//                                         <Card my={3} p={5} boxShadow='dark-lg' rounded='md' bg='white'
//                                             className='card'
//                                             direction={{ base: 'column', sm: 'row' }}
//                                             overflow='hidden'
//                                             variant='outline'



//                                         >
//                                             <Image
//                                                 objectFit='cover'
//                                                 src={items.image}
//                                                 alt='Caffe Latte'
//                                                 className='image'
//                                             />

//                                             <Stack ml={5}>
//                                                 <CardBody my={5}>
//                                                     <Heading className='category' size='sm'>{items.category
//                                                     }</Heading>
//                                                     <Heading size='sm'>${items.price
//                                                     }</Heading>
//                                                     <Heading className='title' size='sm'>${items.title
//                                                     }</Heading>

//                                                 </CardBody>
//                                                 <CardFooter>
//                                                     <Box className='btn'>
//                                                         <Button variant='solid' colorScheme='green' onClick={() => addItems(items)}>
//                                                             AddToCart
//                                                         </Button>
//                                                         <ToastContainer autoClose={200} />

//                                                         <Link to={`/ProductDeatiles/${items.id}`} >
//                                                             <Button ml={6} variant='solid' colorScheme='blue'>
//                                                                 Deatiles
//                                                             </Button>
//                                                         </Link>
//                                                     </Box>

//                                                 </CardFooter>
//                                             </Stack>
//                                         </Card>

//                                     </Box>
//                                 })
//                             }

//                         </Flex>



//                     </div>
//             }



//         </>
//     )
// }

// export default ProductTwo