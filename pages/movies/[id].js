import Image from 'next/image';
import Layout from '../../components/layout';
import { getMovieById } from '../../services';
import style from './movie.module.scss';
import config from '../../config';
import React, { useState, useEffect } from 'react';
import play from '../../public/images/assets/play.svg';

const Movie = ({id, image, title, genre, date, rate, description, details, characters}) => {
    
    const background = `${config.statics}/${image}/bg.png`;
    const [ toggleInfo, setToggleInfo ] = useState(false);

    return (
        <>
            <div className="background">
                <div className={style.overlay}>
                    <Layout>     
                        <div className={style.main}>
                            <div className={style.title_container}>
                                <Image src={`${config.statics}/${image}/title.png`} width={340} height={200} layout="responsive" alt={title}/>
                            </div>

                            <div className={style.buttons}>
                                <button className={style.watch_now}><Image src={play} width={25} height={20} alt="watch now"/> VER AHORA</button>
                                <button className={style.trailer}>TRAILER</button>
                            </div>
                            
                            <div className={style.description}>{description}</div>

                            <div className={style.extras}>
                                <div className={ toggleInfo ? `${style.extras_item}` : `${style.extras_item_active}`} onClick={() => setToggleInfo(false)}>DETALLES</div>
                                <div className={ toggleInfo ? `${style.extras_item_active}` : `${style.extras_item}`} onClick={() => setToggleInfo(true)}>PERSONAJES</div>
                            </div>

                            <div className={style.toggle_info}>

                                {
                                    !toggleInfo
                                    ?
                                    <div className={style.details_info}>
                                        <div className={style.details}>{details}</div>
                                        <div className={style.items}>
                                            <div className={style.item}>
                                                <div className={style.item_title}>Fecha de estreno: </div>
                                                <div className={style.item}>{date}</div>
                                            </div>
 
                                            <div className={style.item}>
                                                <div className={style.item_title}>Calificación: </div>
                                                <div className={style.item}>{rate}</div>
                                            </div>

                                            <div className={style.item}>
                                                <div className={style.item_title}>Género: </div>
                                                <div className={style.item}>{genre.name}</div>
                                            </div>
                                        </div>
                                    </div>
                                    :
                                    <div className={style.characters}>
                                        {
                                            characters.map( (char, i) => (
                                                <div key={i} className={style.character}>
                                                    <Image className={style.character_img_container} src={`${config.statics}/${char.image}`} width={243} height={137} layout="fixed" alt={char.name}/>
                                                    <p className={style.character_name}>{char.name}</p>
                                                    <p className={style.character_history}>{char.history}</p>
                                                </div>
                                            ))
                                        }
                                    </div>
                                }
                            </div>

                        </div>
                    </Layout>
                </div>
            </div>
            <style jsx>{`
            .background {
                background:
                radial-gradient(ellipse at 70% top, rgba(35,40,60,0) 20%, rgba(35,40,60,0.8) 50%, rgba(30,35,55,0.9) 100%),
                url(${background});
                background-size: contain;
                background-attachment: fixed;
                background-repeat: no-repeat;
            }
            `}</style>
        </>
    );
}

export default Movie;

export const getServerSideProps = async ({params}) => {
    const movie = await getMovieById(params.id);
    return {
        props: {
            ...movie
        }
    }
}
