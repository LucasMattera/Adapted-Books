import React from 'react'
import { createMemoryHistory } from "history"
import {Route, Router} from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import EditBook from './EditBook'

//test01
test("test del componente EditBook (render)", async () => {
    const history = createMemoryHistory("/admin/edit/");
    history.push("/admin/edit/");
    render(
        <Router history={history}>
            <Route path="/admin/edit/" component={EditBook} />
        </Router>
    );
   
})


//test02
test("test del componente EditBook con boton Guardar", async () => {
    const history = createMemoryHistory("/admin/edit/");
    history.push("/admin/edit/");
    render(
        <Router history={history}>
            <Route path="/admin/edit/" component={EditBook} />
        </Router>
    );
    const boton = screen.getByRole('button', { name: /Guardar/ })
    screen.debug()
    expect(boton).toHaveTextContent("Guardar")
})



//test03
test("test del componente EditBook con click en el boton guardar, (Book not updated...)", async () => {
    const history = createMemoryHistory("/admin/edit/");
    history.push("/admin/edit/");
    render(
        <Router history={history}>
            <Route path="/admin/edit/" component={EditBook} />
        </Router>
    );
    fireEvent.click(screen.getByRole('button', { name: /Guardar/ }))
    screen.debug()
    const boton = await screen.findByText(/No se han podido actualizar los datos/)
    expect(boton).toHaveTextContent("No se han podido actualizar los datos")
})



//TEST 04 
// test("test del componente EditBook con click en el boton guardar, (Updated book!)", async () => {
//     const history = createMemoryHistory("/admin/edit/");
//     history.push("/admin/edit/");
//     render(
//         <Router history={history}>
//             <Route path="/admin/edit/" component={EditBook} />
//         </Router>
//     );
//     fireEvent.click(screen.getByRole('button', { name: /Guardar/ }))
//     screen.debug()
//     const botonDos = await screen.findByText(/Updated book/)
//     expect(botonDos).toHaveTextContent("Updated book!")
// })