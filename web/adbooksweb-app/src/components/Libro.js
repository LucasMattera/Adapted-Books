import React, { useEffect, useState } from 'react';
import '../styles/Libro.css';
import UseQuery from './Search/UseQuery';

function Libro(){
<<<<<<< HEAD
    
    const [title, setTitle] = useState("");
    const [id, setId] = useState("");
    const [author, setAuthor] = useState("");
    const [country, setCountry] = useState("");
    const [date, setDate] = useState("");
    const [links, setLinks] = useState([]);
    const [coverPage, setCoverPage] = useState("");
    const [description, setDescription] = useState("");
    const [genres, setGenres] = useState([]);
=======

    const [titulo, setTitulo] = useState("")
    const [id, setId] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [fecha, setFecha] = useState("")
    const [links, setLinks] = useState([])
    const [portada, setPortada] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [generos, setGeneros] = useState([])
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff

	useEffect(() => {	getLibro()},[]);
    const query = UseQuery();
	
	const getLibro = async () => {
    console.log("query: ", query.toString().replace('q=', ''))
		const data = await fetch(`http://localhost:8080/api/v1/libros/`+ (query.toString().replace('q=', '')));
		const book = await data.json();
		setTitle(book.titile);
        setId(book.id);
        setAuthor(book.author);
        setDate(book.publicationDate);
        setLinks(book.links);
        setCoverPage(book.image);
        setCountry(book.country);
        setDescription(book.description);
        setGenres(book.genres);
        console.log("titulo:", title);
    }

<<<<<<< HEAD
    return ( 
        <div key = {id} className="articulo-view">
=======
        return  (  
         
          <div key = {id} className="articulo-view">

>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff
            <div  className="one">
                <img 
                    className="portada" 
                    src={coverPage} 
                    alt={title}
                />
                <p className="detalle">Fecha de publicación: {date}</p>
                <p className="detalle">País: {country}</p>
                <p className="detalle">
                    Géneros: {genres.toString()}
                </p>
            </div>
            <div className="two">
                <h1 >{title}</h1>
                <h2>{author}</h2>
                <p className="descripcion">
                    {description}
                </p>
                <h2>Adaptaciones</h2>
                <ul>
                    {links.map(link =>{
                        return <li>
                                    <a href={link}>
                                        {link}
                                    </a>
                                </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
  
  export default Libro;