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
        <div
            style={{
                display: 'flex',
            }}
        >
            <button
                onClick={(ev) => {
                    handleNav(ev, '/');
                }}
            >
                Home
            </button>
            <button
                onClick={(ev) => {
                    handleNav(ev, '/menu');
                }}
            >
                Menu
            </button>

            <button
                onClick={(ev) => {
                    handleNav(ev, '/contact');
                }}
            >
                Contact
            </button>
            <button
                onClick={(ev) => {
                    handleNav(ev, '/address');
                }}
            >
                Address
            </button>
            <button
                onClick={(ev) => {
                    handleNav(ev, '/hours');
                }}
            >
                Hours
            </button>
        </div>
    );
};

export default NavBar;
