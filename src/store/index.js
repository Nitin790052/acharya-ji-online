import { configureStore } from '@reduxjs/toolkit';
import { navbarApi } from '../services/navbarApi';
import { heroBannerApi } from '../services/heroBannerApi';
import { aboutUsApi } from '../services/aboutUsApi';
import { serviceApi } from '../services/serviceApi';
export const store = configureStore({
    reducer: {
        [navbarApi.reducerPath]: navbarApi.reducer,
        [heroBannerApi.reducerPath]: heroBannerApi.reducer,
        [aboutUsApi.reducerPath]: aboutUsApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(navbarApi.middleware, heroBannerApi.middleware, aboutUsApi.middleware, serviceApi.middleware),
});
