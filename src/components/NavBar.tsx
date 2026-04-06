import { useNavigate } from 'react-router';

const NavBar = () => {
    const navigate = useNavigate();

    const handleNav = (
        ev: React.MouseEvent<HTMLButtonElement>,
        dest: string,
    ) => {
        ev.preventDefault();
        void navigate(dest);
    };

    return (
        <nav className='app-nav' aria-label='Main'>
            <button
                type='button'
                className='app-nav__btn'
                onClick={(ev) => {
                    handleNav(ev, '/');
                }}
            >
                Home
            </button>
            <button
                type='button'
                className='app-nav__btn'
                onClick={(ev) => {
                    handleNav(ev, '/menu');
                }}
            >
                Menu
            </button>
            <button
                type='button'
                className='app-nav__btn'
                onClick={(ev) => {
                    handleNav(ev, '/contact');
                }}
            >
                Contact
            </button>
            <button
                type='button'
                className='app-nav__btn'
                onClick={(ev) => {
                    handleNav(ev, '/address');
                }}
            >
                Address
            </button>
            <button
                type='button'
                className='app-nav__btn'
                onClick={(ev) => {
                    handleNav(ev, '/hours');
                }}
            >
                Hours
            </button>
        </nav>
    );
};

export default NavBar;
