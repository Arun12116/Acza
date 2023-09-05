import React from 'react'
import "./Cart.css"
import { useDispatch, useSelector } from "react-redux"
import { AiFillDelete } from "react-icons/ai"
import { Tr, Th, Td, Thead, Tbody, Box, TableContainer, Table } from "@chakra-ui/react"
import { removeCart } from '../../../Redux/CreateAction/Action'
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import Navbar from '../../Navbar/Navbar'


const Cart = () => {
  const dispatch = useDispatch()
  const data = useSelector((mycart) => {

    return mycart;

  })

  const deleteItems = (id) => {
    dispatch(removeCart(id))
    if (data.addToCart.length >= 0) {
      toast.warn("Items deleted")

    }

  }
  const totalAmount = data.addToCart.reduce((accc, cur) => {
    // console.log(cur, "totalAmount");
    return accc += cur.price

  }, 0)
  // console.log(totalAmount);
  // console.log(data);
  return (
    <>
    <Navbar/>
      {

        data.addToCart.length === 0 ? <h1 style={{ display: "flex", justifyContent: "center", fontSize: "3rem", fontWeight: "bolder" }}>No Items Added</h1> : <Box p={10}>
          <TableContainer boxShadow='dark-lg' p='6' rounded='md' bg='white'>
            <Table variant='simple' size={"lg"}>
              <Thead bgColor={'black'} >
                <Tr>
                  <Th color={"white"}>Image</Th>
                  <Th color={"white"}>catogery</Th>
                  <Th color={"white"}>Price</Th>
                  <Th color={"white"}>Delete</Th>
                </Tr>
              </Thead>
              {
                data.addToCart.map((items) => {

                  return <Tbody textAlign={'center'} >
                    <Tr >
                      <Td><img width={"50px"} src={items.image} alt="" srcset="" /></Td>
                      <Td> {items.category}</Td>
                      <Td>{items.price}</Td>

                      <td>

                        {<AiFillDelete onClick={() => deleteItems(items.id)}
                          style={{ color: 'red', fontSize: "30px", cursor: "pointer" }} />}
                        <ToastContainer autoClose={200} />

                      </td>



                    </Tr>
                  </Tbody>

                })
              }


            </Table>
          </TableContainer>

          <h1 style={{ display: "flex", justifyContent: "flex-end", marginTop: "2rem", marginRight: "2rem", fontSize: "3rem" }}>Total-Price:{totalAmount}</h1>

        </Box>

      }



    </>
  )
}

export default Cart