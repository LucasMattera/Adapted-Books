import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { createMemoryHistory } from "history"
import { Route, Router } from 'react-router-dom'
import '@testing-library/jest-dom/extend-expect'
import Admin from'./Admin'


//test01
test("test del componente Admin (render)", async () => {
    const history = createMemoryHistory("/admin");
    history.push("/admin");
    render(
        <Router history={history}>
            <Route path="/admin" component={Admin} />
        </Router>
    );
    screen.debug()
})


