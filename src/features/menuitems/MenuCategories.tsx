import type { MenuCategory } from '../../types';
import ListMenuitems from './ListMenuitems';
import { useGetMenuitemsQuery } from './menuitemsApiSlice';

const MenuCategories = () => {
    const { data, isError, isLoading } = useGetMenuitemsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading menu items.</div>;
    }

    const menuitems = data?.data ?? [];

    if (menuitems.length === 0) {
        return <div>No menu items found.</div>;
    }

    const categorizedMenuitems: MenuCategory[] = [
        ...new Set(menuitems.map((m) => m.category)),
    ].map((category) => ({
        category,
        menuitems: menuitems.filter((m) => m.category === category),
    }));

    return (
        <div>
            <h1>Menu items</h1>
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
