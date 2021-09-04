import React from 'react'


// memo memoriza un elemento, y solo si cambió se volverá a renderizar, como un caché
export const Small = React.memo(({ counter }) => {

    // Se creó un nuevo componente para que se renderizara cada vez que cambia el valor de counter
    console.log('Me volví a renderizar');

    return (
        <small>
            { counter }
        </small>
    )
})
