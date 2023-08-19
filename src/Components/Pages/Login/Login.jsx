

import React, { useState } from 'react'
import { Box, Button, Center, Input, Stack } from "@chakra-ui/react"


const Login = ({ setLoggin }) => {


    const [lsUserDeatiles, setLsUserDeatiles] = useState({
        email: "",
        password: "",


    })



    const changeHandle = (e) => {
        const { value, name } = e.target
        setLsUserDeatiles(() => {
            return {
                ...lsUserDeatiles,
                [name]: value
            }

        })

    }
    const loginHandle = _ => {
        const { email, password } = lsUserDeatiles;
        const userArray = localStorage.getItem("dataOfUser")
        console.log(userArray);
        if (email === "") {
            alert("please enter Email Address")
        } else if (!email.includes("@")) {
            alert("please enter a valid Email Address")
        } else if (password === "") {
            alert("please Enter Password")
        } else if (password.length < 5) {
            alert("please enter a five digit password")
        }
        else {

            if (userArray && userArray.length) {
                const userData = JSON.parse(userArray)
                // console.log(userData);

                const login = userData.filter((ele, indx) => {
                    return ele.email === email && ele.password === password
                })
                if (login.length === 0) {
                    alert("please fill vaild user deatiles")
                }else{
                    
                }
            }
        }


    }
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w='100%' h='100vh'>

            <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' height={"25em"} >

                <Stack spacing={10} mt={20}>
                    <Input placeholder='Enter Email' name='email' size='lg' width={"30em"} onChange={changeHandle} />
                    <Input placeholder='Enter Password' name="password" size='lg' width={"30em"} onChange={changeHandle} />
                    <Center>

                        <Button colorScheme='blue' size={'lg'} width={"8em"} onClick={loginHandle}>Login</Button>



                    </Center>
                </Stack>


            </Box>




        </Box>
    )
}

export default Login