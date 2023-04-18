'use client'
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';

import { useScrollPercentage } from './useScrollPercentage';

import style from './ImageAnimation.module.css';

import image1 from '@/assets/images/Bass Player 1.png';
import image2 from '@/assets/images/Bass Player 2.png';
import image3 from '@/assets/images/Bass Player 3.png';

interface State {
    scrollPercentage: number;
  }

function ImageAnimation(props: any) {
    const [classContainer , setClassContainer] = useState(style.container);
    const containerRef = useRef<HTMLDivElement>(null);
    const scrollPercentage = useScrollPercentage({ ref: containerRef });

    useEffect(() => {
        if (scrollPercentage <= 30) {
            setClassContainer(style.container);
        }

        if (scrollPercentage > 30 && scrollPercentage <= 60) {
            setClassContainer(style.container + ' ' + style['scoll-33']);
        }

        if (scrollPercentage > 60) {
            setClassContainer(style.container + ' ' + style['scoll-33'] + ' ' + style['scoll-66']);
        }
    }, [scrollPercentage]);

    return (
        <div ref={containerRef} className={classContainer} data-scroll={scrollPercentage}>
            <div  className={style.wrapper}>
                <Image className={style.img} src={image1} alt="image1" width={256} height={256} priority />
                <Image className={style.img} src={image2} alt="image2" width={256} height={256} priority />
                <Image className={style.img} src={image3} alt="image3" width={256} height={256} priority />
            </div>
        </div>
    );
}

export default ImageAnimation;