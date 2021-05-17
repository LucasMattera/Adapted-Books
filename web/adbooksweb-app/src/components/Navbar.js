import { useHistory } from "react-router-dom";
import '../styles/Navbar.css';
import BookSearch from './Search/BookSearch';


const Navbar = () => {
    const history = useHistory();
    //const [search,setSearch] = useState(" ")

    const goHome = () => {
        history.push("/");
    }

    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-dark  bg-dark">
                <a className="navbar-brand">Adapted Books</a>
                <BookSearch />

                <button type="submit" className="buttonHome btn btn-outline-success" onClick={goHome}>Home</button>
            </nav>
        </div>
    )
}

export default Navbar;

/*
<nav class="navbar navbar-light bg-light">
                <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
*/