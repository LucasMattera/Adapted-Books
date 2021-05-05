function ArticuloMiniatura ({libro, id, to}){
    
    const {titulo, imagen}= libro;       
        return  (  
          <div key = {id}>
              <a href={to}>
                      <img 
                          className="imagen" 
                          src={imagen} 
                          alt={titulo}
                      />
              </a>
          <p>{titulo}</p>
          </div>)
  }
  
  export default ArticuloMiniatura;