import { Link } from 'react-router';

const CoconutHeader = () => {
    return (
        <div>
            <div>
                <Link to='/'>Coconuts</Link>
            </div>
            <div>
                <Link to='/add-coconut'>Add Coconut</Link>
            </div>
        </div>
    );
};
export default CoconutHeader;
