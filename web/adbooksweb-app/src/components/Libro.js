import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import '../styles/Libro.css';
import BookSearch from './Search/BookSearch';
function Libro(){
    
    const [titulo, setTitulo] = useState("")
    const [id, setId] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [fecha, setFecha] = useState("")
    const [links, setLinks] = useState([])
    const [portada, setPortada] = useState("")
  //  const [descripcion, setDescripcion] = useState("")
  //  const [genero, setGenero] = useState("")

	
	useEffect(() => {	obtenerLibro()},[])
  const location = useLocation().pathname
	
	const obtenerLibro = async () => {
		const data = await fetch(`http://localhost:8080/api/v1${location}`)
		const libro = await data.json()
		setTitulo(libro.titulo)
    setId(libro.id)
    setAutor(libro.autor)
    setFecha(libro.fechaDePublicacion)
    setLinks(libro.links)
    setPortada(libro.imagen)
    setPais(libro.pais)
    console.log("titulo:", titulo)
  }


        return  (  
          
          <div key = {id} className="articulo-view">
            
            <div  className="one">
              <img className="portada" src={portada} alt={titulo}/>
              <p className="detalle">Fecha de publicación: {fecha}</p>
              <p className="detalle">País: {pais}</p>
              <p className="detalle">Género: género</p>
            </div>
            <div className="two">
              <h1 >{titulo}</h1>
              <h2>{autor}</h2>
              <p className="descripcion">descripcion</p>
              <h2>Adaptaciones</h2>
              <ul>
                {links.map(link =>{
                  return <li>{link}</li>
                })}
              </ul>
            </div>
            
          </div>)
  }
  
  export default Libro;