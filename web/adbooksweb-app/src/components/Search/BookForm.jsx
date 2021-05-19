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
            <form class="form-inline my-2 my-lg-0" onSubmit={handleSubmit}>
                <input class="form-control mr-sm-2"placeholder="Search" aria-label="Search" type="search"
                    name="libro"
                    placeholder="Buscar por autor, titulo, genero, etc"
                    onChange={handleChange} 
                    value={search}
                />
                <button class="btn btn-outline-success buttom-search"  type="submit">
                   Search</button>
            </form>
        </div>
    );
};

export default BookForm;