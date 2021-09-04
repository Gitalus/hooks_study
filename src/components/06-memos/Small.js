import React from 'react'


// memo memoriza un componente, y solo si cambió se volverá a renderizar, como un caché;
// React.memo solo revisa por cambios en los props. Si usa useState, useReducer o useContext,
// de igual forma se rendizará cuando cambia el estado
export const Small = React.memo(({ counter }) => {

    // Se creó un nuevo componente para que se renderizara cada vez que cambia el valor de counter
    console.log('Me volví a renderizar');


    return (
        <small>
            { counter }
        </small>
    )
})
