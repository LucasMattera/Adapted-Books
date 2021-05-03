import React, { useState, useEffect } from 'react'
import BookDetails from './BookDetails';
import BookForm from './BookForm';

const BookSearch = () => {

    const [search, setSearch] = useState(null);
    const [bookImage, setLibro] = useState(null);
    const [bio, setBio] = useState(null);
    const [loading, setLoading] = useState(null);

    const handleSearch = (data) => {
        console.log(data);
        setSearch(data);
    }


    return (
        <div>
            <h2>Buscador libro</h2>
            <BookForm handleSearch = {handleSearch} />
            <BookDetails search = {search} bookImage = {bookImage} bio = {bio}/>
        </div>
    );
};

export default BookSearch;

