import React from 'react';
import Image from 'next/image';
import style from './styles.module.scss';

const Footer = () => {
    return (
        <footer className={style.footer}>
            <Image src="/images/interface/original.svg" width={100} height ={50} alt="disney logo" />
            <p className={style.parag}>© 2022 Disney and its family of affiliated companies. All rights reserved.</p>
            <p className={style.parag}>Disney+ is a paid subscription service, its content is subject to availability. The Disney+ service is marketed by The Walt Disney Company (Argentina) S.A., Tucumán 1, Piso 4º (C1049AAA) Autonomous City of Buenos Aires, Argentina and CUIT number 30-63984459-1</p>
        </footer>
    );
}

export default Footer;
