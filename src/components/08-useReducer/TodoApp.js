import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';

import './style.css';


const initialState = [{
    id: new Date().getTime(),
    desc: 'Aprender React',
    done: false
}]

/* Los reducer pueden ser intercambiables con los useState, pero se recomienda
que usemos useReducer cuando tenemos muchas acciones que realizar con los estados.
useState para componentes simples. */
export const TodoApp = () => {

    // Crear el reducer en otro archivo ya que se puede agrandar mucho.
    // Esto devuelve un state de inmediato, usando el reducer y el initialState
    const [state] = useReducer(todoReducer, initialState);

    return (
        <div>
            <h1>Todo App</h1>
            <hr />

            <ul>
                <li>Hola</li>
                <li>Mundo</li>
                <li>Hola Denuevo</li>
            </ul>

        </div>
    )
}
