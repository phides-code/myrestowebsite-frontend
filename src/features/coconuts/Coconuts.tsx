import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router';
import CoconutHeader from './CoconutHeader';
import ListCoconuts from './ListCoconuts';
import ViewCoconut from './ViewCoconut';
import AddCoconut from './AddCoconut';

const Coconuts = () => {
    const [showSuccess, setShowSuccess] = useState(false);
    return (
        <div>
            <BrowserRouter>
                <CoconutHeader />
                <Routes>
                    <Route path='/' element={<ListCoconuts />} />
                    <Route path='/:coconutId' element={<ViewCoconut />} />
                    <Route
                        path='/add-coconut'
                        element={<AddCoconut setShowSuccess={setShowSuccess} />}
                    />
                </Routes>
            </BrowserRouter>
            {showSuccess && (
                <div>
                    <h2>Coconut added successfully!</h2>
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
export default Coconuts;
