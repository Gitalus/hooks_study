import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar />
                <div className="container">
                    <Switch>
                        {/* Si se pone el home primero, cualquier ruta que pongamos
                        nos redigirá al home, ya que devuelve la primera coincidencia,
                        que sería un "/" */}
                        {/* Se puede añadir la propiedad exact (exact={true},pero no es necesario).
                        Esto para que la ruta tiene que ser exacta, y evitar que nos mande al home con
                        cualquier ruta. */}
                        <Route exact path="/about" component={AboutScreen} />
                        <Route exact path="/login" component={LoginScreen} />
                        <Route exact path="/" component={HomeScreen} />
                        {/* Si queremos mostrar un 404 component si no encuentra una ruta
                        podemos asignar un Route al final que se renderice como default */}
                        {/* <Route component={ HomeScreen } /> */}
                        {/* También podemos usar un redirect, que se incluye en el react-router-dom */}
                        <Redirect to="/" />
                    </Switch>
                </div>
            </div>
        </Router>
    )
}
