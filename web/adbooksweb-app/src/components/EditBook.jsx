import React, {useCallback, useState} from "react";
import "../styles/AddBook.css";
import "../styles/EditBook.css"
import axios from "axios";
import UseQuery from "./Search/UseQuery";

function EditBook(){  
    
    const query = UseQuery(

        useEffect(() => {	obtenerLibro()},[])
    )

    const obtenerLibro = async () => {
        console.log("query: ", query.toString().replace('q=', ''))
            const data = await fetch(`http://localhost:8080/api/v1/libros/`+ (query.toString().replace('q=', '')))
            const libro = await data.json()
            setTitulo(libro.titulo)
            setId(libro.id)
            setAutor(libro.autor)
            setFecha(libro.fechaDePublicacion)
            setLinks(libro.links)
            setPortada(libro.imagen)
            setPais(libro.pais)
            setDescripcion(libro.descripcion)
            setGeneros(libro.generos)
    }

    const [link, setLink] = useState("")
    const [genero, setGenero] = useState("")
    const [id, setId] = useState(NaN)
    const [titulo, setTitulo] = useState("")
    const [autor, setAutor] = useState("")
    const [pais, setPais] = useState("")
    const [imagen, setImagen] = useState("")
    const [links, setLinks] = useState([])
    const [fechaDePublicacion, setFechaDePublicacion] = useState("")
    const [generos, setGeneros] = useState([])
    const [descripcion, setDescripcion] = useState("")

    const [data,setData] = useState({
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
                handleClose()
            })
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
        <div className="addBookContainer">
        <div className="centro">
            <form  className="login">
            
            
            <div class="form-group" >
                <label htmlFor="titulo">
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
                    Links: 
                    <div className="links-container">
                        <ul>
                        {
                        data.links.map(link =>
                           <li>
                            {link.toString()}
                            <a className="close" onClick={e=> handleDeleteLink(e,link)}>x</a>
                           </li>   
                        )}
                        </ul>
                    </div>
                    
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
                        required>
                    </input>
                </label>
                <div class="form-group" >
                <label htmlFor="imagen">
                    Imagen:
                    <input type="text"
                        value = {data.imagen}
                        name="imagen"
                        onChange={handleImputChange}
                        className="form-control"
                    required>
                    </input>
                </label>
                </div>
            </div>
               <button className="btn btn-primary" onClick={e=> handleSubmit(e)} >Guardar</button>
            </form>
            </div>
            </div>
        </>
    )
};

export default EditBook;