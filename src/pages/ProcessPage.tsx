import { IMAGES } from '../data/logisticsData';
import { SafeImage } from '../components/SafeImage';

export function ProcessPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-light-primary text-light-on-primary py-8 lg:py-14">
        <div className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg flex flex-col gap-2 lg:gap-3">
          <span className="font-label text-label-sm lg:text-label-lg text-light-secondary-container">
            Standard Operating Process
          </span>
          <h1 className="font-headline text-display-lg-mobile lg:text-display-lg text-light-on-primary text-balance max-w-3xl">
            Four disciplined steps from dock pickup to signed POD.
          </h1>
          <p className="font-body text-body-md lg:text-body-lg text-light-inverse-on-surface max-w-2xl text-pretty">
            Every consignment follows a standardized dispatch checklist so nothing is left to
            chance on the highway.
          </p>
        </div>
      </section>

      {/* Process Steps & Dispatch Image */}
      <section className="max-w-7xl mx-auto px-gutter-md lg:px-gutter-lg py-8 lg:py-section grid grid-cols-1 lg:grid-cols-12 gap-gutter-lg lg:gap-gutter-xl items-center">
        <div className="lg:col-span-7 flex flex-col gap-gutter-md">
          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex items-start gap-4">
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-secondary mt-0.5"
              aria-hidden="true"
            >
              assignment
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-md lg:text-title-lg text-light-on-surface">
                Step 1: Load Assessment &amp; Vehicle Allocation
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Our dispatch desk confirms cargo dimensions, weight, and corridor SLA, assigning the
                optimal BS-VI truck within 30 minutes.
              </p>
            </div>
          </div>

          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex items-start gap-4">
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary mt-0.5"
              aria-hidden="true"
            >
              verified
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-md lg:text-title-lg text-light-on-surface">
                Step 2: Dock Inspection, E-Waybill &amp; Sealing
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Cargo is weighed, barcoded, and secured with tamper-evident container seals
                alongside verified e-Waybill and LR documentation.
              </p>
            </div>
          </div>

          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex items-start gap-4">
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-light-primary mt-0.5"
              aria-hidden="true"
            >
              route
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-md lg:text-title-lg text-light-on-surface">
                Step 3: Scheduled Highway Line-Haul
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Dual-driver relay teams run on pre-approved highway corridors with scheduled hub
                check-ins and strict rest-stop compliance.
              </p>
            </div>
          </div>

          <div className="rounded-md bg-light-surface-container-lowest border border-light-outline-variant p-4 lg:p-6 flex items-start gap-4">
            <span
              className="material-symbols-outlined text-title-lg lg:text-headline-md text-brand-green mt-0.5"
              aria-hidden="true"
            >
              task_alt
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline text-title-md lg:text-title-lg text-light-on-surface">
                Step 4: Unloading &amp; Digital Proof of Delivery
              </h2>
              <p className="font-body text-body-md text-light-on-surface-variant">
                Consignee inspection is completed at destination dock, followed by instant digital
                POD upload for fast billing reconciliation.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-lg overflow-hidden border border-light-outline-variant shadow-sm aspect-[4/3]">
            <SafeImage
              src={IMAGES.processDispatchControl}
              alt="OSS Logistics coordinator inspecting cargo loading at dock"
              className="w-full h-full object-cover"
              fallbackIcon="fact_check"
              fallbackLabel="Dock Dispatch & Inspection"
            />
          </div>
        </div>
      </section>
    </>
  );
}
