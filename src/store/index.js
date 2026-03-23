import { configureStore } from '@reduxjs/toolkit';
import { navbarApi } from '../services/navbarApi';
import { heroBannerApi } from '../services/heroBannerApi';
import { aboutUsApi } from '../services/aboutUsApi';
import { serviceApi } from '../services/serviceApi';
import { popularPujaApi } from '../services/popularPujaApi';
import { astrologerApi } from '../services/astrologerApi';
import { kundliApi } from '../services/kundliApi';
import { vastuApi } from '../services/vastuApi';
import { testimonialApi } from '../services/testimonialApi';
import { blogApi } from '../services/blogApi';
import { appDownloadApi } from '../services/appDownloadApi';
import { faqApi } from '../services/faqApi';
import { footerApi } from '../services/footerApi';
import { aboutPageApi } from '../services/aboutPageApi';
import { pujaOfferingApi } from '../services/pujaOfferingApi';

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
        [testimonialApi.reducerPath]: testimonialApi.reducer,
        [blogApi.reducerPath]: blogApi.reducer,
        [appDownloadApi.reducerPath]: appDownloadApi.reducer,
        [faqApi.reducerPath]: faqApi.reducer,
        [footerApi.reducerPath]: footerApi.reducer,
        [aboutPageApi.reducerPath]: aboutPageApi.reducer,
        [pujaOfferingApi.reducerPath]: pujaOfferingApi.reducer,
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
            vastuApi.middleware,
            testimonialApi.middleware,
            blogApi.middleware,
            appDownloadApi.middleware,
            faqApi.middleware,
            footerApi.middleware,
            aboutPageApi.middleware,
            pujaOfferingApi.middleware
        ),
});
