import Head from 'next/head';
import Image from 'next/image';
import Footer from '../components/footer';
import style from '../styles/main.module.scss';
import Link from 'next/link';


export default function Home() {
  return (
    <>
      <Head>
        <title>Disney plus - home</title>
        <meta name="description" content="Disney plus, disney movies and series. Streaming content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={style.main}>

      <div className={style.logbar}>
        <Link href="/login" className={style.login}>
          <a className={style.login}>
            LOG IN
          </a>
        </Link>
      </div>
      <div className={style.fade}>
        <div className={style._blank}></div>
        <div className={style.hero}>
          <h1 className={style.title}>Enjoy the greatest stories, all in one place.</h1>
          <div className={style.logo}>
            <Image src="/images/interface/original.svg" width={400} height={300} alt="disney logo" />
          </div>
            <Link href="/"><a className={style.register}>Create your account</a></Link> 
        </div>
      </div>
      </main>
      <Footer />
    </>
  )
}
