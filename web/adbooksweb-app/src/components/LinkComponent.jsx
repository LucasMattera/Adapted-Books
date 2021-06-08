
import '../styles/LinkComponent.css';
import React, { useEffect, useState, } from 'react';

function LinkComponent ({link}){

    const [page, setPage] = useState("");
    const [icon, setIcon] = useState("");

    useEffect(() => getPage(link), []);
   
    function getPage(link){
        
        const pageLinks = link.split(".")
        setPage(pageLinks[1].charAt(0).toUpperCase() + pageLinks[1].slice(1))
        setIcon(pageLinks[1] + '.png')
    }
    
    return (  
        <li>
            <img className="iconPage" src={("icons/" + icon)} onError={(e)=> e.target.src= "icons/default.png"} />
            <a className="a-link link" href={link}>
                Mira la adaptación en {page}
            </a>
        </li>
          )
  }
  
  export default LinkComponent;