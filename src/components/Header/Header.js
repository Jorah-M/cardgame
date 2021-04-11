import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className={'header'}>
            <div className={'header__links'}>
                <div className={'header__links__link'}>
                    Ссылка один
                </div>
                <div className={'header__links__link'}>
                    Ссылка два
                </div>
            </div>
        </div>
    )
}

export default Header;