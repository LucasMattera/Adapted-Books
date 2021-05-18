import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/AddBook.css";
import axios from "axios";

function AddBook() {
    const history = useHistory();
    const [link, setLink] = useState("");
    const [genero, setGenero] = useState("");

    const [error,setError] = useState(false)
    const [agregado,setAgregado] = useState(false)

    const [data,setData] = useState({
        title: "",
        author:"",
        country:"",
        image:"",
        links: [],
        publicationDate: "",
        genres: [],
        decription:""
    });

    const [title, setTitulo] = useState("");
    const [author, setAutor] = useState("");
    const [country, setPais] = useState("");
    const [image, setImagen] = useState("");
    const [links, setLinks] = useState([]);
    const [publicationDate, setFechaDePublicacion] = useState("");
    const [genres, setGeneros] = useState([]);
    const [decription, setDescripcion] = useState("");

    
    const handleImputChange = (event) => {
        setData({...data,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        window.scrollTo(0, 0)
        setAgregado(false)
        setError(false)
        axios
            .post("http://localhost:8080/api/v1/libros/add",data)
            .then((response) => {
                setAgregado(true)
            })
            .catch((error) => setError(true)) 
    }

    const handleImputLink = (event) =>{
        setLink(event.target.value);
    }

    const handleSubmitLink = (event) =>{
        setLinks(data.links.push(link));
        setLink("");
    }

    const handleImputGenero = (event) =>{
        setGenero(event.target.value);
    }

    const handleSubmitGenero = (event) =>{
        setGeneros(data.generos.push(genero));
        setGenero("");
    }
    
    return(
    <>
        <div className="addBookContainer">
        <div className="centro">
        {agregado && (<div class="alert alert-success" role="alert">
            Libro agregado Correctamente!
        </div>)}
        {error && (
        <div class="alert alert-danger" role="alert">
            El Libro no fue Agregado!
        </div>)}
            <form  className="login "onSubmit={handleSubmit}>
            
            
            <div class="form-group" >
                <label htmlFor="titulo">
                <p class="text-light">Titulo:</p>
                    <input type="text"
                    value = {data.titulo}
                    name="titulo"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
            </div>
            <div class="form-group" >
                <label htmlFor="autor">
                <p className="text-light">Autor:</p>
                    <input type="text"
                    value = {data.autor}
                    name="autor"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
            </div>
            <div class="form-group" >
                <label htmlFor="pais">
                <p class="text-light">Pais:</p>
                    <input type="text"
                    value = {data.pais}
                    name="pais"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
            </div>
            <div class="form-group" >
                <label htmlFor="link">
                <p className="text-light" >Links: </p>
                    <input type="text"
                            value = {link}
                            name="link"
                            onChange={handleImputLink}
                            className="form-control"
                    ></input>
                </label>
                <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmitLink}>Agregar</button>
                
            </div>
            {data.links.map (link => <i class="text-light">{link}<br></br></i>)}
            <div class="form-group" >
                <label htmlFor="genero">
                <p class="text-light">Generos: </p>
                    <input type="text"
                    value = {genero}
                    name="genero"
                    onChange={handleImputGenero}
                    className="form-control"
                    ></input>
                </label>
                <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmitGenero}>Agregar</button>
            </div>
            <i class="text-light">{data.generos.toString()}</i>
            <div class="form-group" >
                <label htmlFor="descripcion">
                <p class="text-light">Descripcion:</p>
                    <input type="text"
                    value = {data.descripcion}
                    name="descripcion"
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
                    value = {data.fechaDePublicacion}
                    name="fechaDePublicacion"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
                <div class="form-group" >
                <label htmlFor="imagen">
                <p class="text-light">Imagen:</p>
                    <input type="text"
                    value = {data.imagen}
                    name="imagen"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                    <img src={data.imagen} className="imagePreview" alt=""></img>
                </label>
                </div>
            </div>
               <button type="submit" className="btn btn-dark">Agregar Libro</button>
            </form>
            </div>
            </div>
   
        </>
    )
};

export default AddBook;