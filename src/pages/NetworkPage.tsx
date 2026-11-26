import { HUB_ZONES, PageRoute } from '../data/logisticsData';

interface NetworkPageProps {
  onNavigate: (page: PageRoute, quotePreset?: string, originCity?: string) => void;
}

export function NetworkPage({ onNavigate }: NetworkPageProps) {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            National Corridor Network
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            28 cross-dock hubs linking every major industrial belt.
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Strategic regional terminals along the Golden Quadrilateral and expressway corridors
            ensure rapid turnaround and reliable scheduled departures.
          </p>
        </div>
      </section>

      {/* Regional Zones Grid */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter-md lg:gap-gutter-lg items-stretch">
        {HUB_ZONES.map((zone) => (
          <article
            key={zone.id}
            className="h-full rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex flex-col gap-2 lg:gap-3"
          >
            <span className="font-mono text-mono-md text-light-secondary">{zone.code}</span>
            <h2 className="font-headline text-title-lg text-light-on-surface">{zone.title}</h2>
            <p className="font-body text-body-md text-light-on-surface-variant flex-1">
              {zone.hubs.join(', ')}.
            </p>
            <div className="pt-2 border-t border-light-outline-variant flex items-center justify-between gap-2">
              <span className="font-label text-label-sm text-light-primary tabular-nums">
                {zone.highlight}
              </span>
              <button
                type="button"
                onClick={() => onNavigate('contact', undefined, zone.hubs[0])}
                aria-label={`Request quote from ${zone.title}`}
                className="inline-flex items-center gap-1 font-label text-label-sm text-light-secondary hover:text-light-primary transition-colors duration-state-change cursor-pointer whitespace-nowrap"
              >
                <span>Quote</span>
                <span className="material-symbols-outlined text-body-md" aria-hidden="true">
                  arrow_forward
                </span>
              </button>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}
