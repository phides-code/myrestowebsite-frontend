import type { MenuCategory } from '../../types';
import ListeMenuitems from './ListMenuitems';
import { useGetMenuitemsQuery } from './menuitemsApiSlice';

const MenuCategories = () => {
    const { data, isError, isLoading } = useGetMenuitemsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading menuitems.</div>;
    }

    const menuitems = data?.data ?? [];

    if (menuitems.length === 0) {
        return <div>No menuitems found.</div>;
    }

    const categorizedMenuitems: MenuCategory[] = [
        ...new Set(menuitems.map((m) => m.category)),
    ].map((category) => ({
        category,
        menuitems: menuitems.filter((m) => m.category === category),
    }));

    console.log('categorizedMenuitems');
    console.log(categorizedMenuitems);

    return (
        <div>
            <h1>Menu items List</h1>
            {categorizedMenuitems.map((menuCategory) => (
                <ListeMenuitems
                    key={menuCategory.category}
                    menuCategory={menuCategory}
                />
            ))}
        </div>
    );
};

export default MenuCategories;
