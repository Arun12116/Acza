import React, { useState } from 'react'
import { Box, Button, Center, Input, Stack } from "@chakra-ui/react"
const Login = ({ setLoggin }) => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")


    const loginHandle = _ => {
        if (userName === "demo" && password === "password") {
            setLoggin(true)
        } else {
            alert("invailid user name and password")
        }

    }
    return (
        <Box display={"flex"} justifyContent={"center"} alignItems={"center"} w='100%' h='100vh'>

            <Box  boxShadow='dark-lg' p='6' rounded='md' bg='white' height={"25em"} >
            
                <Stack spacing={10} mt={20}>
                    <Input placeholder='Enter Email' size='lg' width={"30em"} value={userName} onChange={(e) => setUserName(e.target.value)} />
                    <Input placeholder='Enter Password' size='lg' width={"30em"} value={password} onChange={(e) => setPassword(e.target.value)} />
                    <Center>
                        <Button colorScheme='blue' size={'lg'} width={"8em"} onClick={loginHandle}>Login</Button>

                    </Center>
                </Stack>


            </Box>




        </Box>
    )
}

export default Login