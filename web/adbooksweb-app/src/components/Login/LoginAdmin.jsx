import React, { useState } from 'react';
import Main from '../Main';
import '../../styles/LoginAdmin.css';
import { useHistory } from 'react-router';

export default function LoginAdmin() {

    //usuario unico registrado (solo se puede logear este usuario), usuario de prueba.
    const adminUser = {
        token: "123456",
        email: "admin@123.com",
        password: "admin123",
    }

<<<<<<< HEAD
    const history = useHistory();
=======

    const [error,setError] = useState("");
    const history = useHistory()
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff

    //esta funcion imprime en consola si se logro ingresar a la aplicacion o no.
    const Login = (emailYPassword) => {
        console.log(emailYPassword);

        if (emailYPassword.email == adminUser.email && emailYPassword.password == adminUser.password) {
<<<<<<< HEAD
            localStorage.setItem('token', adminUser.token);
            console.log("Logged in");
            history.push("/admin");
=======
            localStorage.setItem('token', adminUser.token)
            history.push("/admin")
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff
        }
        else {
            setError("email or Password do not match!")
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
<<<<<<< HEAD
                        <button 
                            type="submit" 
                            className="Form__submit"
                        >
                            Login
                        </button>
=======
                        <div class="error" role="alert">
                            {error}
                        </div>
                        <button type="submit" className="Form__submit">
                            Login
                        </button>
                        
>>>>>>> 593fba59b31aee64a4f73ed80712281b290764ff
                        <p className="FormContainer__info">
                            <h1 className="hForm">Don't have an account? 
                                <br>
                                    You are not admin.
                                </br> 
                            </h1>
                        </p>
                    </form>
                </div>
            </div>


        </Main>
    );
}
