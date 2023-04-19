'use client'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import { useImageAnimation } from './useImageAnimation';

import style from './ImageAnimation.module.css';

import image1 from '@/assets/images/Bass Player 1.png';
import image2 from '@/assets/images/Bass Player 2.png';
import image3 from '@/assets/images/Bass Player 3.png';

function ImageAnimation() {
    const { classContainer, scrollPercentage } = useImageAnimation({style});

    return (
        <div className={classContainer} data-scroll={scrollPercentage}>
            <div  className={style.wrapper}>
                <Image className={style.img} src={image1} alt="image1" width={256} height={256} priority />
                <Image className={style.img} src={image2} alt="image2" width={256} height={256} priority />
                <Image className={style.img} src={image3} alt="image3" width={256} height={256} priority />
            </div>
        </div>
    );
}

export default ImageAnimation;