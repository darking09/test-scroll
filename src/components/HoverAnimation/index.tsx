/* eslint-disable jsx-a11y/alt-text */
import Image from 'next/image';

import { HoverAnimationProps } from '@/typings/global'

import style from './HoverAnimation.module.css';

function HoverAnimation(props: HoverAnimationProps) {
    const {backgroundImg, hoverImg} = props;
  return (
    <div className={style.animation_container}>
        <Image { ...backgroundImg } fill sizes='100%' priority style={{
          objectFit: 'cover',
        }}/>
        <Image { ...hoverImg } fill sizes='100%' priority style={{
          objectFit: 'cover',
        }}/>
    </div>
  )
}

export default HoverAnimation