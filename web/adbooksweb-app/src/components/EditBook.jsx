import React, { useEffect, useState } from "react";
import "../styles/AddBook.css";
import "../styles/EditBook.css"
import axios from "axios";
import UseQuery from "./Search/UseQuery";
import { useHistory } from "react-router";

function EditBook() {

    const query = UseQuery()
    const history = useHistory()

    useEffect(() => {
        obtenerLibro()
    }, [])

    const [link, setLink] = useState("")
    const [genre, setGenero] = useState("")
    const [error, setError] = useState(false)
    const [id, setId] = useState(NaN)
    const [title, setTitulo] = useState("")
    const [author, setAutor] = useState("")
    const [country, setPais] = useState("")
    const [image, setPortada] = useState("")
    const [links, setLinks] = useState([])
    const [publicationDate, setFecha] = useState("")
    const [genres, setGeneros] = useState([])
    const [description, setDescripcion] = useState("")

    const [bookUpdated, setBookUpdated] = useState()

    const [titleSaved, setTitleSaved] = useState("")
    const [authorSaved, setAuthorSaved] = useState("")
    const [countrySaved, setCountrySaved] = useState("")
    const [imageSaved, setImageSaved] = useState("")
    const [numberOfClicksAddOrDelete, setNumberOfClicksAddOrDelete] = useState(0)
    const [descriptionSaved, setDescriptionSaved] = useState("")
    const [publicationDateSaved, setPublicatioDateSaved] = useState("")
    // const [linksSaved, setLinksSaved] = useState([])
    const [fragmento,setFragmento] = useState()

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
    })

    const obtenerLibro = async () => {
        console.log("query: ", query.toString().replace('q=', ''))
        axios.get(`http://localhost:8080/api/v1/libros/` + (query.toString().replace('q=', '')))
            .then((response) => {
                const libro = response.data
                console.log("LIBRO: ", libro)

                setTitulo(libro.title)
                setId(libro.id)
                setAutor(libro.author)
                setFecha(libro.publicationDate)
                setLinks(libro.links)
                setPortada(libro.image)
                setPais(libro.country)
                setDescripcion(libro.description)
                setGeneros(libro.genres)
                setData(libro)


                setTitleSaved(libro.title)
                setAuthorSaved(libro.author)
                setCountrySaved(libro.country)
                setImageSaved(libro.image)
                setDescriptionSaved(libro.description)
                setPublicatioDateSaved(libro.publicationDate)
                // setLinksSaved(libro.links)
            })
            .catch((error) => setError(true))

    }

    const handleImputChange = (event,) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })

    }

    const Edit = (data) => {
        if
            (data.title != titleSaved
            || data.author != authorSaved
            || data.country != countrySaved
            || data.image != imageSaved
            || numberOfClicksAddOrDelete > 0
            || data.description != descriptionSaved
            || data.publicationDate != publicationDateSaved
            // || linksSaved.length < data.links.length
        ) {
            setBookUpdated("Updated book!")
            setFragmento(<button className= "btn-goHome btn btn-outline-success" onClick={handleSubmitGoHome}>go home?</button>)
        }
        else {
            setBookUpdated("Book not updated...")
            //    console.log(linksSaved.length)
            //    console.log(data.links.length) 
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        axios
            .put("http://localhost:8080/api/v1/libros/", data)
            .then((response) => {
                console.log(data)
                console.log(response)
                console.log(data.title)
            })
        Edit(data)
    }

    const handleImputLink = (event) => {
        setLink(event.target.value)
    }

    const handleSubmitLink = (event) => {
        setLinks(data.links.push(link))
        setLink("")
        setNumberOfClicksAddOrDelete(1)
    }

    const handleDeleteLink = (event, toDelete) => {
        data.links = data.links.filter(link => link !== toDelete)
        setLinks([])
        setNumberOfClicksAddOrDelete(1)
    }

    const handleImputGenero = (event) => {
        setGenero(event.target.value)
    }

    const handleSubmitGenero = (event) => {
        setGeneros(data.genres.push(genre))
        setGenero("")
        setNumberOfClicksAddOrDelete(1)
    }

    const handleDeleteGenre = (e, toDelete) => {
        data.genres = data.genres.filter(genre => genre !== toDelete);
        setGeneros([]);
        setNumberOfClicksAddOrDelete(1)
    }

    const handleSubmitGoHome = () => {
        history.push("/admin")
    }

    return (
        <>

            (<div className="addBookContainer">
                <div className="centro">
                    <form className="login">
                        <div class="form-group" >
                            <label htmlFor="titulo">
                                <p class="text-light">Titulo:</p>
                                <input type="text"
                                    value={data.title}
                                    name="title"
                                    onChange={handleImputChange}
                                    className="form-control"
                                    required></input>
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="autor">
                                <p className="text-light">Autor:</p>
                                <input type="text"
                                    value={data.author}
                                    name="author"
                                    onChange={handleImputChange}
                                    className="form-control"
                                    required></input>
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="pais">
                                <p class="text-light">Pais:</p>
                                <input type="text"
                                    value={data.country}
                                    name="country"
                                    onChange={handleImputChange}
                                    className="form-control"
                                    required></input>
                            </label>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="link">
                                <p className="text-light" >Links: </p>
                                <div className="links-container">
                                    {
                                        data.links.map(link =>
                                            <>
                                                <i class="text-light">{link}</i>
                                                <a className="close" onClick={e => handleDeleteLink(e, link)}>x</a>
                                                <br></br>
                                            </>
                                        )}
                                </div>
                                <input type="text"
                                    value={link}
                                    name="link"
                                    onChange={handleImputLink}
                                    className="form-control"
                                ></input>
                            </label>
                            <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmitLink}>Agregar</button>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="genero">
                                <p class="text-light">Generos: </p>
                                <div className="genres-container">
                                    {
                                        data.genres.map(genre =>
                                            <>
                                                <i class="text-light">{genre}</i>
                                                <a className="close" onClick={e => handleDeleteGenre(e, genre)}>x</a>
                                                <br></br>
                                            </>
                                        )}
                                </div>
                                <input type="text"
                                    value={genre}
                                    name="genre"
                                    onChange={handleImputGenero}
                                    className="form-control"
                                ></input>
                            </label>
                            <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmitGenero}>Agregar</button>
                        </div>
                        <div class="form-group" >
                            <label htmlFor="descripcion">
                                <p class="text-light">Descripcion:</p>
                                <input type="text"
                                    value={data.description}
                                    name="description"
                                    onChange={handleImputChange}
                                    className="form-control"
                                    required></input>
                            </label>
                            <div>
                            </div>
                        </div>
                        <div class="form-group">
                            <label htmlFor="fechaDePublicacion">
                                <p class="text-light">Fecha:</p>
                                <input type="date"
                                    value={data.publicationDate}
                                    name="publicationDate"
                                    onChange={handleImputChange}
                                    className="form-control"
                                    required>
                                </input>
                            </label>
                            <div class="form-group" >
                                <label htmlFor="imagen">
                                    <p class="text-light">Imagen:</p>
                                    <input type="text"
                                        value={data.image}
                                        name="image"
                                        onChange={handleImputChange}
                                        className="form-control"
                                        required>
                                    </input>
                                    <img src={data.image} className="imagePreview" alt=""></img>
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary" onClick={e => handleSubmit(e)} >Guardar</button>
                    </form>
                </div>
            </div>)
            <center><div className="bookUpdated">
                {bookUpdated} 
                {fragmento}
            </div></center>
                
        </>
    )
};

export default EditBook;