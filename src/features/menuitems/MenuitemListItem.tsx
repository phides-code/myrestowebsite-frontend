import { URL_PREFIX } from '../../constants';
import type { Menuitem } from '../../types';

const MenuitemListItem = ({ menuitem }: { menuitem: Menuitem }) => {
    return (
        <li key={menuitem.id}>
            <div>{menuitem.title}</div>
            {menuitem.imageSource.uuidName && (
                <img
                    src={`${URL_PREFIX}/images/${menuitem.imageSource.uuidName}`}
                    alt={menuitem.title}
                    style={{
                        width: '100px',
                    }}
                />
            )}
            <div>{menuitem.description}</div>
            <div>{menuitem.price}</div>
        </li>
    );
};

export default MenuitemListItem;
