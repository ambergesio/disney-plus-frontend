import Layout from '../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import style from '../styles/main.module.scss';
import Link from 'next/link';
import SiteContext from '../context/SiteContext';

import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { checkUser } from '../services';


export default function Home() {

  const { user, setUser, token, setToken, isLogged, setIsLogged } = useContext(SiteContext);
  const [ what, setWhat ] = useState(false);
  const [ have, setHave ] = useState(false);
  const [ payment, setPayment ] = useState(false);
  const [ how, setHow ] = useState(false);
  const router = useRouter();

  useEffect( () => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      checkUser(savedToken)
      .then(res => {
        if (!res.error) {
          router.push('/home');
          return;
        } else {
          localStorage.clear();
          setIsLogged(false);
          setUser({});
          setToken('');
          setIsLogged(false);
        }
      })
    } else {
      localStorage.clear();
    }
  }, [ router, setIsLogged, setUser, setToken ]);


  return (
    <>
      <Head>
        <title>Disney plus - home</title>
        <meta name="description" content="Disney plus, disney movies and series. Streaming content" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <section id="sub" className={style.main}>
          <div id="hero" className={style.hero}>
            <div className={style.title}>Enjoy the greatest stories, all in one place.</div>
            <div className={style.logo}>
              <Image src="/images/interface/original.svg" width={400} height={300} alt="disney logo" />
            </div>
            <Link href="/signup"><a className={style.register}>CREATE YOUR ACCOUNT</a></Link> 
            <div></div>
          </div>
        </section>
        <section className={style.devices}>
          <div>
            <Image src="/images/interface/devices.png" width={600} height={480} layout="intrinsic" alt="Watch the way you want" />
          </div>
          <div className={style.content}>
            <div className={style.watch}>Watch the way you want</div>
            <p className={style.enjoy}>Enjoy the big screen experience on your TV, or watch on your tablet, laptop, phone and more. You can watch an ever-growing selection of titles in 4K. Plus, you can stream on 4 screens at once, so everyone’s happy.</p> 
          </div>
        </section>
        <section>
          <div className={style.platform_title}>
            Available on your favorite devices
          </div>
          <div className={style.all_platforms}>
            <div className={style.platforms}>
              <div className={style.platform}>
                <Image src="/images/interface/devices/laptop.png" width={280} height={140} layout="intrinsic" alt="Watch the way you want" />
                <div>
                  <h3>
                    Computer
                  </h3>
                  <p>Chrome OS<br />MacOS<br />Windows PC</p>
                </div>
              </div> 
              <div className={style.platform}>
                <Image src="/images/interface/devices/tv.png" width={280} height={140} layout="intrinsic" alt="Watch the way you want" />
                <div>
                  <h3>
                    TV
                  </h3>
                  <p>Amazon Fire TV<br />Android TV<br />Apple TV<br />Chromecast<br />LG TV<br />Roku<br />Samsung</p>
                </div>
              </div>
            </div>
            <div className={style.platforms}>
              <div className={style.platform}>
                <Image src="/images/interface/devices/console.png" width={280} height={140} layout="intrinsic" alt="Watch the way you want" />
                <div>
                  <h3>
                    Game consoles
                  </h3>
                  <p>PS4<br />PS5<br />Xbox One<br />Xbox Series X<br />Xbox Series S</p>
                </div>
              </div> 
              <div className={style.platform}>
                <Image src="/images/interface/devices/tablet.png" width={280} height={140} layout="intrinsic" alt="Watch the way you want" />
                <div>
                  <h3>
                    Mobile & Tablet
                  </h3>
                  <p>Chrome OS<br />MacOS<br />Windows PC</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        <section>
          <div className={style.expand}>
           <div className={style.block}>
            What is Disney+?<button onClick={() => setWhat(!what)}>{what ? '-' : '+'}</button>
           </div>
           <div className={what ? `${style.expanded}`:`${style.contracted}`}>
              With Disney+, you get:
              <br />• A premium ad-free experience.
              <br />• The greatest stories of Disney, Pixar, Marvel, Star Wars, and National Geographic, all in one place.
              <br />• GroupWatch, a way to watch Disney+ together, even when you’re apart.
              <br />• Unlimited downloads on up to 10 devices.
              <br />• Over 300 titles in 4K UHD and HDR.
              <br />• Up to 4 current streams.
              <br />• IMAX Enhanced. Available with certain Marvel titles and accessible on all devices where Disney+ is supported.
           </div>
          </div>

          <div className={style.expand}>
           <div className={style.block}>
            Do you already have a Disney+ or Star+ subscription but want Combo+?<button onClick={() => setHave(!have)}>{have ? '-' : '+'}</button>
           </div>
           <div className={have ? `${style.expanded}`:`${style.contracted}`}>
              With Combo+:
              <br />• We will discount the value of your existing subscription to the Combo+ deal. (Yes, for the annual plan as well!)
              <br />• If you have a monthly subscription, your monthly bill will be reduced to the Combo+ price.
              <br />• If you have an annual subscription, we will divide your annual price into 12 equal parts and discount the monthly price to the Combo+ monthly payment.
              <br />• A detailed email with all of the payment charges and deductions will be sent to your inbox as soon as you confirm your Combo+ payment method.
              <br />• Remember you can cancel at any moment.
              <br />The Combo+ subscription is only offering a monthly plan at this moment
           </div>
          </div>

          <div className={style.expand}>
           <div className={style.block}>
           What payment methods can I use?<button onClick={() => setPayment(!payment)}>{payment ? '-' : '+'}</button>
           </div>
           <div className={payment ? `${style.expanded}`:`${style.contracted}`}>
            You can pay with a credit or debit card, Mercado Pago and even through third parties and local service providers. It is not mandatory to have a bank card.<br />
           </div>
          </div>

          <div className={style.expand}>
            <div className={style.block}>
              How can I stream the new 16+ and 18+ content?<button onClick={() => setHow(!how)}>{how ? '-' : '+'}</button>
            </div>
            <div className={how ? `${style.expanded}`:`${style.contracted}`}>
              Disney+ subscribers in Latin America will need to update the parental controls on their profile in order to access to the full catalog that includes 16+ and 18+ content. Users are able to restrict content in each profile as well as add a lock PIN. If you are a subscriber and you prefer to keep your current parental settings, you will enjoy all Disney+ content in a 14+ environment, and you will have the option to modify parental controls in the “edit profile” section any time.<br />
            </div>
          </div>

        </section>

      </Layout>
    </>
  )
}
