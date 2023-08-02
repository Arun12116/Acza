import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addTocart, productAction } from '../../../Redux/CreateAction/Action'
import { Box, Heading, Flex, CardFooter, Button, Card, Image, Stack, CardBody } from "@chakra-ui/react"
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import "./Product.css"
import "react-toastify/dist/ReactToastify.css";


const Product = () => {

  let dispatch = useDispatch();
  let productData = useSelector((mystore) => {

    return mystore
  })

  const addtocartdata = useDispatch();
  const addItems = (items) => {
    addtocartdata(addTocart(items))
    toast.success("Items Added To A Cart")


  }

  useEffect(() => {
    let response = _ => {

      axios.get("https://fakestoreapi.com/products").then((res) => {
        // console.log(res.data);

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
          <div className="product_Container" style={{ padding: "1rem" }}>
            <h1 className='heading_product'>Product Components</h1>
            <div className='para'>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum reiciendis ad autem veniam non enim consequatur blanditiis animi dicta dolorum aliquam nostrum quidem vitae repellendus, soluta necessitatibus minus laborum esse.
                Dignissimos omnis perspiciatis amet modi voluptatem praesentium. Unde cum molestiae, temporibus corporis eaque itaque expedita reiciendis animi quos ut illum placeat consequuntur dolor debitis recusandae voluptates repellendus dignissimos fugit eum.
                Nobis assumenda reiciendis voluptate mollitia nihil minima nemo fugit! Accusantium ex quam quia repudiandae, nesciunt, voluptatem, quidem sed eius veritatis sequi distinctio est dignissimos assumenda odio praesentium necessitatibus eligendi vel?
                Corrupti doloremque dolore maiores totam, repellat nemo doloribus laborum, sint dignissimos hic natus! Distinctio, fugit sunt similique ipsa sit atque, sequi porro voluptatibus, repellendus magni recusandae dolores dicta? Aut, ea!</p>


            </div>

            <Flex flexWrap={"wrap"} justifyContent={"space-around"} my={5} >
              {

                productData.product.map((items) => {

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


    </>
  )
}

export default Product