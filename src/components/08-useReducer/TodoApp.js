import React, { useEffect, useReducer } from 'react';
import { todoReducer } from './todoReducer';

import { useForm } from '../../hooks/useForm';
import './style.css';
import { TodoList } from './TodoList';


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

    const [ { description }, handleInputChange, reset ] = useForm({
        description: ''
    })

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

    const handleSubmit = (e) => {
        e.preventDefault();

        if (description.trim().length <= 1 ) return;

        const newTodo = {
            id: new Date().getTime(),
            desc: description,
            done: false
        };

        const action = {
            type: 'add',
            payload: newTodo
        };

        dispatch( action );
        reset();
    }

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
                    <h4>Agregar Todo</h4>
                    <hr />

                    <form onSubmit={ handleSubmit }>
                        <input 
                            type="text"
                            name="description"
                            className="form-control"
                            placeholder="Aprender..."
                            autoComplete="off"
                            value={ description }
                            onChange={ handleInputChange }
                        />

                        <button 
                            type="submit"
                            className="btn btn-outline-primary mt-1 w-100"
                        >
                                Agregar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}
