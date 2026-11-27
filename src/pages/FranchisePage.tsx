import { FormEvent, useState } from 'react';

interface FranchiseFormState {
  fullName: string;
  targetCity: string;
  phone: string;
  availableSpace: string;
}

export function FranchisePage() {
  const [form, setForm] = useState<FranchiseFormState>({
    fullName: '',
    targetCity: '',
    phone: '',
    availableSpace: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!form.fullName.trim() || !form.targetCity.trim() || !form.phone.trim()) {
      setError('Please enter your full name, target city or district, and phone number.');
      return;
    }
    const digits = form.phone.replace(/\D/g, '');
    if (digits.length < 7) {
      setError('Please provide a valid phone number so our regional expansion lead can reach you.');
      return;
    }
    setError(null);
    setSubmittedRef(`OSS-FR-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const handleReset = () => {
    setForm({ fullName: '', targetCity: '', phone: '', availableSpace: '' });
    setSubmittedRef(null);
    setError(null);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            Franchise &amp; Hub Partnership
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            Build a profitable road logistics hub with OSS Logistics .
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Partner with an established national road transport network. Operate an authorized
            booking &amp; dispatch center in your industrial district with full fleet backing.
          </p>
        </div>
      </section>

      {/* Benefits & Inquiry Grid */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg lg:gap-gutter-xl items-start">
        <div className="lg:col-span-6 flex flex-col gap-gutter-md lg:gap-gutter-lg">
          <h2 className="font-headline text-headline-lg-mobile lg:text-headline-lg text-light-on-surface text-balance">
            Why partner with OSS Logistics?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md">
            <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-secondary"
                aria-hidden="true"
              >
                hub
              </span>
              <h3 className="font-headline text-title-md text-light-on-surface">
                Protected Territory
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Exclusive district-level booking rights and guaranteed line-haul connectivity.
              </p>
            </div>
            <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary"
                aria-hidden="true"
              >
                local_shipping
              </span>
              <h3 className="font-headline text-title-md text-light-on-surface">
                Ready Fleet Access
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Tap into 450+ FTL &amp; PTL trucks without owning heavy commercial vehicles.
              </p>
            </div>
            <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-title-lg lg:text-headline-md text-brand-green"
                aria-hidden="true"
              >
                receipt_long
              </span>
              <h3 className="font-headline text-title-md text-light-on-surface">
                Digital Billing &amp; ERP
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Instant LR generation, e-Waybill integration, and automated monthly settlements.
              </p>
            </div>
            <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex flex-col gap-2">
              <span
                className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary"
                aria-hidden="true"
              >
                school
              </span>
              <h3 className="font-headline text-title-md text-light-on-surface">
                Operations Training
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Complete onboarding for hub staff, SOP manuals, and regional sales support.
              </p>
            </div>
          </div>
        </div>

        {/* Franchise Application Form */}
        <div className="lg:col-span-6 rounded-md lg:rounded-lg bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-gutter-xl shadow-sm flex flex-col gap-gutter-md">
          <h3 className="font-headline text-headline-md text-light-on-surface">
            Apply for a Franchise Hub
          </h3>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Share your city and warehouse readiness. Our franchise team responds within 48 hours.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md" noValidate>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Full name
              </span>
              <input
                type="text"
                value={form.fullName}
                onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                placeholder="Rajesh Sharma"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Target city / district
              </span>
              <input
                type="text"
                value={form.targetCity}
                onChange={(e) => setForm({ ...form, targetCity: e.target.value })}
                placeholder="e.g. Ahmedabad, GJ"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Phone number
              </span>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                placeholder="+91 98200 00000"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Available space (sq ft)
              </span>
              <input
                type="text"
                value={form.availableSpace}
                onChange={(e) => setForm({ ...form, availableSpace: e.target.value })}
                placeholder="e.g. 2,500 sq ft"
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>

            {error && (
              <div
                role="alert"
                className="sm:col-span-2 rounded bg-light-error-container p-3 border border-light-error/30 font-body text-body-md text-light-on-error-container"
              >
                {error}
              </div>
            )}

            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-light-primary text-light-on-primary font-label text-label-lg hover:bg-light-primary-container transition-colors duration-state-change cursor-pointer"
              >
                <span>Submit Franchise Inquiry</span>
              </button>
            </div>
          </form>

          {submittedRef && (
            <div
              role="status"
              className="rounded bg-light-surface-container-low p-3.5 border border-light-outline-variant flex flex-col gap-2"
            >
              <p className="font-body text-body-md text-brand-green">
                Franchise application received ({submittedRef}). Our regional expansion lead will
                contact you shortly regarding {form.targetCity}.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="self-start font-label text-label-sm text-light-primary hover:underline cursor-pointer"
              >
                Submit another application
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
