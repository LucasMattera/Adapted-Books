import React, { useState } from 'react';
import Axios from 'axios';
import Main from '../Main';
import '../../styles/LoginAdmin.css';

export default function LoginAdmin() {

    //usuario unico registrado (solo se puede logear este usuario), usuario de prueba.
    const adminUser = {
        email: "admin@123.com",
        password: "admin123"
    }

    //esta funcion imprime en consola si se logro ingresar a la aplicacion o no.
    const Login = emailYPassword => {
        console.log(emailYPassword);

        if (emailYPassword.email == adminUser.email && emailYPassword.password == adminUser.password)
            console.log("Logged in")
        else {
            console.log("emailYPassword do not match!");
        }
    }

    const [emailYPassword, setEmailYPassword] = useState({
        email: "",
        password: ""
    });

    function handleInputChange(e) {
        setEmailYPassword({
            ...emailYPassword,
            [e.target.name]: e.target.value
        });
    }

    //boton login.
    function handleSubmit(e) {
        e.preventDefault();
        Login(emailYPassword)
    }


    return (
        //componente Main sirve para centrar el cuerpo html.
        <Main center>
            <div className="FormContainer">
                <h1 className="Form__titulo">AdaptedBooks</h1>
                <div>
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            className="Form__field"
                            required
                            onChange={handleInputChange}
                            value={emailYPassword.email}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Password"
                            className="Form__field"
                            required
                            onChange={handleInputChange}
                            value={emailYPassword.password}
                        />
                        <button type="submit" className="Form__submit">
                            Login
           </button>
                        <p className="FormContainer__info">
                            <h1 className="hForm">Don't have an account? <br></br> You are not admin.</h1>
                        </p>
                    </form>
                </div>
            </div>
        </Main>
    );
}
