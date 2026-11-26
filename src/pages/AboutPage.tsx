import { IMAGES } from '../data/logisticsData';
import { SafeImage } from '../components/SafeImage';

export function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            About OSS Logistics LLP
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            Moving industrial India with discipline, safety, and accountability.
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Founded to bring predictable transit schedules and transparent road freight operations to
            manufacturers, distributors, and enterprise supply chains.
          </p>
        </div>
      </section>

      {/* Company Story & Hub Image */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg lg:gap-gutter-xl items-center">
        <div className="lg:col-span-6 flex flex-col gap-gutter-md">
          <span className="font-label text-label-lg text-light-secondary">Who We Are</span>
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Built on own-fleet control and regional cross-docking hubs.
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
            OSS Logistics LLP operates a modern fleet of 450+ commercial vehicles across 28 regional
            hubs. Unlike pure freight brokers, we manage our own highway corridors, driver relay
            teams, and standardized loading protocols so every consignment arrives intact and on
            time.
          </p>
          <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
            Guided by our core promise—Faster, Safer, Greener—we invest continuously in BS-VI
            low-emission trucks, CNG metro distribution vans, and digital documentation.
          </p>
        </div>
        <div className="lg:col-span-6">
          <div className="rounded-lg overflow-hidden border border-light-outline-variant shadow-sm aspect-[16/9]">
            <SafeImage
              src={IMAGES.aboutHubOperations}
              alt="OSS Logistics regional hub and fleet yard"
              className="w-full h-full object-cover"
              fallbackIcon="warehouse"
              fallbackLabel="Regional Cross-Dock Hub Operations"
            />
          </div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="bg-light-surface-container-low border-y border-light-outline-variant py-8 lg:py-section">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg grid grid-cols-1 lg:grid-cols-3 gap-gutter-md lg:gap-gutter-lg items-stretch">
          <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-6 gap-4">
            <header className="flex items-start justify-between gap-3">
              <h3 className="font-headline text-title-lg text-light-on-surface">Our Mission</h3>
              <span
                className="material-symbols-outlined text-headline-md text-light-primary"
                aria-hidden="true"
              >
                flag
              </span>
            </header>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Deliver reliable, schedule-driven road transport across every major industrial corridor
              while lowering per-ton emissions.
            </p>
          </article>

          <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-6 gap-4">
            <header className="flex items-start justify-between gap-3">
              <h3 className="font-headline text-title-lg text-light-on-surface">Our Vision</h3>
              <span
                className="material-symbols-outlined text-headline-md text-light-secondary"
                aria-hidden="true"
              >
                visibility
              </span>
            </header>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              To be India’s most trusted road logistics partner for B2B enterprises, known for
              zero-damage handling and 99%+ on-time delivery.
            </p>
          </article>

          <article className="h-full flex flex-col rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-6 gap-4">
            <header className="flex items-start justify-between gap-3">
              <h3 className="font-headline text-title-lg text-light-on-surface">Core Values</h3>
              <span
                className="material-symbols-outlined text-headline-md text-brand-green"
                aria-hidden="true"
              >
                eco
              </span>
            </header>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              Driver welfare, cargo integrity, transparent pricing, and measurable fuel efficiency
              across every kilometer.
            </p>
          </article>
        </div>
      </section>
    </>
  );
}
