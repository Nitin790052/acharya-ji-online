import { Layout } from '@/components/layout/Layout';
import HeroBanner from '@/components/home/HeroBanner';
import { Services } from '@/components/home/Services';
import { About } from '@/components/home/About';
import { FAQ } from '@/components/home/FAQ';
import PopularPujaServices from '../components/home/PopularServices';
import TalkToAstrologer from '../components/home/TalkToAstrologer';
import KundliServices from '../components/home/KundliServices';
import VastuRemediesHealing from '../components/home/VastuRemediesHealing';
import WhyChooseUs from '../components/home/WhyChooseUs';
import Testimonials from '../components/home/Testimonials';
import BlogsKnowledge from '../components/home/BlogsKnowledge';
import AppDownloadCTA from '../components/home/AppDownloadCTA';

const Index = () => {
  return (
    <Layout>
      <HeroBanner />
      <About />
      <Services />
      <PopularPujaServices />
      <TalkToAstrologer />
      <KundliServices />
      <VastuRemediesHealing />
      {/* <WhyChooseUs /> */}
      <Testimonials />
      <BlogsKnowledge />
      <AppDownloadCTA />
      <FAQ />
      {/* <CTA /> */}
      {/* <HowItWorks /> */}
    </Layout>
  );
};

export default Index;
