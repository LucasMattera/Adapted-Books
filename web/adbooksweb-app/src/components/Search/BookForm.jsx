import React, { useState } from 'react';
import '../../styles/Navbar.css';

const BookForm = ({ handleSearch }) => {

    const [search, setForm] = useState('');

    const handleChange = (e) => {
        setForm(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) {
            alert("datos incompletos")
            return;
        }
        handleSearch(search);
        setForm('');
    };

    return (
        <div>
<<<<<<< HEAD
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
=======
            <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <input class="form-control mr-sm-2"placeholder="Search" aria-label="Search" type="search"
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff
                    name="libro"
                    placeholder="Buscar por autor, titulo, genero, etc"
                    onChange={handleChange} 
                    value={search}
                />
                <br/>
                <input 
                    type="submit"
                    value="Buscar" 
                />
<<<<<<< HEAD
=======
                <br />
                <button class="btn btn-outline-success buttom-search"  type="submit">
                   Search</button>
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff
            </form>
        </div>
    );
};

export default BookForm;