import React from 'react'
import Navbar from '../../Navbar/Navbar'
import { useState } from 'react'
import "./Contact.css"
import { Box, FormControl, FormLabel, Input, FormHelperText, FormErrorMessage, Select, Button,  Flex,  } from "@chakra-ui/react"

const Contact = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''

    return (
        <>
        
            <Box  height={'100vh'} backgroundColor={"ButtonShadow"} >
                <Navbar />

                <Flex justifyContent={'center'} mt={10} >
                    <Box width={"lg"} height={"md"} borderWidth='2px' borderRadius='lg' p={35} boxShadow='md' rounded='md' bg='white' >

                        <Flex flexDirection={"column"} gap={10}>
                            <Box>
                                <FormControl isInvalid={isError}>
                                    <FormLabel>Email</FormLabel>
                                    <Input type='email' value={input} onChange={handleInputChange} size={'sm'} />
                                    {!isError ? (
                                        <FormHelperText>
                                            Enter the email you'd like to receive the newsletter on.
                                        </FormHelperText>
                                    ) : (
                                        <FormErrorMessage>Email is required.</FormErrorMessage>
                                    )}
                                </FormControl>

                            </Box>
                            <Box>
                                <FormControl isRequired>
                                    <FormLabel>First name</FormLabel>
                                    <Input placeholder='First name' size={'sm'} />
                                </FormControl>
                            </Box>

                            <Box>
                                <FormControl>
                                    <FormLabel>Country</FormLabel>
                                    <Select placeholder='Select country' size={'sm'}>
                                        <option>United Arab Emirates</option>
                                        <option>Nigeria</option>
                                    </Select>
                                </FormControl>
                            </Box>



                            <Box>
                                <Button  colorScheme='blue'  variant='solid' size={'sm'} >Submit</Button>
                            </Box>
                        </Flex>

                    </Box>
                </Flex>
            </Box>



        </>
    )
}

export default Contact