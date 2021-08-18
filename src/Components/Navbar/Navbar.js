import { NavLink } from 'react-router-dom';
import './Navbar-style.css';


const Navbar = () => {
    return (
        <nav className='navbar'>

            <h1 className='navbar__title'>Меню</h1>

            <div className='navbar__block'>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='/'>
                        <img src='./NavbarImg/ic_glavnaya.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Главная</div>
                    </NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='/address'>
                        <img src='./NavbarImg/ic_adress.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Поиск адресов</div>
                    </NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='tables'>
                        <img src='./NavbarImg/ic_tables.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Таблицы</div>
                    </NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='calendar'>
                        <img src='./NavbarImg/ic_calendar.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Календарь</div>
                    </NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='maps'>
                        <img src='./NavbarImg/ic_maps.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Карты</div>
                    </NavLink>
                </div>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='widget'>
                        <img src='./NavbarImg/ic_widget.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Виджеты</div>
                    </NavLink>
                </div>

                <details className='navbar__item'>
                    <summary>
                        <img src='./NavbarImg/ic_settings.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Настройки</div>
                        <img src='./NavbarImg/Polygon.svg' className='navbar__polygon'></img>
                    </summary>
                    <p>
                        <NavLink className='navbar__item-a' to='settings-profile'>
                            <img src='./NavbarImg/ic_settings-profile.svg' className='navbar__item-logo'></img>
                            <div className='navbar__item-name'>Настройки<br></br>профиля</div>
                        </NavLink>
                    </p>
                    <p>
                        <NavLink className='navbar__item-a' to='settings-finance'>
                            <img src='./NavbarImg/ic_settings-finance.svg' className='navbar__item-logo'></img>
                            <div className='navbar__item-name'>Управление<br></br>финансами</div>
                        </NavLink>
                    </p>


                </details>

                <div className='navbar__item'>
                    <NavLink className='navbar__item-a' to='exit'>
                        <img src='./NavbarImg/ic_exit.svg' className='navbar__item-logo'></img>
                        <div className='navbar__item-name'>Выход</div>
                    </NavLink>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;