import { useState } from "react";
import { HelpCircle, Minus, Plus } from "lucide-react";
import SectionHeader from '../common/SectionHeader';

const faqs = [
  {
    q: "How do I book a puja service?",
    a: "You can book a puja service through our website by selecting the type of puja, choosing a date/time, and making the payment. Our team will verify and assign an experienced priest."
  },
  {
    q: "Are your priests verified and experienced?",
    a: "Absolutely. All our priests undergo a thorough verification process including background checks and Vedic knowledge assessment to ensure authentic rituals."
  },
  {
    q: "How does the online puja work?",
    a: "The puja is conducted via secure video call where our priests perform rituals at our sacred facility. You can witness the entire ceremony live and participate from home."
  },
  {
    q: "Will I receive prasad for online pujas?",
    a: "Yes, we courier the blessed prasad to your address within 3-5 business days after the puja completion, packed hygienically and with divine care."
  },
  {
    q: "What payment methods do you accept?",
    a: "We accept all major payment methods including credit/debit cards, UPI, net banking, and digital wallets. All transactions are 100% secure and encrypted."
  },
  {
    q: "Can I consult with a priest before booking?",
    a: "Yes! We offer free 15-minute consultations with our experienced priests to help you choose the right puja and understand the auspicious timings."
  }
];

const RED = '#E8453C';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle, ${RED} 0.8px, transparent 0.8px)`,
        backgroundSize: '24px 24px'
      }} />
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-10 pointer-events-none" style={{ backgroundColor: RED }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-5 pointer-events-none" style={{ backgroundColor: RED }} />

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Simplified Centered Header */}
        <SectionHeader
          badge="Common Questions"
          title="Frequently Asked Questions"
          subtitle="Quick solutions to common queries about our divine services and process"
        />

        {/* Compact 2-Column FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={idx} className="group">
                <div className={`rounded-xl border transition-all duration-300 ${isOpen ? 'shadow-lg' : 'hover:shadow-md'}`}
                  style={{ borderColor: isOpen ? RED : '#f3f4f6', backgroundColor: 'white' }}>
                  <button
                    onClick={() => toggleFAQ(idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4"
                  >
                    <span className={`text-sm font-bold transition-colors ${isOpen ? '' : 'text-gray-800'}`} style={isOpen ? { color: RED } : {}}>
                      {faq.q}
                    </span>
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-all ${isOpen ? 'text-white' : 'bg-gray-200 text-gray-500'}`}
                      style={isOpen ? { backgroundColor: RED } : {}}>
                      {isOpen ? <Minus className="w-3 h-3" /> : <Plus className="w-3 h-3" />}
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                  >
                    <div className="px-4 pb-4 text-xs text-gray-600 leading-relaxed border-t border-gray-50 pt-3">
                      {faq.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Minimal Bottom CTA */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5" style={{ color: RED }} />
            Still have questions? <span className="font-bold underline cursor-pointer hover:opacity-80 transition-opacity" style={{ color: RED }}>Contact our support team</span>
          </p>
        </div>
      </div>
    </section>
  );
}