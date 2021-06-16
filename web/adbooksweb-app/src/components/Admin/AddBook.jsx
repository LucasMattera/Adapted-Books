import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import "../../styles/AddBook.css";
import axios from "axios";

function AddBook() {
    const [added,setAdded] = useState(false)
    const genresDefault = ["Cyberpunk", "Space Opera", "Terror", "Ciencia Ficcion", "Thriller", "Aventura", "Acción", "Manga", "Suspenso", "Misterio", "Comedia", "Sobrenatural", "Superpoderes", "Fantasía", "Fantasía Oscura", "Alta Fantasia", "Novela", "Drama Apocalíptico", "Juvenil"]

    const history = useHistory();
    
    
    const [link, setLink] = useState("");
    const [error,setError] = useState(false)
    
    

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


    const [invalidImage,setInvalidImage] = useState(false);
    const [invalidLink, setInvalidLink] = useState(false);
    const [emptyPublicationDate, setEmpty_publicationDate] = useState(false);
    
    const [genres, setGenres] = useState([]);
    const [emptyGenres, setEmpty_genres] = useState(false);
    
    const [emptyDescription, setEmpty_description] = useState(false);
    const [trySave,setTrySave] = useState(false)
    const [links, setLinks] = useState([])
    const handleInputChange = (event) => {
        
        setData({...data,
            [event.target.name]: event.target.value.trimStart()
        });
    }

    const cleanFinalSpaces = (event) => {
        setData({...data,
            [event.target.name]: event.target.value.trimEnd()
        })
        setTrySave(false)
    }

    const handleSubmit = (event) =>{ 
        event.preventDefault();
        try{
            handleSubmitImage();
            handleSubmitField();
            console.log("llego")
            axios
                .post("http://localhost:8080/api/v1/libros/add",data)
                .then((response) => {
                    setAdded(true);
                    setError(false)
                })
                .catch((error) => setError(true));
        }
        catch{}
    };
    
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
            if(data[val] == '' && val != "links"){
                setTrySave(true)
                throw new Error(`error de campo vacio ${val}`);
            }
        })
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

    const handleInputGenero = (event) =>{
        var checkbox = document.getElementById(event.target.id)
        if(checkbox.checked == true){
            setGenres(data.genres.push(event.target.value))
        }else{
            var index = data.genres.indexOf(event.target.value)
            if (index > -1) {
            setGenres(data.genres.splice(index,1))
            }
        }
    }
    const handleSubmitGenres = (event) => {
        if(data.genre == ''){
            setEmpty_genres(true);
            throw new Error(`error de campo vacio generos`);
        }
        else{
            setEmpty_genres(false);
        }
    }

    const handleDeleteLink = (event, toDelete) => {
        data.links = data.links.filter(link => link !== toDelete)
        setLinks([])
    }

    return(
    <>
        <div class="container">
        <div class="row">
        <div class="col">
        </div>
        <div class="col-9">
        <div className="addBookContainer" data-test="add-book">
        <div className="centro">
        {added && (
            <div class="alert alert-success" role="alert">
            Libro agregado Correctamente!
        </div>)}
        {   
            error && (
                <div class="alert alert-danger" role="alert">
                    El Libro no fue Agregado!
                </div>)
        }
            
        <form  onSubmit={handleSubmit}>
            
            <div className="title" >
                <label htmlFor="titulo">
                    <p class="text-light genero">Titulo:</p>
                    <input 
                        type="text"
                        value = {data.title}
                        name="title"
                        className="form-control label-grande"
                        data-test="title"
                        id="floatingTitle"
                        onChange={handleInputChange}
                        onBlur={cleanFinalSpaces}
                        onSubmit={handleSubmitField}
                    />
                    { trySave && (!data.title) && (
                        <p className="alert alert-warning" data-test="fail-title">
                            Este campo no puede estar vacio
                        </p>
                    )}
                </label>
            </div>

            <div class="form-group" >
                <label htmlFor="autor">
                <p className="text-light genero">Autor:</p>
                    <input 
                        type="text"
                        value = {data.author} 
                        name="author"
                        onChange={handleInputChange}
                        className="form-control label-grande"
                        data-test="author"
                        onBlur={cleanFinalSpaces}
                    />
                    { trySave && (!data.author) && (
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
                    value = {data.country}
                    name="country"
                    onChange={handleInputChange}
                    className="form-control label-grande"
                    data-test="country"
                    onBlur={cleanFinalSpaces}></input>
                     { trySave && (!data.country) && (
                        <p className="alert alert-warning" data-test="fail-title">
                            Este campo no puede estar vacio
                        </p>
                    )}
                </label>
            </div>

            
            <div class="form-group " >
            <p className="text-light genero-l" >Links: </p>
                <label htmlFor="link">
                    { invalidLink && (
                        <p className="invalid" data-test="fail-link">
                            Ingrese un link valido
                        </p>
                    )}
                    <input type="text"
                            value = {link}
                            name="link"
                            onChange={handleInputLink}
                            className="form-control label-grande"
                            placeholder="Ingrese una url.."
                            data-test="link"
                    ></input>
                </label>
                <button 
                    class="btn btn-dark" 
                    type="button" 
                    id="button-addon2" 
                    onClick={handleSubmitLink} 
                    data-test="add-link"
                >
                        Agregar
                </button>
                
            
            <ul class="list-menu">
            {

                data.links.map(link => 
                    <li class="list-group-item list-item" data-test="added-link">
                        
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
            </ul>
            </div>
            <div class= "form-group">
              <p className="text-light genero" >Generos: </p>
            </div>
            {
                genresDefault.map (genero => 
                    <div class="form-check form-check-inline margenBajo">
                        <input 
                            class="form-check-input" 
                            type="checkbox" 
                            data-test ={genero} 
                            id={genero} 
                            value={genero} 
                            onClick={handleInputGenero}
                        />
                        <label 
                            class="text-light" 
                            for="inlineCheckbox1">{genero}</label>
                    </div>
                )
            }
            
            
            <div class="form-group" >
                <label htmlFor="descripcion"  class="form-label">
                    <p class="text-light genero">Descripcion:</p>
                        <textarea 
                            type="text"
                            value = {data.description}
                            name="description"
                            className="form-control label-grande"
                            data-test="description"
                            onChange={handleInputChange}
                            onBlur={cleanFinalSpaces}
                        />
                    { trySave&& (!data.description) && (
                            <p className="alert alert-warning" data-test="fail-title">
                                Este campo no puede estar vacio
                            </p>
                        )}
                </label>
            </div>
            
            <div class="form-group">
                <label htmlFor="fechaDePublicacion">
                    <p class="text-light genero">Fecha:</p>
                        <input 
                            type="date"
                            value = {data.publicationDate}
                            name="publicationDate"
                            onChange={handleInputChange}
                            className="form-control"
                            onBlur={cleanFinalSpaces}
                            data-test="publicationDate"
                        />
                        { trySave && (!data.publicationDate) && (
                        <p className="alert alert-warning" data-test="fail-title">
                            Este campo no puede estar vacio
                        </p>
                    )}
                </label>

                <div class="form-group" >
                    <label htmlFor="imagen">
                        <p class="text-light genero">Imagen:</p>
                        { 
                            invalidImage && (
                            <p className="invalid" data-test="fail-image">
                                Ingrese una imagen valida
                            </p>)
                        }
                        <input type="text"
                            value = {data.image}
                            name="image"
                            onChange={handleInputChange}
                            className="form-control label-grande"
                            placeholder="Ingrese una url.."
                            data-test="image-field"
                            onBlur={cleanFinalSpaces}/>
                        <img 
                            src={data.image} 
                            className="imagePreview" 
                            alt=""/>
                        { trySave && (!data.image) && (
                            <p className="alert alert-warning" data-test="fail-title">
                                Este campo no puede estar vacio
                            </p>
                    )}
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
            </div>
            <div class="col">
            </div>
            </div>
            </div>
        </>
    )
};

export default AddBook;