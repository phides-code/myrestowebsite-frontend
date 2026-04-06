import { URL_PREFIX } from '../../constants';
import type { Menuitem } from '../../types';

const MenuitemListItem = ({ menuitem }: { menuitem: Menuitem }) => {
    const hasImage = Boolean(menuitem.imageSource.uuidName);

    return (
        <li
            className={`menu-item-card${hasImage ? ' menu-item-card--has-image' : ''}`}
        >
            {hasImage ? (
                <div className='menu-item-card__image-wrap'>
                    <img
                        className='menu-item-card__image'
                        src={`${URL_PREFIX}/images/${menuitem.imageSource.uuidName}`}
                        alt={menuitem.title}
                    />
                </div>
            ) : null}
            <h3 className='menu-item-card__title'>{menuitem.title}</h3>
            <p className='menu-item-card__description'>{menuitem.description}</p>
            <div className='menu-item-card__price'>{menuitem.price}</div>
        </li>
    );
};

export default MenuitemListItem;
