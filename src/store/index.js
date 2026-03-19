import { configureStore } from '@reduxjs/toolkit';
import { navbarApi } from '../services/navbarApi';
import { heroBannerApi } from '../services/heroBannerApi';
import { aboutUsApi } from '../services/aboutUsApi';
import { serviceApi } from '../services/serviceApi';
import { popularPujaApi } from '../services/popularPujaApi';
import { astrologerApi } from '../services/astrologerApi';
import { kundliApi } from '../services/kundliApi';
import { vastuApi } from '../services/vastuApi';

export const store = configureStore({
    reducer: {
        [navbarApi.reducerPath]: navbarApi.reducer,
        [heroBannerApi.reducerPath]: heroBannerApi.reducer,
        [aboutUsApi.reducerPath]: aboutUsApi.reducer,
        [serviceApi.reducerPath]: serviceApi.reducer,
        [popularPujaApi.reducerPath]: popularPujaApi.reducer,
        [astrologerApi.reducerPath]: astrologerApi.reducer,
        [kundliApi.reducerPath]: kundliApi.reducer,
        [vastuApi.reducerPath]: vastuApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(
            navbarApi.middleware,
            heroBannerApi.middleware,
            aboutUsApi.middleware,
            serviceApi.middleware,
            popularPujaApi.middleware,
            astrologerApi.middleware,
            kundliApi.middleware,
            vastuApi.middleware
        ),
});
