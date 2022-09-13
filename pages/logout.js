import { useRouter } from 'next/router';

import { useContext, useEffect } from 'react';
import SiteContext from '../context/SiteContext';



const Logout = () => {

    const router = useRouter();
    const { setUser, setToken, setIsLogged } = useContext(SiteContext);
    
    useEffect( () => {
        localStorage.clear();
        setIsLogged(false);
        setUser({});
        setToken('');
        setIsLogged(false);
        router.push('/');
      },[ router, setIsLogged, setUser, setToken ]);

    return;
}

export default Logout;