
import imge from '../../Assets/imge.jpg'
import "./FilterData.css"
import { addElectronic, addMeansClothes, addWomanClothes, getAllData, addJwelary } from '../../../Redux/CreateAction/Action'
import { Box, Button, Center, Heading } from "@chakra-ui/react"
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import "react-toastify/dist/ReactToastify.css";
import Product from '../Product/Product'
const FilterData = () => {
  const dispatch = useDispatch();




  let fData = useSelector((mystore) => {

    return mystore.FilterData
  })

  return (
    <>

      <div className="home_container" id='Product' >

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
          
            <Button color={"Black"} bgColor={"gray.500"} bg={"yellow.500"} onClick={() => dispatch(getAllData(fData))}>
              AllProduct
            </Button>

            <Button onClick={() => dispatch(addMeansClothes(fData))} color={"Black"} bgColor={"gray.500"}>
              Men's clothing
            </Button>
            <Button color={"Black"} bgColor={"gray.500"} onClick={() => dispatch(addWomanClothes(fData))}>
              WomenClothing
            </Button>
            <Button color={"Black"} bgColor={"gray.500"} onClick={() => dispatch(addJwelary(fData))} >
              Jwelary
            </Button>

            <Button color={"Black"} bgColor={"gray.500"} onClick={() => dispatch(addElectronic(fData))}>
              Electronic
            </Button>

          </Center>

        </Box>
        <Product />

      </div>

    </>
  )
}

export default FilterData