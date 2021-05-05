import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    return(
        <div className="main-footer">
            <div className="container">
                <div className="row">
                    {/*columna 1*/}
                    <div className="col">
                        <h4>ADAPTED BOOKS INC col 1</h4>
                        <ul className="list-unstyled">
                            <li>codigo postal</li>
                            <li>ciudad, pais</li>
                            <li>direccion</li>
                        </ul>
                    </div>
                    
                    {/*columna 2*/}
                    <div className="col">
                        <h4>ADAPTED BOOKS INC row 2</h4>
                        <ul className="list-unstyled">
                            <li>codigo postal</li>
                            <li>ciudad, pais</li>
                            <li>direccion</li>
                        </ul>
                    </div>

                    {/*columna 3*/}
                    <div className="col">
                        <h4>ADAPTED BOOKS INC col 3</h4>
                        <ul className="list-unstyled">
                            <li>codigo postal</li>
                            <li>ciudad, pais</li>
                            <li>direccion</li>
                        </ul>
                    </div>
                </div>
                <hr/>
                <div className="row">
                    <p className="col-sm">
                        &copy;{new Date().getFullYear()} ADAPTED BOOKS INC | TODOS LOS DERECHOS RESERVADOS | TERMINOS DE SERVICIO | PRIVACIDAD
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;