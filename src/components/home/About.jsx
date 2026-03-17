import { Link } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import about from "../../assets/aboutImage/acharyaji.webp"
import SectionHeader from '../common/SectionHeader';

const features = [
  'Experienced & Certified Pandits',
  'Authentic Vedic Rituals',
  'Services across all faiths',
  'Home Visit & Online Options',
  'Premium Puja Materials',
  '24/7 Customer Support',
];

export function About() {
  return (
    <section className="py-14 overflow-hidden bg-white">
      <div className="container mx-auto px-3">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          {/* Image Side */}
          <div
            className="relative animate-slide-in-left"
          >
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden" style={{ backgroundColor: '#fef2f2' }}>
              {/* Subtle coral tint overlay */}
              <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(232,69,60,0.08) 0%, rgba(232,69,60,0.04) 100%)' }} />

              {/* Main Image */}
              <img
                src={about}
                alt="Acharya Ji performing puja ceremony"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>

          {/* Content Side */}
          <div
            className="animate-fade-in-up"
          >
            <SectionHeader
              badge="About Acharya Ji"
              title="Bringing Divine Blessings to Your Home"
              className="text-left mb-6"
            />
            <p className="text-gray-600 mb-5 leading-relaxed text-sm">
              Acharya Ji is a trusted platform for authentic spiritual services, connecting devotees
              with experienced priests and religious scholars. We believe in preserving ancient
              traditions while making them accessible to modern families.
            </p>
            <p className="text-gray-600 mb-6 leading-relaxed text-sm">
              Whether you seek blessings for a new beginning, wish to perform ancestral rites,
              or want to celebrate festivals with proper rituals, our team ensures every ceremony
              is conducted with devotion and authenticity.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-6">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-1.5 p-2 rounded-lg animate-fade-in-right"
                  style={{ backgroundColor: 'rgba(232,69,60,0.05)', animationDelay: `${index * 0.08}s`, animationFillMode: 'both' }}
                >
                  <CheckCircle className="w-4 h-4 flex-shrink-0" style={{ color: '#E8453C' }} />
                  <span className="text-xs text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                to="/about"
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-white text-sm transition-all duration-300 hover:opacity-90 hover:shadow-lg"
                style={{ backgroundColor: '#E8453C' }}
              >
                Learn More About Us
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-5 py-2.5 rounded-lg font-semibold text-sm border-2 transition-all duration-300 hover:text-white"
                style={{ borderColor: '#E8453C', color: '#E8453C' }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#E8453C'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#E8453C'; }}
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}