import type { MenuCategory } from '../../types';
import ListMenuitems from './ListMenuitems';
import { useGetMenuitemsQuery } from './menuitemsApiSlice';

const MenuCategories = () => {
    const { data, isError, isLoading } = useGetMenuitemsQuery();

    if (isLoading) {
        return (
            <div className='page-shell menu-page__status' role='status'>
                Loading…
            </div>
        );
    }
    if (isError) {
        return (
            <div
                className='page-shell menu-page__status menu-page__status--error'
                role='alert'
            >
                Error loading menu items.
            </div>
        );
    }

    const menuitems = data?.data ?? [];

    if (menuitems.length === 0) {
        return (
            <div className='page-shell menu-page__status'>
                No menu items found.
            </div>
        );
    }

    const categorizedMenuitems: MenuCategory[] = [
        ...new Set(menuitems.map((m) => m.category)),
    ].map((category) => ({
        category,
        menuitems: menuitems.filter((m) => m.category === category),
    }));

    return (
        <div className='page-shell'>
            <h1 className='menu-page__title'>Our Menu</h1>
            {categorizedMenuitems.map((menuCategory) => (
                <ListMenuitems
                    key={menuCategory.category}
                    menuCategory={menuCategory}
                />
            ))}
        </div>
    );
};

export default MenuCategories;
