import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Calendar,
    Phone,
    Users,
    Heart,
    Award,
    Globe,
    Shield,
    Sparkle,
    Sparkles,
    BookOpen,
    Star,
    CheckCircle,
    Clock,
    MapPin,
    ChevronRight,
    Zap,
    Leaf,
    HelpCircle,
    MessageSquare,
    Sun,
    Moon,
    Sunrise,
    Sunset,
    AlertTriangle,
    Gem,
    Compass,
    User,
    Mail,
    MapPin as MapPinIcon,
    Globe as GlobeIcon,
    Loader,
    Download,
    Share2
} from "lucide-react";
import { usePageBanner } from "@/hooks/usePageBanner";
import { BACKEND_URL } from "@/config/apiConfig";
import { Layout } from '@/components/layout/Layout';


const GetKundli = () => {
    const banner = usePageBanner({ pollingInterval: 3000 });
    const bannerImage = banner?.imageUrl ? (banner.imageUrl.startsWith('http') ? banner.imageUrl : `${BACKEND_URL}${banner.imageUrl}`) : "";

    const [formData, setFormData] = useState({
        name: '',
        gender: 'male',
        dob: '',
        time: '',
        place: '',
        language: 'hindi'
    });
    const [isGenerating, setIsGenerating] = useState(false);
    const [kundliGenerated, setKundliGenerated] = useState(false);
    const [selectedFaq, setSelectedFaq] = useState(null);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleGenerateKundli = (e) => {
        e.preventDefault();
        setIsGenerating(true);

        // Simulate API call
        setTimeout(() => {
            setIsGenerating(false);
            setKundliGenerated(true);
            // Scroll to chart
            document.getElementById('kundli-chart')?.scrollIntoView({ behavior: 'smooth' });
        }, 2000);
    };

    // Sample Kundli Data (would come from API)
    const kundliData = {
        planets: [
            { name: 'Sun', sign: 'Leo', house: 5, degree: '12° 34\'', retrograde: false },
            { name: 'Moon', sign: 'Taurus', house: 2, degree: '8° 21\'', retrograde: false },
            { name: 'Mars', sign: 'Aries', house: 1, degree: '3° 45\'', retrograde: false },
            { name: 'Mercury', sign: 'Virgo', house: 6, degree: '18° 12\'', retrograde: true },
            { name: 'Jupiter', sign: 'Sagittarius', house: 9, degree: '22° 08\'', retrograde: false },
            { name: 'Venus', sign: 'Libra', house: 7, degree: '14° 30\'', retrograde: false },
            { name: 'Saturn', sign: 'Capricorn', house: 10, degree: '5° 17\'', retrograde: true },
            { name: 'Rahu', sign: 'Gemini', house: 3, degree: '19° 45\'', retrograde: true },
            { name: 'Ketu', sign: 'Sagittarius', house: 9, degree: '19° 45\'', retrograde: true }
        ],
        doshas: [
            { name: 'Manglik Dosha', present: true, severity: 'moderate', remedy: 'Perform Mangal Shanti Puja on Tuesday' },
            { name: 'Kaal Sarp Dosha', present: false, severity: 'none', remedy: '' },
            { name: 'Shani Sade Sati', present: true, severity: 'mild', remedy: 'Chant Shani Chalisa on Saturdays' },
            { name: 'Pitru Dosha', present: false, severity: 'none', remedy: '' }
        ],
        remedies: [
            'Chant Hanuman Chalisa daily for strength and protection',
            'Wear a Red Coral gemstone after consultation',
            'Perform Mangal Shanti Puja on Tuesdays',
            'Donate red items on Tuesdays to appease Mars',
            'Chant Shani Chalisa on Saturdays'
        ]
    };

    // North Indian Chart Layout
    const renderNorthIndianChart = () => {
        const houses = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        return (
            <div className="grid grid-cols-3 gap-1 max-w-md mx-auto">
                {/* Row 1 */}
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200 rounded-tl-xl">
                    <div className="font-bold text-[#2A1D13] mb-2">12</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full" title="Sun"></span>
                        <span className="inline-block w-2 h-2 bg-blue-500 rounded-full" title="Moon"></span>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200">
                    <div className="font-bold text-[#2A1D13] mb-2">1</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-red-500 rounded-full" title="Mars"></span>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200 rounded-tr-xl">
                    <div className="font-bold text-[#2A1D13] mb-2">2</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full" title="Mercury"></span>
                    </div>
                </div>

                {/* Row 2 */}
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200">
                    <div className="font-bold text-[#2A1D13] mb-2">11</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-purple-500 rounded-full" title="Venus"></span>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200 relative">
                    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-orange-300">🕉️</div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200">
                    <div className="font-bold text-[#2A1D13] mb-2">3</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-orange-500 rounded-full" title="Rahu"></span>
                    </div>
                </div>

                {/* Row 3 */}
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200 rounded-bl-xl">
                    <div className="font-bold text-[#2A1D13] mb-2">10</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-indigo-500 rounded-full" title="Saturn"></span>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200">
                    <div className="font-bold text-[#2A1D13] mb-2">9</div>
                    <div className="space-y-1">
                        <span className="inline-block w-2 h-2 bg-green-500 rounded-full" title="Jupiter"></span>
                        <span className="inline-block w-2 h-2 bg-gray-500 rounded-full" title="Ketu"></span>
                    </div>
                </div>
                <div className="bg-orange-50 p-4 text-center border-2 border-orange-200 rounded-br-xl">
                    <div className="font-bold text-[#2A1D13] mb-2">8</div>
                    <div className="space-y-1"></div>
                </div>
            </div>
        );
    };

    const FAQS = [
        {
            q: "What is Janam Kundli?",
            a: "Janam Kundli is a birth chart based on Vedic astrology that maps the positions of planets at your exact time and place of birth. It reveals your life's path, strengths, challenges, and karmic patterns."
        },
        {
            q: "Is it really free?",
            a: "Yes, basic Janam Kundli generation is completely free. You can see your planet positions, houses, and basic dosha analysis at no cost."
        },
        {
            q: "Do I need exact birth time?",
            a: "For accurate Kundli analysis, exact birth time is essential. If you don't have it, we can still generate a basic chart but predictions may be less accurate."
        },
        {
            q: "How accurate is the analysis?",
            a: "We use precise Vedic calculations followed by traditional astrologers. Our system provides accurate planet positions, but for detailed life predictions, we recommend consulting our expert astrologers."
        }
    ];

    return (
        <Layout>
            <div className="min-h-[80vh]">
                <div className="min-h-screen bg-background">
                    {/* Hero Section - Exact About Us Style */}
                    <section className="relative h-[320px] sm:h-[320px] md:h-[360px] lg:h-[380px] flex items-center py-[20px] text-white overflow-hidden">
                        <div className="absolute inset-0">
                            <img src={bannerImage} alt="Kundli Background" className="w-full h-full object-cover object-top" />
                            <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.2),transparent_50%)]" />
                        </div>
                        <div className="container mx-auto px-4 relative z-10 w-full animate-fade-in-up">
                            <div className="max-w-4xl mx-auto text-center">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-4 md:mb-8 shadow-2xl">
                                    <Award className="w-4 h-4 text-[#FFC107]" />
                                    <span className="text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-widest">{banner.badge || "DIVINE SERVICES HUB"}</span>
                                </div>

                                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                                    {banner.titleHighlight1} {banner.titleEnd} <br />
                                    <span className="text-yellow-300">{banner.titleHighlight2} {banner.titleHighlight3}</span>
                                </h1>

                                <p className="text-lg md:text-xl text-amber-100 leading-relaxed font-bold max-w-2xl mx-auto mb-10 drop-shadow italic">
                                    {banner.subtitle}
                                </p>

                                <div className="flex flex-wrap justify-center gap-4">
                                    {banner.buttons && banner.buttons.length > 0 ? (
                                        banner.buttons.map((btn, idx) => (
                                            btn.text && (
                                                <button
                                                    key={idx}
                                                    onClick={() => btn.link?.startsWith('#') ? document.getElementById(btn.link.substring(1))?.scrollIntoView({ behavior: 'smooth' }) : (btn.link === '#book-pooja' ? window.dispatchEvent(new CustomEvent('openPoojaDrawer')) : (btn.link ? (btn.link.startsWith('http') ? window.location.href = btn.link : window.location.pathname = btn.link) : null))}
                                                    className={`group relative ${idx === 0 ? 'bg-[#E8453C] hover:bg-black' : 'bg-[#1A1A1A] hover:bg-orange-600'} text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden ${idx !== 0 ? 'border border-white/10' : ''}`}
                                                >
                                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    <span className="relative flex items-center gap-2.5">
                                                        {idx === 0 ? <Zap className="w-4 h-4" /> : <Phone className="w-4 h-4" />}
                                                        {btn.text}
                                                    </span>
                                                </button>
                                            )
                                        ))
                                    ) : (
                                        <>
                                            <button className="group relative bg-[#E8453C] hover:bg-black text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                <span className="relative flex items-center gap-2.5">Generate Now</span>
                                            </button>
                                            <button className="group relative bg-[#1A1A1A] hover:bg-orange-600 text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
                                                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                <span className="relative flex items-center gap-2.5">Learn More</span>
                                            </button>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Birth Details Form Section */}
                    <section className="py-14 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #d97706 1px, transparent 0)', backgroundSize: '32px 32px' }} />
                        <div className="container mx-auto px-4 max-w-3xl relative z-10">
                            <div className="text-center mb-8 animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <User className="w-3.5 h-3.5" />
                                    <span>Enter Your Details</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">Birth <span className="text-orange-600">Information</span></h2>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    <Sparkles className="w-5 h-5 text-orange-400" />
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                </div>
                            </div>

                            <div className="bg-white p-8 md:p-10 rounded-3xl border-2 border-orange-100 shadow-xl animate-fade-in-up">
                                <form onSubmit={handleGenerateKundli} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-bold text-[#2A1D13] mb-2">Your Full Name</label>
                                        <div className="relative">
                                            <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                placeholder="Enter your full name"
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-orange-100 focus:border-orange-500 outline-none transition-colors rounded-xl font-semibold text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#2A1D13] mb-2">Gender</label>
                                        <div className="flex gap-4">
                                            {['male', 'female', 'other'].map((gender) => (
                                                <label key={gender} className="flex items-center gap-2 cursor-pointer group">
                                                    <input
                                                        type="radio"
                                                        name="gender"
                                                        value={gender}
                                                        checked={formData.gender === gender}
                                                        onChange={handleInputChange}
                                                        className="w-4 h-4 text-orange-600 cursor-pointer"
                                                    />
                                                    <span className="text-sm font-bold text-gray-700 capitalize group-hover:text-orange-600 transition-colors">{gender}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-bold text-[#2A1D13] mb-2">Date of Birth</label>
                                            <div className="relative">
                                                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                                                <input
                                                    type="date"
                                                    name="dob"
                                                    value={formData.dob}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-orange-100 focus:border-orange-500 outline-none transition-colors rounded-xl font-semibold text-gray-800"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-bold text-[#2A1D13] mb-2">Time of Birth</label>
                                            <div className="relative">
                                                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                                                <input
                                                    type="time"
                                                    name="time"
                                                    value={formData.time}
                                                    onChange={handleInputChange}
                                                    required
                                                    className="w-full pl-12 pr-4 py-3 bg-white border-2 border-orange-100 focus:border-orange-500 outline-none transition-colors rounded-xl font-semibold text-gray-800"
                                                />
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#2A1D13] mb-2">Birth Place</label>
                                        <div className="relative">
                                            <MapPinIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                                            <input
                                                type="text"
                                                name="place"
                                                value={formData.place}
                                                onChange={handleInputChange}
                                                placeholder="e.g., Delhi, India"
                                                required
                                                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-orange-100 focus:border-orange-500 outline-none transition-colors rounded-xl font-semibold text-gray-800"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-bold text-[#2A1D13] mb-2">Preferred Language</label>
                                        <div className="relative">
                                            <GlobeIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-orange-400" />
                                            <select
                                                name="language"
                                                value={formData.language}
                                                onChange={handleInputChange}
                                                className="w-full pl-12 pr-4 py-3 bg-white border-2 border-orange-100 focus:border-orange-500 outline-none transition-colors rounded-xl appearance-none font-semibold text-gray-800"
                                            >
                                                <option value="hindi">हिन्दी (Hindi)</option>
                                                <option value="english">English</option>
                                                <option value="gujarati">ગુજરાતી (Gujarati)</option>
                                                <option value="tamil">தமிழ் (Tamil)</option>
                                                <option value="telugu">తెలుగు (Telugu)</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isGenerating}
                                        className="w-full bg-[#E8453C] hover:bg-black text-white py-4 rounded-xl font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                                    >
                                        {isGenerating ? (
                                            <>
                                                <Loader className="w-5 h-5 animate-spin" />
                                                Generating your Kundli...
                                            </>
                                        ) : (
                                            <>
                                                <Star className="w-5 h-5" />
                                                Generate Kundli
                                            </>
                                        )}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </section>

                    {/* Kundli Chart Section */}
                    {kundliGenerated && (
                        <section
                            id="kundli-chart"
                            className="py-14 md:py-16 bg-white animate-fade-in-up"
                        >
                            <div className="container mx-auto px-4 max-w-6xl">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                        <Compass className="w-3.5 h-3.5" />
                                        <span>Your Birth Chart</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">Janam <span className="text-orange-600">Kundli</span></h2>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                        <Sparkles className="w-5 h-5 text-orange-400" />
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    </div>
                                    <p className="text-gray-600 mt-4 font-bold">For {formData.name || 'Rahul'} | {formData.dob || '1990-01-01'} | {formData.time || '12:00'} | {formData.place || 'Delhi'}</p>
                                </div>

                                <div className="grid lg:grid-cols-2 gap-8 items-start">
                                    {/* North Indian Chart */}
                                    <div className="bg-[#FFFAF3] p-6 rounded-3xl border-2 border-orange-100 shadow-lg animate-fade-in-left">
                                        <h3 className="text-xl font-black text-[#2A1D13] mb-4 text-center uppercase tracking-tight">North Indian Chart</h3>
                                        {renderNorthIndianChart()}
                                        <div className="flex justify-center gap-4 mt-6">
                                            <button className="flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-black transition-colors uppercase tracking-widest">
                                                <Download className="w-4 h-4" /> Download Chart
                                            </button>
                                            <button className="flex items-center gap-3 text-sm font-bold text-orange-600 hover:text-black transition-colors uppercase tracking-widest">
                                                <Share2 className="w-4 h-4" /> Share
                                            </button>
                                        </div>
                                    </div>

                                    {/* Planet Positions Table */}
                                    <div className="bg-[#FFFAF3] p-6 rounded-3xl border-2 border-orange-100 shadow-lg animate-fade-in-right">
                                        <h3 className="text-xl font-black text-[#2A1D13] mb-4 text-center uppercase tracking-tight">Planet Positions</h3>
                                        <div className="overflow-x-auto">
                                            <table className="w-full">
                                                <thead>
                                                    <tr className="border-b-2 border-orange-200">
                                                        <th className="py-3 text-left text-xs font-black text-[#2A1D13] uppercase tracking-wider">Planet</th>
                                                        <th className="py-3 text-left text-xs font-black text-[#2A1D13] uppercase tracking-wider">Sign</th>
                                                        <th className="py-3 text-left text-xs font-black text-[#2A1D13] uppercase tracking-wider">House</th>
                                                        <th className="py-3 text-left text-xs font-black text-[#2A1D13] uppercase tracking-wider">Degree</th>
                                                        <th className="py-3 text-left text-xs font-black text-[#2A1D13] uppercase tracking-wider">Status</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-orange-100">
                                                    {kundliData.planets.map((planet, idx) => (
                                                        <tr key={idx} className="hover:bg-white/50 transition-colors">
                                                            <td className="py-3 text-sm font-bold text-gray-800 uppercase">{planet.name}</td>
                                                            <td className="py-3 text-sm text-gray-600 font-medium">{planet.sign}</td>
                                                            <td className="py-3 text-sm text-gray-600 font-bold">{planet.house}</td>
                                                            <td className="py-3 text-sm text-gray-600 font-medium">{planet.degree}</td>
                                                            <td className="py-3">
                                                                {planet.retrograde ? (
                                                                    <span className="text-[10px] font-black text-red-600 bg-red-50 px-2 py-0.5 rounded-full uppercase">Retro</span>
                                                                ) : (
                                                                    <span className="text-[10px] font-black text-green-600 bg-green-50 px-2 py-0.5 rounded-full uppercase">Direct</span>
                                                                )}
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Dosha Analysis Section */}
                    {kundliGenerated && (
                        <section
                            className="py-14 md:py-16 bg-[#FAF9F6] animate-fade-in-up"
                        >
                            <div className="container mx-auto px-4 max-w-4xl">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                        <AlertTriangle className="w-3.5 h-3.5" />
                                        <span>Dosha Analysis</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">Planetary <span className="text-orange-600">Influences</span></h2>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                        <Sparkles className="w-5 h-5 text-orange-400" />
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    </div>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    {kundliData.doshas.map((dosha, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-white p-6 rounded-2xl border-2 border-orange-100 hover:shadow-lg transition-all animate-fade-in-up"
                                            style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}
                                        >
                                            <div className="flex items-center justify-between mb-3">
                                                <h3 className="text-lg font-black text-[#2A1D13] uppercase tracking-tight">{dosha.name}</h3>
                                                {dosha.present ? (
                                                    <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-wider ${dosha.severity === 'severe' ? 'bg-red-100 text-red-700' :
                                                        dosha.severity === 'moderate' ? 'bg-orange-100 text-orange-700' :
                                                            'bg-yellow-100 text-yellow-700'
                                                        }`}>
                                                        Yes - {dosha.severity}
                                                    </span>
                                                ) : (
                                                    <span className="text-[10px] font-black bg-green-100 text-green-700 px-3 py-1 rounded-full uppercase tracking-wider">No</span>
                                                )}
                                            </div>
                                            {dosha.present && dosha.remedy && (
                                                <p className="text-sm text-gray-600 mt-2 font-medium">
                                                    <span className="font-black text-orange-600 uppercase text-[10px] tracking-widest block mb-1">Recommended Remedy:</span> {dosha.remedy}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Remedies Section */}
                    {kundliGenerated && (
                        <section
                            className="py-14 md:py-16 bg-white animate-fade-in-up"
                        >
                            <div className="container mx-auto px-4 max-w-4xl">
                                <div className="text-center mb-12">
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                        <Heart className="w-3.5 h-3.5" />
                                        <span>Recommended Remedies</span>
                                    </div>
                                    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-2 uppercase">Spiritual <span className="text-orange-600">Solutions</span></h2>
                                    <div className="flex items-center justify-center gap-2">
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                        <Sparkles className="w-5 h-5 text-orange-400" />
                                        <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    </div>
                                </div>

                                <div className="bg-[#FFFAF3] p-8 rounded-3xl border-2 border-orange-100 shadow-md">
                                    <ul className="space-y-4">
                                        {kundliData.remedies.map((remedy, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 animate-fade-in-up"
                                                style={{ animationDelay: `${idx * 0.1}s`, animationFillMode: 'both' }}
                                            >
                                                <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <CheckCircle className="w-4 h-4 text-orange-600" />
                                                </div>
                                                <span className="text-gray-700 font-bold uppercase tracking-tight text-sm md:text-base">{remedy}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* FAQ Section */}
                    <section className="py-12 md:py-14 bg-[#FAF9F6]">
                        <div className="container mx-auto px-4 max-w-3xl">
                            <div className="text-center mb-12 animate-fade-in-up">
                                <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-orange-50 text-orange-600 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                    <HelpCircle className="w-3.5 h-3.5" />
                                    <span>FAQ</span>
                                </div>
                                <h2 className="text-3xl md:text-4xl font-black text-[#2A1D13] mb-2 uppercase tracking-tight">Frequently Asked <span className="text-orange-600">Questions</span></h2>
                                <div className="flex items-center justify-center gap-2">
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                    <Sparkles className="w-5 h-5 text-orange-400" />
                                    <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                </div>
                            </div>

                            <div className="space-y-4">
                                {FAQS.map((faq, i) => (
                                    <div key={i} className="border-2 border-orange-50 rounded-2xl overflow-hidden hover:border-orange-200 transition-all">
                                        <button
                                            onClick={() => setSelectedFaq(selectedFaq === i ? null : i)}
                                            className="w-full px-8 py-6 flex items-center justify-between text-left bg-[#FFFDF7]"
                                        >
                                            <span className="font-extrabold text-[#2A1D13] text-sm md:text-base uppercase tracking-tight">Q. {faq.q}</span>
                                            <HelpCircle className={`w-5 h-5 transition-transform duration-300 ${selectedFaq === i ? 'rotate-180 text-orange-600' : 'text-gray-400'}`} />
                                        </button>
                                        <div
                                            className={`bg-white transition-all duration-300 ease-in-out overflow-hidden ${selectedFaq === i ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
                                        >
                                            <p className="px-8 pb-8 pt-2 text-gray-600 font-medium leading-relaxed border-t border-orange-50">A. {faq.a}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Talk to Astrologer CTA */}
                    <section className="py-12 md:py-16 bg-white border-t border-orange-50">
                        <div className="container mx-auto px-4 text-center max-w-5xl animate-fade-in-up">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A1B13] mb-4 tracking-tight uppercase">Need Deeper <span className="text-[#E8453C]">Analysis</span>?</h2>
                            <div className="flex items-center justify-center gap-3 mb-8">
                                <div className="w-10 h-[1.5px] bg-orange-200" />
                                <Sparkles className="w-5 h-5 text-orange-400" />
                                <div className="w-10 h-[1.5px] bg-orange-200" />
                            </div>
                            <p className="text-gray-600 mb-10 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                                Get personalized guidance from our expert astrologers. Understand your kundli in depth with life predictions and remedies.
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link to="/astrologer">
                                    <button className="group relative bg-[#E8453C] hover:bg-black text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span className="relative flex items-center gap-2"><Phone className="w-3.5 h-3.5" /> Talk to Astrologer</span>
                                    </button>
                                </Link>
                                <Link to="/kundli/compare">
                                    <button className="group relative bg-[#F59E0B] hover:bg-black text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                        <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                        <span className="relative flex items-center gap-2"><Users className="w-3.5 h-3.5" /> Match Making</span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </Layout>
    );
};

export default GetKundli;
