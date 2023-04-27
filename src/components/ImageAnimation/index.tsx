'use client'
import Image from 'next/image';

import { useImageAnimation } from './useImageAnimation';

import style from './ImageAnimation.module.css';

import image1 from '@/assets/images/Bass Player 1.png';
import image2 from '@/assets/images/Bass Player 2.png';
import image3 from '@/assets/images/Bass Player 3.png';

interface ImageAnimationProps {
    width: number;
    height: number;
}
function ImageAnimation(props: ImageAnimationProps) {
    const { width, height } = props;
    const { classContainer, scrollPercentage } = useImageAnimation({ style, width, height });

    return (
        <div className={style.static}>
             <div className={classContainer} data-scroll={scrollPercentage}>
                <div  className={style.wrapper} style={{width:`${Math.min(width, height)}px`, margin: 'auto'}}>
                    <Image className={style.img} src={image1} alt="image1" width={ Math.min(width, height) } height={ Math.min(width, height) } priority />
                    <Image className={style.img} src={image2} alt="image2" width={ Math.min(width, height) } height={ Math.min(width, height) } priority />
                    <Image className={style.img} src={image3} alt="image3" width={ Math.min(width, height) } height={ Math.min(width, height) } priority />
                </div>
            </div>
        </div>
    );
}

export default ImageAnimation;