import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import axios from "axios"
import Loader from "react-loader-spinner"



const Offer = () => {
    const {id} = useParams();
    const [data, setData] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    useEffect (() => {
        const fetchData = async () => {
            const response = await axios.get(`https://lereacteur-vinted-api.herokuapp.com/offer/${id}`);
            setData(response.data)
            setIsLoading(false)
        }
        fetchData();
    }, [])
    
    return ( isLoading? (<Loader/>) :
        (<div>
            {data.product_name}
            {data.product_details.map((elem, index) => {
                const keys = Object.keys(elem)
                return (
                <p key={index}>
                    
                    {keys[0]} {elem[keys[0]]}
                </p>)
            })}
        </div>
        )
    );
    
    
}

export default Offer;