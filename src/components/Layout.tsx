import { ReactNode, useState } from 'react';
import { COMPANY_INFO, IMAGES, NAV_ITEMS, PageRoute } from '../data/logisticsData';
import { SafeImage } from './SafeImage';

interface LayoutProps {
  currentPage: PageRoute;
  onNavigate: (page: PageRoute, quotePreset?: string) => void;
  children: ReactNode;
}

export function Layout({ currentPage, onNavigate, children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: PageRoute, quotePreset?: string) => {
    setMobileMenuOpen(false);
    onNavigate(page, quotePreset);
  };

  const companyFooterLinks: { id: PageRoute; label: string }[] = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'franchise', label: 'Franchise' },
  ];

  const operationsFooterLinks: { id: PageRoute; label: string }[] = [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'network', label: 'Network' },
    { id: 'contact', label: 'Contact Us' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-light-surface text-light-on-surface font-body">
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-light-primary text-light-on-primary">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-2 flex flex-wrap items-center justify-between gap-gutter-sm">
          <div className="flex flex-wrap items-center gap-gutter-md lg:gap-gutter-lg">
            <a
              href="tel:+912248907200"
              className="inline-flex items-center gap-1.5 font-label text-label-sm hover:text-light-secondary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                call
              </span>
              <span className="tabular-nums">{COMPANY_INFO.phonePrimary}</span>
            </a>
            <a
              href={`mailto:${COMPANY_INFO.email}`}
              className="inline-flex items-center gap-1.5 font-label text-label-sm hover:text-light-secondary-container transition-colors duration-state-change"
            >
              <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                mail
              </span>
              <span>{COMPANY_INFO.email}</span>
            </a>
          </div>
          <div className="hidden md:flex items-center gap-gutter-md font-label text-label-sm">
            <span>24/7 Fleet Control Desk</span>
            <span className="text-light-on-primary-container" aria-hidden="true">
              |
            </span>
            <span>{COMPANY_INFO.motto}</span>
          </div>
        </div>
      </div>

      {/* Main Navigation Header */}
      <header className="sticky top-0 z-30 bg-light-surface-container-lowest border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-3 flex items-center justify-between gap-gutter-sm lg:gap-gutter-md">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('home');
            }}
            className="flex items-center gap-2.5 lg:gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary rounded"
          >
            <SafeImage
              src={IMAGES.logo}
              alt="OSS Logistics LLP Logo"
              isLogo
              className="w-10 h-10 lg:w-11 lg:h-11 rounded-full object-cover border border-light-outline-variant bg-light-surface-container-lowest"
            />
            <div className="flex flex-col">
              <span className="font-headline text-title-md text-light-primary leading-tight whitespace-nowrap">
                {COMPANY_INFO.name}
              </span>
              <span className="font-label text-label-sm text-light-on-surface-variant whitespace-nowrap">
                {COMPANY_INFO.tagline}
              </span>
            </div>
          </a>

          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-gutter-md">
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={
                    isActive
                      ? 'font-label text-label-lg text-light-primary border-b-2 border-light-secondary pb-0.5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-primary'
                      : 'font-label text-label-lg text-light-on-surface hover:text-light-primary transition-colors duration-state-change whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-light-primary'
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 lg:gap-3 shrink-0">
            <button
              type="button"
              onClick={() => handleNavClick('contact')}
              className="inline-flex items-center justify-center gap-2 px-3.5 lg:px-5 py-2.5 rounded bg-light-primary text-light-on-primary font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-light-primary-container whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <span>Get Quote</span>
            </button>
            <button
              type="button"
              aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 rounded border border-light-outline-variant bg-light-surface-container-lowest text-light-primary cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-primary"
            >
              <span className="material-symbols-outlined text-title-lg" aria-hidden="true">
                {mobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <nav
            id="mobile-nav"
            aria-label="Mobile Navigation"
            className="lg:hidden border-t border-light-outline-variant bg-light-surface-container-lowest px-gutter-md py-3 grid grid-cols-2 gap-3"
          >
            {NAV_ITEMS.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'page' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.id);
                  }}
                  className={
                    isActive
                      ? 'font-label text-label-lg text-light-primary py-1.5 font-semibold'
                      : 'font-label text-label-lg text-light-on-surface hover:text-light-primary py-1.5'
                  }
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
        )}
      </header>

      {/* Page Body */}
      <main id="top" className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Corporate Footer */}
      <footer className="bg-light-primary text-light-on-primary mt-auto">
        {/* Desktop Footer */}
        <div className="hidden lg:grid max-w-7xl mx-auto px-gutter-lg py-12 grid-cols-12 gap-gutter-xl">
          <div className="col-span-4 flex flex-col gap-gutter-md">
            <div className="flex items-center gap-3">
              <SafeImage
                src={IMAGES.logo}
                alt="OSS Logistics LLP Logo"
                isLogo
                className="w-12 h-12 rounded-full object-cover bg-light-surface-container-lowest"
              />
              <div className="flex flex-col">
                <span className="font-headline text-title-lg text-light-on-primary">
                  {COMPANY_INFO.name}
                </span>
                <span className="font-label text-label-sm text-light-on-primary-container">
                  {COMPANY_INFO.tagline} • {COMPANY_INFO.motto}
                </span>
              </div>
            </div>
            <p className="font-body text-body-md text-light-inverse-on-surface max-w-sm text-pretty">
              Dedicated road transport, FTL/PTL express lanes, and eco-compliant fleet operations
              connecting industrial hubs nationwide.
            </p>
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <h4 className="font-headline text-title-md text-light-on-primary">Company</h4>
            {companyFooterLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="font-body text-body-md text-light-inverse-on-surface hover:text-light-on-primary transition-colors duration-state-change"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="col-span-2 flex flex-col gap-2">
            <h4 className="font-headline text-title-md text-light-on-primary">Operations</h4>
            {operationsFooterLinks.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="font-body text-body-md text-light-inverse-on-surface hover:text-light-on-primary transition-colors duration-state-change"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="col-span-4 flex flex-col gap-2.5">
            <h4 className="font-headline text-title-md text-light-on-primary">
              Head Office &amp; Dispatch
            </h4>
            <p className="font-body text-body-md text-light-inverse-on-surface">
              {COMPANY_INFO.addressShort}
            </p>
            <p className="font-body text-body-md text-light-inverse-on-surface tabular-nums">
              {COMPANY_INFO.phonePrimary} • {COMPANY_INFO.email}
            </p>
          </div>
        </div>

        {/* Mobile Footer */}
        <div className="lg:hidden px-gutter-md py-8 flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <SafeImage
              src={IMAGES.logo}
              alt="OSS Logistics LLP Logo"
              isLogo
              className="w-10 h-10 rounded-full object-cover bg-light-surface-container-lowest"
            />
            <div className="flex flex-col">
              <span className="font-headline text-title-md text-light-on-primary">
                {COMPANY_INFO.name}
              </span>
              <span className="font-label text-label-sm text-light-on-primary-container">
                {COMPANY_INFO.motto}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 font-body text-body-md text-light-inverse-on-surface">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                className="hover:text-light-on-primary py-0.5"
              >
                {item.label}
              </a>
            ))}
          </div>
          <p className="font-body text-body-md text-light-inverse-on-surface tabular-nums">
            {COMPANY_INFO.phonePrimary} • {COMPANY_INFO.email}
          </p>
          <p className="font-label text-label-sm text-light-on-primary-container">
            © 2026 OSS Logistics LLP. All rights reserved.
          </p>
        </div>

        {/* Bottom Copyright Strip (Desktop) */}
        <div className="hidden lg:block border-t border-light-primary-container">
          <div className="max-w-7xl mx-auto px-gutter-lg py-4 flex flex-wrap items-center justify-between gap-2 font-label text-label-sm text-light-on-primary-container">
            <span>© 2026 OSS Logistics LLP. All rights reserved.</span>
            <span>Road Transport &amp; Supply Chain Solutions</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
