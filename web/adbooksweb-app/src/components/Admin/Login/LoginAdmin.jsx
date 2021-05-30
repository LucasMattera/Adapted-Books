import React, { useState } from 'react';
import Main from '../../Main';
import '../../../styles/LoginAdmin.css';
import { useHistory } from 'react-router';

export default function LoginAdmin() {

    //usuario unico registrado (solo se puede logear este usuario), usuario de prueba.
    const adminUser = {
        token: "123456",
        email: "admin@123.com",
        password: "admin123",
    }

    const [error,setError] = useState("");
    const history = useHistory()
    const [emailYPassword, setEmailYPassword] = useState({
        email: "",
        password: ""
    });

    //esta funcion imprime en consola si se logro ingresar a la aplicacion o no.
    const Login = (emailYPassword) => {
        console.log(emailYPassword);

        if (emailYPassword.email == adminUser.email && emailYPassword.password == adminUser.password) {
            localStorage.setItem('token', adminUser.token)
            history.push("/admin")
        }
        else {
            setError("Datos incorrectos")
        }
    }

    function handleInputChange(e) {
        setEmailYPassword({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    //boton login
    function handleSubmit(e) {
        e.preventDefault();
        Login(emailYPassword);
    }

    return (
        //componente Main sirve para centrar el cuerpo html.
        <Main center>
            <div className="FormContainer">
                <h1 className="Form__titulo">AdaptedBooks</h1>
                <div>
                    <form onSubmit={e => handleSubmit(e)}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo"
                            className="Form__field"
                            required
                            onChange={handleInputChange}
                            value={emailYPassword.email}
                            data-test="email"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Contraseña"
                            className="Form__field"
                            required
                            onChange={handleInputChange}
                            value={emailYPassword.password}
                            data-test="password"
                        />
                        <div class="error" role="alert">
                            {error}
                        </div>
                        <button type="submit" className="Form__submit" data-test="login">
                            Entrar
                        </button>
                        
                        <p className="FormContainer__info">
                            <h1 className="hForm">¿No tienes una cuenta de administrador? 
                                <br></br> 
                                Contacte al soporte tecnico.
                            </h1>
                        </p>
                    </form>
                </div>
            </div>


        </Main>
    );
}
