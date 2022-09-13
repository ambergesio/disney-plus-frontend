import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import React, { useContext, useState, useEffect } from 'react';
import SiteContext from '../../context/SiteContext';

import Footer from '../../components/footer';
import style from './login.module.scss';
import { checkUser, login } from '../../services';


const Login = () => {

    const router = useRouter();

    const { user, setUser, token, setToken, isLogged, setIsLogged, loginMessage, setLoginMessage } = useContext(SiteContext);
    
    useEffect( () => {
        const savedToken = localStorage.getItem('token');
        if (savedToken) {
            checkUser(savedToken)
            .then(res => {
                if (!res.error) {
                    router.push('/home');
                    setLoginMessage('');
                    return;
                }
                localStorage.clear();
                setIsLogged(false);
                setUser({});
                setToken('');
                setIsLogged(false);
            })
        } else {
            localStorage.clear()
        }
    }, [ router, setIsLogged, setUser, setToken, setLoginMessage ]);


    const loginHandler = (e) => {
        e.preventDefault();
        setLoginMessage("enviando datos al servidor...");

        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
        .then(res => {
            if (res.error) {
                setLoginMessage(res.message);
                return;
            }
            setUser(res.user);
            setToken(res.token);
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('token', res.token);
            setLoginMessage('');
            router.push('/home');
        });
    };


    return (
        <>
            <div className={style.container}>
                <div className={style.login_form}>
                    <div className={style.logo}>
                        <Image src="/images/interface/original.svg" width={400} height={300} alt="disney logo" />
                    </div>
                    <div className={style.fields}>
                        <h1 className={style.title}>Log in with your email</h1>
               
                        <form onSubmit={loginHandler}>
                            <input className={style.inp_field} name="email" type="text" placeholder="Email" />
                            <input className={style.inp_field} name="password" type="password" placeholder="Password" />
                            <button className={style.log_button}>CONTINUE</button>
                        </form>
                        { loginMessage ? <div className={style.error}>{loginMessage}</div> : null }


                        <div className={style.new}>
                            New to Disney+? <Link href="/signup"><a className={style.signup}>Sign up</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
