// import React, { useState } from 'react'
import "./Home.css"
import imge from '../../Assets/imge.jpg'
import Navbar from '../../Navbar/Navbar'
import { addMeansClothes, productAction } from '../../../Redux/CreateAction/Action'
import { Box, Button, Center, Heading } from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import axios from "axios"
const Home = () => {

  // console.log(meansData);
  // const [meansData, setMeansData] = useState([])
  // console.log(meansData);

  let data = useSelector((mystore) => {

    return mystore
  })

  console.log(data.MeanData);

  // console.log(Data.product[0].category && Data.product[0].category);
  // console.log(Data.product.catogory);
  const meansDiaptach = useDispatch();
  const catogery = (means) => {
    meansDiaptach(addMeansClothes(means))



    // console.log(means);


    // meansDiaptach(addMeansClothes(
    //   Data.product.filter((ele) => {
    //     let meansCloths = ele.category === means
    //     return meansCloths

    //   })
    // ))


  }
  const catogery2 = (meansWoman) => {
    // console.log(means);



  }
  // setMeansData(
  //   Data.product.filter((ele) => {
  //     let womanCloths = ele.category === meansWoman
  //     return womanCloths

  //   })


  let dispatch = useDispatch();


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
      <Navbar />
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
        1
        <Box mt={5}>

          <Center gap={2}>
            <Button onClick={() => catogery("men's clothing")} color={"Black"} bgColor={"gray.500"}>
              MeansClothing
            </Button>
            <Button color={"Black"} bgColor={"gray.500"}>
              WomenClothing
            </Button>
            <Button color={"Black"} bgColor={"gray.500"} onClick={() => catogery2("women's clothing")}>
              Jwelary
            </Button>
            <Button color={"Black"} bgColor={"gray.500"} >
              Electronic
            </Button>

          </Center>

        </Box>




      </div>

    </>
  )
}

export default Home