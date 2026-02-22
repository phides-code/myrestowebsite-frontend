import { useParams } from 'react-router';
import { useGetMenuitemByIdQuery } from './menuitemsApiSlice';

const ViewMenuitem = () => {
    const { menuitemId } = useParams<{ menuitemId: string }>();

    const {
        data,
        isError: isQueryError,
        isLoading: isQueryLoading,
    } = useGetMenuitemByIdQuery(menuitemId as string);

    if (isQueryLoading) {
        return <div>Loading...</div>;
    }
    if (isQueryError) {
        return <div>Error loading menuitem.</div>;
    }
    const menuitem = data?.data;
    if (!menuitem) {
        return <div>Menuitem not found.</div>;
    }

    return (
        <div>
            <h1>Menuitem Details</h1>
            <p>ID: {menuitem.id}</p>
            <p>Created At: {new Date(menuitem.createdOn).toLocaleString()}</p>

            <div>
                <p>Content: {menuitem.content}</p>
            </div>
        </div>
    );
};

export default ViewMenuitem;
