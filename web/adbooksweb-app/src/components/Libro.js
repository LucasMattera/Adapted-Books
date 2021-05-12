import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import '../styles/Libro.css';
import UseQuery from './Search/UseQuery';
function Libro(){
    
    const [titulo, setTitulo] = useState("")
    const [id, setId] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [fecha, setFecha] = useState("")
    const [links, setLinks] = useState([])
    const [portada, setPortada] = useState("")
    const [descripcion, setDescripcion] = useState("")
    const [generos, setGeneros] = useState([])

	
	useEffect(() => {	obtenerLibro()},[])
  const query = UseQuery()
	
	const obtenerLibro = async () => {
    console.log("query: ", query.toString().replace('q=', ''))
		const data = await fetch(`http://localhost:8080/api/v1/libros/`+ (query.toString().replace('q=', '')))
		const libro = await data.json()
		setTitulo(libro.titulo)
    setId(libro.id)
    setAutor(libro.autor)
    setFecha(libro.fechaDePublicacion)
    setLinks(libro.links)
    setPortada(libro.imagen)
    setPais(libro.pais)
    setDescripcion(libro.descripcion)
    setGeneros(libro.generos)
    console.log("titulo:", titulo)
  }



        return  (  
          
          <div key = {id} className="articulo-view">
            
            <div  className="one">
              <img className="portada" src={portada} alt={titulo}/>
              <p className="detalle">Fecha de publicación: {fecha}</p>
              <p className="detalle">País: {pais}</p>
              <p className="detalle">Géneros: {generos.toString()}</p>
            </div>
            <div className="two">
              <h1 >{titulo}</h1>
              <h2>{autor}</h2>
              <p className="descripcion">{descripcion}</p>
              <h2>Adaptaciones</h2>
              <ul>
                {links.map(link =>{
                  return <li><a href={link}>{link}</a></li>
                })}
              </ul>
            </div>
            
          </div>)
  }
  
  export default Libro;