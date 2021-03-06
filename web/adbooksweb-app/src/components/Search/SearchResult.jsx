import React, { useState, useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import { helpHttp } from "../../helpers/helpHttp";
import ArticleMiniature from '../ArticleMiniature';
import UseQuery from './UseQuery';

function SearchResult()  {
    const query = UseQuery();
    const [books, setBooks] = useState([]);
    const [thereAreBooks,setThereAreBooks] = useState(false);

    useEffect(() => {   
        fetchData()
    },[useLocation()]);

    //proposito: obtiene los libros por medio de una funcion una vez que la vista renderiza.
    const fetchData = async () => {

        let bookUrl = `http://localhost:8080/api/v1/libros/coincidentesCon`+ (query.toString().replace('q', ''));
        console.log(bookUrl)
        const [bookRes] = await Promise.all([
            helpHttp().get(bookUrl),
        ]);
        setBooks(bookRes);
        setThereAreBooks(bookRes.length > 0)
    };

    return(
        <> 
            <div div className="contenido">
                {!thereAreBooks && <div class="alert alert-warning noBooks" role="alert"> no hay libros con ese criterio</div>}
            </div>
            <div className="contenido">
                {books.map(libro =>
                            <ArticleMiniature  id={libro.id} libro={libro} />
                        )}
            </div>
        
        </>
    );
}

export default SearchResult;

