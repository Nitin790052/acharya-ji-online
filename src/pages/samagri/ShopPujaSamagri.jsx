import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    ShoppingBag,
    Search,
    Filter,
    Star,
    ShoppingCart,
    Plus,
    CheckCircle,
    Truck,
    ShieldCheck,
    Award,
    Heart,
    MessageSquare,
    Zap,
    ChevronRight,
    Package,
    Gem,
    Users,
    ArrowRight,
    X,
    ThumbsUp,
    Sparkles,
    Flame,
    Church
} from "lucide-react";
import { Layout } from '@/components/layout/Layout';
import { useCart } from "@/contexts/CartContext";
import { usePageBanner } from "@/hooks/usePageBanner";
import { BACKEND_URL } from "@/config/apiConfig";

// Assets (Using available assets where possible)

import rudrakshaImg from "../../assets/vastuRamadies/Rudraksha.webp";
import gemstoneImg from "../../assets/vastuRamadies/Gemstones.webp";

const ShopPujaSamagri = () => {
    const { addItem } = useCart();
    const banner = usePageBanner({ pollingInterval: 3000 });
    const bannerImage = banner?.imageUrl ? (banner.imageUrl.startsWith('http') ? banner.imageUrl : `${BACKEND_URL}${banner.imageUrl}`) : "";
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [priceRange, setPriceRange] = useState(5000);
    const [showFilters, setShowFilters] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const categories = [
        { name: "Puja Thali", icon: Flame, color: "orange" },
        { name: "Rudraksha", icon: Package, color: "amber" },
        { name: "Gemstones", icon: Gem, color: "blue" },
        { name: "Yantra", icon: Zap, color: "yellow" },
        { name: "Spiritual Bracelets", icon: Heart, color: "rose" },
        { name: "Incense & Dhoop", icon: Sparkles, color: "purple" },
        { name: "Idols & Murti", icon: Church, color: "red" },
        { name: "Puja Kits", icon: ShoppingBag, color: "green" },
    ];

    const products = [
        {
            id: 's1',
            name: 'Premium Copper Puja Thali',
            price: 1299,
            image: gemstoneImg, // Placeholder
            category: 'Puja Thali',
            rating: 4.8,
            reviews: 45,
            description: 'Handcrafted pure copper thali with essential bowls and diya.'
        },
        {
            id: 's2',
            name: 'Panchdhatu Navgraha Yantra',
            price: 899,
            image: rudrakshaImg, // Placeholder
            category: 'Yantra',
            rating: 4.9,
            reviews: 128,
            description: 'Energized Navgraha Yantra for planetary peace and prosperity.'
        },
        {
            id: 's3',
            name: '7 Mukhi Nepal Rudraksha',
            price: 2499,
            image: rudrakshaImg,
            category: 'Rudraksha',
            rating: 5.0,
            reviews: 89,
            description: 'Authentic 7 Mukhi Rudraksha for financial stability and Mahalakshmi blessing.'
        },
        {
            id: 's4',
            name: 'Handcrafted Sandalwood Mala',
            price: 599,
            image: gemstoneImg,
            category: 'Idols & Murti',
            rating: 4.7,
            reviews: 156,
            description: 'Pure sandalwood beads for meditation and daily chanting.'
        },
        {
            id: 's5',
            name: 'Crystal Shree Yantra',
            price: 1599,
            image: gemstoneImg,
            category: 'Yantra',
            rating: 4.9,
            reviews: 210,
            description: 'Precise cut crystal Shree Yantra for abundance and positive energy.'
        },
        {
            id: 's6',
            name: 'Shuddh Guggul & Loban Dhoop',
            price: 349,
            image: rudrakshaImg,
            category: 'Incense & Dhoop',
            rating: 4.6,
            reviews: 320,
            description: 'Natural aromatic resin for purifying home environment.'
        }
    ];

    const pujaKits = [
        {
            name: "Griha Pravesh Puja Kit",
            price: 3499,
            items: ["Hawan Kund", "Ganga Jal", "Kalash", "Panch-mewa", "Vastu Yantra"],
            image: rudrakshaImg
        },
        {
            name: "Satyanarayan Puja Kit",
            price: 1999,
            items: ["Puja Cloth", "Janeu", "Chunri", "Supari", "Yellow Mustard"],
            image: gemstoneImg
        },
        {
            name: "Navgraha Shanti Kit",
            price: 2799,
            items: ["9 Grains", "Colored Cloths", "Navgraha Yantra", "Samidha Wood"],
            image: rudrakshaImg
        }
    ];

    const trustBadges = [
        { icon: CheckCircle, title: "Authentic Products", desc: "100% Pure & Lab Tested" },
        { icon: Award, title: "Energized By Acharya", desc: "Vedic Mantra Activation" },
        { icon: Truck, title: "Pan India Delivery", desc: "Safe & Fast Shipping" },
        { icon: ShieldCheck, title: "Secure Payment", desc: "100% Secure Checkout" }
    ];

    const filteredProducts = products.filter(p =>
        (selectedCategory === "All" || p.category === selectedCategory) &&
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        p.price <= priceRange
    );

    return (
        <Layout>
            <div className="min-h-screen bg-[#FAF9F6] relative overflow-hidden">
                {/* Divine Background Ornaments */}
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-orange-100/20 rounded-full blur-[120px] -z-10" />
                <div className="absolute bottom-[20%] left-0 w-[500px] h-[500px] bg-amber-100/20 rounded-full blur-[120px] -z-10" />
                {/* 2️⃣ Hero Banner - Standardized Sizing */}
                <section className="relative h-[320px] sm:h-[320px] md:h-[360px] lg:h-[370px] flex items-center text-white overflow-hidden">
                    <div className="absolute inset-0">
                        <img src={bannerImage} alt="Puja Samagri" className="w-full h-full object-cover object-top" />
                        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />
                        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(217,119,6,0.2),transparent_50%)]" />
                    </div>
                    <div className="container mx-auto px-4 relative z-10 animate-fade-in-up text-center">
                        <div className="max-w-4xl mx-auto">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-8 shadow-2xl">
                                <Award className="w-4 h-4 text-[#FFC107]" />
                                <span className="text-[#FFC107] text-xs md:text-sm font-black uppercase tracking-widest">{banner.badge || "DIVINE SERVICES HUB"}</span>
                            </div>
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight drop-shadow-[0_4px_12px_rgba(0,0,0,0.6)] uppercase">
                                {banner.titleHighlight1} {banner.titleEnd} <br />
                                <span className="text-yellow-300">{banner.titleHighlight2} {banner.titleHighlight3}</span>
                            </h1>
                            <p className="text-lg md:text-xl text-amber-100 leading-relaxed font-medium max-w-2xl mx-auto mb-8 drop-shadow">
                                {banner.subtitle}
                            </p>
                            <div className="flex flex-wrap justify-center gap-4">
                                {banner.buttons && banner.buttons.length > 0 ? (
                                    banner.buttons.map((btn, idx) => (
                                        btn.text && (
                                            <button
                                                key={idx}
                                                onClick={() => btn.link?.startsWith('#') ? document.getElementById(btn.link.substring(1))?.scrollIntoView({ behavior: 'smooth' }) : (btn.link === '#book-pooja' ? window.dispatchEvent(new CustomEvent('openPoojaDrawer')) : (btn.link ? window.location.href = btn.link : null))}
                                                className={`group relative ${idx === 0 ? 'bg-[#E8453C] hover:bg-black' : 'bg-[#1A1A1A] hover:bg-orange-600'} text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden ${idx !== 0 ? 'border border-white/10' : ''}`}
                                            >
                                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                <span className="relative flex items-center gap-2.5">{btn.text}</span>
                                            </button>
                                        )
                                    ))
                                ) : (
                                    <>
                                        <button className="group relative bg-[#E8453C] hover:bg-black text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden">
                                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="relative flex items-center gap-2.5">Shop Now</span>
                                        </button>
                                        <button className="group relative bg-[#1A1A1A] hover:bg-orange-600 text-white px-8 py-4 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-xl transition-all duration-300 overflow-hidden border border-white/10">
                                            <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="relative">Explore Categories</span>
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </section>

                {/* 3️⃣ Category Section */}
                <section className="py-12 md:py-16 bg-white relative overflow-hidden">
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-orange-100/30 rounded-full blur-3xl -z-10" />
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-12 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-orange-50 text-orange-600 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Ritual Collections</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
                                Browse By <span className="text-orange-600">Category</span>
                            </h2>
                            <div className="flex items-center justify-center gap-2">
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                                <Sparkles className="w-5 h-5 text-orange-400" />
                                <div className="w-12 h-1 bg-orange-200 rounded-full" />
                            </div>
                        </div>
                        <div className="flex overflow-x-auto gap-4 md:gap-6 pb-8 no-scrollbar snap-x snap-mandatory">
                            {categories.map((cat, idx) => (
                                <div
                                    key={idx}
                                    onClick={() => setSelectedCategory(cat.name)}
                                    className={`group cursor-pointer p-5 md:p-6 min-w-[130px] md:min-w-[160px] snap-center rounded-none border transition-all duration-500 flex flex-col items-center text-center shrink-0 ${selectedCategory === cat.name ? 'bg-orange-600 border-orange-600 text-white shadow-2xl translate-y-[-4px]' : 'bg-white border-gray-100 hover:border-orange-200 hover:shadow-xl'}`}
                                >
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-none flex items-center justify-center mb-4 transition-all duration-500 shadow-sm ${selectedCategory === cat.name ? 'bg-white/20' : 'bg-orange-50 group-hover:bg-orange-600'}`}>
                                        <cat.icon className={`w-5 h-5 md:w-6 md:h-6 ${selectedCategory === cat.name ? 'text-white' : 'text-orange-600 group-hover:text-white'}`} />
                                    </div>
                                    <h3 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest">{cat.name}</h3>
                                    <div className={`mt-3 flex items-center gap-2 text-[8px] font-bold uppercase tracking-widest ${selectedCategory === cat.name ? 'text-white/80' : 'text-orange-600 opacity-0 group-hover:opacity-100'}`}>
                                        Explore <ChevronRight className="w-2.5 h-2.5" />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <div className="container mx-auto px-4 py-12 md:py-16">
                    <div className="flex flex-col lg:flex-row gap-12">
                        {/* 6️⃣ Filters Sidebar */}
                        <aside className={`lg:w-1/4 space-y-8 fixed lg:relative inset-0 z-40 bg-white p-6 lg:p-0 transition-transform duration-300 transform ${showFilters ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
                            <div className="flex items-center justify-between lg:hidden mb-6">
                                <h3 className="font-bold uppercase tracking-widest text-sm">Filters</h3>
                                <button onClick={() => setShowFilters(false)} className="text-gray-400 hover:text-black transition-colors"><X className="w-6 h-6" /></button>
                            </div>

                            <div className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm">
                                <h3 className="text-[11px] font-bold uppercase tracking-[0.2em] mb-8 pb-4 border-b border-gray-100 flex items-center gap-2 text-gray-900">
                                    <Filter className="w-4 h-4 text-orange-600" /> Filter Options
                                </h3>

                                <div className="space-y-8">
                                    {/* Category Filter */}
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 italic">Collections</h4>
                                        <div className="space-y-3">
                                            {["All", ...categories.map(c => c.name)].map((cat, i) => (
                                                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                                                    <div className="relative flex items-center">
                                                        <input
                                                            type="radio"
                                                            name="category"
                                                            checked={selectedCategory === cat}
                                                            onChange={() => setSelectedCategory(cat)}
                                                            className="peer appearance-none w-4 h-4 border border-gray-300 rounded-none checked:bg-orange-600 transition-all cursor-pointer"
                                                        />
                                                        <CheckCircle className="absolute w-3 h-3 text-white left-0.5 opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" />
                                                    </div>
                                                    <span className={`text-[10px] font-bold uppercase tracking-widest transition-colors ${selectedCategory === cat ? 'text-orange-600' : 'text-gray-500 group-hover:text-gray-900'}`}>{cat}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Price Filter */}
                                    <div>
                                        <h4 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-4 italic">Price: ₹{priceRange}</h4>
                                        <input
                                            type="range"
                                            min="100"
                                            max="10000"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(e.target.value)}
                                            className="w-full h-1 bg-orange-100 rounded-none appearance-none cursor-pointer accent-orange-600"
                                        />
                                        <div className="flex justify-between mt-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                            <span>Min</span>
                                            <span>Max</span>
                                        </div>
                                    </div>

                                    {/* Need Help Box */}
                                    <div className="pt-8 mt-8 border-t border-gray-100">
                                        <div className="p-5 bg-orange-50/50 border border-orange-100">
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest text-orange-600 mb-2">Need Help?</h4>
                                            <p className="text-[9px] font-medium text-gray-500 uppercase leading-relaxed mb-4">Unsure which Rudraksha or Yantra is right for you? Consult with Acharya Ji.</p>
                                            <Link to="/astrologer" className="inline-flex items-center gap-2 text-[9px] font-bold uppercase tracking-[0.2em] text-orange-600 hover:text-orange-700 transition-colors">
                                                Ask Expert <ArrowRight className="w-3 h-3" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>

                        {/* 4️⃣ Featured Products List Area */}
                        <main className="lg:w-3/4">
                            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                                <div className="relative flex-grow max-w-md group">
                                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-orange-600 transition-colors" />
                                    <input
                                        type="text"
                                        placeholder="Search sacred items..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full bg-white border border-gray-200 pl-11 pr-5 py-3.5 text-[10px] font-bold outline-none focus:border-orange-500 transition-all uppercase tracking-widest shadow-sm"
                                    />
                                </div>
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => setShowFilters(true)}
                                        className="lg:hidden flex items-center justify-center gap-2 bg-black text-white px-6 py-3.5 text-[10px] font-bold uppercase tracking-widest"
                                    >
                                        <Filter className="w-4 h-4" /> Filters
                                    </button>
                                    <div className="text-[9px] font-bold uppercase tracking-widest text-gray-400 px-4 py-2 bg-white border border-gray-100 shadow-sm">
                                        Found: {filteredProducts.length} Sacred Items
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                                {filteredProducts.map((product, i) => (
                                    <div key={i} className="group bg-white border border-gray-100 hover:border-orange-200 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col relative rounded-none">
                                        {/* Framed Image Area - Smaller with Border */}
                                        <div className="p-3 bg-[#FAF9F6]">
                                            <div className="relative aspect-square overflow-hidden border border-gray-100 bg-white group-hover:border-orange-100 transition-colors duration-500">
                                                <img src={product.image} alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                                <div className="absolute top-3 right-3 flex flex-col gap-2 transform translate-x-12 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                                    <button className="w-8 h-8 bg-white text-gray-900 shadow-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors">
                                                        <Heart className="w-3.5 h-3.5" />
                                                    </button>
                                                    <button
                                                        onClick={() => setSelectedProduct(product)}
                                                        className="w-8 h-8 bg-white text-gray-900 shadow-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-colors"
                                                    >
                                                        <Search className="w-3.5 h-3.5" />
                                                    </button>
                                                </div>
                                                <div className="absolute bottom-3 left-3">
                                                    <span className="bg-orange-600 text-white text-[7px] font-bold uppercase tracking-widest px-2.5 py-1 shadow-md">
                                                        {product.category}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="p-5 flex flex-col flex-grow pt-0">
                                            <div className="flex items-center gap-1 mb-2">
                                                <div className="flex gap-0.5">
                                                    {[1, 2, 3, 4, 5].map(star => (
                                                        <Star key={star} className={`w-2.5 h-2.5 ${star <= Math.floor(product.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />
                                                    ))}
                                                </div>
                                                <span className="text-[8px] font-bold text-gray-300 ml-1">({product.reviews})</span>
                                            </div>
                                            <h3 className="text-[12px] font-extrabold text-gray-900 mb-1.5 uppercase tracking-tight group-hover:text-orange-600 transition-colors line-clamp-1">{product.name}</h3>
                                            <p className="text-[9px] text-gray-400 font-medium uppercase tracking-wider italic line-clamp-2 mb-4 leading-relaxed">{product.description}</p>
                                            <div className="mt-auto pt-4 border-t border-gray-50 flex items-center justify-between gap-4">
                                                <span className="text-base font-bold text-gray-900">₹{product.price}</span>
                                                <button
                                                    onClick={() => addItem(product)}
                                                    className="group relative bg-[#1A1A1A] hover:bg-[#E8453C] text-white text-[8px] font-bold uppercase tracking-[0.2em] px-4 py-2.5 rounded-none shadow-lg transition-all flex items-center gap-2 overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                                    <ShoppingCart className="w-3.5 h-3.5 relative" /> <span className="relative">Add To Cart</span>
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </main>
                    </div>
                </div>

                {/* 5️⃣ Puja Kits Section - Dark Premium Theme */}
                <section className="py-12 md:py-20 bg-[#1A1A1A] text-white relative overflow-hidden">
                    <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #FFC107 1px, transparent 0)', backgroundSize: '24px 24px' }} />
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#E8453C]/10 rounded-full blur-[120px] -z-10" />

                    <div className="container mx-auto px-4 relative z-10">
                        {/* Centered Heading */}
                        <div className="text-center mb-16 animate-fade-in">
                            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 text-yellow-500 rounded-full text-[10px] font-bold uppercase tracking-wider mb-5">
                                <Sparkles className="w-3.5 h-3.5" />
                                <span>Complete Ceremony Kits</span>
                            </div>
                            <h2 className="text-3xl md:text-5xl font-extrabold mb-4 uppercase tracking-tighter leading-tight">Ready-To-Use <br /><span className="text-yellow-400">Sacred Puja Kits</span></h2>
                            <p className="text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-widest italic max-w-xl mx-auto">Curated collections of the finest items for your spiritual journey.</p>

                            <div className="mt-8 flex justify-center">
                                <Link to="/samagri/essentials" className="group flex items-center gap-4 text-xs font-bold uppercase tracking-[0.3em] text-yellow-400 hover:text-white transition-all">
                                    View Full Collection <div className="w-10 h-10 rounded-none border border-yellow-400 flex items-center justify-center group-hover:bg-yellow-400 group-hover:text-black transition-all"><ArrowRight className="w-5 h-5" /></div>
                                </Link>
                            </div>
                        </div>

                        {/* Compact Cards */}
                        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                            {pujaKits.map((kit, i) => (
                                <div key={i} className="group bg-white/5 border border-white/10 p-5 md:p-6 hover:border-yellow-400 transition-all duration-500 relative overflow-hidden flex flex-col items-center text-center">
                                    <div className="absolute top-0 left-0 w-2 h-0 bg-yellow-400 group-hover:h-full transition-all duration-500" />

                                    <div className="w-full aspect-[16/9] overflow-hidden mb-6 relative">
                                        <img src={kit.image} alt={kit.name} className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 to-transparent/10" />
                                        <div className="absolute bottom-3 left-0 w-full text-center">
                                            <span className="text-2xl font-extrabold text-yellow-400">₹{kit.price}</span>
                                        </div>
                                    </div>

                                    <h3 className="text-base md:text-lg font-extrabold mb-5 uppercase tracking-tight group-hover:text-yellow-400 transition-colors">{kit.name}</h3>

                                    <div className="space-y-2 mb-8 w-full">
                                        {kit.items.slice(0, 4).map((item, j) => (
                                            <div key={j} className="flex items-center justify-center gap-2 text-[9px] font-bold uppercase tracking-widest text-gray-400">
                                                <CheckCircle className="w-3 h-3 text-yellow-500/50" />
                                                <span>{item}</span>
                                            </div>
                                        ))}
                                    </div>

                                    <button className="w-full mt-auto bg-white text-black hover:bg-yellow-400 py-3.5 font-bold text-[10px] uppercase tracking-[0.2em] transition-all shadow-xl">
                                        Get Your Ritual Kit
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 8️⃣ Trust Section - Refined */}
                <section className="py-12 md:py-16 bg-white border-b border-gray-100">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                            {trustBadges.map((badge, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 border border-gray-50 hover:border-orange-100 transition-all group shadow-sm bg-[#FAF9F6]/50">
                                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white border border-orange-100 rounded-none flex items-center justify-center shrink-0 group-hover:bg-orange-600 group-hover:border-orange-600 transition-all duration-500 shadow-inner">
                                        <badge.icon className="w-6 h-6 md:w-7 md:h-7 text-orange-600 group-hover:text-white transition-all duration-500" />
                                    </div>
                                    <div>
                                        <h4 className="text-[10px] md:text-[11px] font-bold uppercase tracking-widest text-gray-900 mb-1">{badge.title}</h4>
                                        <p className="text-[8px] md:text-[9px] font-bold text-gray-400 uppercase tracking-widest italic leading-tight">{badge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 9️⃣ Customer Reviews */}
                <section className="py-12 md:py-16 bg-[#FAF9F6] relative overflow-hidden">
                    <div className="container mx-auto px-4 max-w-5xl relative z-10">
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2 uppercase tracking-tighter">Seeker <span className="text-orange-600">Feedback</span></h2>
                            <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-gray-400 italic">Authenticity verified by thousands of devotees.</p>
                        </div>
                        <div className="grid md:grid-cols-2 gap-8">
                            {[
                                { name: "Rajesh Sharma", text: "The Rudraksha I ordered was authentic and lab-tested. Felt a positive surge in energy within days of wearing it energized by Acharya Ji.", date: "12 Mar 2024" },
                                { name: "Priya Mishra", text: "The Griha Pravesh kit is a lifesaver. Each item was high quality and carefully packed. Saved us hours of market hunting.", date: "05 Mar 2024" }
                            ].map((review, i) => (
                                <div key={i} className="bg-white p-6 md:p-8 border border-gray-100 shadow-sm relative group hover:shadow-xl transition-all duration-500">
                                    <div className="flex gap-1 mb-5">
                                        {[1, 2, 3, 4, 5].map(s => <Star key={s} className="w-3 h-3 text-yellow-400 fill-yellow-400" />)}
                                    </div>
                                    <p className="text-sm font-medium text-gray-600 leading-relaxed italic mb-8">"{review.text}"</p>
                                    <div className="flex items-center justify-between pt-5 border-t border-gray-100">
                                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900">{review.name}</span>
                                        <span className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">{review.date}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* 🔟 Call To Action - Theme Matching */}
                <section className="py-12 md:py-20 bg-white relative">
                    <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
                        <div className="w-16 h-1 bg-orange-600 mx-auto mb-10 rounded-full" />
                        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-8 uppercase tracking-widest leading-[1.1]">
                            Need Guidance For <br /><span className="text-orange-600">Sacred Choices?</span>
                        </h2>
                        <p className="text-gray-500 mb-12 text-sm md:text-base font-bold max-w-xl mx-auto leading-relaxed uppercase tracking-[0.2em] italic">
                            Don't pick spiritual items at random. Consult Acharya Ji to find exactly what aligns with your birth chart and energy nodes.
                        </p>
                        <div className="flex flex-wrap justify-center gap-6">
                            <Link to="/astrologer" className="group relative bg-[#E8453C] hover:bg-[#CC3B34] text-white px-10 py-5 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 overflow-hidden">
                                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-3">
                                    <Users className="w-5 h-5" /> Talk To Expert
                                </span>
                            </Link>
                            <Link to="/contact" className="group relative bg-[#1A1A1A] hover:bg-black text-white px-10 py-5 rounded-none font-bold text-[10px] md:text-xs uppercase tracking-[0.2em] shadow-2xl transition-all duration-500 overflow-hidden border border-[#1A1A1A]">
                                <div className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                <span className="relative flex items-center gap-3 text-yellow-500">
                                    <MessageSquare className="w-5 h-5" /> Need Assistance?
                                </span>
                            </Link>
                        </div>
                    </div>
                </section>
                {/* Product Detail Quick View Modal - Theme Refined */}
                {selectedProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in" onClick={() => setSelectedProduct(null)}>
                        <div className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scale-in rounded-none shadow-2xl border border-orange-100" onClick={e => e.stopPropagation()}>
                            <button onClick={() => setSelectedProduct(null)} className="absolute top-4 right-4 z-10 w-10 h-10 bg-white shadow-lg flex items-center justify-center hover:bg-orange-600 hover:text-white transition-all transition-colors">
                                <X className="w-5 h-5" />
                            </button>
                            <div className="grid md:grid-cols-2">
                                <div className="aspect-[4/5] bg-[#FAF9F6] flex items-center justify-center overflow-hidden border-r border-gray-50">
                                    <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-8 md:p-12 flex flex-col h-full bg-white relative">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-orange-50/50 rounded-full blur-3xl -z-10" />

                                    <div className="flex items-center gap-2 text-orange-600 text-[10px] font-bold uppercase tracking-[0.2em] mb-4">
                                        <Sparkles className="w-4 h-4" /> Lab Certified {selectedProduct.category}
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 uppercase tracking-tighter leading-tight">{selectedProduct.name}</h2>

                                    <div className="flex items-center gap-4 mb-8">
                                        <span className="text-3xl font-bold text-gray-900">₹{selectedProduct.price}</span>
                                        <div className="flex items-center gap-1.5 px-3 py-1 bg-yellow-50 border border-yellow-100">
                                            <div className="flex gap-0.5">
                                                {[1, 2, 3, 4, 5].map(s => <Star key={s} className={`w-3 h-3 ${s <= Math.floor(selectedProduct.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`} />)}
                                            </div>
                                            <span className="text-[9px] font-bold text-yellow-700 ml-1 uppercase">{selectedProduct.rating} / 5</span>
                                        </div>
                                    </div>

                                    <div className="space-y-6 mb-10 overflow-y-auto pr-4 custom-scrollbar">
                                        <div>
                                            <h4 className="text-[10px] font-bold uppercase tracking-widest mb-3 text-gray-400 italic">Spiritual Essence</h4>
                                            <p className="text-sm text-gray-600 leading-relaxed font-medium">{selectedProduct.description}</p>
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="p-4 bg-[#FAF9F6] border border-gray-100">
                                                <h4 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-orange-600">Divine Benefits</h4>
                                                <ul className="space-y-2">
                                                    {["Positive Energy", "Abundance", "Protection"].map((benefit, b) => (
                                                        <li key={b} className="flex items-center gap-3 text-[9px] font-bold text-gray-700 uppercase">
                                                            <div className="w-1 h-1 bg-orange-600 rounded-full" /> {benefit}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div className="p-4 bg-orange-50/50 border border-orange-100/50">
                                                <h4 className="text-[9px] font-bold uppercase tracking-widest mb-3 text-orange-600">Sacred Usage</h4>
                                                <p className="text-[9px] text-gray-600 leading-relaxed font-bold italic uppercase">Place in Ishan Kona (North-East) after morning bath.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                                        <button
                                            onClick={() => { addItem(selectedProduct); setSelectedProduct(null); }}
                                            className="group relative bg-black text-white hover:bg-[#E8453C] flex-grow py-5 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all flex items-center justify-center gap-3 overflow-hidden"
                                        >
                                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <ShoppingCart className="w-4 h-4 relative" /> <span className="relative">Add To Cart</span>
                                        </button>
                                        <button className="group relative bg-[#E8453C] hover:bg-black text-white flex-grow py-5 font-bold text-[10px] md:text-xs uppercase tracking-[0.3em] transition-all overflow-hidden shadow-xl">
                                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                            <span className="relative">Buy Now</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Layout>
    );
};

export default ShopPujaSamagri;
