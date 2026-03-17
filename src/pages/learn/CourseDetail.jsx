// pages/learn/CourseDetail.jsx
import React from 'react';
import {
    Clock, Users, Award, Star, CheckCircle, BookOpen, Sparkles,
    ChevronRight, Phone, Shield, PlayCircle, MessageSquare, IndianRupee
} from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Link, useParams } from 'react-router-dom';

import acharya from '../../assets/aboutImage/acharyaji.webp';
import rudrakshaImg from '../../assets/vastuRamadies/Rudraksha.webp';
import gemstoneImg from '../../assets/vastuRamadies/Gemstones.webp';

// ─── Course Database ──────────────────────────────────────────────────────────
const courseDatabase = {
    'basic-astrology-course': {
        title: 'Basic Astrology Foundation',
        subtitle: 'Start Your Cosmic Journey From the Ground Up',
        duration: '8 Weeks',
        price: 4999,
        originalPrice: 6999,
        level: 'Beginner',
        rating: 4,
        students: 1234,
        image: rudrakshaImg,
        overview: 'This foundational course is designed for absolute beginners who want to understand the sacred science of Vedic Astrology. You will learn how planets, signs, and houses work together to shape your life, relationships, and destiny under the direct guidance of Acharya Ji.',
        highlights: [
            'Understand all 12 zodiac signs and their characteristics',
            'Learn the significance of 9 planets in Vedic astrology',
            'Decode the 12 houses in a birth chart (Kundli)',
            'Perform basic Kundli analysis independently',
            'Weekly live Q&A sessions with Acharya Ji',
            'Lifetime access to course materials & PDF notes',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Introduction to Astrology', topics: ['History of Vedic Jyotish', 'Difference from Western Astrology', 'The Cosmic Framework'] },
            { module: 'Module 2', title: 'Zodiac Signs (Rashis)', topics: ['All 12 Rashis explained', 'Element & Quality analysis', 'Ruling planets of each sign'] },
            { module: 'Module 3', title: 'Planets & Their Meanings', topics: ['The 9 Grahas', 'Benefic vs Malefic planets', 'Planetary strengths & debilitation'] },
            { module: 'Module 4', title: '12 Houses (Bhavas)', topics: ['Role of each bhava', 'House lords and significators', 'Chart division types'] },
            { module: 'Module 5', title: 'Kundli Analysis', topics: ['Reading a birth chart', 'Lagna & Moon sign', 'Basic dasha interpretation'] },
        ],
    },
    'numerology-essentials': {
        title: 'Numerology Essentials',
        subtitle: 'Decode the Hidden Power of Numbers',
        duration: '6 Weeks',
        price: 3999,
        originalPrice: 5499,
        level: 'Beginner',
        rating: 5,
        students: 892,
        image: gemstoneImg,
        overview: 'Numerology is the sacred science of numbers and their cosmic vibrations. In this course, you will discover how numbers influence your personality, destiny, relationships, and future events — and how to use this knowledge to make better life decisions.',
        highlights: [
            'Calculate and interpret your Life Path Number',
            'Understand Name Numerology and its impact',
            'Learn to read Destiny and Soul Urge Numbers',
            'Identify lucky dates, colours, and directions',
            'Apply numerology in daily life decisions',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Number Meanings', topics: ['1 through 9 and Master Numbers', 'Cosmic significance', 'Number vibrations'] },
            { module: 'Module 2', title: 'Life Path Number', topics: ['How to calculate', 'Life themes by number', 'Compatibility insights'] },
            { module: 'Module 3', title: 'Name Numerology', topics: ['Chaldean vs Pythagorean', 'Name correction principles', 'Business name analysis'] },
            { module: 'Module 4', title: 'Predictions & Timing', topics: ['Personal Year cycles', 'Pinnacle Numbers', 'Future event mapping'] },
        ],
    },
    'palmistry-beginners': {
        title: 'Palmistry for Beginners',
        subtitle: 'Read the Story Written in Your Hands',
        duration: '4 Weeks',
        price: 2999,
        originalPrice: 3999,
        level: 'Beginner',
        rating: 4,
        students: 567,
        image: rudrakshaImg,
        overview: 'Palmistry (Hast Rekha Vigyan) is one of the oldest forms of divination. In this beginner course you will learn to identify and interpret the major palm lines, mounts, and markings — and read the story that your hands tell about your life, health, and future.',
        highlights: [
            'Identify and read all major and minor palm lines',
            'Understand the 7 Mounts and their meanings',
            'Detect health indicators in the hand',
            'Read relationship and marriage lines',
            'Practice reading real hand samples',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Life Line', topics: ['Length and depth analysis', 'Breaks and islands', 'Vitality and health signs'] },
            { module: 'Module 2', title: 'Heart Line', topics: ['Emotional patterns', 'Love and relationships', 'Cardiac health indicators'] },
            { module: 'Module 3', title: 'Fate Line & Head Line', topics: ['Career and destiny', 'Intellect and thinking style', 'Decision-making patterns'] },
            { module: 'Module 4', title: 'Mounts Analysis', topics: ['Mount of Venus, Jupiter, Saturn', 'Mount of Mercury & Mars', 'Reading hand types'] },
        ],
    },
    'advanced-astrology-mastery': {
        title: 'Advanced Astrology Mastery',
        subtitle: 'Master the Complete Art of Vedic Prediction',
        duration: '12 Weeks',
        price: 12999,
        originalPrice: 17999,
        level: 'Professional',
        rating: 5,
        students: 445,
        image: gemstoneImg,
        overview: 'This comprehensive professional program is for serious astrology students who want to reach expert-level mastery. You will go deep into the Dasha system, transit analysis, divisional charts, yogas, and advanced predictive techniques used by professional Vedic astrologers.',
        highlights: [
            'Master all 16 divisional charts (Shodashvarga)',
            'Deep study of Vimshottari Dasha system',
            'Advanced transit and progression analysis',
            'Learn 50+ powerful planetary yogas',
            'Real-life chart case studies with Acharya Ji',
            'Professional certificate + business guidance',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Advanced Kundli Review', topics: ['Arudha Lagnas', 'Karaka planets', 'Chara & Sthira Karakas'] },
            { module: 'Module 2', title: 'Dasha System', topics: ['Vimshottari Dasha', 'Antardasha predictions', 'Cross-referencing dashas'] },
            { module: 'Module 3', title: 'Transit Analysis', topics: ['Gochara of 9 planets', 'Saturn & Jupiter transits', 'Transit timing techniques'] },
            { module: 'Module 4', title: 'Predictive Methods', topics: ['Annual charts (Varshaphal)', 'Prashna Kundli', 'Medical astrology basics'] },
            { module: 'Module 5', title: 'Practice & Consultation', topics: ['Live chart readings', 'Client consultation techniques', 'Building your practice'] },
        ],
    },
    'kundli-reading': {
        title: 'Professional Kundli Reading',
        subtitle: 'Master Birth Chart Analysis for Professional Practice',
        duration: '10 Weeks',
        price: 9999,
        originalPrice: 13999,
        level: 'Professional',
        rating: 4,
        students: 678,
        image: rudrakshaImg,
        overview: 'This professional course is specifically focused on the complete art of Kundli (birth chart) reading. You will learn systematic methods to analyze planetary placements, identify doshas, recommend remedies, and deliver high-quality consultations to clients.',
        highlights: [
            'Systematic chart reading methodology',
            'Comprehensive dosha identification and remedies',
            'Predict key life events with accuracy',
            'Relationship compatibility (Kundli Milan)',
            'Professional consultation workflow',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Birth Chart Analysis', topics: ['Systematic reading method', 'Ascendant analysis', 'Planetary strength assessment'] },
            { module: 'Module 2', title: 'Planetary Positions', topics: ['Combustion & retrogression', 'House lord placements', 'Aspects and conjunctions'] },
            { module: 'Module 3', title: 'Dosh Nivaran', topics: ['Mangal Dosh', 'Kaal Sarp Dosh', 'Guru Chandal Dosh'] },
            { module: 'Module 4', title: 'Remedies', topics: ['Gemstone recommendations', 'Mantra & puja remedies', 'Yantra selection'] },
        ],
    },
    'muhurta-astrology': {
        title: 'Muhurta Electional Astrology',
        subtitle: 'Perfect Astrological Timing for Every Life Event',
        duration: '8 Weeks',
        price: 7999,
        originalPrice: 10999,
        level: 'Professional',
        rating: 4,
        students: 334,
        image: gemstoneImg,
        overview: 'Muhurta is the sacred Vedic science of choosing the most auspicious moment for any important activity. In this course, you will master Panchang reading, Tithi analysis, Nakshatra selection, and how to calculate the best time for weddings, business launches, travel, and more.',
        highlights: [
            'Read and interpret the Hindu Panchang completely',
            'Calculate Muhurta for weddings, travel, business',
            'Understand Tithi, Vara, Nakshatra, Yoga & Karana',
            'Identify and avoid inauspicious time periods',
            'Software-based Muhurta calculation practice',
            'Professional certificate included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Muhurta Calculation', topics: ['Panchang elements', 'Shubha & Ashubha times', 'Rahu Kaal & Gulika'] },
            { module: 'Module 2', title: 'Panchang Reading', topics: ['Daily Panchang study', 'Festivals and Vrat timing', 'Hora calculation'] },
            { module: 'Module 3', title: 'Event Timing', topics: ['Marriage Muhurta', 'Business start Muhurta', 'Griha Pravesh timing'] },
            { module: 'Module 4', title: 'Auspicious Days', topics: ['Nakshatra suitability', 'Moon sign compatibility', 'Planetary hourly selection'] },
        ],
    },
    'tarot-reading-mastery': {
        title: 'Tarot Reading Mastery',
        subtitle: 'Connect With Divine Guidance Through the Sacred Art of Tarot',
        duration: '6 Weeks',
        price: 5999,
        originalPrice: 7999,
        level: 'Spiritual',
        rating: 5,
        students: 789,
        image: rudrakshaImg,
        overview: 'This complete Tarot course will take you from beginner to confident Tarot reader. You will learn the meaning of all 78 cards, master various spreads, and develop your intuitive reading skills under the direct guidance of an experienced spiritual reader.',
        highlights: [
            'Master all 78 Tarot cards (Major & Minor Arcana)',
            'Learn 10+ professional card spreads',
            'Develop your intuitive reading abilities',
            'Conduct clarity and guidance readings',
            'Practice with real reading sessions',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Major Arcana (22 Cards)', topics: ['The Fool to The World', 'Archetypal meanings', 'Reversed card interpretations'] },
            { module: 'Module 2', title: 'Minor Arcana (56 Cards)', topics: ['Four suits: Wands, Cups, Swords, Pentacles', 'Court cards & numerology', 'Elemental associations'] },
            { module: 'Module 3', title: 'Card Spreads', topics: ['3-card past/present/future', 'Celtic Cross spread', 'Custom relationship spreads'] },
            { module: 'Module 4', title: 'Intuitive Reading', topics: ['Developing psychic sensitivity', 'Storytelling with cards', 'Professional reading ethics'] },
        ],
    },
    'advanced-palmistry': {
        title: 'Advanced Palmistry',
        subtitle: 'Deepen Your Palm Reading With Esoteric Techniques',
        duration: '8 Weeks',
        price: 6999,
        originalPrice: 9499,
        level: 'Spiritual',
        rating: 4,
        students: 456,
        image: gemstoneImg,
        overview: 'Building on basic palmistry knowledge, this advanced course dives deep into rare markings, special signs, and esoteric hand analysis techniques. You will learn to identify extraordinary markings that reveal hidden talents, past lives, karmic patterns, and spiritual gifts.',
        highlights: [
            'Identify and interpret rare special hand markings',
            'Understand health and disease indicators in the hand',
            'Read career aptitude and financial potential',
            'Discover spiritual gifts and past-life markings',
            'Advanced finger analysis and phalanges study',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Advanced Lines', topics: ['Sun line & Mercury line', 'Intuition line & Mars line', 'Subsidiary lines analysis'] },
            { module: 'Module 2', title: 'Special Markings', topics: ['Stars, triangles, and squares', 'Crosses and grilles', 'Mystic cross identification'] },
            { module: 'Module 3', title: 'Health Indicators', topics: ['Via Lascivia and allergy lines', 'Rascettes and health', 'Finger nail analysis'] },
            { module: 'Module 4', title: 'Career & Spiritual Lines', topics: ['Teacher\'s Square', 'Healer\'s Mark', 'Ring of Solomon'] },
        ],
    },
    'vastu-shastra-fundamentals': {
        title: 'Vastu Shastra Fundamentals',
        subtitle: 'Harmonize Your Spaces With Ancient Vedic Wisdom',
        duration: '6 Weeks',
        price: 5499,
        originalPrice: 7499,
        level: 'Spiritual',
        rating: 4,
        students: 567,
        image: rudrakshaImg,
        overview: 'Vastu Shastra is the ancient Vedic science of architecture and spatial harmony. This foundational course teaches you how to analyze any space — home, office, or plot — and apply powerful Vastu principles to invite prosperity, health, peace, and positive energy.',
        highlights: [
            'Understand the 5 elements and their directional rulers',
            'Analyze any home or office using Vastu principles',
            'Identify energy imbalances and recommend remedies',
            'Learn room-by-room placement strategies',
            'Vastu for health, wealth, relationships, and career',
            'Certificate of completion included',
        ],
        curriculum: [
            { module: 'Module 1', title: 'Five Elements', topics: ['Earth, Water, Fire, Air, Space', 'Elemental balance principles', 'Directional correspondences'] },
            { module: 'Module 2', title: 'Direction Science', topics: ['8 directions and their rulers', 'Brahmasthana (center)', 'Cardinal & intercardinal analysis'] },
            { module: 'Module 3', title: 'Energy Mapping', topics: ['Vastu Purusha Mandala', 'Energy zones in a plot', 'Measuring with compass'] },
            { module: 'Module 4', title: 'Vastu Remedies', topics: ['Crystals, plants, and colours', 'Mirror placement rules', 'Pyramid and Yantras in Vastu'] },
        ],
    },
};

// ─── Course Detail Component ─────────────────────────────────────────────────
const CourseDetail = () => {
    const { slug } = useParams();
    const course = courseDatabase[slug];

    if (!course) {
        return (
            <Layout>
                <div className="min-h-screen flex items-center justify-center bg-[#FAF9F6]">
                    <div className="text-center">
                        <h2 className="text-3xl font-extrabold text-[#4A3427] mb-4 uppercase">Course Not Found</h2>
                        <Link to="/learn-astrology-courses">
                            <button className="bg-orange-600 text-white px-8 py-3 font-bold uppercase tracking-widest text-xs hover:bg-orange-700 transition-colors">
                                Back to Courses
                            </button>
                        </Link>
                    </div>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="min-h-screen bg-[#FAF9F6] relative overflow-hidden">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] -z-10" />

                {/* ── Hero ────────────────────────────────────────────────── */}
                <section className="relative h-[320px] sm:h-[340px] md:h-[360px] lg:h-[380px] flex items-center text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img src="" alt={course.title} className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/45 to-black/70" />
                        <div className="absolute inset-0 backdrop-blur-[1px]" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
                            {/* Breadcrumb */}
                            <div className="flex items-center justify-center gap-2 mb-6 text-[10px] font-bold uppercase tracking-widest text-white/70">
                                <Link to="/learn-astrology-courses" className="hover:text-amber-400 transition-colors">Courses</Link>
                                <ChevronRight className="w-3 h-3" />
                                <span className="text-amber-400">{course.title}</span>
                            </div>
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-6 shadow-2xl">
                                <Award className="w-4 h-4 text-[#FFC107]" />
                                <span className="text-[#FFC107] text-xs font-serif font-bold uppercase tracking-[0.2em]">{course.level} Level Course</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-3 leading-tight drop-shadow-[0_8px_24px_rgba(0,0,0,0.5)] uppercase tracking-wide">
                                {course.title}
                            </h1>
                            <p className="text-lg text-amber-100 leading-relaxed font-medium max-w-2xl mx-auto italic opacity-90 drop-shadow">
                                {course.subtitle}
                            </p>
                        </div>
                    </div>
                </section>

                {/* ── Overview + Enroll Card ───────────────────────────────── */}
                <section className="py-12 md:py-16 bg-white overflow-x-hidden relative">
                    <div className="container mx-auto px-4 max-w-7xl">
                        <div className="grid lg:grid-cols-3 gap-10 items-start">

                            {/* Overview Left */}
                            <div className="lg:col-span-2 animate-slide-in-left">
                                <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-wider mb-5">
                                    <Sparkles className="w-3.5 h-3.5" />
                                    <span>Course Overview</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 leading-tight">
                                    What You Will <span className="text-orange-600">Learn</span>
                                </h2>
                                <div className="flex items-center gap-2 mb-6">
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    <Sparkles className="w-5 h-5 text-orange-400" />
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                </div>
                                <p className="text-gray-700 font-medium text-sm md:text-base leading-relaxed mb-8">{course.overview}</p>

                                {/* Key Highlights */}
                                <div className="bg-orange-50/60 border border-orange-100 p-6 mb-8">
                                    <h3 className="text-sm font-black text-[#2A1D13] uppercase tracking-widest mb-5">Course Highlights</h3>
                                    <div className="grid sm:grid-cols-2 gap-3">
                                        {course.highlights.map((h, i) => (
                                            <div key={i} className="flex items-start gap-3">
                                                <div className="w-6 h-6 rounded-lg bg-white flex items-center justify-center flex-shrink-0 border border-orange-100 shadow-sm mt-0.5">
                                                    <CheckCircle className="w-3.5 h-3.5 text-orange-600" />
                                                </div>
                                                <span className="text-[11px] font-bold text-[#4A3427] uppercase tracking-wide leading-snug">{h}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Quick Stats */}
                                <div className="flex flex-wrap gap-6">
                                    {[
                                        { icon: Clock, label: 'Duration', value: course.duration },
                                        { icon: Users, label: 'Enrolled', value: `${course.students}+ Students` },
                                        { icon: Award, label: 'Level', value: course.level },
                                        { icon: Star, label: 'Rating', value: `${course.rating}.0 / 5.0` },
                                    ].map(({ icon: Icon, label, value }) => (
                                        <div key={label} className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center border border-orange-100">
                                                <Icon className="w-5 h-5 text-orange-600" />
                                            </div>
                                            <div>
                                                <p className="text-[9px] font-black text-gray-400 uppercase tracking-widest">{label}</p>
                                                <p className="text-xs font-black text-[#2A1D13] uppercase">{value}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Enroll Card Right */}
                            <div className="lg:col-span-1 animate-slide-in-right">
                                <div className="sticky top-24 bg-white border-b-[6px] border-orange-500 shadow-2xl p-8">
                                    <div className="relative mb-5 rounded-xl overflow-hidden h-44">
                                        <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                        <div className="absolute top-3 left-3 bg-amber-400 text-black px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                                            {course.level}
                                        </div>
                                        <PlayCircle className="absolute inset-0 m-auto w-12 h-12 text-white/80 hover:text-white transition-colors cursor-pointer" />
                                    </div>
                                    <div className="mb-6">
                                        <div className="flex items-end gap-2 mb-1">
                                            <span className="text-4xl font-black text-orange-600">₹{course.price.toLocaleString()}</span>
                                            <span className="text-sm text-gray-400 line-through pb-1">₹{course.originalPrice.toLocaleString()}</span>
                                        </div>
                                        <div className="inline-block bg-green-50 text-green-700 px-3 py-1 text-[9px] font-black uppercase tracking-widest">
                                            {Math.round((1 - course.price / course.originalPrice) * 100)}% OFF — Limited Time
                                        </div>
                                    </div>
                                    <button className="w-full bg-[#E8453C] hover:bg-black text-white font-black text-xs uppercase tracking-[0.2em] py-4 mb-3 transition-all shadow-lg">
                                        Enroll Now
                                    </button>
                                    <button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-black text-xs uppercase tracking-[0.2em] py-3 flex items-center justify-center gap-2 mb-6 transition-all shadow-md">
                                        <Phone className="w-4 h-4" /> WhatsApp to Enroll
                                    </button>
                                    <div className="space-y-3">
                                        {[
                                            { icon: Clock, text: `Duration: ${course.duration}` },
                                            { icon: Users, text: `${course.students}+ students enrolled` },
                                            { icon: Shield, text: '30-day money-back guarantee' },
                                            { icon: BookOpen, text: 'Lifetime access to materials' },
                                            { icon: Award, text: 'Certificate of completion' },
                                        ].map(({ icon: Icon, text }) => (
                                            <div key={text} className="flex items-center gap-3 text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                                                <Icon className="w-4 h-4 text-orange-600 flex-shrink-0" />
                                                <span>{text}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Course Curriculum ─────────────────────────────────────── */}
                <section className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d97706 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-12 animate-fade-in-up">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <BookOpen className="w-3.5 h-3.5" />
                                <span>Detailed Curriculum</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">
                                Course <span className="text-orange-600">Curriculum</span>
                            </h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                <Sparkles className="w-5 h-5 text-orange-400" />
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                            </div>
                        </div>
                        <div className="space-y-4">
                            {course.curriculum.map((mod, idx) => (
                                <div key={idx} className="group bg-white border border-orange-100 hover:border-orange-500 transition-all duration-300 p-6 rounded-none animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}>
                                    <div className="flex items-start gap-5">
                                        <div className="w-14 h-14 flex-shrink-0 bg-orange-50 flex flex-col items-center justify-center border border-orange-100 group-hover:bg-orange-600 transition-colors">
                                            <span className="text-[10px] font-black text-orange-400 group-hover:text-amber-200 uppercase tracking-widest">Mod</span>
                                            <span className="text-xl font-black text-orange-600 group-hover:text-white transition-colors">{String(idx + 1).padStart(2, '0')}</span>
                                        </div>
                                        <div className="flex-grow">
                                            <h3 className="text-base font-black text-[#2A1D13] uppercase tracking-tight mb-3 group-hover:text-orange-600 transition-colors">
                                                {mod.module} — {mod.title}
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {mod.topics.map((topic, i) => (
                                                    <div key={i} className="flex items-center gap-1.5 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                                                        <CheckCircle className="w-3 h-3 text-orange-400" />
                                                        {topic}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* ── Instructor ────────────────────────────────────────────── */}
                <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                    <div className="absolute top-1/2 right-0 translate-y-1/2 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10" />
                    <div className="container mx-auto px-4 max-w-5xl">
                        <div className="text-center mb-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                <Award className="w-3.5 h-3.5" />
                                <span>Your Guide</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">
                                Learn From <span className="text-orange-600">Acharya Ji</span>
                            </h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                <Sparkles className="w-5 h-5 text-orange-400" />
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row gap-8 items-center bg-[#FFFDF7] border border-orange-100 p-8 shadow-lg">
                            <div className="w-40 h-40 flex-shrink-0 rounded-full overflow-hidden border-4 border-orange-200 shadow-xl">
                                <img src={acharya} alt="Acharya Ji" className="w-full h-full object-cover object-top" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-black text-[#4A3427] uppercase mb-1">Acharya Ji</h3>
                                <p className="text-[10px] font-black uppercase tracking-widest text-orange-600 mb-4">Vedic Astrologer • Jyotish Acharya • Spiritual Teacher</p>
                                <p className="text-gray-600 text-sm font-medium leading-relaxed mb-5">
                                    With over 25 years of experience in Vedic Astrology, Numerology, and spiritual sciences, Acharya Ji has guided thousands of students and clients across India and internationally. His teaching style blends ancient Vedic knowledge with practical, easy-to-understand modern application.
                                </p>
                                <div className="flex flex-wrap gap-4">
                                    {['25+ Years Experience', '10,000+ Students', 'Certified Jyotish Acharya', 'International Recognition'].map(badge => (
                                        <span key={badge} className="text-[9px] font-black uppercase tracking-widest bg-orange-50 text-orange-700 px-3 py-1.5 border border-orange-100">{badge}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* ── Final CTA ─────────────────────────────────────────────── */}
                <section className="py-12 md:py-16 bg-white border-t border-orange-50">
                    <div className="container mx-auto px-4 text-center max-w-4xl animate-fade-in-up">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50/50 text-orange-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>Secure Your Seat Today</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#2A1B13] mb-4 tracking-tight uppercase">
                            Begin Learning <span className="text-[#E8453C]">{course.title}</span>
                        </h2>
                        <p className="text-gray-500 mb-8 text-sm font-medium max-w-xl mx-auto leading-relaxed uppercase tracking-wide">
                            Enroll today and get lifetime access, a certificate, and live guidance from Acharya Ji.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <button className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-10 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-2.5"><IndianRupee className="w-4 h-4" /> Enroll for ₹{course.price.toLocaleString()}</span>
                            </button>
                            <Link to="/learn-astrology-courses">
                                <button className="group relative bg-[#F59E0B] hover:bg-[#D97706] text-white px-10 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                    <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                    <span className="relative flex items-center gap-2.5"><BookOpen className="w-4 h-4" /> Browse All Courses</span>
                                </button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default CourseDetail;
