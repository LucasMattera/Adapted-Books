import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/AddBook.css";
import { helpHttp } from "../helpers/helpHttp";
import axios from "axios";
import AdminHomeButton from "./AdminHomeButton";
import AdminLogOutButtom from "./AdminLogOutButton";

function AddBook() {
    const history = useHistory();
    const [link, setLink] = useState("")
    const [genero, setGenero] = useState("")

    const [data,setData] = useState({
        titulo: "",
        autor:"",
        pais:"",
        imagen:"",
        links: [],
        fechaDePublicacion: "",
        generos: [],
        descripcion:""
    })
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [imagen, setImagen] = useState("")
    const [links, setLinks] = useState([])
    const [fechaDePublicacion, setFechaDePublicacion] = useState("")
    const [generos, setGeneros] = useState([])
    const [descripcion, setDescripcion] = useState("")

    
    const handleImputChange = (event) => {
        setData({...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .post("http://localhost:8080/api/v1/libros/add",data)
            .then((response) => {
                console.log(data)
                console.log(response)
            })
    }

    const handleImputLink = (event) =>{
        setLink(event.target.value)
    }

    const handleSubmitLink = (event) =>{
        setLinks(data.links.push(link))
        setLink("")
    }

    const handleImputGenero = (event) =>{
        setGenero(event.target.value)
    }

    const handleSubmitGenero = (event) =>{
        setGeneros(data.generos.push(genero))
        setGenero("")
    }
    
    return(
    <>
        <div className="loginBorder">
        <div className="centro">
            <form  className="login "onSubmit={handleSubmit}>
            
            
            <div class="form-group" >
                <label htmlFor="name">
                    Titulo:
                    <input type="text"
                    value = {data.titulo}
                    name="titulo"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
            </div>
            <div class="form-group" >
                
                <label htmlFor="email">
                    Autor:
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
                    Pais:
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
                    Links: {data.links.toString()}
                    <input type="text"
                    value = {link}
                    name="link"
                    onChange={handleImputLink}
                    className="form-control"
                    ></input>
                </label>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmitLink}>Agregar</button>
            </div>
            <div class="form-group" >
                <label htmlFor="genero">
                    Generos: {data.generos.toString()}
                    <input type="text"
                    value = {genero}
                    name="genero"
                    onChange={handleImputGenero}
                    className="form-control"
                    ></input>
                </label>
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" onClick={handleSubmitGenero}>Agregar</button>
            </div>
            <div class="form-group" >
                <label htmlFor="descripcion">
                    Descripcion:
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
                    Fecha:
                    <input type="date"
                    value = {data.fechaDePublicacion}
                    name="fechaDePublicacion"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
                <div class="form-group" >
                <label htmlFor="imagen">
                    Imagen:
                    <input type="text"
                    value = {data.imagen}
                    name="imagen"
                    onChange={handleImputChange}
                    className="form-control"
                    required></input>
                </label>
                </div>
            </div>
               <button type="submit" className="btn btn-primary">Agregar Libro</button>
            </form>
            </div>
            </div>
        </>
    )
};

export default AddBook;