import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from '@/pages/Layout';

// Page Imports
import Home from '@/pages/Home';
import Technology from '@/pages/Technology';
import Integrations from '@/pages/Integrations';
import Onboarding from '@/pages/Onboarding';
import Pricing from '@/pages/Pricing';
import Blog from '@/pages/blog';
import BlogPost from '@/pages/blogPost';
import FAQ from '@/pages/FAQ';
import Affiliate from '@/pages/Affiliate';
import Privacy from '@/pages/Privacy';
import Terms from '@/pages/Terms';
import TestDemo from '@/pages/TestDemo';
import Deck from '@/pages/deck';
import Slideshow from '@/pages/Slideshow';

// White Paper Pages
import CustomerSupportWhitePaper from '@/pages/customer-support-white-paper';
import HVACWhitePaper from '@/pages/hvac-white-paper';
import MCAWhitePaper from '@/pages/mca-white-paper';
import MedSpaWhitePaper from '@/pages/med-spa-white-paper';
import MortgageWhitePaper from '@/pages/mortgage-white-paper';
import PaintingWhitePaper from '@/pages/painting-white-paper';
import PlumbingWhitePaper from '@/pages/plumbing-white-paper';
import RealEstateWhitePaper from '@/pages/real-estate-white-paper';
import SolarWhitePaper from '@/pages/solar-white-paper';

// Playbook Pages
import CustomerSupportPlaybook from '@/pages/customer-support-playbook';
import HVACPlaybook from '@/pages/hvac-playbook';
import MCAPlaybook from '@/pages/mca-playbook';
import MedSpaPlaybook from '@/pages/med-spa-playbook';
import MissedOpportunityEpidemicPlaybook from '@/pages/missed-opportunity-epidemic-playbook';
import MortgagePlaybook from '@/pages/mortgage-playbook';
import PaintingPlaybook from '@/pages/painting-playbook';
import PlumbingPlaybook from '@/pages/plumbing-playbook';
import RealEstatePlaybook from '@/pages/real-estate-playbook';
import SolarPlaybook from '@/pages/solar-playbook';

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main Pages with Layout */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/technology" element={<Layout><Technology /></Layout>} />
        <Route path="/integrations" element={<Layout><Integrations /></Layout>} />
        <Route path="/onboarding" element={<Layout><Onboarding /></Layout>} />
        <Route path="/pricing" element={<Layout><Pricing /></Layout>} />
        <Route path="/blog" element={<Layout><Blog /></Layout>} />
        <Route path="/blog/:slug" element={<Layout><BlogPost /></Layout>} />
        <Route path="/faq" element={<Layout><FAQ /></Layout>} />
        <Route path="/affiliate" element={<Layout><Affiliate /></Layout>} />
        <Route path="/privacy" element={<Layout><Privacy /></Layout>} />
        <Route path="/terms" element={<Layout><Terms /></Layout>} />
        
        {/* White Paper Pages with Layout */}
        <Route path="/customer-support-white-paper" element={<Layout><CustomerSupportWhitePaper /></Layout>} />
        <Route path="/hvac-white-paper" element={<Layout><HVACWhitePaper /></Layout>} />
        <Route path="/mca-white-paper" element={<Layout><MCAWhitePaper /></Layout>} />
        <Route path="/med-spa-white-paper" element={<Layout><MedSpaWhitePaper /></Layout>} />
        <Route path="/mortgage-white-paper" element={<Layout><MortgageWhitePaper /></Layout>} />
        <Route path="/painting-white-paper" element={<Layout><PaintingWhitePaper /></Layout>} />
        <Route path="/plumbing-white-paper" element={<Layout><PlumbingWhitePaper /></Layout>} />
        <Route path="/real-estate-white-paper" element={<Layout><RealEstateWhitePaper /></Layout>} />
        <Route path="/solar-white-paper" element={<Layout><SolarWhitePaper /></Layout>} />
        
        {/* Playbook Pages with Layout */}
        <Route path="/customer-support-playbook" element={<Layout><CustomerSupportPlaybook /></Layout>} />
        <Route path="/hvac-playbook" element={<Layout><HVACPlaybook /></Layout>} />
        <Route path="/mca-playbook" element={<Layout><MCAPlaybook /></Layout>} />
        <Route path="/med-spa-playbook" element={<Layout><MedSpaPlaybook /></Layout>} />
        <Route path="/missed-opportunity-epidemic-playbook" element={<Layout><MissedOpportunityEpidemicPlaybook /></Layout>} />
        <Route path="/mortgage-playbook" element={<Layout><MortgagePlaybook /></Layout>} />
        <Route path="/painting-playbook" element={<Layout><PaintingPlaybook /></Layout>} />
        <Route path="/plumbing-playbook" element={<Layout><PlumbingPlaybook /></Layout>} />
        <Route path="/real-estate-playbook" element={<Layout><RealEstatePlaybook /></Layout>} />
        <Route path="/solar-playbook" element={<Layout><SolarPlaybook /></Layout>} />
        
        {/* Special Pages without Layout (full screen) */}
        <Route path="/test-demo" element={<TestDemo />} />
        <Route path="/deck" element={<Deck />} />
        <Route path="/slideshow" element={<Slideshow />} />
      </Routes>
    </BrowserRouter>
  );
}
