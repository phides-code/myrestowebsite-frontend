import { useParams } from 'react-router';
import {
    useGetCoconutByIdQuery,
    useGetCoconutsQuery,
    usePutCoconutMutation,
} from './coconutsApiSlice';
import { useState } from 'react';

const ViewCoconut = () => {
    const { coconutId } = useParams<{ coconutId: string }>();

    const [editMode, setEditMode] = useState(false);
    const [updatedContent, setUpdatedContent] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const {
        data,
        isError: isQueryError,
        isLoading: isQueryLoading,
        isFetching: isQueryFetching,
        refetch: refetchQuery,
    } = useGetCoconutByIdQuery(coconutId as string);
    const [putCoconut, { isLoading: isPutLoading, isError: isPutError }] =
        usePutCoconutMutation();
    const { isFetching: isGetFetching, refetch: refetchGet } =
        useGetCoconutsQuery();

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUpdatedContent(e.target.value);
    };

    const handleEdit = () => {
        setEditMode(true);
    };

    const handleCancel = () => {
        setEditMode(false);
    };

    const refetchQueryAndGet = async () => {
        await refetchQuery();
        await refetchGet();
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Updating Coconut:', updatedContent);

        try {
            const putResult = await putCoconut({
                id: coconutId as string,
                content: updatedContent,
            }).unwrap();

            if (putResult.errorMessage) {
                throw new Error(putResult.errorMessage);
            }

            await refetchQueryAndGet();
            setShowSuccess(true);
            setEditMode(false);
        } catch (error) {
            console.error('Error adding coconut:', error);
        }
    };

    if (isQueryLoading) {
        return <div>Loading...</div>;
    }
    if (isQueryError) {
        return <div>Error loading coconut.</div>;
    }
    const coconut = data?.data;
    if (!coconut) {
        return <div>Coconut not found.</div>;
    }

    const contentUnchanged = coconut.content === updatedContent;
    const isLoading = isPutLoading || isQueryFetching || isGetFetching;
    const submitDisabled = isLoading || contentUnchanged || !updatedContent;
    const cancelDisabled = isLoading;

    return (
        <div>
            <h1>Coconut Details</h1>
            <p>ID: {coconut.id}</p>
            <p>Created At: {new Date(coconut.createdOn).toLocaleString()}</p>

            {editMode ? (
                <div>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor='coconutContent'>Content:</label>
                        <input
                            type='text'
                            id='coconutContent'
                            name='coconutContent'
                            defaultValue={coconut.content}
                            required
                            onChange={handleOnChange}
                            disabled={isLoading}
                        />
                        <button type='submit' disabled={submitDisabled}>
                            Update Coconut
                        </button>
                        <button
                            type='button'
                            disabled={cancelDisabled}
                            onClick={handleCancel}
                        >
                            Cancel
                        </button>
                        {isPutError && (
                            <p>Error updating coconut. Please try again.</p>
                        )}
                    </form>
                </div>
            ) : (
                <div>
                    <p>Content: {coconut.content}</p>
                    <button onClick={handleEdit}>Edit</button>
                </div>
            )}
            {showSuccess && (
                <div>
                    <h2>Coconut updated successfully!</h2>
                    <button
                        onClick={() => {
                            setShowSuccess(false);
                        }}
                    >
                        Close
                    </button>
                </div>
            )}
        </div>
    );
};

export default ViewCoconut;
