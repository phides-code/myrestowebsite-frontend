import { BrowserRouter, Route, Routes } from 'react-router';
import MenuCategories from '../features/menuitems/MenuCategories';
import { useGetSettingsQuery } from '../features/settings/settingsApiSlice';
import { useGetThemeSettingsQuery } from '../features/themeSettings/themeSettingsApiSlice';
import type { Settings, ThemeSettings } from '../types';
import ContactInfo from './ContactInfo';
import Hours from './Hours';
import NavBar from './NavBar';
import TopBanner from './TopBanner';
import MainPage from './MainPage';
import Address from './Address';

export const App = () => {
    const {
        data: settingsData,
        isError: isSettingsError,
        isLoading: isSettingsLoading,
    } = useGetSettingsQuery();
    const {
        data: themeSettingsData,
        isError: isThemeSettingsError,
        isLoading: isThemeSettingsLoading,
    } = useGetThemeSettingsQuery();

    const isLoading = isSettingsLoading || isThemeSettingsLoading;
    const isError = isSettingsError || isThemeSettingsError;

    if (isLoading) {
        return <div>...</div>;
    }

    if (isError) {
        return <div>Something went wrong</div>;
    }

    const settings = settingsData?.data;
    const themeSettings = themeSettingsData?.data;

    const {
        email,
        facebook,
        instagram,
        phone,
        tiktok,
        hoursFriday,
        hoursMonday,
        hoursSaturday,
        hoursSunday,
        hoursThursday,
        hoursTuesday,
        hoursWednesday,
        address,
        bannerMessage,
        mainBlurb,
    } = settings as Settings;

    const contactInfo = { email, facebook, instagram, phone, tiktok };

    const hoursInfo = {
        hoursFriday,
        hoursMonday,
        hoursSaturday,
        hoursSunday,
        hoursThursday,
        hoursTuesday,
        hoursWednesday,
    };

    const { bannerImage } = themeSettings as ThemeSettings;

    return (
        <div>
            <TopBanner
                bannerImage={bannerImage}
                bannerMessage={bannerMessage}
            />
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route
                        path='/'
                        element={<MainPage mainBlurb={mainBlurb} />}
                    />
                    <Route
                        path='contact'
                        element={<ContactInfo contactInfo={contactInfo} />}
                    />
                    <Route
                        path='hours'
                        element={<Hours hoursInfo={hoursInfo} />}
                    />
                    <Route path='menu' element={<MenuCategories />} />
                    <Route
                        path='address'
                        element={<Address address={address} />}
                    />
                </Routes>
            </BrowserRouter>
        </div>
    );
};
