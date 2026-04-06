import type { MenuCategory } from '../../types';
import MenuitemListItem from './MenuitemListItem';

interface ListMenuitemsProps {
    menuCategory: MenuCategory;
}

const ListMenuitems = ({ menuCategory }: ListMenuitemsProps) => {
    const categorySlug = menuCategory.category
        .replace(/[^\w]+/g, '-')
        .replace(/^-|-$/g, '');
    const categoryHeadingId = `category-${categorySlug || 'items'}`;

    return (
        <section
            className='menu-category'
            aria-labelledby={categoryHeadingId}
        >
            <h2 className='menu-category__heading' id={categoryHeadingId}>
                {menuCategory.category}
            </h2>
            <ul className='menu-category__list'>
                {menuCategory.menuitems.map((menuitem) => (
                    <MenuitemListItem key={menuitem.id} menuitem={menuitem} />
                ))}
            </ul>
        </section>
    );
};

export default ListMenuitems;
