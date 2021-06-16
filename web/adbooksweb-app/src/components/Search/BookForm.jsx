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
            return;
        }
        handleSearch(search);
        setForm('');
    };


    return (
        <div>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" aria-label="Search" 
                    name="libro"
                    placeholder="Buscar por autor, titulo, genero, etc"
                    onChange={handleChange} 
                    value={search}
                />
                <button class="btn btn-light buttom-search" onClick={handleSubmit} id="buttonSearch">
                   Buscar
                </button>   
            </form>  
        </div>
    );
};

export default BookForm;