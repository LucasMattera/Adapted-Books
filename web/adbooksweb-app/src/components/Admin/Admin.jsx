import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../styles/Admin.css';
import EditBook from './EditBook';
import AdminLogOutButtom from './AdminLogOutButton';
import AdminNavbar from './AdminNavbar';

function Admin(){
    
    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const history= useHistory();

    useEffect(() => {
		getBooks()
	}, []);

    
	const getBooks = async () => {
		const data = await fetch('http://localhost:8080/api/v1/libros')
		const todosLosLibros = await data.json()
		setBooks(todosLosLibros)
  	}
    
    const filteredBooks = books.filter(book => {
       return book.title.toLowerCase().includes(search.toLowerCase())
    });

    const handleClickDelete = (idBook, e) => {
        
        e.preventDefault();
        axios
            .delete(`http://localhost:8080/api/v1/libros/${idBook}`)
            .then(response => {
                console.log(response);
                getBooks();
            });
    }

    const toAdd = (e) => {
        history.push("/admin/add");
    }

    const handleEdit = (e,id) => {
        history.push("/admin/edit?q="+id)
    }

 
    return  (  
        <div className= "admin">
            <h1 className="mb">Administrador de Libros</h1>
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
                ><h1 className="btn-work">+</h1></button>
                <table className="table table-hover table-dark margin">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Titulo</th>
                            <th scope="col">Autor</th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filteredBooks.map(libro =>
                                <tr>
                                    <th scope="row">{libro.id}</th>
                                    <td>
                                        {libro.titulo}
                                    </td>
                                    <td>
                                        {libro.autor}
                                    </td>
                                    <td>
                                    <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                        <button
                                            type="button" 
                                            onClick={e => handleEdit(e,libro.id)}
                                            class="btn btn-secondary"
                                        >
                                            Editar
                                        </button>
                                        <button
                                            type="button" 
                                            class="btn btn-secondary"
                                            onClick={e => handleClickDelete(libro.id, e)}
                                        >
                                            Eliminar
                                        </button>
                                        </div>
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