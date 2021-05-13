import React from 'react';
import { useHistory } from 'react-router-dom';
import BookForm from './BookForm';

const BookSearch = () => {

    let history = useHistory()

    const handleSearch = (data) => {
        history.push("/search?q=" + (data.replaceAll(' ','-')));
    }

   return (
        <div>
            <h2>Buscador De Libros</h2>
            <BookForm handleSearch={handleSearch} />
        </div>
    );

};

export default BookSearch;

