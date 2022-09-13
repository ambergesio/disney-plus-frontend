import Footer from '../../components/footer';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import { useContext, useEffect, useState } from 'react'; 
import SiteContext from '../../context/SiteContext';

import { registerUser, checkUser } from '../../services';
import style from './signup.module.scss';



const Register = () => {

    const { user, setUser, token, setToken, isLogged, setIsLogged } = useContext(SiteContext);
    const [ successMessage, setSuccessMessage ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const router = useRouter();
  
    useEffect( () => {
      const savedToken = localStorage.getItem('token');
      if (savedToken) {
        checkUser(savedToken)
        .then(res => {
          if (!res.error) {
            router.push('/home');
            return;
          }
          localStorage.clear();
          setIsLogged(false);
          setUser({});
          setToken('');
          setIsLogged(false);
        })
      } else {
        localStorage.clear();
      }
    }, [ router, setIsLogged, setUser, setToken ]);


    const registrationHandler = (e) => {
      e.preventDefault();

      const firstName = e.target.firstName.value;
      const lastName = e.target.lastName.value;
      const email = e.target.email.value;
      const password = e.target.password.value;
      const confirmpassword = e.target.confirmpassword.value;

      const user = {
        firstName,
        lastName,
        email,
        password
      };

      if (password === confirmpassword) {
        registerUser(user)
        .then( res => {
          if (res.error) {
            setErrorMessage(res.message);
            setSuccessMessage('');
            return;
          }
          setSuccessMessage(res.message);
          setErrorMessage('');
          setTimeout( () => {
            router.push('/login');
          }, 3500);
        })
      }
      else {
        setErrorMessage("Passwords do not match.");
        setSuccessMessage('');
      }
    }


    return (
        <> 
            <div className={style.container}>
                <div className={style.signup_form}>
                    <div className={style.logo}>
                        <Image src="/images/interface/original.svg" width={400} height={300} alt="disney logo" />
                    </div>
                    <div className={style.fields}>
                        <h1 className={style.title}>Create your account</h1>
                        <form onSubmit={registrationHandler}>
                            <input className={style.inp_field} name="firstName" type="text" placeholder="First name" />
                            <input className={style.inp_field} name="lastName" type="text" placeholder="Last name" />
                            <input className={style.inp_field} name="email" type="text" placeholder="Email" />
                            <input className={style.inp_field} name="password" type="password" placeholder="Password" />
                            <input className={style.inp_field} name="confirmpassword" type="password" placeholder="Confirm password" />
                            <button className={style.sign_button}>REGISTER</button>
                        </form>
                        { successMessage ? <div className={style.success}>{successMessage}</div> : null }
                        { errorMessage ? <div className={style.error}>{errorMessage}</div> : null }
                        <div className={style.already}>
                            Already have an account? <Link href="/login"><a className={style.login}>Log in</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Register;
