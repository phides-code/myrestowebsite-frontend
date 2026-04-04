import MenuCategories from '../features/menuitems/MenuCategories';
import { useGetSettingsQuery } from '../features/settings/settingsApiSlice';
import { useGetThemeSettingsQuery } from '../features/themeSettings/themeSettingsApiSlice';

export const App = () => {
    const {
        data: settingsData,
        // isError: isSettingsError,
        // isLoading: isSettingsLoading,
    } = useGetSettingsQuery();
    const {
        data: themeSettingsData,
        // isError: isThemeSettingsError,
        // isLoading: isThemeSettingsLoading,
    } = useGetThemeSettingsQuery();

    const settings = settingsData?.data;
    const themeSettings = themeSettingsData?.data;

    console.log('settings:');
    console.log(settings);

    console.log('themeSettings:');
    console.log(themeSettings);

    return <MenuCategories />;
};
