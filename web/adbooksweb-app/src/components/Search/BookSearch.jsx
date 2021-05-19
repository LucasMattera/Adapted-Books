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
            <BookForm handleSearch={handleSearch} />
        </div>
    );

};

export default BookSearch;

