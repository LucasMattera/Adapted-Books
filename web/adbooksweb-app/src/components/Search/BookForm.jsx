import React, { useState } from 'react';

const initialForm = {
    autor: "",
    libro: "",
};

const BookForm = ({ handleSearch }) => {

    const [form, setForm] = useState(initialForm);

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.autor || !form.libro) {
            alert("datos incompletos")
            return;
        }
        handleSearch(form);
        setForm(initialForm);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    name="autor"
                    placeholder="autor del libro"
                    onChange={handleChange} value={form.autor}
                />

                <input type="text"
                    name="libro"
                    placeholder="nombre del libro"
                    onChange={handleChange} value={form.libro}
                />

                <br />

                <input type="submit"
                    value="Buscar" />
            </form>

        </div>
    );
};

export default BookForm;