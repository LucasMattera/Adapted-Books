import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import '../styles/Admin.css';
import UseQuery from './Search/UseQuery';
function Admin(){
    
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
		getBooks()
	}, [])

	var id = 0

    const idPlus = () => {
       var ret = id
        id++
        return ret
    }
    
	
	const getBooks = async () => {
		const data = await fetch('http://localhost:8080/api/v1/libros')
		const todosLosLibros = await data.json()
		setBooks(todosLosLibros)
        console.log(books)
  	}
    
    
    const filteredBooks = books.filter(book => {
       return book.titulo.toLowerCase().includes(search.toLowerCase())
    })

        return  (  
        <div className= "admin">
          <h2 className="mb">Manage Books</h2>
                <div className="filterTab">
                        <input className="form-control filter filter-container" onChange={e => setSearch(e.target.value)} id="myInput" type="text" placeholder="Search by title.."/>
                        <button type="button" class="btn btn-secondary add">Agregar</button>
                            <table className="table table-hover table-dark">
                            <thead>
                                  <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Autor</th>
                                    <th scope="col"></th>
                                  </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredBooks.map(libro =>
                                    
                                        <tr>
                                            <th scope="row">{idPlus()}</th>
                                            <td>
                                                {libro.titulo}
                                            </td>
                                            <td>
                                                {libro.autor}
                                            </td>
                                            <td>
                                                eliminar
                                            </td>
                                        </tr> 
                                    )
                                }
                              </tbody>
                            </table>
                </div>
        </div>)
  }
  
  export default Admin;