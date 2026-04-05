import MenuCategories from '../features/menuitems/MenuCategories';
import { useGetSettingsQuery } from '../features/settings/settingsApiSlice';
import { useGetThemeSettingsQuery } from '../features/themeSettings/themeSettingsApiSlice';
import type { Settings, ThemeSettings } from '../types';
import ContactInfo from './ContactInfo';
import TopBanner from './TopBanner';

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

    const { bannerMessage, ...contactInfo } = settings as Settings;
    const { bannerImage } = themeSettings as ThemeSettings;

    return (
        <div>
            <TopBanner
                bannerImage={bannerImage}
                bannerMessage={bannerMessage}
            />
            <ContactInfo contactInfo={contactInfo} />
            <MenuCategories />
        </div>
    );
};
