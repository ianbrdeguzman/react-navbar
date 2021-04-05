import React, { useState, useEffect, useRef } from 'react';
import { links, social } from './data';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
    const [toggleNavbar, setToggleNavbar] = useState(false);
    const linksRef = useRef(null);
    const linksContainerRef = useRef(null);

    const handleClick = () => {
        setToggleNavbar(!toggleNavbar);
    };

    useEffect(() => {
        const linksHeight = linksRef.current.getBoundingClientRect().height;
        toggleNavbar
            ? (linksContainerRef.current.style.height = `${linksHeight}px`)
            : (linksContainerRef.current.style.height = '0px');
    }, [toggleNavbar]);

    return (
        <div className='nav-center'>
            <div className='nav-header'>
                <img
                    src='https://raw.githubusercontent.com/john-smilga/react-projects/ca901d0954cf72ebbae6318816eeb018506b8912/11-navbar/setup/src/logo.svg'
                    className='logo'
                    alt='logo'
                />
                <button onClick={handleClick} className='nav-toggle'>
                    <FaBars />
                </button>
            </div>
            <div
                ref={linksContainerRef}
                className={`links-container ${
                    toggleNavbar && 'show-container'
                }`}
            >
                <ul ref={linksRef} className='links'>
                    {links.map((link) => {
                        const { id, url, text } = link;
                        return (
                            <li key={id}>
                                <a href={url}>{text}</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <ul className='social-icons'>
                {social.map((item) => {
                    const { id, url, icon } = item;
                    return (
                        <li key={id}>
                            <a href={url}>{icon}</a>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
