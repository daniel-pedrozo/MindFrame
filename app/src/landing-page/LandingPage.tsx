import { features, faqs, footerNavigation, testimonials } from './contentSections';
import Hero from './components/Hero';
import FocusPlan from './components/FocusPlan';
import Features from './components/Features';
import RealMessages from './components/RealMessages';
import BuildYourFuture from './components/BuildYourFuture';
import FinalCTA from './components/FinalCTA';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

export default function LandingPage() {
  return (
    <div className='bg-white dark:text-white dark:bg-boxdark-2'>
      <main className='isolate dark:bg-boxdark-2'>
        <Hero />
        <FocusPlan />
        <RealMessages />
        <Features features={features} />
        <BuildYourFuture />
        <FinalCTA />
        <Testimonials testimonials={testimonials} />

      </main>
      <Footer footerNavigation={footerNavigation} />
    </div>
  );
}
