import { useHistory } from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {
    const history = useHistory();
    //const [search,setSearch] = useState(" ")

    const goHome = () => {
        history.push("/") ;
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light justify-content-between">
                <a 
                    type="submit" 
                    className="navbar-brand" 
                    onClick={goHome}
                >
                    Inicio
                </a>
            </nav>
        </div>


    )
}

export default Navbar ;