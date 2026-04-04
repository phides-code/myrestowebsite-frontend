import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { ThemeSettings } from '../../types';
import { SETTINGS_SERVICE_URL } from '../../constants';

interface ThemeSettingsApiResponse {
    data: ThemeSettings | null;
    errorMessage: string | null;
}

const PATH = 'themeSettings';

export const themeSettingsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: SETTINGS_SERVICE_URL,
    }),
    reducerPath: `${PATH}Api`,
    endpoints: (build) => ({
        getThemeSettings: build.query<ThemeSettingsApiResponse, void>({
            query: () => ({
                url: '/themesettings',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetThemeSettingsQuery } = themeSettingsApiSlice;
