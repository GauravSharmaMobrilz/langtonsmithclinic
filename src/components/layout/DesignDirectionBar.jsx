
import { Layers, LayoutGrid, Sparkles } from "lucide-react";

export default function DesignDirectionBar({
  activeConcept,
  setActiveConcept,
}) {
  return (
    <aside
      aria-label="Design direction approval bar"
      className="tw-sticky tw-top-0 tw-z-50 tw-border-b tw-border-slate-700
        tw-bg-[#243d36] tw-px-3 tw-py-1.5 tw-text-xs tw-text-white tw-shadow-md"
    >
      <div className="tw-mx-auto tw-flex tw-max-w-7xl tw-flex-col
        tw-items-center tw-justify-between tw-gap-1.5
        tw-text-center sm:tw-flex-row sm:tw-gap-3 sm:tw-text-left"
      >
        {/* Design Direction Label */}
        <div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
          <div className="tw-flex tw-items-center tw-gap-1.5
            tw-text-[11px] tw-font-bold tw-uppercase tw-tracking-wide
            tw-text-amber-400"
          >
            <Layers className="tw-h-3.5 tw-w-3.5" />
            <span>Design Direction:</span>
          </div>

          {/* <span className="tw-hidden tw-text-[11px] tw-text-slate-300 md:tw-inline">
            Option A: Promotional Merchandise Storefront
            (4imprint UX Benchmark)
          </span> */}
        </div>

        {/* Option Switcher */}
       
{/* Option Switcher */}
<div className="tw-flex tw-items-center tw-justify-center tw-gap-2">
  <div className="tw-inline-flex tw-rounded-lg tw-border
    tw-border-slate-600 tw-bg-slate-800 tw-p-1 tw-gap-4 "
  >
    <button
      type="button"
      onClick={() => setActiveConcept("a")}
      aria-pressed={activeConcept === "a"}
      className={`tw-flex tw-items-center tw-gap-1.5 tw-cursor-pointer
        tw-rounded-md tw-px-3 tw-py-1.5
        tw-text-[11px] tw-font-bold tw-transition-all
        tw-duration-200 tw-whitespace-nowrap ${
          activeConcept === "a"
            ? "tw-bg-sky-600 tw-text-white tw-shadow-md tw-ring-1 tw-ring-sky-400"
            : "tw-bg-slate-700 tw-text-slate-200 hover:tw-bg-slate-600 hover:tw-text-white"
        }`}
    >
      <LayoutGrid className="tw-h-3.5 tw-w-3.5" />
      <span>Option A</span>
    </button>

    <button
      type="button"
      onClick={() => setActiveConcept("b")}
      aria-pressed={activeConcept === "b"}
      className={`tw-flex tw-items-center tw-gap-1.5 tw-cursor-pointer
        tw-rounded-md tw-px-3 tw-py-1.5
        tw-text-[11px] tw-font-bold tw-transition-all
        tw-duration-200 tw-whitespace-nowrap ${
          activeConcept === "b"
            ? "tw-bg-sky-600 tw-text-white tw-shadow-md tw-ring-1 tw-ring-sky-400"
            : "tw-bg-slate-700 tw-text-slate-200 hover:tw-bg-slate-600 hover:tw-text-white"
        }`}
    >
      <Sparkles className="tw-h-3.5 tw-w-3.5" />
      <span>Option B</span>
    </button>
  </div>
</div>

      </div>
    </aside>
  );
}
