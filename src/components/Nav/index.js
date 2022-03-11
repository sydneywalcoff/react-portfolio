import React from 'react';

const Nav = props => {
    const { titles,
        currentTitle,
        setCurrentTitle
    } = props;
    return (
        <nav>
            <ul className="row align-items-center">
                {titles.map((title) => (
                    <li className={`col text-center ${currentTitle === title.name && 'navActive'}`} key={title.name}>
                        <span onClick={() => setCurrentTitle(title)}>{title.name}</span>
                    </li>
                ))}
            </ul>
        </nav>
    );
};


export default Nav;