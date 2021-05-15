import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Admin.css';

function Admin(){
    
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const history= useHistory();

    useEffect(() => {
		getBooks()
	}, []);

	var id = 0;

    const idPlus = () => {
        return id++
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

    const handleClickDelete = (idBook, e) => {
        //event.preventDefault();
        getBooks();
        axios
            .delete(`http://localhost:8080/api/v1/libros/${idBook}`)
            .then(response => {
                console.log(response)
            });
    }

    const toAdd = (e) => {
        history.push("/admin/add");
    }

    const toEdit = (e,id) => {
        history.push("/admin/edit/"+id)
    }
 
    return  (  
        <div className= "admin">
          <h2 className="mb">Manage Books</h2>
                <div className="filterTab">
                        <input 
                            className="form-control filter filter-container" 
                            onChange={e => setSearch(e.target.value)} 
                            id="myInput" 
                            type="text" 
                            placeholder="Search by title.."
                        />
                        <button 
                            type="button" 
                            className="btn btn-secondary add" 
                            onClick={e => toAdd(e)}
                        >Agregar</button>
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
                                                    <button
                                                        type="button" 
                                                        onClick={e => toEdit(e,libro.id)}
                                                    >
                                                        Editar
                                                    </button>
                                                    <button
                                                        type="button" 
                                                        onClick={e => handleClickDelete(libro.id, e)}
                                                    >
                                                        Eliminar
                                                    </button>
                                                </td>
                                            </tr> 
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
            </div>
    )


    


}   
  
  export default Admin;