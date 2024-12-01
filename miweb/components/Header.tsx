'use client'

import React, { use } from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from '../styles/Header.module.scss';


const Header: React.FC = () => {
    const pathname = usePathname();
    const isHome = pathname === "/"


    return (
        <header>
            <div>
                <div className={styles.header}>
                    <nav className={styles.nav}>
                        <ul>
                            {!isHome &&(
                            <li>
                                <Link href="/">HOME</Link>
                            </li>)}
                            <li>
                                <Link href="/about">SOBRE MI</Link>
                            </li>
                            <li>
                                <Link href="/projects">PROYECTOS</Link>
                            </li>
                            <li>
                                <Link href="/contact">CONTACTO</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;