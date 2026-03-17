import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const navbarApi = createApi({
    reducerPath: 'navbarApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: import.meta.env.VITE_API_URL.endsWith('/') 
            ? import.meta.env.VITE_API_URL.slice(0, -1) 
            : import.meta.env.VITE_API_URL 
    }),
    endpoints: (builder) => ({
        getNavbarItems: builder.query({
            query: () => 'navbar',
        }),
    }),
});

export const { useGetNavbarItemsQuery } = navbarApi;
