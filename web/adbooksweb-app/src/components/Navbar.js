import { useHistory } from "react-router-dom";
import '../styles/Navbar.css';
import BookSearch from './Search/BookSearch';

const Navbar = () => {
    const history = useHistory();
    //const [search,setSearch] = useState(" ")

    const goHome = () => {
        history.push("/") ;
    }

    return (
        <div>
            <nav className="navbar navbar-dark bg-primary justify-content-between">
                <a className="navbar-brand">Adapted Books</a>
                <BookSearch/>
                <a
                    className="boton-inicio"
                    type="submit" 
                    onClick={goHome}
                >
                    Inicio
                </a>
            </nav>
        </div>


    )
}

export default Navbar ;