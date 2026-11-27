import { IMAGES, PageRoute } from '../data/logisticsData';
import { SafeImage } from '../components/SafeImage';

interface HomePageProps {
  onNavigate: (page: PageRoute, quotePreset?: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-light-primary overflow-hidden">
        <SafeImage
          src={IMAGES.heroFleet}
          alt="OSS Logistics commercial road transport fleet on an expressway at golden hour"
          className="absolute inset-0 w-full h-full object-cover"
          fallbackLabel="OSS Logistics National Fleet"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-light-primary/90 via-light-primary/85 to-light-primary/95 lg:bg-gradient-to-r lg:from-light-primary/95 lg:via-light-primary/80 lg:to-light-primary/30" />

        <div className="relative z-10 max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-10 lg:py-24 grid grid-cols-1 lg:grid-cols-12 gap-gutter-xl items-center">
          <div className="lg:col-span-8 flex flex-col gap-gutter-md lg:gap-gutter-lg">
            <span
              role="status"
              className="self-start inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-light-tertiary text-light-on-tertiary font-label text-label-sm"
            >
              <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                eco
              </span>
              <span>Faster • Safer • Greener</span>
            </span>

            <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance">
              Dependable road transport built for industrial schedules.
            </h1>

            <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-prose text-pretty">
              OSS Logistics  moves full truckloads, scheduled part-loads, and temperature-sensitive
              cargo across national highway corridors with BS-VI fleet reliability and dedicated
              regional hubs.
            </p>

            <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-2.5 lg:gap-gutter-md pt-1 lg:pt-2">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'Full Truck Load (FTL) / Express Booking')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-light-secondary text-light-on-secondary font-label text-label-lg transition-opacity duration-state-change ease-state-change hover:opacity-90 whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary"
              >
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  local_shipping
                </span>
                <span>Book Freight</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded border border-light-outline-variant bg-light-surface-container-lowest text-light-primary font-label text-label-lg transition-colors duration-state-change ease-state-change hover:bg-light-surface-container-low whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-light-on-primary"
              >
                <span>Our Services</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Operational Proof Bar */}
      <section className="bg-light-surface-container-lowest border-b border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-6 lg:py-8 grid grid-cols-2 lg:grid-cols-4 gap-gutter-md lg:gap-gutter-lg">
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <span className="font-headline text-headline-md lg:text-headline-lg text-light-primary tabular-nums">
              450+
            </span>
            <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface-variant">
              Commercial Fleet Vehicles
            </span>
          </div>
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <span className="font-headline text-headline-md lg:text-headline-lg text-light-primary tabular-nums">
              28
            </span>
            <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface-variant">
              Regional Cross-Dock Hubs
            </span>
          </div>
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <span className="font-headline text-headline-md lg:text-headline-lg text-light-primary tabular-nums">
              99.2%
            </span>
            <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface-variant">
              On-Time Corridor Delivery
            </span>
          </div>
          <div className="flex flex-col gap-0.5 lg:gap-1">
            <span className="font-headline text-headline-md lg:text-headline-lg text-brand-green tabular-nums">
              100%
            </span>
            <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface-variant">
              BS-VI &amp; CNG Fleet
            </span>
          </div>
        </div>
      </section>

      {/* Road Transport Services Overview */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section flex flex-col gap-gutter-md lg:gap-gutter-xl">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-gutter-md lg:gap-gutter-lg">
          <div className="flex flex-col gap-1 lg:gap-2 max-w-2xl">
            <span className="font-label text-label-sm lg:text-label-lg text-light-secondary">
              Road Transport Solutions
            </span>
            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Tailored road freight for every load size and corridor.
            </h2>
          </div>
          <p className="hidden lg:block font-body text-body-md text-light-on-surface-variant max-w-md text-pretty">
            From dedicated 32-ft closed containers to daily consolidated express lanes, every
            dispatch is backed by verified drivers and hub-to-hub scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-gutter-md lg:gap-gutter-lg items-stretch">
          <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant overflow-hidden shadow-sm">
            <div className="aspect-[4/3] w-full bg-light-surface-container overflow-hidden">
              <SafeImage
                src={IMAGES.roadFtlFreight}
                alt="Full Truck Load heavy freight containers at OSS Logistics hub"
                className="w-full h-full object-cover"
                fallbackLabel="Full Truck Load (FTL)"
              />
            </div>
            <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 flex-1">
              <header className="flex flex-col gap-1">
                <h3 className="font-headline text-title-lg text-light-on-surface">
                  Full Truck Load (FTL)
                </h3>
                <p className="font-label text-label-sm text-light-secondary">Dedicated 14ft to 32ft</p>
              </header>
              <div className="flex-1">
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  Direct point-to-point road transport with zero transshipment, sealed containers,
                  and committed transit windows.
                </p>
              </div>
              <footer className="pt-3 border-t border-light-outline-variant">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
                >
                  <span>Explore FTL</span>
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </footer>
            </div>
          </article>

          <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant overflow-hidden shadow-sm">
            <div className="aspect-[4/3] w-full bg-light-surface-container overflow-hidden">
              <SafeImage
                src={IMAGES.roadExpressVan}
                alt="OSS Logistics express road cargo van on morning highway"
                className="w-full h-full object-cover"
                fallbackLabel="Part Truck Load (PTL)"
              />
            </div>
            <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 flex-1">
              <header className="flex flex-col gap-1">
                <h3 className="font-headline text-title-lg text-light-on-surface">
                  Part Truck Load (PTL)
                </h3>
                <p className="font-label text-label-sm text-light-secondary">
                  Scheduled daily departures
                </p>
              </header>
              <div className="flex-1">
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  Pay only for the deck space you use. Barcoded hub-to-hub consolidation with
                  predictable cut-off times.
                </p>
              </div>
              <footer className="pt-3 border-t border-light-outline-variant">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
                >
                  <span>Explore PTL</span>
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </footer>
            </div>
          </article>

          <div className="h-full flex flex-col gap-gutter-md">
            <article className="flex-1 flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-6 gap-4">
              <header className="flex items-start justify-between gap-3">
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline text-title-lg text-light-on-surface">
                    Project &amp; ODC Cargo
                  </h3>
                  <p className="font-label text-label-sm text-light-on-surface-variant">
                    Flatbeds &amp; hydraulic axles
                  </p>
                </div>
                <span
                  className="material-symbols-outlined text-headline-md text-light-primary"
                  aria-hidden="true"
                >
                  precision_manufacturing
                </span>
              </header>
              <div className="flex-1">
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  Route-surveyed heavy haulage for plant machinery and infrastructure equipment.
                </p>
              </div>
              <footer className="pt-2 border-t border-light-outline-variant">
                <button
                  type="button"
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
                >
                  <span>Plan Project Move</span>
                  <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                    arrow_forward
                  </span>
                </button>
              </footer>
            </article>

            <button
              type="button"
              onClick={() => onNavigate('franchise')}
              className="group flex-1 text-left flex flex-col justify-between rounded-md bg-light-surface-container-low border border-light-outline-variant p-6 gap-3 transition-colors duration-state-change hover:bg-light-surface-container-lowest hover:border-light-primary cursor-pointer"
            >
              <header className="w-full flex items-center justify-between gap-2">
                <h3 className="font-headline text-title-lg text-light-on-surface group-hover:text-light-primary">
                  Partner &amp; Franchise Network
                </h3>
                <span
                  className="material-symbols-outlined text-title-lg text-light-primary"
                  aria-hidden="true"
                >
                  handshake
                </span>
              </header>
              <div>
                <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
                  Launch an OSS Logistics booking hub in your city with full operational support.
                </p>
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Faster • Safer • Greener Section */}
      <section className="bg-light-surface-container-low border-y border-light-outline-variant">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-gutter-md lg:gap-gutter-xl items-center">
          <div className="order-2 lg:order-1 lg:col-span-6 flex flex-col gap-gutter-md lg:gap-gutter-lg">
            <span
              role="status"
              className="hidden lg:inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-full bg-light-tertiary text-light-on-tertiary font-label text-label-sm"
            >
              <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                eco
              </span>
              <span>The OSS Standard</span>
            </span>

            <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
              Faster transit, safer handling, greener highways.
            </h2>

            <div className="flex flex-col gap-3 lg:gap-gutter-md">
              <div className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-title-lg text-light-secondary mt-0.5"
                  aria-hidden="true"
                >
                  speed
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline text-title-md text-light-on-surface">Faster</h3>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    Dual-driver relay teams on long-haul lanes cut transit times by up to 30%.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-title-lg text-light-primary mt-0.5"
                  aria-hidden="true"
                >
                  verified_user
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline text-title-md text-light-on-surface">Safer</h3>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    Tamper-evident e-locks, verified drivers, and 24/7 dispatch supervision.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span
                  className="material-symbols-outlined text-title-lg text-brand-green mt-0.5"
                  aria-hidden="true"
                >
                  eco
                </span>
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline text-title-md text-light-on-surface">Greener</h3>
                  <p className="font-body text-body-md text-light-on-surface-variant">
                    BS-VI engines and CNG city vans minimize emissions on every corridor.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <div className="rounded-md lg:rounded-lg overflow-hidden border border-light-outline-variant shadow-sm aspect-[16/9]">
              <SafeImage
                src={IMAGES.greenFleetHighway}
                alt="Fuel-efficient OSS Logistics freight truck on a green tree-lined highway"
                className="w-full h-full object-cover"
                fallbackIcon="eco"
                fallbackLabel="BS-VI & CNG Fleet Corridor"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
