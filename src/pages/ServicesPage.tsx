import { IMAGES, PageRoute } from '../data/logisticsData';
import { SafeImage } from '../components/SafeImage';

interface ServicesPageProps {
  onNavigate: (page: PageRoute, quotePreset?: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            Road Transport Services
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            End-to-end road freight engineered for every cargo class.
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Choose from dedicated full truckloads, scheduled part-load consolidation, heavy project
            haulage, or temperature-controlled reefers.
          </p>
        </div>
      </section>

      {/* Core Services Grid */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-2 gap-gutter-md lg:gap-gutter-xl items-stretch">
        <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant overflow-hidden shadow-sm">
          <div className="aspect-[4/3] lg:aspect-[16/9] w-full bg-light-surface-container overflow-hidden">
            <SafeImage
              src={IMAGES.roadFtlFreight}
              alt="Full Truck Load containers at hub"
              className="w-full h-full object-cover"
              fallbackLabel="Full Truck Load (FTL)"
            />
          </div>
          <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 flex-1">
            <h2 className="font-headline text-title-lg lg:text-headline-md text-light-on-surface">
              Full Truck Load (FTL)
            </h2>
            <p className="font-label text-label-sm text-light-secondary">
              14 ft to 32 ft MXL / SXL &amp; 40 ft Trailers
            </p>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty flex-1">
              Direct door-to-door road transport with zero intermediate handling. Ideal for
              manufacturing plants, FMCG distribution, and bulk industrial dispatches.
            </p>
            <footer className="pt-3 border-t border-light-outline-variant">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'FTL 32ft MXL / Bulk')}
                className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
              >
                <span>Request FTL Rate</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </footer>
          </div>
        </article>

        <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant overflow-hidden shadow-sm">
          <div className="aspect-[4/3] lg:aspect-[16/9] w-full bg-light-surface-container overflow-hidden">
            <SafeImage
              src={IMAGES.roadExpressVan}
              alt="Express road cargo van on highway"
              className="w-full h-full object-cover"
              fallbackLabel="Part Truck Load (PTL)"
            />
          </div>
          <div className="p-4 lg:p-6 flex flex-col gap-2 lg:gap-3 flex-1">
            <h2 className="font-headline text-title-lg lg:text-headline-md text-light-on-surface">
              Part Truck Load (PTL) &amp; Express
            </h2>
            <p className="font-label text-label-sm text-light-secondary">
              Scheduled daily hub-to-hub departures
            </p>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty flex-1">
              Flexible palletized and boxed cargo consolidation across 28 regional hubs. Pay only
              for the space and tonnage you ship with fixed transit SLAs.
            </p>
            <footer className="pt-3 border-t border-light-outline-variant">
              <button
                type="button"
                onClick={() => onNavigate('contact', 'PTL Express Consolidated')}
                className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
              >
                <span>Book PTL Lane</span>
                <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </footer>
          </div>
        </article>

        <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 gap-2 lg:gap-4">
          <header className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-lg lg:text-headline-md text-light-on-surface">
                Project &amp; ODC Cargo
              </h2>
              <p className="font-label text-label-sm text-light-on-surface-variant">
                Flatbeds, low-beds &amp; hydraulic axles
              </p>
            </div>
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary"
              aria-hidden="true"
            >
              precision_manufacturing
            </span>
          </header>
          <p className="font-body text-body-md text-light-on-surface-variant text-pretty flex-1">
            End-to-end route surveys, RTO permit clearances, and escort vehicles for heavy
            industrial machinery, transformers, and structural steel.
          </p>
          <footer className="pt-3 border-t border-light-outline-variant">
            <button
              type="button"
              onClick={() => onNavigate('contact', 'Project & ODC Heavy Haulage')}
              className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
            >
              <span>Plan Project Move</span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </footer>
        </article>

        <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 gap-2 lg:gap-4">
          <header className="flex items-start justify-between gap-3">
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-lg lg:text-headline-md text-light-on-surface">
                Cold Chain Reefers
              </h2>
              <p className="font-label text-label-sm text-light-on-surface-variant">
                -20°C to +15°C thermal control
              </p>
            </div>
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary"
              aria-hidden="true"
            >
              ac_unit
            </span>
          </header>
          <p className="font-body text-body-md text-light-on-surface-variant text-pretty flex-1">
            Insulated refrigerated trucks with continuous temperature logging for pharmaceuticals,
            biologics, dairy, and perishable retail supply chains.
          </p>
          <footer className="pt-3 border-t border-light-outline-variant">
            <button
              type="button"
              onClick={() => onNavigate('contact', 'Cold Chain Reefer (-20°C to +15°C)')}
              className="inline-flex items-center gap-1.5 font-label text-label-lg text-light-primary hover:text-light-secondary transition-colors duration-state-change cursor-pointer"
            >
              <span>Book Reefer Fleet</span>
              <span className="material-symbols-outlined text-title-md" aria-hidden="true">
                arrow_forward
              </span>
            </button>
          </footer>
        </article>
      </section>
    </>
  );
}
