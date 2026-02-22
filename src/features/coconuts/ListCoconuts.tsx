import CoconutListItem from './CoconutListItem';
import { useGetCoconutsQuery } from './coconutsApiSlice';

const ListCoconuts = () => {
    const { data, isError, isLoading } = useGetCoconutsQuery();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (isError) {
        return <div>Error loading coconuts.</div>;
    }

    const coconuts = data?.data ?? [];
    if (coconuts.length === 0) {
        return <div>No coconuts found.</div>;
    }

    return (
        <div>
            <h1>Coconuts List</h1>
            <ul>
                {coconuts.map((coconut) => (
                    <CoconutListItem key={coconut.id} coconut={coconut} />
                ))}
            </ul>
        </div>
    );
};

export default ListCoconuts;
