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
                    <a class="navbar-brand">Navbar</a>
                    <button type="submit" className="btn btn-outline-success" onClick={goHome}>Home</button>
                    <form class="d-flex">
                    <BookSearch />
                    </form>
                </div>
            </nav>     
        </div>
    )
}

export default Navbar;
