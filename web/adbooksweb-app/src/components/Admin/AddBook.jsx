import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import { useForm } from 'react-hook-form';
import "../../styles/AddBook.css";
import axios from "axios";
//import { required } from "yargs";

function AddBook() {
    const genresDefault = ["Cyberpunk","Space Opera","Terror", "Ciencia Ficcion" , "Thirller", "Aventura","Acción" , "Manga","Suspenso","Comedia", "Sobrenatural","Superpoderes","Fantasía" ,"Fantasía Oscura","Alta Fantasia", "Novela", "Drama Apocalíptico","Juvenil"]

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

    const [emptyTitle, setEmpty_title] = useState(false);
    const [emptyAuthor, setEmpty_author] = useState(false);
    const [emptyCountry, setEmpty_country] = useState(false);
    const [invalidImage,setInvalidImage] = useState(false);
    const [links, setLinks] = useState([]);
    const [invalidLink, setInvalidLink] = useState(false);
    const [emptyPublicationDate, setEmpty_publicationDate] = useState(false);
    
    const [genres, setGenres] = useState([]);
    const [emptyGenres, setEmpty_genres] = useState(false);
    
    const [emptyDescription, setEmpty_description] = useState(false);

    const handleInputChange = (event) => {
        setData({...data,
            [event.target.name]: event.target.value.trimStart()
        });
    }

    const cleanFinalSpaces = (event) => {
        setData({...data,
            [event.target.name]: event.target.value.trimEnd()
        })
    }

    const handleSubmit = (event) =>{ 
        event.preventDefault();
        try{
            axios
                .post("http://localhost:8080/api/v1/libros/add",data)
                .then((response) => {
                    setAgregado(true);
                })
                .catch((error) => setError(true));
        }
        catch{}
    };
    
    const handleSubmitImage = (event) => {
        var isImage = new RegExp(/(https?:\/\/.*\.(?:png|jpg))/i);
        if(isImage.test(data.image)){
            setInvalidImage(false);
            event.preventDefault();
            window.scrollTo(0, 0);
            setAgregado(false);
            setError(false); 
            } else{
            data.image='';
            event.preventDefault();
            setInvalidImage(true);
        }
    }
/*
    const handleSubmitField = (event) => { 
        var constructedFunction_empty = new Function(`setEmpty_${event.target.name}`);
        var constructedFunction_set = new Function(`set_${event.target.name}`);
        
        if(event.target.value != ''){
            constructedFunction_empty(false);
            event.preventDefault();
            constructedFunction_set(event.target.name.push(event.target.value));
        } 
        else{
            event.target.name = '';
            event.preventDefault();
            constructedFunction_empty(true);
        }
    }
*/
    const handleSubmitTitle = (event) => { 
        if(data.title == ''){
            setEmpty_title(true);
            throw new Error(`error de campo vacio title`);
        }
        else{
            setEmpty_title(false);
        }
    }

    const handleSubmitAuthor = (event) => { 
        if(data.author == ''){
            setEmpty_author(true);
            throw new Error(`error de campo vacio autor`);
        }
        else{
            setEmpty_author(false);
        }
    }

    const handleSubmitCountry = (event) => { 
        if(data.country == ''){
            setEmpty_country(true);
            throw new Error(`error de campo vacio pais`);
        }else{
            setEmpty_country(false);
        }
    }

    const handleSubmitPubDate = (event) => { 
        if(data.publicationDate == ''){
            setEmpty_publicationDate(true);
            throw new Error(`error de campo vacio fecha de publicacion`);
        }
        else{
            setEmpty_publicationDate(false);
        }
    }

    const handleSubmitDescription = (event) => { 
        if(data.description == ''){
            setEmpty_description(true);
            throw new Error(`error de campo vacio descripcion`);
        }
        else{
            setEmpty_description(false);
        }
    }
    
    const handleInputLink = (event) =>{ setLink(event.target.value.trim()); }
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
        <div className="addBookContainer" data-test="add-book">
        <div className="centro">
        {agregado && (
            <div class="alert alert-success" role="alert">
            Libro agregado Correctamente!
        </div>)}
        {   
            error && (
                <div class="alert alert-danger" role="alert">
                    El Libro no fue Agregado!
                </div>)
        }
            
        <form  className="login "onSubmit={handleSubmit}>
            
            <div className="title" >
                <label htmlFor="titulo">
                    <p class="text-light">Titulo:</p>
                    <input 
                        type="text"
                        value = {data.title}
                        name="title"
                        className="form-control"
                        data-test="title"
                        onChange={handleInputChange}
                        onBlur={cleanFinalSpaces}
                        onSubmit={handleSubmitTitle}
                    />
                    { emptyTitle && (
                        <p className="invalid" data-test="fail-title">
                            Por favor, complete este campo
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
                        className="form-control"
                        data-test="author"
                        onBlur={cleanFinalSpaces}
                />
                { emptyAuthor && (
                        <p className="invalid" data-test="fail-author">
                            Por favor, complete este campo
                        </p>
                )}
                </label>
            </div>

            <div class="form-group" >
                <label htmlFor="pais">
                <p class="text-light genero">Pais:</p>
                    <input 
                        type="text"
                        value = {data.country}
                        name="country"
                        onChange={handleInputChange}
                        className="form-control"
                        data-test="country"
                        onBlur={cleanFinalSpaces}
                />
                { emptyCountry && (
                    <p className="invalid" data-test="fail-country">
                        Por favor, complete este campo 
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
                    <input 
                        type="text"
                        value = {link}
                        name="link"
                        onChange={handleInputLink}
                        className="form-control"
                        placeholder="Ingrese una url.."
                        data-test="link"
                    />
                    { emptyCountry && (
                        <p className="invalid" data-test="fail-link">
                            Por favor, complete este campo 
                        </p>
                    )}
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
            </div>
            {
                data.links.map(link => 
                    <i 
                        className="text-light" 
                        data-test="added-link"
                    >
                        {link}
                        <a 
                            className="btn btn-danger" 
                            onClick={e => handleDeleteLink(e, link)} 
                            data-test="remove-link">
                                X
                        </a>
                        <br/><br/>
                    </i>
                )
            }

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
                <label htmlFor="descripcion">
                    <p class="text-light genero">Descripcion:</p>
                        <input 
                            type="text"
                            value = {data.description}
                            name="description"
                            className="form-control"
                            data-test="description"
                            onChange={handleInputChange}
                            onBlur={cleanFinalSpaces}
                        />
                        { emptyDescription && (
                            <p className="invalid" data-test="fail-description">
                                Por favor, complete este campo 
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
                        { emptyPublicationDate && (
                        <p className="invalid" data-test="fail-pub-date">
                            Por favor, complete este campo 
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
                            value = {data.image}
                            name="image"
                            onChange={handleInputChange}
                            className="form-control"
                            placeholder="Ingrese una url.."
                            data-test="image-field"
                            onBlur={cleanFinalSpaces}/>
                        <img 
                            src={data.image} 
                            className="imagePreview" 
                            alt=""/>
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