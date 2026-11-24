
import React from 'react'
import SectionContainer from './SectionContainer'
import Button from './Button'
import { useRouter } from '../../context/RouterContext'

export default function FullHealthTestSection() {
  const { navigate, openModal } = useRouter()
  // const paymentMethods = [
  //   'Bank transfer (BACS)',
  //   'Cheque',
  // ]

  return (
    <SectionContainer
      id="full-health-test"
      className="tw-bg-[#f6f3ed] tw-py-12 sm:tw-py-16"
    >
      <div className="tw-overflow-hidden tw-rounded-[20px] tw-border tw-border-[#e8e2d9] tw-bg-white">

        <div className="tw-p-6 sm:tw-p-9 lg:tw-p-10">

          {/* Header */}
          <div className="tw-mb-9">
            <div className="tw-mb-4 tw-flex tw-items-center tw-gap-2">
              <span className="tw-flex tw-h-9 tw-w-9 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#f8eee8] tw-text-[#bd896f]">
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                >
                  <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.8-7.5 1.1-1.1a5.5 5.5 0 0 0-.1-7.8Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </span>

              <span className="tw-text-[11px] tw-font-semibold tw-uppercase tw-tracking-[1.8px] tw-text-[#bd896f]">
                Comprehensive Health Assessment
              </span>
            </div>

            <h2 className="tw-font-serif tw-text-[27px] tw-leading-tight tw-text-[#174c49] sm:tw-text-[32px]">
              Full Health Test
            </h2>

            <p className="tw-mt-3 tw-max-w-[760px] tw-text-[14px] tw-leading-7 tw-text-[#62676a] sm:tw-text-[15px]">
              A full health test is available for clients wishing to
              undertake a comprehensive health assessment. An invoice
              will be issued for the full health test.
            </p>
          </div>

          {/* Main Content */}
          <div className="tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-[1.15fr_0.85fr]">

            {/* Payment Methods */}
            <div className="tw-rounded-xl tw-border tw-border-[#eae5dc] tw-bg-[#fcfbf9] tw-p-6 sm:tw-p-7">

              <div className="tw-mb-6">
                <h3 className="tw-font-serif tw-text-[21px] tw-text-[#174c49]">
                  Payment Methods
                </h3>

                <p className="tw-mt-2 tw-text-[13px] tw-leading-6 tw-text-[#777b7c]">
                  {/* Payment can be made using either of the following methods. */}
                  payment is made upon receipt of an invoice after submission of the Bioresonance health form.
                </p>
                <Button onClick={() => openModal('health-form')} variant="primary" >
                  Bioresonance Health Form
                </Button>
              </div>


              {/* <div className="tw-space-y-3">
                {paymentMethods.map((method) => (
                  <div
                    key={method}
                    className="tw-flex tw-items-center tw-gap-3 tw-rounded-lg tw-border tw-border-[#eee8df] tw-bg-white tw-p-4"
                  >
                    <span className="tw-flex tw-h-8 tw-w-8 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[#f8eee8] tw-text-[#bd896f]">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>

                    <span className="tw-text-[14px] tw-font-medium tw-text-[#42494b]">
                      {method}
                    </span>
                  </div>
                ))}
              </div> */}
            </div>

            {/* Fee Card */}
            <div className="tw-relative tw-flex tw-flex-col tw-justify-between tw-overflow-hidden tw-rounded-xl tw-bg-[#174c49] tw-p-6 sm:tw-p-7">

              <div className="tw-absolute -tw-right-12 -tw-top-12 tw-h-44 tw-w-44 tw-rounded-full tw-border tw-border-white/10" />
              <div className="tw-absolute -tw-right-5 -tw-top-5 tw-h-28 tw-w-28 tw-rounded-full tw-border tw-border-white/10" />

              <div className="tw-relative">
                <span className="tw-text-[11px] tw-font-semibold tw-uppercase tw-tracking-[1.8px] tw-text-[#d7b39e]">
                  Full Health Test Fee
                </span>

                <div className="tw-mt-5 tw-font-serif tw-text-[54px] tw-leading-none tw-text-white sm:tw-text-[62px]">
                  £300
                </div>

                <p className="tw-mt-3 tw-text-[13px] tw-text-[#d9e4df]">
                  Comprehensive health assessment
                </p>
              </div>

              <div className="tw-relative tw-mt-0 tw-border-t tw-border-white/20 tw-pt-5">
                <div className="tw-flex tw-items-center tw-gap-2 tw-text-[13px] tw-font-medium tw-text-white">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.7"
                  >
                    <rect x="3" y="5" width="18" height="15" rx="2" />
                    <path d="M3 10h18M7 15h3" />
                  </svg>
                  Invoice issued for the test
                </div>
              </div>
            </div>

          </div>

          {/* Invoice Information */}
          <div className="tw-mt-6 tw-flex tw-flex-col tw-gap-4 tw-rounded-xl tw-border tw-border-[#eee6dc] tw-bg-[#f8f6f1] tw-p-5 sm:tw-flex-row sm:tw-items-start sm:tw-p-6">

            <div className="tw-flex tw-h-10 tw-w-10 tw-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-white tw-text-[#bd896f]">
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                <path d="M14 2v6h6M8 13h8M8 17h8" />
              </svg>
            </div>

            <div>
              <h3 className="tw-font-serif tw-text-[19px] tw-text-[#174c49]">
                Invoice Information
              </h3>

              <p className="tw-mt-2 tw-text-[13px] tw-leading-6 tw-text-[#62676a]">
                An invoice will be issued for the full health test.
                Payment is due upon receipt of invoice. Payment can
                be made by BACS or cheque.
              </p>
            </div>

          </div>

        </div>

        {/* Bottom Footer */}
        <div className="tw-border-t tw-border-[#e8e2d9] tw-px-6 tw-py-5 sm:tw-px-10">
          <div className="tw-flex tw-flex-col tw-gap-2 sm:tw-flex-row sm:tw-items-center sm:tw-justify-between">
            <p className="tw-text-[13px] tw-text-[#62676a]">
              Full Health Test –{' '}
              <strong className="tw-font-semibold tw-text-[#174c49]">
                £300
              </strong>
            </p>

            <span className="tw-inline-flex tw-items-center tw-gap-2 tw-text-[12px] tw-font-medium tw-text-[#174c49]">
              <span className="tw-text-[#bd896f]">✓</span>
              Payment due upon receipt of invoice
            </span>
          </div>
        </div>

      </div>
    </SectionContainer>
  )
}
