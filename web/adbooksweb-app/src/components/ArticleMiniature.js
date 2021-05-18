import { useHistory } from 'react-router-dom';
import "../styles/ArticleMiniature.css"

function ArticleMiniature ({libro, id}){
    const history= useHistory()

    const handleClick = (e) => {
     history.push("/libros?q="+id)
    }
    const {titulo, imagen}= libro;       
    
    return (  
    <div class="article-card">
        <div class="article-card-inner">
            <div class="article-card-front">
                <img className="imagen" src={imagen} alt={titulo}/>
            </div>
            <div class="article-card-back">
                <div class="title">
                    <strong>
                        <a className="link-title" onClick={handleClick}>
                            {libro.titulo}
                        </a>
                    </strong>
                </div>
                <div class="autor">
                    {libro.autor}
                </div>
                <div className= "description">
                    {libro.descripcion}
                </div>
            </div>
            
        </div>
    </div>
          )
  }
  
  export default ArticleMiniature;