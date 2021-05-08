import React, { useState, useEffect } from 'react'
import BookForm from './BookForm';
import { helpHttp } from "../../helpers/helpHttp";
import ArticuloMiniatura from '../ArticuloMiniatura';


const BookSearch = () => {

    const [search, setSearch] = useState('');
    const [books, setBooks] = useState([]);
    
    const fetchData = async () => {

        let bookUrl = `http://localhost:8080/api/v1/libros/titulo=${search}`;

        const [bookRes] = await Promise.all([
            helpHttp().get(bookUrl),
        ]);
        setBooks(bookRes);
    };

    //proposito: obtiene los libros por medio de una funcion una vez que la vista renderiza.
    useEffect(() => {   
        fetchData();  
    }, [search]);


    const handleSearch = (data) => {
        setSearch(data);
    }


   return (
        <div>
            <h2>Buscador De Libros</h2>
            <BookForm handleSearch={handleSearch} />
            <div className="contenido">
				{
					books.map(libro =>
						<ArticuloMiniatura to={`/libros/${libro.id}`} id={libro.id} libro={libro} />
					)
				}
			</div>
        </div>
    );

};

export default BookSearch;

