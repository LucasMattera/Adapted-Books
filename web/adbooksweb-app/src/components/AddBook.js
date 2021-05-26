import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../styles/AddBook.css";
import axios from "axios";

function AddBook() {
    const genresDefault = ["Cyberpunk","Space Opera","Terror", "Ciencia Ficcion" , "Thirller", "Aventura","Accion" , "Manga","Suspenso","Comedia", "Sobrenatural","Superpoderes","Fantasía" ,"Fantasía Oscura","Alta Fantasia", "Novela", "Drama Apocalíptico","Juvenil"]

    const history = useHistory();
    const [link, setLink] = useState("");

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
        description:""
    });
    const [invalidLink, setInvalidLink] = useState(false);
    const [invalidImage,setInvalidImage] = useState(false);
    const [title, setTitle] = useState("");
    const [author, setAutor] = useState("");
    const [country, setPais] = useState("");
    const [image, setImagen] = useState("");
    const [links, setLinks] = useState([]);
    const [publicationDate, setFechaDePublicacion] = useState("");
    const [genres, setGeneros] = useState([]);
    const [description, setDescription] = useState("");

    
    const handleImputChange = (event) => {
        setData({...data,
            [event.target.name]: event.target.value
        });
    }

    const handleSubmit = (event) =>{
        var isImage = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);
        if(isImage.test(data.image)){
            setInvalidImage(false);
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
        } else{
            data.image=''
            event.preventDefault()
            setInvalidImage(true)
        }
    }
    const handleImputLink = (event) =>{
        setLink(event.target.value);
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

    const handleImputGenero = (event) =>{
        
        var checkbox = document.getElementById(event.target.id)
        if(checkbox.checked == true){
            setGeneros(data.genres.push(event.target.value))
        }else{
            var index = data.genres.indexOf(event.target.value)
            if (index > -1) {
            setGeneros(data.genres.splice(index,1))
            }
        }
    }

    const handleDeleteLink = (event, toDelete) => {
        data.links = data.links.filter(link => link !== toDelete)
        setLinks([])
    }

    
    return(
    <>
        <div className="addBookContainer" data-test="add-book">
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
                        value = {data.title}
                        name="title"
                        onChange={handleImputChange}
                        className="form-control"
                        required
                        data-test="title">
                    </input>
                </label>
            </div>
            <div class="form-group" >
                <label htmlFor="autor">
                <p className="text-light genero">Autor:</p>
                    <input type="text"
                    value = {data.author}
                    name="author"
                    onChange={handleImputChange}
                    className="form-control"
                    required
                    data-test="author"></input>
                </label>
            </div>
            <div class="form-group" >
                <label htmlFor="pais">
                <p class="text-light genero">Pais:</p>
                    <input type="text"
                    value = {data.country}
                    name="country"
                    onChange={handleImputChange}
                    className="form-control"
                    required
                    data-test="country"></input>
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
                            value = {link}
                            name="link"
                            onChange={handleImputLink}
                            className="form-control"
                            placeholder="Ingrese una url.."
                            data-test="link"
                    ></input>
                </label>
                <button class="btn btn-dark" type="button" id="button-addon2" onClick={handleSubmitLink} data-test="add-link">Agregar</button>
            </div>
            {data.links.map (link => <i className="text-light">{link}
            <a className="btn btn-danger" onClick={e => handleDeleteLink(e, link)}>X</a>
                                                <br></br><br></br></i>)}
            
            

            <div class= "form-group">
              <p className="text-light genero" >Generos: </p>
            </div>
            {genresDefault.map (genero => 
            <div class="form-check form-check-inline margenBajo">
            <input class="form-check-input" type="checkbox" id={genero} value={genero} onClick={handleImputGenero}></input>
            <label class="text-light" for="inlineCheckbox1">{genero}</label>
            </div>)}

        
            
            <div class="form-group" >
                <label htmlFor="descripcion">
                <p class="text-light genero">Descripcion:</p>
                    <input type="text"
                    value = {data.description}
                    name="description"
                    onChange={handleImputChange}
                    className="form-control"
                    required
                    data-test="description"></input>
                </label>
            
            
                </div>
            <div class="form-group">
                <label htmlFor="fechaDePublicacion">
                <p class="text-light genero">Fecha:</p>
                    <input type="date"
                    value = {data.publicationDate}
                    name="publicationDate"
                    onChange={handleImputChange}
                    className="form-control"
                    
                    data-test="publicationDate"></input>
                </label>
                <div class="form-group" >
                <label htmlFor="imagen">
                <p class="text-light">Imagen:</p>
                { invalidImage && (
                    <p className="invalid" data-test="fail-image">
                        Ingrese una imagen valida
                    </p>   
                )}
                    <input type="text"
                        value = {data.image}
                        name="image"
                        onChange={handleImputChange}
                        className="form-control"
                        required
                        placeholder="Ingrese una url.."
                        data-test="image-field">
                    </input>
                    <img src={data.image} className="imagePreview" alt=""></img>
                </label>
                </div>
            </div>
               <button 
                type="submit" 
                className="btn btn-dark"
                data-test="add-book-btn">Agregar Libro</button>
            </form>
            </div>
            </div>
   
        </>
    )
};

export default AddBook;