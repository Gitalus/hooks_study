const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}];

// Estructura de reducer
const todoReducer = ( state = initialState, action ) => {

    // Ahora debemos crear el procesamiento de la acción
    // Estructura básica de una acción:
    if ( action?.type === 'agregar' ) { // verifica si existe, si no, no hace nada
        return [ ...state, action.payload ];
    }

    return state;
};

// Este todoReducer genera error ya que llama a la función y requiere un action
let todos = todoReducer();

const newTodo = [{
    id: 2,
    todo: 'Comprar leche',
    done: false
}];

// Estructura de la acción, es un objeto literal donde se recomienda que tenga un type y un payload
const action = { // Puede ser cualquier nombre, no solo action
    type: 'agregar',
    payload: newTodo
}

todos = todoReducer( todos, action );


console.log(todos);