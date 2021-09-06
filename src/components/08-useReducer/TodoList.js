import React from 'react';
import { Todo } from './Todo';


export const TodoList = ({ todos, handleToggle, handleDelete }) => {
    return (
        <ul className="list-group list-group-flush">
            {
                todos.map( (todo, idx) => (
                    <Todo 
                        key={ todo.id }
                        todo={ todo } 
                        handleToggle={ handleToggle }
                        handleDelete={ handleDelete }
                        idx={ idx }
                    />
                ))
            }
        </ul>
    )
}
