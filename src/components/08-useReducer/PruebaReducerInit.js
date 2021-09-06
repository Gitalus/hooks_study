import React, { useReducer } from 'react'


const init = () => {
    return {
        id: '1',
        value: 'Hola Mundo'
    };
}

const reducer = ( state, action) => {
    switch (action.type) {
        case 'add':
            return action.payload;
    
        default:
            return;
    }
}


export const PruebaReducerInit = () => {

    const [state, dispatch] = useReducer(reducer, {}, init);
    console.log(state);

    return (
        <div>
        </div>
    )
}
