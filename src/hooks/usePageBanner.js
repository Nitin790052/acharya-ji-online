import { useLocation } from 'react-router-dom';
import { useGetActiveBannersQuery } from '../services/heroBannerApi';

const defaultContent = {
    '/about': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'About Our',
        titleHighlight2: 'Divine',
        titleHighlight3: 'Journey',
        titleEnd: '',
        subtitle: 'Discover the story behind Acharya Ji Online — our mission to bring authentic Vedic traditions and spiritual guidance to seekers worldwide.',
        imageUrl: null
    },
    '/career': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Empowering Ancient',
        titleHighlight2: 'Traditions via',
        titleHighlight3: 'Modern',
        titleEnd: 'Expertise',
        subtitle: "Join India's most trusted spiritual network of learned Acharyas, Astrologers, and Wellness Experts dedicated to preserving Vedic wisdom.",
        imageUrl: null
    },
    '/gallery': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Sacred Moments',
        titleHighlight2: '&',
        titleHighlight3: 'Divine',
        titleEnd: 'Rituals',
        subtitle: 'Experience the sanctity of Vedic traditions through our captured moments. Real pujas, real blessings, real spiritual journeys.',
        imageUrl: null
    },
    '/media': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Acharya Ji in',
        titleHighlight2: 'Media &',
        titleHighlight3: 'Public',
        titleEnd: 'Platforms',
        subtitle: 'Spreading Vedic wisdom, performing sacred rituals, and guiding thousands through traditional wisdom and spiritual enlightenment.',
        imageUrl: null
    },
    '/pujaServices/bookPuja': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Book Authentic Puja with',
        titleHighlight2: 'Experienced',
        titleHighlight3: 'Acharyas',
        titleEnd: '',
        subtitle: 'Sacred Rituals Performed as per Vedic Shastras. Online & Home Visit Puja Services available across India with verified experts.',
        imageUrl: null
    },
    '/contact': {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Get in Touch with',
        titleHighlight2: 'Acharya Ji',
        titleHighlight3: 'Online',
        titleEnd: '',
        subtitle: 'Puja booking, astrology consultation, kundli queries, vastu guidance ya general questions — hum aapki madad ke liye yahan hain.',
        imageUrl: null
    }
};

export const usePageBanner = () => {
    const location = useLocation();
    const { data: bannersData } = useGetActiveBannersQuery();
    
    const banner = bannersData?.find(b => b.pagePath === location.pathname) || defaultContent[location.pathname] || {
        badge: 'DIVINE SERVICES HUB',
        titleHighlight1: 'Welcome to',
        titleHighlight2: 'Divine',
        titleHighlight3: 'Services',
        titleEnd: '',
        subtitle: 'Spiritual guidance and authentic Vedic traditions for your well-being.',
        imageUrl: null
    };
    
    return banner;
};
