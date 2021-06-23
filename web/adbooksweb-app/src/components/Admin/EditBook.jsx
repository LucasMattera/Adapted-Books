import React, { useEffect, useState } from "react";
import "../../styles/EditBook.css";
import axios from "axios";
import UseQuery from "../Search/UseQuery";
import { useHistory } from "react-router";

function EditBook() {

    const genresDefault = ["Cyberpunk", "Space Opera", "Terror", "Ciencia Ficcion", "Thriller", "Aventura", "Acción", "Manga", "Suspenso", "Misterio", "Comedia", "Sobrenatural", "Superpoderes", "Fantasía", "Fantasía Oscura", "Alta Fantasia", "Novela", "Drama Apocalíptico", "Juvenil"]

    const query = UseQuery()
    const history = useHistory()

    useEffect(() => {
        getBook()
    }, [])

    const [link, setLink] = useState("")
    const [error, setError] = useState(false)

    const [id, setId] = useState(NaN)
    const [title, setTitle] = useState("")
    const [author, setAuthor] = useState("")
    const [country, setCountry] = useState("")
    const [image, setImage] = useState("")
    const [links, setLinks] = useState([])
    const [publicationDate, setPublicationDate] = useState("")
    const [genres, setGenres] = useState([])
    const [description, setDescription] = useState("")
    const [invalidImage, setInvalidImage] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [bookUpdated, setBookUpdated] = useState()
    const [trySave, setTrySave] = useState(false)

    const [data, setData] = useState({
        id: id,
        title: title,
        author: author,
        country: country,
        image: image,
        links: links,
        publicationDate: publicationDate,
        genres: genres,
        description: description,
    });

    const setStaticsFieldData = (book) => {
        setTitle(book.title)
        setId(book.id)
        setAuthor(book.author)
        setPublicationDate(book.publicationDate)
        setLinks(book.links)
        setImage(book.image)
        setCountry(book.country)
        setDescription(book.description)
        setGenres(book.genres)
    }

    const getBook = async () => {
        console.log("query: ", query.toString().replace('q=', ''))
        axios.get(`http://localhost:8080/api/v1/libros/` + (query.toString().replace('q=', '')))
            .then((response) => {
                const libro = response.data
                setStaticsFieldData(libro)
                setData(libro)
            })
            .catch((error) => setError(true))

    }

    const handleInputChange = (event,) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const cleanFinalSpaces = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value.trimEnd().trimStart()
        })
        setTrySave(false)
    }

    function bookWasUpdated() {
        return (data.title != title || data.author != author || data.country != country || data.image != image || data.description != description || data.publicationDate != publicationDate || data.links != links || data.genres != genres)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (bookWasUpdated()) {
            try {
                handleSubmitImage();
                handleSubmitField();
                axios
                    .put("http://localhost:8080/api/v1/libros/", data)
                    .then((response) => {
                        console.log(data)
                        console.log(response)
                        console.log(data.title)
                    }).catch((error) => setError(true));
                setStaticsFieldData(data)
                setBookUpdated(
                    <div className="success-edited" data-test="success-edited">
                            <i aria-hidden="true"/>
                            Datos actualizados
                    </div>
                )
            } catch { }
        } else {
            setBookUpdated(
                <div className="unsuccess-edited" data-test="unsuccess-edited">
                    <i aria-hidden="true"/>
                    No se han podido actualizar los datos
                </div>
            )
        }

    }

    const handleSubmitImage = (event) => {
        var isImage = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);
        if (isImage.test(data.image)) {
            setInvalidImage(false);
        } else if (data.image != "") {
            setInvalidImage(true);
        }
    }

    const handleSubmitField = (event) => {
        Object.getOwnPropertyNames(data).forEach(function (val, index, array) {
            if (data[val] == '' && val != "links") {
                setTrySave(true)
                throw new Error(`error de campo vacio ${val}`);
            }
        });
    }

    const handleInputLink = (event) => {
        setLink(event.target.value.trim())
    }

    const handleSubmitLink = (event) => {
        var isLink = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);

        if (isLink.test(link)) {
            setLinks(data.links.push(link));
            setLink("");
            setInvalidLink(false);
        } else {
            setInvalidLink(true);
        }
    }

    const handleDeleteLink = (event, toDelete) => {
        data.links = data.links.filter(link => link !== toDelete)
        setLinks([])

    }

    const handleInputGenero = (event) => {

        var checkbox = document.getElementById(event.target.id)
        if (checkbox.checked == true) {
            setGenres(data.genres.push(event.target.value))
        } else {
            var index = data.genres.indexOf(event.target.value)
            if (index > -1) {
                setGenres(data.genres.splice(index, 1))
            }
        }
    }

    const checkGenres = () =>{
        data.genres.map(genre => {
            var checkbox = document.getElementById(genre)
            checkbox.checked = true
        })
    }

    return (
        <>

            (<div class="container">
        <div class="row">
        <div class="col">
        </div>
        <div class="col-9">
        <div className="addBookContainer" data-test="add-book">
        <div className="centro">
                    <form className="form-floating" onSubmit={handleSubmit}>
                        <div class="title" >
                            <label htmlFor="titulo">
                                <p class="text-light">Titulo:</p>
                                <input
                                    type="text"
                                    value={data.title}
                                    name="title"
                                    className="form-control label-grande"
                                    data-test="edit-title"
                                    onChange={handleInputChange}
                                    onBlur={cleanFinalSpaces}
                                />
                                {trySave && (!data.title) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-title"/>
                                        El campo "Título" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="autor">
                                <p className="text-light genero">Autor:</p>
                                <input type="text"
                                    value={data.author}
                                    name="author"
                                    onChange={handleInputChange}
                                    className="form-control label-grande"
                                    data-test="edit-author"
                                    onBlur={cleanFinalSpaces} />
                                {trySave && (!data.author) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-author"/>
                                        El campo "Autor" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="pais">
                                <p class="text-light genero">Pais:</p>
                                <input type="text"
                                    value={data.country}
                                    name="country"
                                    onChange={handleInputChange}
                                    className="form-control label-grande"
                                    data-test="edit-country"
                                    onBlur={cleanFinalSpaces}></input>
                                {trySave && (!data.country) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-country"/>
                                        El campo "País" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>
                        <p className="text-light genero" >Links: </p>
                        <div class="form-group" >
                            <label htmlFor="link">
                                {invalidLink && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true"/>
                                        Ingrese un link válido
                                    </div>
                                )}
                                <input type="text"
                                    value={link}
                                    name="link"
                                    onChange={handleInputLink}
                                    className="form-control label-grande"
                                    placeholder="Ingrese una url.."
                                    data-test="link"
                                ></input>
                            </label>
                            <button class="btn btn-dark"
                                type="button"
                                id="button-addon2"
                                onClick={handleSubmitLink}>
                                Agregar
                            </button>
                        </div>
                        <ul class="list-menu">
            {

                data.links.map(link => 
                    <li class="list-group-item list-item">
                        
                        <a className="link"target="_blank" rel="noopener noreferrer" href={link} className="link">{link}
                        
                        
                        </a>
                        <buttom type="buttom" 
                            className="btn btn-danger" 
                            onClick={e => handleDeleteLink(e, link)} 
                            data-test="remove-link">
                                X
                        </buttom>
                        
                        
                    </li>
                )
            }
            {checkGenres()}
            </ul>
                        <div class="form-group" >
                            <p class="text-light genero">Generos: </p>
                        </div>

                        <div className="generoMapping">
                            {
                                genresDefault.map(genero =>
                                    <div className="genero-tag">
                                        <div class="margenBajo">
                                            <input class="form-check-input"
                                                type="checkbox"
                                                data-test={genero}
                                                id={genero}
                                                value={genero}
                                                onClick={handleInputGenero}
                                            />
                                            <label class="texto-genero"
                                                for="inlineCheckbox1">{genero}</label>

                                        </div>
                                    </div>
                                    
                                )
                            }
                        </div>  
                        <div class="form-group" >
                            <label htmlFor="descripcion" class="form-label">
                                <p class="text-light genero">Descripción:</p>
                                <textarea
                                    type="text"
                                    value={data.description}
                                    name="description"
                                    onChange={handleInputChange}
                                    className="form-control label-grande"
                                    data-test="edit-description"
                                    onBlur={cleanFinalSpaces}
                                />
                                {trySave && (!data.description) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-description"/>
                                        El campo "Descripción" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>
                        <div class="form-group">
                            <label htmlFor="fechaDePublicacion">
                                <p class="text-light genero">Fecha:</p>
                                <input type="date"
                                    value={data.publicationDate}
                                    name="publicationDate"
                                    onChange={handleInputChange}
                                    className="form-control"
                                    data-test="edit-date"
                                >
                                </input>
                                {trySave && (!data.publicationDate) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-date"/>
                                        El campo "Fecha de publicación" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="imagen">
                                <p class="text-light">Imagen:</p>
                                {
                                    invalidImage && (
                                        <div class="audun_warn">
                                        <i class="fa fa-exclamation-triangle" aria-hidden="true"/>
                                            Ingrese una imagen válida
                                        </div>
                                )}
                                <input type="text"
                                    value={data.image}
                                    name="image"
                                    onChange={handleInputChange}
                                    className="form-control label-grande"
                                    placeholder="Ingrese una url.."
                                    data-test="edit-image"
                                    onBlur={cleanFinalSpaces}>
                                </input>
                                <img src={data.image}
                                    className="imagePreview"
                                    alt=""></img>
                                {trySave && (!data.image) && (
                                    <div class="audun_warn">
                                    <i class="fa fa-exclamation-triangle" aria-hidden="true" data-test="fail-image"/>
                                        El campo "Imagen" no puede estar vacío
                                    </div>
                                )}
                            </label>
                        </div>    

                        <button className="btn btn-primary"
                            type="submit"
                            alt="guardar"
                            onClick={e => handleSubmit(e)}
                            data-test="save-book-btn">Guardar</button>
                    </form>
                    </div>
            </div>
            </div>
            <div class="col">
            </div>
            </div>
            </div>
            )
            <center>
                {bookUpdated}
            </center>
        </>
    )
};

export default EditBook;