import { useEffect, useRef, useState } from "react"


export const useFetch = ( url ) => {
    
    // Si el componente se demora mucho en cargar, y se cierra el componente
    // antes de cargarlo, se generará un problema. Se puede solucionar con useRef
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, loading: true, error: null });

    useEffect( () => {
        return () => {
            isMounted.current = false;
        }
    }, [])
    
    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch( url )
            .then( resp => resp.json() )
            .then( data => {
                // Ejemplo para evitar errores si se desmonta antes de cargar
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } else {
                    console.log('setState no se llamó');
                }
            } )
    }, [url])

    return state;
}
