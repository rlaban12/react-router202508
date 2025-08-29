import React from 'react';
import {Link, NavLink} from 'react-router-dom';
import styles from './MainNav.module.scss';

const MainNav = () => {

    const {nav, navLink, active} = styles;

    // 현재 링크 이동한 링크에 active 표시하기
    const activate = ({ isActive }) => {
        return `${navLink} ${isActive ? active : ''}`;
    };

    return (
        <nav className={nav}>
            <NavLink to="/" className={activate}>Home</NavLink>
            <NavLink to="/blog" className={activate}>Blog</NavLink>
            <NavLink to="/about" className={activate}>About</NavLink>
        </nav>
    );
};

export default MainNav;