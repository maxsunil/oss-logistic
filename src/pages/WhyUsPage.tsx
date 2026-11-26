export function WhyUsPage() {
  const pillars = [
    {
      icon: 'speed',
      colorClass: 'text-light-secondary',
      title: 'Faster Relay Transit',
      description:
        'Dual-driver highway relay teams eliminate overnight layovers on long-haul lanes, cutting transit times by up to 30%.',
    },
    {
      icon: 'verified_user',
      colorClass: 'text-light-primary',
      title: 'Zero-Tamper Cargo Safety',
      description:
        'Weatherproof steel containers, numbered e-locks, and verified commercial drivers keep high-value freight protected.',
    },
    {
      icon: 'eco',
      colorClass: 'text-brand-green',
      title: 'Greener BS-VI & CNG Fleet',
      description:
        '100% BS-VI highway trucks and CNG urban distribution vans help lower your Scope 3 transport emissions.',
    },
    {
      icon: 'schedule',
      colorClass: 'text-light-primary',
      title: '99.2% On-Time SLA',
      description:
        'Fixed daily departures from 28 cross-dock hubs keep your manufacturing lines and retail shelves stocked.',
    },
    {
      icon: 'receipt_long',
      colorClass: 'text-light-secondary',
      title: 'Transparent Rate Cards',
      description:
        'Clear corridor pricing with zero hidden detention surprises and GST-compliant digital invoicing.',
    },
    {
      icon: 'support_agent',
      colorClass: 'text-light-primary',
      title: 'Dedicated Dispatch Desk',
      description:
        'Direct single-point account coordinators available 24/7 for urgent dispatches and POD reconciliation.',
    },
  ];

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            The OSS Advantage
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            Why enterprise shippers trust OSS Logistics LLP.
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Built around own-fleet accountability, zero-damage loading standards, and eco-compliant
            road transport.
          </p>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter-md lg:gap-gutter-lg items-stretch">
        {pillars.map((pillar) => (
          <article
            key={pillar.title}
            className="h-full rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex flex-col gap-2 lg:gap-3"
          >
            <span
              className={`material-symbols-outlined text-title-lg lg:text-headline-md ${pillar.colorClass}`}
              aria-hidden="true"
            >
              {pillar.icon}
            </span>
            <h2 className="font-headline text-title-lg text-light-on-surface">{pillar.title}</h2>
            <p className="font-body text-body-md text-light-on-surface-variant text-pretty">
              {pillar.description}
            </p>
          </article>
        ))}
      </section>
    </>
  );
}
