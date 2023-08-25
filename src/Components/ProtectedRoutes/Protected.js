import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'


const Protected = (prop) => {
    let { Components } = prop
    let nagvigate = useNavigate();
    useEffect(() => {
        let login = localStorage.getItem("dataOfUser")
        if (!login) {
            nagvigate("/Login")
        }
    })

    return (
        <div>


            <Components />
        </div>
    )
}

export default Protected