import { FormEvent, useEffect, useState } from 'react';
import { COMPANY_INFO } from '../data/logisticsData';

interface ContactPageProps {
  initialLoadPreset?: string;
  initialOriginPreset?: string;
}

interface QuoteFormState {
  originCity: string;
  destinationCity: string;
  loadWeight: string;
  contactInfo: string;
}

export function ContactPage({ initialLoadPreset = '', initialOriginPreset = '' }: ContactPageProps) {
  const [form, setForm] = useState<QuoteFormState>({
    originCity: initialOriginPreset,
    destinationCity: '',
    loadWeight: initialLoadPreset,
    contactInfo: '',
  });
  const [error, setError] = useState<string | null>(null);
  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      originCity: initialOriginPreset || prev.originCity,
      loadWeight: initialLoadPreset || prev.loadWeight,
    }));
  }, [initialLoadPreset, initialOriginPreset]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (
      !form.originCity.trim() ||
      !form.destinationCity.trim() ||
      !form.loadWeight.trim() ||
      !form.contactInfo.trim()
    ) {
      setError('Please complete origin city, destination city, load & weight, and your phone or email.');
      return;
    }

    const contact = form.contactInfo.trim();
    const looksLikeEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
    const digits = contact.replace(/\D/g, '');
    if (!looksLikeEmail && digits.length < 7) {
      setError('Please enter a valid phone number or email address for the dispatch desk.');
      return;
    }

    setError(null);
    setSubmittedRef(`OSS-QT-${Math.floor(100000 + Math.random() * 900000)}`);
  };

  const handleReset = () => {
    setForm({ originCity: '', destinationCity: '', loadWeight: '', contactInfo: '' });
    setSubmittedRef(null);
    setError(null);
  };

  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            Contact &amp; Dispatch Desk
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            Request a road freight quote or reach our regional hubs.
          </h1>
        </div>
      </section>

      {/* Contact Details + Quote Form */}
      <section
        id="quote"
        className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg lg:gap-gutter-xl items-start"
      >
        <div className="order-2 lg:order-1 lg:col-span-5 flex flex-col gap-gutter-md">
          <h2 className="font-headline text-headline-md text-light-on-surface">
            Head Office &amp; 24/7 Control Desk
          </h2>
          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex items-start gap-3">
            <span
              className="material-symbols-outlined text-title-lg text-light-primary"
              aria-hidden="true"
            >
              location_on
            </span>
            <div>
              <h3 className="font-headline text-title-md text-light-on-surface">Corporate Office</h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                {COMPANY_INFO.addressFull}
              </p>
            </div>
          </div>
          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex items-start gap-3">
            <span
              className="material-symbols-outlined text-title-lg text-light-secondary"
              aria-hidden="true"
            >
              call
            </span>
            <div>
              <h3 className="font-headline text-title-md text-light-on-surface">
                Dispatch Helpline
              </h3>
              <p className="font-body text-body-md text-light-on-surface-variant tabular-nums">
                <a href="tel:+912248907200" className="hover:text-light-primary">
                  {COMPANY_INFO.phonePrimary}
                </a>{' '}
                /{' '}
                <a href="tel:+919820044120" className="hover:text-light-primary">
                  {COMPANY_INFO.phoneSecondary}
                </a>
              </p>
            </div>
          </div>
          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-5 flex items-start gap-3">
            <span
              className="material-symbols-outlined text-title-lg text-brand-green"
              aria-hidden="true"
            >
              mail
            </span>
            <div>
              <h3 className="font-headline text-title-md text-light-on-surface">Email</h3>
              <p className="font-body text-body-md text-light-on-surface-variant">
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-light-primary">
                  {COMPANY_INFO.email}
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-7 rounded-md lg:rounded-lg bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-gutter-xl shadow-sm flex flex-col gap-gutter-md">
          <h2 className="font-headline text-headline-md text-light-on-surface">
            Request a Road Freight Quote
          </h2>
          <p className="font-body text-body-md text-light-on-surface-variant">
            Share your lane and load details for a rate confirmation within 30 minutes.
          </p>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-gutter-md" noValidate>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Origin city
              </span>
              <input
                type="text"
                value={form.originCity}
                onChange={(e) => setForm({ ...form, originCity: e.target.value })}
                placeholder="e.g. Mumbai, MH"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Destination city
              </span>
              <input
                type="text"
                value={form.destinationCity}
                onChange={(e) => setForm({ ...form, destinationCity: e.target.value })}
                placeholder="e.g. Delhi NCR"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Load &amp; weight
              </span>
              <input
                type="text"
                value={form.loadWeight}
                onChange={(e) => setForm({ ...form, loadWeight: e.target.value })}
                placeholder="e.g. FTL 15 MT"
                required
                className="w-full rounded border border-light-outline-variant bg-light-surface-container-lowest px-3.5 py-2.5 font-body text-body-md text-light-on-surface focus:outline-2 focus:outline-light-primary"
              />
            </label>
            <label className="flex flex-col gap-1.5">
              <span className="font-label text-label-sm lg:text-label-lg text-light-on-surface">
                Phone or email
              </span>
              <input
                type="text"
                value={form.contactInfo}
                onChange={(e) => setForm({ ...form, contactInfo: e.target.value })}
                placeholder="+91 98200 00000"
                required
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
                <span>Request Quote</span>
              </button>
            </div>
          </form>

          {submittedRef && (
            <div
              role="status"
              className="rounded bg-light-surface-container-low p-3.5 border border-light-outline-variant flex flex-col gap-2"
            >
              <p className="font-body text-body-md text-brand-green">
                Inquiry logged ({submittedRef}) for {form.originCity} to {form.destinationCity}. Our
                regional dispatch coordinator will reach out within 30 minutes.
              </p>
              <button
                type="button"
                onClick={handleReset}
                className="self-start font-label text-label-sm text-light-primary hover:underline cursor-pointer"
              >
                Submit another quote request
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
