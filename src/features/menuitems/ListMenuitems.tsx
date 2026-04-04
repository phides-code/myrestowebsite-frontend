import type { MenuCategory } from '../../types';
import MenuitemListItem from './MenuitemListItem';

interface ListMenuitemsProps {
    menuCategory: MenuCategory;
}

const ListMenuitems = ({ menuCategory }: ListMenuitemsProps) => {
    return (
        <div>
            <p>{menuCategory.category}</p>
            <ul>
                {menuCategory.menuitems.map((menuitem) => (
                    <MenuitemListItem key={menuitem.id} menuitem={menuitem} />
                ))}
            </ul>
        </div>
    );
};

export default ListMenuitems;
