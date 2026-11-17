
import React, { useState } from "react";

export default function SleepHypnosisVideo() {
  const [isPlaying, setIsPlaying] = useState(false);

  const videoId = "WksMC6qqiI8";

  return (
    <section className="tw-w-full tw-min-w-0">
      <div className="tw-mx-auto tw-w-full tw-max-w-[480px] tw-overflow-hidden tw-rounded-[16px] tw-border tw-border-[#e7e2d9] tw-bg-white tw-shadow-[0_8px_25px_rgba(40,60,50,0.07)]">

        {/* Compact Header */}
        <div className="tw-relative tw-overflow-hidden tw-bg-[#30483e] tw-px-5 tw-pt-4">

          <div className="tw-pointer-events-none tw-absolute -tw-right-8 -tw-top-10 tw-h-32 tw-w-32 tw-rounded-full tw-border tw-border-white/10" />

          <div className="tw-relative tw-z-10">

            <span className="tw-inline-flex tw-items-center tw-gap-2 tw-rounded-full tw-border tw-border-white/15 tw-bg-white/10 tw-px-2.5 tw-py-1 tw-text-[9px] tw-font-semibold tw-uppercase tw-tracking-[0.15em] tw-text-[#ead8c9]">
              <span className="tw-h-1.5 tw-w-1.5 tw-rounded-full tw-bg-[#d6ae91]" />
              Sleep & Relaxation
            </span>

            <h2 className="tw-mt-2 tw-font-serif tw-text-[22px] tw-leading-tight tw-text-white">
              Sleep Hypnosis for Insomnia
            </h2>

          </div>
        </div>

        {/* Video */}
        <div className="tw-p-3 sm:tw-p-4">

          <div className="tw-group tw-relative tw-w-full tw-aspect-video tw-overflow-hidden tw-rounded-lg tw-bg-[#17251f]">

            {!isPlaying ? (
              <>
                <img
                  src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                  alt="Sleep Hypnosis for Insomnia by Julie Langton Smith"
                  className="tw-absolute tw-inset-0 tw-h-full tw-w-full tw-object-cover tw-transition-transform tw-duration-500 group-hover:tw-scale-105"
                />

                <div className="tw-absolute tw-inset-0 tw-bg-black/25 tw-transition-colors group-hover:tw-bg-black/40" />

                {/* Play Button */}
                <button
                  type="button"
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play Sleep Hypnosis video"
                  className="tw-absolute tw-inset-0 tw-flex tw-items-center tw-justify-center"
                >
                  <span className="tw-flex tw-h-12 tw-w-12 tw-items-center tw-justify-center tw-rounded-full tw-border tw-border-white/60 tw-bg-white/20 tw-text-white tw-shadow-lg tw-backdrop-blur-md tw-transition-transform tw-duration-300 group-hover:tw-scale-110 group-hover:tw-bg-white/30">

                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path d="M7 4.8c0-.8.9-1.3 1.6-.9l11 7.1c.7.4.7 1.5 0 2l-11 7.1c-.7.4-1.6-.1-1.6-.9V4.8Z" />
                    </svg>

                  </span>
                </button>

                <span className="tw-absolute tw-bottom-3 tw-left-3 tw-rounded tw-bg-black/50 tw-px-2.5 tw-py-1 tw-text-[9px] tw-font-semibold tw-tracking-wider tw-text-white tw-backdrop-blur-sm">
                  WATCH VIDEO
                </span>
              </>
            ) : (
              <iframe
                className="tw-absolute tw-inset-0 tw-h-full tw-w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                title="Sleep Hypnosis for Insomnia by Julie Langton Smith MSc"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}

          </div>

          {/* Compact Footer */}
          <div className="tw-mt-3 tw-flex tw-items-center tw-justify-between tw-gap-2">

            <div className="tw-flex tw-min-w-0 tw-items-center tw-gap-2">

              <span className="tw-flex tw-h-7 tw-w-7 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#f5f1eb]">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#a77b60"
                  strokeWidth="1.7"
                >
                  <path d="M12 3v2m0 14v2M5.64 5.64l1.42 1.42m9.88 9.88 1.42 1.42M3 12h2m14 0h2" />
                  <circle cx="12" cy="12" r="5" />
                </svg>
              </span>

              <span className="tw-truncate tw-text-[10px] tw-font-medium tw-text-[#53645a]">
                Sleep & Relaxation Recording
              </span>

            </div>

            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="tw-inline-flex tw-shrink-0 tw-items-center tw-gap-1 tw-text-[10px] tw-font-semibold tw-text-[#30483e] tw-transition-colors hover:tw-text-[#bd896f]"
            >
              YouTube

              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="M7 17 17 7M7 7h10v10" />
              </svg>
            </a>

          </div>

        </div>
      </div>
    </section>
  );
}
