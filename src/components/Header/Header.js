import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className={'header'}>
            <div className={'header__links'}>
                <div className={'header__links__link'}>
                    Future link, now doesn't lead anywhere
                </div>
                <div className={'header__links__link'}>
                    Another link
                </div>
            </div>
        </div>
    )
}

export default Header;