import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useGetCoconutsQuery, usePostCoconutMutation } from './coconutsApiSlice';

interface AddCoconutProps {
    setShowSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCoconut = ({ setShowSuccess }: AddCoconutProps) => {
    const navigate = useNavigate();

    const [newCoconut, setNewCoconut] = useState({
        content: '',
    });

    const [postCoconut, { isLoading: isPostLoading, isError }] =
        usePostCoconutMutation();
    const { refetch, isFetching: isGetFetching } = useGetCoconutsQuery();

    const isLoading = isPostLoading || isGetFetching;
    const submitDisabled = isLoading || !newCoconut.content;
    const cancelDisabled = isLoading;

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewCoconut({ ...newCoconut, content: e.target.value });
    };

    const handleCancel = () => {
        void navigate('/');
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Adding new Coconut:', newCoconut);

        try {
            const postResult = await postCoconut(newCoconut).unwrap();

            if (postResult.errorMessage) {
                throw new Error(postResult.errorMessage);
            }

            await refetch();
            setShowSuccess(true);
            navigate('/');
        } catch (error) {
            console.error('Error adding coconut:', error);
        }
    };

    return (
        <div>
            <h1>Add Coconut</h1>
            <p>Coconuts are a great source of potassium!</p>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='coconutContent'>Coconut Content:</label>
                    <input
                        type='text'
                        id='coconutContent'
                        name='coconutContent'
                        required
                        placeholder='Enter coconut content'
                        autoFocus
                        onChange={handleOnChange}
                        value={newCoconut.content}
                        disabled={isLoading}
                    />
                </div>
                <button type='submit' disabled={submitDisabled}>
                    Add Coconut
                </button>

                <button
                    type='button'
                    disabled={cancelDisabled}
                    onClick={handleCancel}
                >
                    Cancel
                </button>
                {isError && <p>Error adding coconut. Please try again.</p>}
            </form>
        </div>
    );
};
export default AddCoconut;
