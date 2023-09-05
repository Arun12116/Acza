// import React, { useState } from 'react'
import "./Home.css"
import { useDispatch } from "react-redux"
import Navbar from '../../Navbar/Navbar'
import { useEffect } from 'react'
import axios from "axios"
import { productAction } from "../../../Redux/CreateAction/Action"
import FilterData from "../FilterProduct/FilterData"
import Footer from "../../Footer/Footer"
const Home = () => {

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
      
      <FilterData />
      
      <Footer/>
    </>
  )
}

export default Home