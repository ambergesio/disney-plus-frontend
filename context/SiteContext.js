import { createContext, useState, useEffect, useRef } from "react";


const SiteContext = createContext();
const { Provider } = SiteContext;


const SiteProvider = ({ children }) => {

    const [ user, setUser ] = useState({});
    const [ token, setToken ] = useState('');
    const [ isLogged, setIsLogged ] = useState(false);
    const [ loginMessage, setLoginMessage ] = useState('');

    const nav_titles = [
        {w: 15, h: 15, image: 'home.svg',   link: '/home', name: 'INICIO'},
        {w: 15, h: 15, image: 'search.svg', link: '/',     name: 'BUSQUEDA'},
        {w: 15, h: 15, image: 'plus.svg',   link: '/',     name: 'MI LISTA'},
        {w: 16, h: 16, image: 'star.svg',   link: '/',     name: 'ORIGINALES'},
        {w: 18, h: 18, image: 'movies.svg', link: '/',     name: 'PELICULAS'},
        {w: 15, h: 15, image: 'series.svg', link: '/',     name: 'SERIES'}
    ];

    useEffect(() => {
        if (JSON.parse(localStorage.getItem('user')) ) {
            setUser(JSON.parse(localStorage.getItem('user')));
        }
        if (localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'));
        } 
    }, []);


    return (
        <Provider value={{
            user, setUser,
            token, setToken,
            isLogged, setIsLogged,
            loginMessage, setLoginMessage,
            nav_titles
        }}>
            { children }
        </Provider>
    )
};

export { SiteProvider };
export default SiteContext;
