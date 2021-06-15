import { useHistory } from "react-router-dom";
import '../styles/Navbar.css';
import BookSearch from './Search/BookSearch';


const Navbar = () => {
    const history = useHistory();

    const goHome = () => {
        history.push("/");
    }

    return (
        <div>
            <nav class="navbar navbar-dark bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand">Adapted Books</a>
                    <a class="nav-link active homeButtom" aria-current="page" onClick={goHome}>Inicio</a>
                    <form class="d-flex">
                    <BookSearch />
                    </form>
                </div>
            </nav>     
        </div>
    )
}

export default Navbar;
