import { Link } from 'react-router';
import { useDeleteCoconutMutation, useGetCoconutsQuery } from './coconutsApiSlice';
import { useState } from 'react';
import type { Coconut } from '../../types';

const CoconutListItem = ({ coconut }: { coconut: Coconut }) => {
    const [deleteCoconut, { isLoading, isError }] = useDeleteCoconutMutation();
    const { refetch, isFetching } = useGetCoconutsQuery();

    const [deletingThis, setDeletingThis] = useState(false);

    const handleDelete = async () => {
        console.log(`Deleting coconut with id: ${coconut.id}`);

        try {
            setDeletingThis(true);
            const deleteResult = await deleteCoconut(coconut.id).unwrap();

            if (deleteResult.errorMessage) {
                throw new Error(deleteResult.errorMessage);
            }

            await refetch();
        } catch (error) {
            console.error('Error deleting coconut:', error);
        }
    };

    const disableDeleteButton = (isFetching || isLoading) && deletingThis;

    return (
        <li>
            <Link to={`/${coconut.id}`}> {coconut.content}</Link>
            <button disabled={disableDeleteButton} onClick={handleDelete}>
                Delete
            </button>
            {isError && <span>Error deleting coconut.</span>}
        </li>
    );
};

export default CoconutListItem;
