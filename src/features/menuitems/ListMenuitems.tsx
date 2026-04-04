import type { MenuCategory } from '../../types';
import MenuitemListItem from './MenuitemListItem';

interface ListMenuitemsProps {
    menuCategory: MenuCategory;
}

const ListeMenuitems = ({ menuCategory }: ListMenuitemsProps) => {
    return (
        <div>
            <p>{menuCategory.category}</p>
            <p>
                {menuCategory.menuitems.map((menuitem) => (
                    <MenuitemListItem key={menuitem.id} menuitem={menuitem} />
                ))}
            </p>
        </div>
    );
};

export default ListeMenuitems;
