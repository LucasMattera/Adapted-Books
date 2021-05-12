import React, { useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import BookForm from './BookForm';
import { helpHttp } from "../../helpers/helpHttp";
import ArticleMiniature from '../ArticleMiniature';
import SearchResult from './SearchResult'


const BookSearch = () => {

    let history = useHistory()

    const handleSearch = (data) => {
        history.push("/search?q=" + (data.replaceAll(' ','-')))
        
    }

   return (
        <div>
            <h2>Buscador De Libros</h2>
            <BookForm handleSearch={handleSearch} />
        </div>
    );

};

export default BookSearch;

