import './Header-style.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src='./HeaderImg/ic_logo.svg' className='header__img'></img>
                <h1 className='header__title'>Wrench CRM</h1>
            </div>

            <div className='header__user'>
                <img src='./HeaderImg/ic_person.svg' className='header__img header__img--user'></img>
                <div className='header__username'>Имя Фамилия</div>
            </div>
        </div>
    );
}

export default Header;