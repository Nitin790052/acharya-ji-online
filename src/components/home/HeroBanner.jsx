import React from 'react';
import { ArrowRight, Sparkles, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import bannerImg from "../../assets/banners/vedic_hero_banner.png";

const HeroBanner = () => {
    return (
        <section className="relative w-full h-[60vh] min-h-[500px] lg:h-[75vh] flex items-start overflow-hidden bg-[#FAF9F6]">
            {/* Background Image with Gradient Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={bannerImg}
                    alt="Vedic Temple Banner"
                    className="w-full h-full object-cover object-right lg:object-center"
                />
                {/* Minimal Overlay for Readability - Darker and subtler to keep image clear */}
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent opacity-60" />
            </div>

            <div className="container mx-auto px-6 relative z-10 lg:flex lg:items-center pt-8 md:pt-10 pb-20">
                <div className="max-w-2xl">
                    {/* Animated Badge */}
                    <div
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xl border border-white/30 mb-6 shadow-2xl animate-fade-in-up"
                    >
                        <Award className="w-4 h-4 text-[#FFC107]" />
                        <span className="text-[#FFC107] text-[10px] md:text-sm font-black uppercase tracking-widest">Authentic Vedic Services</span>
                    </div>

                    {/* Headline */}
                    <h1
                        className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#2A1D13] leading-[1.1] mb-6 font-serif uppercase drop-shadow-sm animate-fade-in-up animation-delay-200"
                    >
                        Experience <span className="text-[#E8453C]">Divine</span> <span className="text-[#FFC107]">Blessings</span> At Your Doorstep
                    </h1>

                    {/* Subheadline with Glassmorphism */}
                    <p
                        className="text-sm md:text-base lg:text-lg text-white font-normal leading-relaxed max-w-xl p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl mb-4 animate-fade-in-up animation-delay-400"
                    >
                        Connect with sacred traditions through authentic rituals, expert consultations, and premium spiritual essentials delivered with devotion.
                    </p>

                    {/* CTA Section */}
                    <div
                        className="flex flex-wrap gap-4 animate-fade-in-up animation-delay-600"
                    >
                        <Link
                            to="/puja"
                            className="group relative inline-flex items-center gap-2 px-6 py-3 bg-[#E8453C] text-white rounded-full font-bold text-base shadow-xl hover:shadow-[0_20px_40px_-10px_rgba(232,69,60,0.4)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                        >
                            <span className="relative z-10">Explore Services</span>
                            <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
                            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Vedic Aesthetic Bottom Wave (Optional but adds premium feel) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-[60px] fill-[#FAF9F6]">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.21,103.42,115.42,115.24,173.12,108,232.61,100.55,282.72,70.9,321.39,56.44Z"></path>
                </svg>
            </div>
        </section>
    );
};

export default HeroBanner;
