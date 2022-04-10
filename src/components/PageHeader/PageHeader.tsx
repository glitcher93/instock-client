import './PageHeader.scss';
import { NavLink, Link } from 'react-router-dom';
import Logo from '../../assets/logo/InStock-Logo.svg';

function PageHeader() {
    return (
        <header
        className='header'
        >
            <div 
            className="header__wrapper"
            >
                <div 
                className='header__logo-container'
                >
                    <Link
                    to='/'
                    className='header__link'
                    >
                        <img 
                        src={Logo} 
                        alt="InStock logo"
                        className='header__logo'
                        />
                    </Link>
                </div>
                <div
                className='header__nav-container'
                >
                    <nav
                    className='header__nav'
                    >
                        <ul
                        className='header__nav-list'
                        >
                            <li
                            className='header__nav-item header__nav-item--left'
                            >
                                <NavLink
                                to='/warehouses'
                                className='header__nav-link'
                                >
                                    Warehouses
                                </NavLink>
                            </li>
                            <li
                            className='header__nav-item'
                            >
                                <NavLink
                                to='/inventory'
                                className='header__nav-link'
                                >
                                    Inventory
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
} 

export default PageHeader;