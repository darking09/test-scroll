import Link from 'next/link';

import style from './Header.module.css';

function Header() {
    return (
        <header className={style.header}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li><Link href='./mario-animation'>Mario Animation</Link></li>
                <li><Link href='./slider'>Slider</Link></li>
            </ul>
        </header>
    );
}

export default Header;