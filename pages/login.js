import Image from 'next/image';
import style from '../styles/login.module.scss';
import Footer from '../components/footer';
import Link from 'next/link';

const Login = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.login_form}>
                    <div className={style.logo}>
                        <Image src="/images/interface/original.svg" width={400} height={300} alt="disney logo" />
                    </div>
                    <div className={style.fields}>
                        <h1 className={style.title}>Log in with your email</h1>
                        <form>
                            <input className={style.inp_field} type="text" placeholder="Email" />
                            <input className={style.inp_field} type="password" placeholder="Password" />
                            <button className={style.log_button}>CONTINUE</button>
                        </form>
                        <div className={style.new}>
                            New to Disney+? <Link href="/"><a className={style.signup}>Sign up</a></Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;
