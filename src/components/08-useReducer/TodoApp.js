import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { TodoList } from './TodoList';
import { TodoAdd } from './TodoAdd';

import './style.css';

// init evita que se ejecute cada vez el useReducer, solo si hay cambios se vuelve a ejecutar
// usando el valor inicial
const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}

/* Los reducer pueden ser intercambiables con los useState, pero se recomienda
que usemos useReducer cuando tenemos muchas acciones que realizar con los estados.
useState para componentes simples. */
export const TodoApp = () => {

    // Crear el reducer en otro archivo ya que se puede agrandar mucho.
    // Esto devuelve un state de inmediato, usando el reducer y el initialState
    const [ todos, dispatch ] = useReducer(todoReducer, [], init);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify( todos ));
    }, [todos])

    const handleDelete = (todoId) => {
        const action = {
            type: 'delete',
            payload: todoId
        }

        dispatch( action );
    }

    const handleToggle = (todoId) => {
        dispatch({
            type: 'toggle',
            payload: todoId
        });
    }

    const handleAddTodo = ( newTodo ) => {

        dispatch({
            type: 'add',
            payload: newTodo
        });
    };

    return (
        <div>
            <h1>TodoApp ( { todos.length } )</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                        todos={ todos }/>
                </div>
                <div className="col-5">
                    <TodoAdd 
                        handleAddTodo={ handleAddTodo }
                    />
                </div>
            </div>
        </div>
    )
}
