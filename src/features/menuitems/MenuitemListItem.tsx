import { Link } from 'react-router';
import type { Menuitem } from '../../types';

const MenuitemListItem = ({ menuitem }: { menuitem: Menuitem }) => {
    return (
        <li>
            <Link to={`/${menuitem.id}`}> {menuitem.content}</Link>
        </li>
    );
};

export default MenuitemListItem;
