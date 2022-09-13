import Layout from '../../components/layout';
import SiteContext from '../../context/SiteContext';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import style from './home.module.scss';

import config from '../../config';
import { checkUser, getMovies } from '../../services';

const Home = ({movies}) => {

    const router = useRouter();
    const { user, setUser, token, setToken, isLogged, setIsLogged } = useContext(SiteContext);

    useEffect( () => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            checkUser(savedToken)
            .then(res => {
                if (res.error) {
                    localStorage.clear();
                    setIsLogged(false);
                    setUser({});
                    setToken('');
                    setIsLogged(false);
                    router.push('/login');
                    return;
                }

                setIsLogged(true);
            })
        } else {
            router.push('/login');
        }
    }, [ router, setIsLogged, setUser, setToken ]);

    return (
        <div className={style.body}>
            { isLogged ?
            <Layout>
                <div className={style.main}>
                    <div className={style.section_container}>
                    <div className={`${style.section} ${style.disney}`}>
                            <Image src="http://localhost:5001/images/sections/disney.png" width={260} height={150} alt="Disney movies" />
                        </div>
                    </div>
                    <div className={style.section_container}>
                        <div className={`${style.section} ${style.pixar}`}>
                            <Image src="http://localhost:5001/images/sections/pixar.png" width={260} height={150} alt="Disney movies" />
                        </div>
                    </div>
                    <div className={style.section_container}>
                    <div className={`${style.section} ${style.marvel}`}>
                            <Image src="http://localhost:5001/images/sections/marvel.png" width={260} height={150} alt="Disney movies" />
                        </div>
                    </div>
                    <div className={style.section_container}>
                    <div className={`${style.section} ${style.starwars}`}>
                            <Image src="http://localhost:5001/images/sections/starwars.png" width={260} height={150} alt="Disney movies" />
                        </div>
                    </div>
                    <div className={style.section_container}>
                    <div className={`${style.section} ${style.natgeo}`}>
                            <Image src="http://localhost:5001/images/sections/natgeo.png" width={260} height={150} alt="Disney movies" />
                        </div>
                    </div>
                </div>
             
                <div className={style.main}>
                    <div className={style.movie_container}>
                        {
                            movies.data.map((movie,i) => (
                                <div key={i} className={style.movie_img_container}>
                                    <Link href={`/movies/${movie.id}`}>
                                        <Image className={style.movie_image} src={`${config.statics}${movie.image}/icon.jpeg`} width={243} height={137} layout="responsive" alt={movie.title}/>
                                    </Link>
                                </div>
                            ))
                        }
                    </div>
                </div>
     
            </Layout>
            :
            <></>
            }
        </div>
    );
}

export default Home;

export const getServerSideProps = async () => {
    const movies = await getMovies();
    return {
        props: {
            movies
        }
    }
}