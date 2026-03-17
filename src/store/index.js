import { configureStore } from '@reduxjs/toolkit';
import { navbarApi } from '../services/navbarApi';
import { heroBannerApi } from '../services/heroBannerApi';

export const store = configureStore({
    reducer: {
        [navbarApi.reducerPath]: navbarApi.reducer,
        [heroBannerApi.reducerPath]: heroBannerApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(navbarApi.middleware, heroBannerApi.middleware),
});
