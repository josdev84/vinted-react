import React, {useState} from "react"
import axios from "axios"
import {useHistory} from "react-router-dom"

const Signup = ({setUser}) => {

    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post(" https://lereacteur-vinted-api.herokuapp.com/user/signup", 
            {
                username : username,
                email : email,
                password : password 
            });
            //console.log(response.data);
            if (response.data.token) {
                setUser(response.data.token);
                history.push("/");
            } else {
                alert("Une erreur est survenue");
            } 
        } catch (error) {
            console.log(error.message)
        }
    };

    return(
        <div> Créer un compte
            <form onSubmit ={handleSubmit}> 
                <input type="text" value={username} onChange={(event)=>{
                    setUserName(event.target.value);    
                }}
                placeholder="Nom et Prénom"
                /> 
                <br/>
                <input type="email" value={email} onChange={(event) => {
                    setEmail(event.target.value);
                }}
                placeholder="email"
                />
                <br/>
                <input type="password" value={password} onChange={(event) =>{
                    setPassword(event.target.value);
                }}
                placeholder="Mot de passe"
                />
                <br/>
                <input type="submit" value="S'inscrire"/>
            
                
        
            </form>
            
        </div>)
    
}

export default Signup