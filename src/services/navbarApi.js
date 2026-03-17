import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const navbarApi = createApi({
    reducerPath: 'navbarApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/api/' }),
    endpoints: (builder) => ({
        getNavbarItems: builder.query({
            query: () => 'navbar',
        }),
    }),
});

export const { useGetNavbarItemsQuery } = navbarApi;
