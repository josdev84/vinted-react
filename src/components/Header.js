import {Link} from "react-router-dom"

const Header = ({token, setUser}) => {

    return (
    <div>Header
        {token ? ( 
            <button 
            onClick={() =>{
            setUser(null);
        }}
        >
        Se déconnecter
        </button>
        ):(
            <div>
                <Link to="/signup">Créer un compte</Link>{" "}
                
                <Link to="/login">Se connecter</Link>
            </div>

        )}

    </div>
    
    );
};

export default Header