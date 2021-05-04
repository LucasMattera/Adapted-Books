import React, { useEffect, useState } from 'react';
import '../styles/Inicio.css';
import ArticuloMiniatura from './ArticuloMiniatura'

import BookSearch from './Search/BookSearch';


function Inicio() {

	//proposito: asigna un estado inicial a los libros de la app. Su estado inicial es una lista vacia.
	const [libros, setLibros] = useState([])

	//proposito: obtiene los libros por medio de una funcion una vez que la vista renderiza.
	useEffect(() => {
		obtenerLibros()
	}, [])

	//proposito: en esta funcion le pego a la api por medio de un fetch y me traigo todos los libros.
	const obtenerLibros = async () => {
		const data = await fetch('http://localhost:8080/api/v1/libros')
		const todosLosLibros = await data.json()
		console.log(todosLosLibros)
		setLibros(todosLosLibros)
  	}

	return (
		<div className="app">

			<BookSearch/>

			<h1 className="h1">AdaptedBooks</h1>
			<div className="contenido">
				{
					libros.map(libro =>
						<ArticuloMiniatura to={`/libros/${libro.id}`} id={libro.id} libro={libro} />
					)
				}
			</div>
    	</div>
  	);
}

export default Inicio;
