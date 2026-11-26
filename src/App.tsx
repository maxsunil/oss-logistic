/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import { Layout } from './components/Layout';
import { NAV_ITEMS, PageRoute } from './data/logisticsData';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FranchisePage } from './pages/FranchisePage';
import { HomePage } from './pages/HomePage';
import { NetworkPage } from './pages/NetworkPage';
import { ProcessPage } from './pages/ProcessPage';
import { ServicesPage } from './pages/ServicesPage';
import { WhyUsPage } from './pages/WhyUsPage';

const PAGE_TITLES: Record<PageRoute, string> = {
  home: 'OSS Logistics LLP — Home | Road Transport & Freight',
  about: 'OSS Logistics LLP — About Us',
  services: 'OSS Logistics LLP — Road Transport Services',
  franchise: 'OSS Logistics LLP — Franchise Partner Program',
  process: 'OSS Logistics LLP — Our Process',
  network: 'OSS Logistics LLP — Network & Hubs',
  'why-us': 'OSS Logistics LLP — Why Us',
  contact: 'OSS Logistics LLP — Contact Us',
};

function getRouteFromLocation(): PageRoute {
  const hash = window.location.hash.replace(/^#/, '') as PageRoute;
  if (NAV_ITEMS.some((item) => item.id === hash)) {
    return hash;
  }
  const path = window.location.pathname;
  const matched = NAV_ITEMS.find((item) => item.path === path);
  return matched ? matched.id : 'home';
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageRoute>(() => getRouteFromLocation());
  const [quotePreset, setQuotePreset] = useState<string>('');
  const [originPreset, setOriginPreset] = useState<string>('');

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  useEffect(() => {
    const handleHashOrPop = () => {
      setCurrentPage(getRouteFromLocation());
    };
    window.addEventListener('hashchange', handleHashOrPop);
    window.addEventListener('popstate', handleHashOrPop);
    return () => {
      window.removeEventListener('hashchange', handleHashOrPop);
      window.removeEventListener('popstate', handleHashOrPop);
    };
  }, []);

  const handleNavigate = (page: PageRoute, nextLoadPreset?: string, nextOriginPreset?: string) => {
    if (nextLoadPreset !== undefined) {
      setQuotePreset(nextLoadPreset);
    }
    if (nextOriginPreset !== undefined) {
      setOriginPreset(nextOriginPreset);
    }
    setCurrentPage(page);
    if (window.location.hash !== `#${page}`) {
      window.history.pushState(null, '', `#${page}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Layout currentPage={currentPage} onNavigate={handleNavigate}>
      {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
      {currentPage === 'about' && <AboutPage />}
      {currentPage === 'services' && <ServicesPage onNavigate={handleNavigate} />}
      {currentPage === 'franchise' && <FranchisePage />}
      {currentPage === 'process' && <ProcessPage />}
      {currentPage === 'network' && <NetworkPage onNavigate={handleNavigate} />}
      {currentPage === 'why-us' && <WhyUsPage />}
      {currentPage === 'contact' && (
        <ContactPage initialLoadPreset={quotePreset} initialOriginPreset={originPreset} />
      )}
    </Layout>
  );
}
