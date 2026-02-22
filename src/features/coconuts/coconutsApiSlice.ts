import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import type { Coconut } from '../../types';

interface CoconutsApiResponse {
    data: Coconut[] | null;
    errorMessage: string | null;
}

interface CoconutApiResponse {
    data: Coconut | null;
    errorMessage: string | null;
}

const PATH = 'coconuts';

export const coconutsApiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_COCONUTS_SERVICE_URL as string,
    }),
    reducerPath: `${PATH}Api`,
    endpoints: (build) => ({
        getCoconuts: build.query<CoconutsApiResponse, void>({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        getCoconutById: build.query<CoconutApiResponse, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
        }),
        postCoconut: build.mutation<CoconutApiResponse, Partial<Coconut>>({
            query: (newCoconut) => ({
                url: '',
                method: 'POST',
                body: newCoconut,
            }),
        }),
        deleteCoconut: build.mutation<CoconutApiResponse, string>({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
        }),
        putCoconut: build.mutation<CoconutApiResponse, Partial<Coconut>>({
            query: (updatedCoconut) => ({
                url: `/${updatedCoconut.id}`,
                method: 'PUT',
                body: updatedCoconut,
            }),
        }),
    }),
});

export const {
    useGetCoconutsQuery,
    useGetCoconutByIdQuery,
    usePostCoconutMutation,
    useDeleteCoconutMutation,
    usePutCoconutMutation,
} = coconutsApiSlice;
