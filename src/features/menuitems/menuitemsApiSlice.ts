import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Menuitem } from '../../types';

interface MenuitemsApiResponse {
    data: Menuitem[] | null;
    errorMessage: string | null;
}

interface MenuitemApiResponse {
    data: Menuitem | null;
    errorMessage: string | null;
}

const PATH = 'menuitems';

export const menuitemsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_MENUITEMS_SERVICE_URL as string,
    }),
    reducerPath: `${PATH}Api`,
    endpoints: (build) => ({
        getMenuitems: build.query<MenuitemsApiResponse, void>({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        getMenuitemById: build.query<MenuitemApiResponse, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetMenuitemsQuery, useGetMenuitemByIdQuery } =
    menuitemsApiSlice;
