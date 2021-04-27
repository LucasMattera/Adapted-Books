import React, { useEffect, useState } from 'react';
import './App.css';

/*const libros = [
  {id: '1', imageName: 'https://www.gestiontpv.com/img/modulos/posts/url1.jpg', tag: 'free'},
  {id: '2', imageName: 'https://i.blogs.es/e86c3b/bitly-codigo-qr/450_1000.jpg', tag: 'new'},
  {id: '3', imageName : 'https://www.gestiontpv.com/img/modulos/posts/url1.jpg', tag: 'free'},
  {id: '4', imageName : 'https://www.gestiontpv.com/img/modulos/posts/url1.jpg', tag: 'free'},
  {id: '5', imageName : 'https://www.gestiontpv.com/img/modulos/posts/url1.jpg', tag: 'pro'},
  {id: '6', imageName: 'https://www.gestiontpv.com/img/modulos/posts/url1.jpg', tag: 'free'}
];
*/

const App = () => {

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
      <h1 className="h1">AdaptedBooks</h1>
      <div className="contenido">
        {libros.map(libro =>
          <div key={libro.id}>
            <a href={libro.imagen}><img className="imagen" src={`${libro.imagen}`} alt="no cargo imagen" /></a>
            <p>{libro.titulo}</p>
          </div>)
        }
      </div>
    </div>
  );
}

export default App;
