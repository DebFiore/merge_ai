
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import GHLFormModal from "@/components/shared/GHLFormModal";
import AgencyDeck from "@/components/sales/AgencyDeck";

export default function Layout({ children, currentPageName }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [showDeck, setShowDeck] = useState(false);
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('show') === 'deck') {
      setShowDeck(true);
    }
  }, [location.search]);

  const handleCloseDeck = () => {
    setShowDeck(false);
    const url = new URL(window.location);
    url.searchParams.delete('show');
    window.history.pushState({}, '', url);
  };
  
  useEffect(() => {
    const scriptId = 'ghl-form-embed-script';
    if (!document.getElementById(scriptId)) {
      const script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://link.mergemedia.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  useEffect(() => {
    const handleOpenModal = (e) => {
      const triggerElement = e.target.closest('[data-form-trigger="true"]');
      
      if (triggerElement) {
        e.preventDefault();
        setIsFormModalOpen(true);
      }
    };

    document.addEventListener('click', handleOpenModal);
    return () => {
      document.removeEventListener('click', handleOpenModal);
    };
  }, []);

  const lightLogoUrl = "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6c7112045_MERGEAIhorizontallogowhitetransparent.png";

  const headerNavigationItems = [
    { name: "Home", url: createPageUrl("Home") },
    { name: "Technology", url: createPageUrl("Technology") },
    { name: "Integrations", url: createPageUrl("Integrations") },
    { name: "Onboarding", url: createPageUrl("Onboarding") },
    { name: "Pricing", url: createPageUrl("Pricing") },
    { name: "Agent Marketplace", url: createPageUrl("Pricing") + "#agent-marketplace" },
    { name: "Blog", url: createPageUrl("blog") },
  ];

  const footerResourceItems = [
    { name: "Affiliate Program", url: createPageUrl("Affiliate") },
    { name: "FAQ", url: createPageUrl("FAQ") },
    { name: "Blog", url: createPageUrl("blog") },
  ];

  const legalLinks = [
    { name: "Privacy Policy", url: createPageUrl("Privacy") },
    { name: "Terms of Use", url: createPageUrl("Terms") },
  ];

  return (
    <div className="min-h-screen bg-[#02012d] text-white">
      {showDeck && <AgencyDeck onClose={handleCloseDeck} />}
      <GHLFormModal isOpen={isFormModalOpen} onClose={() => setIsFormModalOpen(false)} />
      <style>{`
        :root {
          --merge-navy: #02012d;
          --merge-magenta: #DB07b5;
          --merge-pink: #E501E4;
          --merge-teal: #00839C;
        }
        
        .gradient-text {
          background: linear-gradient(135deg, var(--merge-magenta), var(--merge-pink));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        
        .gradient-bg {
          background: linear-gradient(135deg, var(--merge-magenta), var(--merge-pink));
        }
        
        .gradient-hover {
          transition: all 0.3s ease;
        }
        
        .gradient-hover:hover {
          transform: translateY(-2px);
          box-shadow: 0 20px 40px rgba(219, 7, 181, 0.3);
        }
        
        .section-padding {
          padding: 120px 0;
        }

        .dark-card {
            background-color: rgba(255, 255, 255, 0.05);
            border: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        @media (max-width: 768px) {
          .section-padding {
            padding: 80px 0;
          }
        }
      `}</style>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#02012d]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link to={createPageUrl("Home")} className="flex items-center">
              <img src={lightLogoUrl} alt="MERGE AI Logo" className="h-10" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {headerNavigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className={`text-sm font-medium transition-colors hover:text-[#DB07b5] ${
                    location.pathname === item.url
                      ? "text-white"
                      : "text-gray-300"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <a 
                href="https://calendly.com/mergeai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white px-8 py-2 rounded-full font-medium gradient-hover inline-block"
              >
                Book a Demo
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[#02012d] border-b border-white/10 shadow-lg">
            <div className="px-6 py-4 space-y-4">
              {headerNavigationItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.url}
                  className="block text-white font-medium hover:text-[#DB07b5] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <a 
                href="https://calendly.com/mergeai/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="gradient-bg text-white w-full py-3 rounded-full font-medium block text-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-20">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-[#02012d] text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div>
              <div className="mb-6">
                 <img src={lightLogoUrl} alt="MERGE AI Logo" className="h-10" />
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                MERGE AI® is powered by the most advanced AI technology, making it the leading solution for AI-driven lead outreach.
              </p>
              <div className="space-y-2 text-gray-300">
                <p>
                  <a href="mailto:info@mergemedia.ai" className="hover:text-[#DB07b5] transition-colors">
                    info@mergemedia.ai
                  </a>
                </p>
                <p>(800) 394-6041</p>
                <p>Gilbert, AZ 85296</p>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              <div className="space-y-3">
                {headerNavigationItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-gray-300 hover:text-[#DB07b5] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Resources</h3>
              <div className="space-y-3">
                {footerResourceItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-gray-300 hover:text-[#DB07b5] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Legal */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Legal</h3>
              <div className="space-y-3">
                {legalLinks.map((item) => (
                  <Link
                    key={item.name}
                    to={item.url}
                    className="block text-gray-300 hover:text-[#DB07b5] transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500">
            <p>&copy; 2024 MERGE AI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
