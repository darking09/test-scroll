import HoverAnimation from '@/components/HoverAnimation';

import useMarioAnimation from './useMarioAnimation';

import style from './MarioAnimation.module.css';

function Page () {
    const marioAnimation = useMarioAnimation();
    return (
        <div className={style.container}>
            <div className={style.frame}>
                <HoverAnimation {...marioAnimation} />
            </div>
        </div>
    );
}

export default Page;