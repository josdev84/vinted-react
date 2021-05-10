import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from  "react-router-dom"
import Loader from "react-loader-spinner"


const Home = () => {
    const [data, setData] = useState({});
    const [isLoaoding, setIsLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get("https://lereacteur-vinted-api.herokuapp.com/offers");
            setData(response.data);
            setIsLoading(false)
        };
        fetchData();
    }, []); 

    return (
        isLoaoding? (<Loader/>) :
        (
        <div>
            {data.offers.map((offer, index) => {
                return (
                <Link 
                to={`/offer/${offer._id}`} key ={offer._id}>
                    <div>{offer.product_name}</div>
                </Link>)
            })}
        </div>
        )
        
    );
    
        
    
};

export default Home