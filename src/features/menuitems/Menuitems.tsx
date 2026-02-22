import { BrowserRouter, Route, Routes } from 'react-router';
import MenuitemHeader from './MenuitemHeader';
import ListMenuitems from './ListMenuitems';
import ViewMenuitem from './ViewMenuitem';

const Menuitems = () => {
    return (
        <div>
            <BrowserRouter>
                <MenuitemHeader />
                <Routes>
                    <Route path='/' element={<ListMenuitems />} />
                    <Route path='/:menuitemId' element={<ViewMenuitem />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
export default Menuitems;
