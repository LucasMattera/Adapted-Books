import React, { useEffect, useState } from "react";
import "../../styles/AddBook.css";
import "../../styles/EditBook.css"
import axios from "axios";
import UseQuery from "../Search/UseQuery";
import { useHistory } from "react-router";

function EditBook() {

    const genresDefault = ["Cyberpunk", "Space Opera", "Terror", "Ciencia Ficcion", "Thriller", "Aventura", "Acción", "Manga", "Suspenso", "Misterio", "Comedia", "Sobrenatural", "Superpoderes", "Fantasía", "Fantasía Oscura", "Alta Fantasia", "Novela", "Drama Apocalíptico", "Juvenil"]


    const query = UseQuery()
    const history = useHistory()

    useEffect(() => {
        obtenerLibro()
    }, [])

    const [link, setLink] = useState("")
    const [error, setError] = useState(false)
    
    //estos datos son los anteriores
    const [id, setId] = useState(NaN)
    const [title, setTitulo] = useState("")
    const [author, setAutor] = useState("")
    const [country, setPais] = useState("")
    const [image, setPortada] = useState("")
    const [links, setLinks] = useState([])
    const [publicationDate, setFecha] = useState("")
    const [genres, setGeneros] = useState([])
    const [description, setDescripcion] = useState("")
    const [invalidImage,setInvalidImage] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [bookUpdated, setBookUpdated] = useState()
    const [fragmento, setFragmento] = useState()
    const [intentoGuardar,setIntentoGuardar] = useState(false)

    //esto es lo que se actualiza
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

    const setStaticsFieldData = (libro) =>{
        setTitulo(libro.title)
        setId(libro.id)
        setAutor(libro.author)
        setFecha(libro.publicationDate)
        setLinks(libro.links)
        setPortada(libro.image)
        setPais(libro.country)
        setDescripcion(libro.description)
        setGeneros(libro.genres)
    }

    const obtenerLibro = async () => {
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
        setData({...data,
            [event.target.name]: event.target.value.trimEnd().trimStart()
        })
        setIntentoGuardar(false)
    }

    function seActualizoLibro(){
         return (data.title != title || data.author != author || data.country != country || data.image != image || data.description != description || data.publicationDate != publicationDate || data.links != links || data.genres != genres)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if(seActualizoLibro()){
            try{
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
                setBookUpdated("Libro actualizado!")
                setFragmento(<button className="btn-goHome btn btn-outline-success" onClick={handleSubmitGoHome}>¿Ir al inicio?</button>)
            } catch{}
        }else{
            setBookUpdated("Libro no actualizado...") 
        }

    }

    const handleSubmitImage = (event) => {
        var isImage = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);
        if(isImage.test(data.image)){
            setInvalidImage(false); 
            }else if(data.image != ""){
               setInvalidImage(true);
            }
    }

    const handleSubmitField = (event) => {
        Object.getOwnPropertyNames(data).forEach(function(val, index, array){
            if(data[val] == ''){
                setIntentoGuardar(true)
                throw new Error(`error de campo vacio ${val}`);
            }
        });
    }

    const handleInputLink = (event) => {
        setLink(event.target.value.trim())
    }

    const handleSubmitLink = (event) =>{
        var isLink = new RegExp(/^(ftp|http|https):\/\/[^ "]+$/);
        
        if(isLink.test(link)) {
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
            setGeneros(data.genres.push(event.target.value))
        } else {
            var index = data.genres.indexOf(event.target.value)
            if (index > -1) {
                setGeneros(data.genres.splice(index, 1))
            }
        }
    }


    const handleSubmitGoHome = () => {
        history.push("/admin")
    }


    return (
        <>

            (<div className="addBookContainer" data-test="edit-book">
                <div className="centro">
                    <form className="login" onSubmit={handleSubmit}>
                        <div class="title" >
                            <label htmlFor="titulo">
                                <p class="text-light">Titulo:</p>
                                <input 
                                    type="text"
                                    value={data.title}
                                    name="title"
                                    className="form-control"
                                    data-test ="edit-title"
                                    onChange={handleInputChange}
                                    onBlur={cleanFinalSpaces}
                                />
                                { intentoGuardar && (!data.title) && (
                                    <p className="alert alert-warning" data-test="fail-title">
                                        Este campo no puede estar vacio
                                    </p>
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
                                    className="form-control"
                                    data-test="author"
                                    onBlur={cleanFinalSpaces}/>
                                { intentoGuardar && (!data.author) && (
                                    <p className="alert alert-warning" data-test="fail-title">
                                        Este campo no puede estar vacio
                                    </p>
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
                                    className="form-control"
                                    data-test="country"
                                    onBlur={cleanFinalSpaces}></input>
                                    { intentoGuardar && (!data.country) && (
                                    <p className="alert alert-warning" data-test="fail-title">
                                        Este campo no puede estar vacio
                                    </p>
                                    )}
                            </label>
                        </div>
                        <p className="text-light genero" >Links: </p>
                        <div class="form-group" >
                            <label htmlFor="link">
                                { invalidLink && (
                                    <p className="invalid" data-test="fail-link">
                                        Ingrese un link valido
                                    </p>
                                )}
                                <input type="text"
                                    value={link}
                                    name="link"
                                    onChange={handleInputLink}
                                    className="form-control"
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
                        {data.links.map(link => 
                            <i class="text-light">{link}
                                <a className="btn btn-danger" 
                                   onClick={e => handleDeleteLink(e, link)}>
                                       x
                                </a>
                                <br></br>
                            </i>)}
                        <div class="form-group" >
                            <p class="text-light genero">Generos: </p>
                        </div>    
                        {
                            genresDefault.map(genero =>
                                <div class="form-check form-check-inline margenBajo">
                                    <input class="form-check-input"
                                           type="checkbox" 
                                           data-test ={genero} 
                                           id={genero} 
                                           value={genero} 
                                           onClick={handleInputGenero}/>
                                    <label class="text-light" 
                                           for="inlineCheckbox1">{genero}</label>
                                </div>
                            )
                        }
                        {
                        data.genres.map(genre =>
                            <div class="form-check form-check-inline margenBajo">
                            <input 
                                class="form-check-input" 
                                type="checkbox" 
                                data-test ={genre} 
                                id={genre} 
                                value={genre} 
                                onClick={handleInputGenero}
                            />
                            <label 
                                class="text-light" 
                                for="inlineCheckbox1">{genre}</label>
                        </div>
                        )}
                        <div class="form-group" >
                            <label htmlFor="descripcion">
                                <p class="text-light genero">Descripcion:</p>
                                    <input 
                                        type="text"
                                        value = {data.description}
                                        name="description"
                                        onChange={handleInputChange}
                                        className="form-control"
                                        data-test="description"
                                        onBlur={cleanFinalSpaces}
                            />
                            { intentoGuardar && (!data.description) && (
                            <p className="alert alert-warning" data-test="fail-title">
                                Este campo no puede estar vacio
                            </p>
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
                                    required>
                                </input>
                                { intentoGuardar && (!data.publicationDate) && (
                                    <p className="alert alert-warning" data-test="fail-title">
                                        Este campo no puede estar vacio
                                    </p>
                                )}
                            </label>
                            <div class="form-group" >
                                <label htmlFor="imagen">
                                    <p class="text-light">Imagen:</p>
                                    { 
                                        invalidImage && (
                                        <p className="invalid" data-test="fail-image">
                                            Ingrese una imagen valida
                                        </p>)
                                    }
                                    <input type="text"
                                        value={data.image}
                                        name="image"
                                        onChange={handleInputChange}
                                        className="form-control"
                                        placeholder="Ingrese una url.."
                                        data-test="image-field"
                                        onBlur={cleanFinalSpaces}>
                                    </input>
                                    <img src={data.image} 
                                        className="imagePreview" 
                                        alt=""></img>
                                    { intentoGuardar && (!data.image) && (
                                        <p className="alert alert-warning" data-test="fail-title">
                                            Este campo no puede estar vacio
                                        </p>
                                    )}    
                                </label>
                            </div>
                        </div>
                        <button className="btn btn-primary"
                                type="submit"
                                alt="guardar" 
                                onClick={e => handleSubmit(e)} 
                                data-test="save-book-btn">Guardar</button>
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