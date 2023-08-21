import React, { useState } from 'react'
import { Box, Button, Center, Heading, Input, Stack, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"
const Sinup = ({ setIsLoggin }) => {

    const [userDeatiles, setUserDeatiles] = useState({
        email: "",
        password: "",
        dateOfBirth: "",

    })
    console.log(userDeatiles);

    const getUser = (e) => {
        const { value, name } = e.target
        setUserDeatiles(() => {
            return {
                ...userDeatiles,
                [name]: value
            }

        })

    }

    const [data, setData] = useState([])
    const SignUpHandle = _ => {

        const { email, dateOfBirth, password } = userDeatiles;
        setData(userDeatiles)
        if (email === "") {
            alert("please enter Email Address")
        } else if (!email.includes("@")) {
            alert("please enter a valid Email Address")
        } else if (dateOfBirth === "") {
            alert("please enter DateOfBirth")
        } else if (password === "") {
            alert("please Enter Password")
        } else if (password.length < 5) {
            alert("please enter a five digit password")
        }
        else {
            // console.log("login succesfully");
            localStorage.setItem("dataOfUser", JSON.stringify([...data, userDeatiles]))
        }

    }
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w='100%' h='100vh'>

            <Box boxShadow='dark-lg' p='6' rounded='md' bg='white' height={"35em"} >
                <Heading size={"sm"} color={"green"}>SIGN UP</Heading>
                <Stack spacing={10} mt={19}>
                    <Input type='email' placeholder='Enter Email' size='lg' width={"30em"} name='email' onChange={getUser} />
                    <Input type='date' placeholder='Enter Date Of Birth' size='lg' width={"30em"} name='dateOfBirth' onChange={getUser} />

                    <Input type='password' placeholder='Enter Password' size='lg' width={"30em"} name='password' onChange={getUser} />

                    <Center>
                        <Button colorScheme='blue' size={'lg'} width={"8em"} onClick={SignUpHandle}>SIGN UP</Button>

                    </Center>
                    <center>
                        <Box fontSize={"0.90rem"} fontWeight={"bold"}>
                            Already a user ?  <Link to={"/Login"}>
                                <Text onClick={(() => setIsLoggin(false))} color={"blue"} fontWeight={"bold"} cursor={"pointer"} fontSize={"lg"}>Login</Text>

                            </Link>

                        </Box>
                    </center>

                </Stack>


            </Box>




        </Box>
    )
}

export default Sinup