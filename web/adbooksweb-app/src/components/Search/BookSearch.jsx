import React, { useState, useEffect } from 'react'
import BookForm from './BookForm';
import { helpHttp } from "../../helpers/helpHttp";
import ArticuloMiniatura from '../ArticuloMiniatura';


const BookSearch = () => {

    const [search, setSearch] = useState(null);
    const [books, setLibro] = useState([]);

    //proposito: obtiene los libros por medio de una funcion una vez que la vista renderiza.
    useEffect(() => {
        if (search === null) return;

        const fetchData = async () => {
            console.log(search)
            const { libro } = search;

            let bookUrl = `http://localhost:8080/api/v1/libros/titulo=${libro}`;
            console.log(bookUrl)

            const [bookRes] = await Promise.all([
                helpHttp().get(bookUrl),
            ]);

            console.log(bookRes)
            setLibro(bookRes);
        };

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

