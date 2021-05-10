import {useHistory} from "react-router-dom";
import axios from "axios";
import {useState} from "react"

const Login = ({setUser}) => {
    const history = useHistory();
    const [email, setEmail] = useState("");
    const [password, setPassword ] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        try { 
            const response = await axios.post("https://lereacteur-vinted-api.herokuapp.com/user/login", {
                email : email,
                password : password,
            });
            console.log(response.data);
            if (response.data.token) {
                setUser(response.data.token)
                history.push("/")
            } else {
                alert("Une erreur est survenue")
            }
        } catch (error) {
            console.log(error.message);
        }
    }
    return (
        <div>
            login
            <form onSubmit={(handleSubmit)}>
                <input type="email" value={email} onChange={(event) => {
                    setEmail(event.target.value)
                    // console.log(event.target.value)
                    
                }}
                placeholder="email"
                />
                <br/>
                <input type="password" value={password} onChange={(event) => {
                    setPassword(event.target.value)
                }}
                placeholder="mot de passe"
                />
                <br/>
                <button type="submit">Se connecter</button>
            </form>
            {/* <button onClick={() => {

                setUser(token);
                history.push("/");
            }}>
              Se connecter  
            </button> */}
        </div>
    );
};

export default Login

