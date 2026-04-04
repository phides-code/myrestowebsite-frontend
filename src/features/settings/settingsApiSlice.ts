import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Settings } from '../../types';
import { SETTINGS_SERVICE_URL } from '../../constants';

interface SettingsApiResponse {
    data: Settings | null;
    errorMessage: string | null;
}

const PATH = 'settings';

export const settingsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: SETTINGS_SERVICE_URL,
    }),
    reducerPath: `${PATH}Api`,
    endpoints: (build) => ({
        getSettings: build.query<SettingsApiResponse, void>({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetSettingsQuery } = settingsApiSlice;
