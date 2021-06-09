import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from "axios";
import '../../styles/Admin.css';

function Admin() {

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');
    const [alertBookDeleted, setAlertBookDeleted] = useState("");
    const history = useHistory();

    useEffect(() => {
        getBooks()
    }, []);


    const getBooks = async () => {
        const data = await fetch('http://localhost:8080/api/v1/libros')
        const allBooks = await data.json()
        setBooks(allBooks)
    }

    const filteredBooks = books.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase())
    });

    const handleClickDelete = (idBook, e) => {
        console.log(books)
        e.preventDefault();
        axios
            .delete(`http://localhost:8080/api/v1/libros/${idBook}`)
            .then(response => {
                console.log(response);
                getBooks();
            });
        window.scrollTo(0, 0)
        setAlertBookDeleted(<p className="alert alert-warning" role="alert">Libro Eliminado!</p>)
    }

    const toAdd = (e) => {
        history.push("/admin/add");
    }

    const handleEdit = (e, id) => {
        history.push("/admin/edit?q=" + id)
    }


    return (
        <div className="admin">
            <h1 className="mb">Administrador de Libros</h1>
            <div className="book-deletion-alert">{alertBookDeleted}</div>
            <div className="filterTab">
                <input
                    className="form-control filter filter-container"
                    onChange={e => setSearch(e.target.value)}
                    id="myInput"
                    type="text"
                    placeholder="Buscar por titulo.."
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
                            filteredBooks.map(book =>
                                <tr>
                                    <th scope="row">{book.id}</th>
                                    <td>
                                        {book.title}
                                    </td>
                                    <td>
                                        {book.author}
                                    </td>
                                    <td>
                                        <div class="btn-group btn-group-toggle" data-toggle="buttons">
                                            <button
                                                type="button"
                                                onClick={e => handleEdit(e, book.id)}
                                                class="btn btn-secondary"
                                            >
                                                Editar
                                        </button>
                                            <button
                                                type="button"
                                                class="btn btn-secondary"
                                                onClick={e => handleClickDelete(book.id, e)}
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