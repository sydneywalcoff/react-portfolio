import React from 'react';
import Nav from '../Nav';

const Header = props => {
    const {
        titles = [],
        setCurrentTitle,
        currentTitle
    } = props;
    return (
        <header className='row sticky-top'>
            <h1 className="initials col-2">SW</h1>
            <Nav
            titles = {titles}
            currentTitle = {currentTitle}
            setCurrentTitle = {setCurrentTitle}
            ></Nav>
        </header>
    );
};

export default Header;