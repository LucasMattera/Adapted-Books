import { useHistory } from 'react-router-dom';
import "../styles/ArticleMiniature.css"

function ArticleMiniature ({libro, id}){
    const history= useHistory()

    const handleClick = (e) => {
     history.push("/libros?q="+id)
    }
    const {title, image}= libro;       
    
    return (  
    <div class="article-card">
        <div class="article-card-inner">
            <div class="article-card-front">
                <img className="imagen" src={image} alt={title}/>
            </div>
            <div class="article-card-back">
                <div class="title">
                    <strong>
                        <a className="link-title" onClick={handleClick}>
                            {libro.title}
                        </a>
                    </strong>
                </div>
                <div class="autor">
                    {libro.author}
                </div>
                <div className= "description">
                    {libro.description}
                </div>
            </div>
            
        </div>
    </div>
          )
  }
  
  export default ArticleMiniature;