import { createContext } from 'react';


// El context es como un higher order component, es decir, un componente padre
// que contiene todos los componentes que estamos usando, y por lo tanto podemos
// podemos enviar distintos valores desde ese padre como setState a los hijos.
export const UserContext = createContext(null);