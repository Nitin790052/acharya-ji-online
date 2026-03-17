import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const heroBannerApi = createApi({
    reducerPath: 'heroBannerApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://127.0.0.1:5000/api/' }),
    tagTypes: ['HeroBanner'],
    endpoints: (builder) => ({
        getActiveBanners: builder.query({
            query: () => 'hero-banners/active',
            providesTags: ['HeroBanner'],
        }),
        // Admin endpoints for mutations (CRUD)
        getAllBanners: builder.query({
            query: () => 'hero-banners',
            providesTags: ['HeroBanner'],
        }),
        createBanner: builder.mutation({
            query: (formData) => ({
                url: 'hero-banners',
                method: 'POST',
                body: formData,
            }),
            invalidatesTags: ['HeroBanner'],
        }),
        updateBanner: builder.mutation({
            query: ({ id, formData }) => ({
                url: `hero-banners/${id}`,
                method: 'PUT',
                body: formData,
            }),
            invalidatesTags: ['HeroBanner'],
        }),
        deleteBanner: builder.mutation({
            query: (id) => ({
                url: `hero-banners/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['HeroBanner'],
        }),
    }),
});

export const { 
    useGetActiveBannersQuery, 
    useGetAllBannersQuery, 
    useCreateBannerMutation,
    useUpdateBannerMutation,
    useDeleteBannerMutation
} = heroBannerApi;
