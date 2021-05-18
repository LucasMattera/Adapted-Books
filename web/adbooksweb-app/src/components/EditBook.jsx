import React, {useEffect, useState} from "react";
import "../styles/AddBook.css";
import "../styles/EditBook.css"
import axios from "axios";
import UseQuery from "./Search/UseQuery";
import { useHistory } from "react-router";

function EditBook(){  
    
    const query = UseQuery()
    const history = useHistory()
    
    useEffect(() => {
		obtenerLibro()
	}, [])

    

    const [link, setLink] = useState("")
    const [genero, setGenero] = useState("")
    
    const [error, setError] = useState(false)
    const [id, setId] = useState(NaN)
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [imagen, setPortada] = useState("")
    const [links, setLinks] = useState([])
    const [fechaDePublicacion, setFecha] = useState("")
    const [generos, setGeneros] = useState([])
    const [descripcion, setDescripcion] = useState("")

    
    

    const [data, setData] = useState({
        id:id,
        titulo: titulo,
        autor:autor,
        pais:pais,
        imagen:imagen,
        links: links,
        fechaDePublicacion:fechaDePublicacion,
        generos: generos,
        descripcion: descripcion
    })
    

    const obtenerLibro = async () => {
        console.log("query: ", query.toString().replace('q=', ''))
            axios.get(`http://localhost:8080/api/v1/libros/`+ (query.toString().replace('q=', '')))
            .then((response) => {
                const libro = response.data
                console.log("LIBRO: ", libro)
                  
                setTitulo(libro.titulo)
                setId(libro.id)
                setAutor(libro.autor)
                setFecha(libro.fechaDePublicacion)
                setLinks(libro.links)
                setPortada(libro.imagen)
                setPais(libro.pais)
                setDescripcion(libro.descripcion)
                setGeneros(libro.generos) 
                setData(libro)
                  
            })
            .catch((error) => setError(true))
            
            
    }


    
    
    const handleImputChange = (event,) => {
        setData({...data,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        axios
            .put("http://localhost:8080/api/v1/libros/",data)
            .then((response) => {
                console.log(data)
                console.log(response)
                
            })
            history.push("/admin")
    }

    const handleImputLink = (event) =>{
        setLink(event.target.value)
    }

    const handleSubmitLink = (event) =>{
        setLinks(data.links.push(link))
        setLink("")
    }

    const handleDeleteLink = (event,toDelete) => {
       data.links= data.links.filter(link => link!== toDelete)
        setLinks([])
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
        
        (<div className="addBookContainer">
        <div className="centro">
            <form  className="login">
            
            
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
                    <div className="links-container">
                        
                        {
                        data.links.map(link =>
                           <>
                            <i class="text-light">{link}</i>
                            <a className="close" onClick={e=> handleDeleteLink(e,link)}>x</a>
                            <br></br>
                           </>   
                        )}
                        
                    </div>
                    
                    <input type="text"
                            value = {link}
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
                <i class="text-light">{data.generos.toString()}</i>
                    <input type="text"
                    value = {genero}
                    name="genero"
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
                        required>
                    </input>
                </label>
                <div class="form-group" >
                <label htmlFor="imagen">
                <p class="text-light">Imagen:</p>
                    <input type="text"
                        value = {data.imagen}
                        name="imagen"
                        onChange={handleImputChange}
                        className="form-control"
                    required>
                    </input>
                    <img src={data.imagen} className="imagePreview" alt=""></img>
                </label>
                </div>
            </div>
               <button className="btn btn-primary" onClick={e=> handleSubmit(e)} >Guardar</button>
            </form>
            </div>
            </div>)
        </>
    )
};

export default EditBook;