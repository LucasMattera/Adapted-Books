import React, { useState } from 'react';


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
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
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
            </form>
        </div>
    );
};

export default BookForm;