import { useHistory } from 'react-router-dom';

function ArticleMiniature ({libro, id}){
    const history= useHistory()

    const handleClick = (e) => {
     history.push("/libros?q="+id)
    }
    const {titulo, imagen}= libro;       
    
    return (  
        <div key = {id}>
            <a onClick= {handleClick}>
                <img 
                    className="imagen" 
                    src={imagen} 
                    alt={titulo}
                />
            </a>
            <p>{titulo}</p>
        </div>)
  }
  
  export default ArticleMiniature;