'use client'

import React from "react";
import Link from "next/link";
import {usePathname} from "next/navigation";
import styles from '../styles/Header.module.scss';
import { Navbar, Nav } from 'react-bootstrap';


const Header: React.FC = () => {
    const pathname = usePathname();
    const isHome = pathname === "/"


    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg" className={styles.navbar}>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
            {!isHome && (
                <Nav.Link href="/">HOME</Nav.Link>
            )}
            <Nav.Link href="/about">SOBRE MI</Nav.Link>
            <Nav.Link href="/projects">PROYECTOS</Nav.Link>
            <Nav.Link href="/contact">CONTACTO</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

            {/* header para pantallas grandes */}
        <div className={styles.header}>
        <nav className={styles.nav}>
            <ul>
            {!isHome && (
                <li>
                <Link href="/">HOME</Link>
                </li>
            )}
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
    </>
    );
};

export default Header;