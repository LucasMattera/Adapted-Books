import React, { useEffect, useState } from 'react';
import '../styles/Book.css';
import UseQuery from './Search/UseQuery';
import LinkComponent from './LinkComponent'
import { useHistory } from 'react-router-dom';

function Libro(){
    
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [author, setAuthor] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    const [links, setLinks] = useState([]);
    const [coverPage, setCoverPage] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState([]);
    const query = UseQuery();

	useEffect(() => {getLibro()},[]);
    
	
	const getLibro = async () => {
		const data = await fetch(`http://localhost:8080/api/v1/libros/`+ (query.toString().replace('q=', '')));
        console.log(query);
		const book = await data.json();
		setTitle(book.title);
        setId(book.id);
        setAuthor(book.author);
        setDate(book.publicationDate);
        setLinks(book.links);
        setCoverPage(book.image);
        setCountry(book.country);
        setDescription(book.description);
        setGenres(book.genres);
    }

    const history= useHistory()


    return ( 
        <div key = {id} className="articulo-view">

            <div  className="one">
                    <img 
                        className="portada" 
                        src={coverPage} 
                        alt={title}
                    />

                <p className="detalle">Fecha de publicación: {date}</p>
                <p className="detalle">País: {country}</p>
                <div>

                <p className="detalle">
                    Géneros : 
                </p>
                <p className="detalle">
                    {genres.map (genero => 
                        <div class="form-check-inline">
                        <label className="link-title"onClick={() => history.push('search?q=' + genero.replaceAll(' ','-'))} for="inlineCheckbox1"> {genero} </label>
                        </div>)}
                        </p>
                </div>
            </div>
            
            <div className="two">
                <h1 className="text-light">{title}</h1>
                <hr></hr>
                <h4 className="link-title"onClick={() => history.push('search?q=' + author.replaceAll(' ','-'))}>{author}</h4>
                <hr></hr>
                <p className="descripcion text-light">
                    {description}
                </p>
                <hr></hr>
                <h2 className="text-light">Adaptaciones</h2>
                <ul>
                    {links.map(link =>
                        <LinkComponent link = {link} />
                    )}
                </ul>
            </div>
        </div>
    )
}
  
  export default Libro;