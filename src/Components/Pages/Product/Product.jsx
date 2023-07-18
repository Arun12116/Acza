import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { addTocart, productAction } from '../../../Redux/CreateAction/Action'
import { Box, Heading, Flex, CardFooter, Button, Card, Image, Stack, CardBody } from "@chakra-ui/react"
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
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
          <div className="product_Container" style={{padding:"1rem"}}>
            <h1 style={{ color: "black", fontSize: "50px", fontWeight: "bold" }}>Product Components</h1>
            <div>
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
                      direction={{ base: 'column', sm: 'row' }}
                      overflow='hidden'
                      variant='outline'
                      width={"35vw"}
                      height={"50vh"}
                    >
                      <Image
                        objectFit='cover'

                        src={items.image}
                        alt='Caffe Latte'
                        width={"14vw"}
                        height={"40vh"}

                      />

                      <Stack ml={5}>
                        <CardBody my={5}>
                          <Heading size='md'>{items.category
                          }</Heading>
                          <Heading size='md'>${items.price
                          }</Heading>
                          <Heading size='md'>${items.title
                          }</Heading>

                        </CardBody>

                        <CardFooter>
                          <Button variant='solid' colorScheme='green' onClick={() => addItems(items)}>
                            AddToCart
                          </Button>
                          <ToastContainer autoClose={200} />

                          <Link to={`/ProductDeatiles/${items.id}`} >
                            <Button ml={6} variant='solid' colorScheme='blue'>
                              Deatiles
                            </Button>
                          </Link>
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