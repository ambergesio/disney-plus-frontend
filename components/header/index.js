import React, { useContext, useState} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './header.module.scss';
import SiteContext from '../../context/SiteContext';


const Header = () => {

    const { token, user, nav_titles } = useContext(SiteContext);
    const [ scroll, setScroll ] = useState(false);
    const [ logged, setLogged ] = useState(false);
    const [ menuopen, setMenuopen ] = useState(false);
    const [ submenu, setSubmenu ] = useState(false);
    
    
    if (typeof window !== "undefined") {
        const $main = document.querySelector('#sub')?.offsetHeight;
        window.onscroll = () => {
            window.scrollY>10 ? setLogged(true) : setLogged(false);
            window.scrollY>$main ? setScroll(true) : setScroll(false);
        }
    }


    return (
        <>
            {
                !token
                ?
                <div className={ scroll ? `${style.logbar} ${style.translucent}` : `${style.logbar}`}>
                    <div className={scroll ? `${style.img_container}`: `${style.img_container} ${style.off}`}>
                        <Image src="/images/interface/original.svg" width={75} height={45} alt="Disney plus" />
                    </div>
                    <div>
                        <Link href="/signup">
                            <a className={scroll ? `${style.signup}`: `${style.signup} ${style.off}`}>SIGN UP NOW</a>
                        </Link>
                        <Link href="/login">
                            <a className={style.login}>LOG IN</a>
                        </Link>
                    </div>
                </div>
                :
                <div className={logged ? `${style.navbar} ${style.translucent}` : `${style.navbar}`}>
                    <div className={style.navigation}>    
                        <div className={style.img_container}>
                            <Image src="/images/interface/original.svg" width={75} height={45} alt="Disney plus" />
                        </div>
                        {
                            nav_titles.slice(0, 3).map( (item, i) => 
                                <div key={i} className={style.nav_item}>
                                    <Link href={item.link}>
                                    <div className={style.iconlink}>
                                        <Image src={`/images/assets/${item.image}`} width={item.w} height={item.h} alt="home"/>
                                    </div>
                                    </Link>
                                    <Link href={item.link}>
                                        <a className={style.navlink}>{item.name}</a>
                                    </Link>
                                </div>
                            )
                        }
                        {
                            nav_titles.slice(3).map( (item, i) => 
                                <div key={i} className={style.nav_item_off}>
                                    <Link href={item.link}>
                                    <div className={style.iconlink}>
                                        <Image src={`/images/assets/${item.image}`} width={item.w} height={item.h} alt="home"/>
                                    </div>
                                    </Link>
                                    <Link href={item.link}>
                                        <a className={style.navlink}>{item.name}</a>
                                    </Link>
                                </div>
                            )
                        }
                        <div className={style.circles}>
                            <div onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)} className={submenu?`${style.activezone_on}`:`${style.activezone_off}`}></div>
                        </div>
                        
                            <div className={submenu ? `${style.nav_strech} ${style.submenu_on}` : `${style.nav_strech} ${style.submenu_off}`} onMouseEnter={() => setSubmenu(true)} onMouseLeave={() => setSubmenu(false)}>
                                {nav_titles.slice(3).map( (item, i) => 
                                    <div key={i} className={style.nav_item_strech}>
                                        <Link href={item.link}>
                                            <div className={style.iconlink_strech}>
                                                <Image src={`/images/assets/${item.image}`} width={item.w} height={item.h} alt="home"/>
                                            </div>
                                        </Link>
                                        <Link href={item.link}>
                                            <a className={style.navlink_strech}>{item.name}</a>
                                        </Link>
                                    </div>
                                )}
                                </div>                          
                           
                        </div>

                 
                    <div onMouseLeave={() => setMenuopen(false)}>
                        <div className={menuopen ? `${style.account} ${style.bk_on} ${style.shadow}` : `${style.account} ${style.bk_off}`}>
                            <div className={style.profile}>
                                <button onMouseEnter={() => setMenuopen(true)}>
                                    <p>{user.firstName}</p>
                                    <Image src="/images/assets/account_img.png" width={40} height={40} alt="profile image" />
                                </button>
                            </div>
                            <div className={menuopen ? `${style.account_settings} ${style.on}` : `${style.account_settings} ${style.off}`}>
                            { menuopen ?
                                <>
                                <div className={style.account_settings_item}><Link href="/"><a className={style.create_profile}><div className={style.account_plus}></div>Crear perfil</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/"><a>Editar perfiles</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/"><a>Ajustes de la aplicación</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/"><a>Cuenta</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/"><a>Cancelar suscripción</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/"><a>Ayuda</a></Link></div>
                                <div className={style.account_settings_item}><Link href="/logout"><a>Cerrar cesión</a></Link></div>
                                </>
                            : <></>
                            }
                            </div>

                        </div>
                       
                    </div>
                  

                </div> 
            }
        </>
    );
}

export default Header;
