import React from 'react';
import './Header.css';

const Header = () => {

    return (
        <div className={'header'}>
            <div className={'header__about'}>
                Это - игра на время (которое я пока не добавлял), в которой необходимо попарно выбирать две одинаковые карты до тех пор, пока не найдутся все пары. Раскрытая пара пропадает с экрана.
            </div>
            <div className={'header__links'}>
                <div className={'header__links__link'}>
                    Ссылка, которая пока что никуда не ведёт
                </div>
            </div>
        </div>
    )
}

export default Header;