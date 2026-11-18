
import React from "react";

const EMAIL = "langtonsmithclinic@hotmail.co.uk";

const Section = ({ number, title, children }) => (
  <section className="tw-border-b tw-border-[var(--training-border)] tw-py-8 last:tw-border-0">
    <div className="tw-flex tw-gap-4">
      <span className="tw-flex tw-mt-5 tw-h-9 tw-w-9 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[var(--training-soft-accent)] tw-text-sm tw-font-semibold tw-text-[var(--training-heading)]">
        {number}
      </span>
      <div className="tw-min-w-0 tw-flex-1">
        <h2 className="tw-mb-4 tw-text-xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-2xl">
          {title}
        </h2>
        <div className="tw-space-y-4 tw-leading-8 tw-text-[var(--training-body)]">
          {children}
        </div>
      </div>
    </div>
  </section>
);

const DetailCard = ({ title, children }) => (
  <div className="tw-rounded-xl tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-card)] tw-p-5 tw-shadow-sm">
    <h3 className="tw-mb-2 tw-font-semibold tw-text-[var(--training-heading)]">
      {title}
    </h3>
    <p className="tw-text-sm tw-leading-7 tw-text-[var(--training-body)]">
      {children}
    </p>
  </div>
);

export default function BioresonancePractitionerTrainingPart1({ concept = "a" }) {
  const isConceptA = concept === "a";

  return (
    <main
      className="ls-mock-root tw-min-h-screen tw-bg-[var(--training-page)] tw-text-[var(--training-body)]"
      style={{
        "--training-page": isConceptA ? "#F6F3ED" : "#FAFAF7",
        "--training-hero": isConceptA ? "#FFFFFF" : "#1F303A",
        "--training-heading": isConceptA ? "#2F5147" : "#14545A",
        "--training-body": isConceptA ? "#303832" : "#303B40",
        "--training-accent": isConceptA ? "#C58F75" : "#B99A62",
        "--training-soft": isConceptA ? "#F6F3ED" : "#EEF3F2",
        "--training-soft-accent": isConceptA ? "#E9EEE8" : "#A8CDC4",
        "--training-card": isConceptA ? "#FFFFFF" : "#FAFAF7",
        "--training-border": isConceptA ? "#E0DCD3" : "#D5E2DF",
        "--training-on-hero": isConceptA ? "#2F5147" : "#FAFAF7",
        "--training-hero-muted": isConceptA ? "#415546" : "#EEF3F2",
        "--training-heading-font": isConceptA
          ? "'Cormorant Garamond', Georgia, serif"
          : "'Manrope', Inter, sans-serif",
      }}
    >
      <style>{`
        .ls-mock-root h1,
        .ls-mock-root h2,
        .ls-mock-root h3 {
          font-family: var(--training-heading-font);
        }
      `}</style>

      {/* Hero Section */}
      <section className="tw-bg-[var(--training-hero)] tw-text-[var(--training-on-hero)]">
        <div className="tw-mx-auto tw-max-w-6xl tw-px-5 tw-py-10 md:tw-py-14">
          <p className="tw-mb-5 tw-text-sm tw-uppercase tw-tracking-[0.2em] tw-text-[var(--training-accent)]">
            Certificated Course Information
          </p>

          <h1 className="tw-max-w-4xl tw-text-3xl tw-font-semibold tw-leading-tight md:tw-text-5xl">
            Langton Smith Bioresonance Professional Practitioner Training
          </h1>

          <p className="tw-mt-5 tw-text-xl tw-text-[var(--training-hero-muted)] md:tw-text-2xl">
            Part 1 Training – Foundation Course
          </p>

          <p className="tw-mt-6 tw-max-w-3xl tw-leading-8 tw-text-[var(--training-hero-muted)]">
            Bespoke, intensive one-to-one training for practitioners who want
            to create a tailored business model for their clinic practice
            based on bioresonance/biofeedback therapy.
          </p>

          <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%201`}
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-[var(--training-card)] tw-px-7 tw-py-3 tw-font-semibold tw-text-[var(--training-heading)] tw-transition hover:tw-bg-[var(--training-soft)]"
            >
              Register for the Course
            </a>

            <a
              href={`mailto:${EMAIL}?subject=Bioresonance%20Training%20Enquiry`}
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-[var(--training-on-hero)]/50 tw-px-7 tw-py-3 tw-font-medium tw-text-[var(--training-on-hero)] tw-transition hover:tw-bg-[#14545a]"
            >
              Make an Enquiry
            </a>
          </div>
        </div>
      </section>

      <div className="tw-mx-auto tw-max-w-6xl tw-px-5 tw-py-12 md:tw-py-16">

        {/* Course Overview Cards */}
        <div className="tw-mb-10 tw-grid tw-grid-cols-1 tw-gap-5 md:tw-grid-cols-3">
          <DetailCard title="Course Format">
            One-to-one, online and interactive training delivered via Zoom.
          </DetailCard>

          <DetailCard title="Course Duration">
            Five one-hour sessions, normally weekly and completed over 6–8 weeks.
          </DetailCard>

          <DetailCard title="Course Investment">
            £1,250.00 – British Pounds Sterling.
          </DetailCard>
        </div>

        <div className="tw-rounded-2xl tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-card)] tw-p-6 tw-shadow-sm md:tw-p-10">

          {/* 01 Introduction */}
          <Section number="01" title="Course Introduction">
            <p>
              This bespoke training is for practitioners who want to create a
              tailored business model for their clinic practice based on
              bioresonance/biofeedback therapy. The courses are offered on a
              one-to-one basis and form an intensive programme.
            </p>

            <p>
              A bioresonance device is required. Devices can be supplied by
              Langton Smith.
            </p>
          </Section>

          {/* 02 Prerequisites */}
          <Section number="02" title="Prerequisites">
            <p>
              Knowledge of Anatomy, Physiology and Pathology or Human Biology
              is a prerequisite for Part 1.
            </p>

            <p>
              Knowledge and understanding of Anatomy, Physiology and Pathology
              (Human Biology), as well as Nutrition, is required for Part 2
              clinical health training.
            </p>
          </Section>

          {/* 03 Delivery */}
          <Section number="03" title="How Is the Training Delivered?">
            <p>
              All training is delivered online via Zoom and is available to
              practitioners across the world.
            </p>

            <p>
              Each part consists of five one-hour sessions on a one-to-one
              basis via Zoom. Both the trainer's bioresonance device and the
              practitioner student's device are shared for verification.
            </p>

            <p>
              Case studies are required for both Part 1 and Part 2. The
              practitioner will be sent details of the course requirements at
              the start of each module.
            </p>

            <p className="tw-font-medium tw-text-[var(--training-heading)]">
              Case studies must exclude family and friends.
            </p>
          </Section>

          {/* 04 Part 1 Training */}
          <Section
            number="04"
            title="Professional Bioresonance Training – Part 1"
          >
            <h3 className="tw-font-semibold tw-text-[var(--training-heading)]">
              Introductory Bioresonance Practitioner Training
            </h3>

            <p>
              Foundation training for Food Sensitivity, intolerances and
              allergies, together with Vitamin and Mineral Testing.
            </p>

            <p>Examples of tests included in the training are:</p>

            <ul className="tw-list-disc tw-space-y-2 tw-pl-6">
              <li>Dairy and lactose testing</li>
              <li>Vegan testing</li>
              <li>Wheat and gluten testing</li>
              <li>Full food testing</li>
              <li>Vitamin and mineral deficiency testing</li>
            </ul>

            <p>
              Vitamin and mineral deficiency testing offers a ‘Wellness’ test
              for overall nutritional benefit.
            </p>

            <p className="tw-font-medium tw-text-[var(--training-heading)]">
              Two case studies are required. Family and close friends are
              excluded.
            </p>
          </Section>

          {/* 05 Practitioner Development */}
          <Section
            number="05"
            title="Continued Professional Practitioner Development"
          >
            <p>
              Continued Professional Practitioner Development and refresher
              update training is recommended on an annual basis.
            </p>

            <p>
              This is bespoke training and covers the updates needed for the
              practitioner's clinic, practice or business.
            </p>
          </Section>

          {/* 06 Training Approach */}
          <Section
            number="06"
            title="Training Approach and Clinical Practice"
          >
            <p>
              It is important to understand that bioresonance is based on
              energy and intention. As a practitioner, you will need to be
              focused on what you need to achieve from the test. This can be
              covered during the training.
            </p>

            <p>
              Tests are symptom-related and all results are correlated to
              assist the patient/client towards wellness.
            </p>

            <p>
              Each practitioner needs to have some idea of what they want to
              achieve so that the training can be tailored to their practice
              and business model.
            </p>

            <p>
              If you are undertaking Part 1 training, it is advisable to
              choose no more than three different types of tests to perform
              from scratch.
            </p>

            <p>
              The training covers creating templates to place the results,
              interpreting results to provide an assessment and prognosis,
              and identifying any remedies needed, whether made by the device
              or sourced externally, such as herbs and vitamins.
            </p>

            <p>Two case studies will be required.</p>
          </Section>

          {/* 07 Pricing */}
          <section className="tw-border-b tw-border-[var(--training-border)] tw-py-10">
            <div className="tw-rounded-2xl tw-bg-[var(--training-heading)] tw-p-7 tw-text-white md:tw-p-10">
              <p className="tw-text-sm tw-uppercase tw-tracking-widest tw-text-[var(--training-accent)]">
                Course Investment
              </p>

              <h2 className="tw-mt-3 tw-text-2xl tw-font-semibold md:tw-text-3xl">
                Part 1 – Foundation Course
              </h2>

              <div className="tw-mt-6 tw-text-4xl tw-font-semibold md:tw-text-5xl">
                £1,250.00
              </div>

              <p className="tw-mt-2 ]">
                British Pounds Sterling
              </p>

              <div className="tw-mt-2 tw-grid tw-grid-cols-1 tw-gap-5 tw-border-t tw-border-white/20 tw-pt-2 sm:tw-grid-cols-2">
                <div>
                  <p className="tw-text-sm tw-text-[var(--training-accent)]">
                    Sessions
                  </p>
                  <p className="tw-mt-1 tw-font-semibold">
                    5 × 1-hour sessions
                  </p>
                </div>

                <div>
                  <p className="tw-text-sm tw-text-[var(--training-accent)]">
                    Delivery
                  </p>
                  <p className="tw-mt-1 tw-font-semibold">
                    Interactive Zoom training
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 08 Duration */}
          <Section number="08" title="Course Duration and Scheduling">
            <p>
              The course sessions are normally weekly but can be covered over
              a 6 to 8 week period, allowing for case studies to be completed.
            </p>
          </Section>

          {/* 09 Inclusions */}
          <Section number="09" title="What Is Included in the Training?">
            <p>
              The training includes creating templates made from a
              comprehensive database and preparing letter templates to place
              the results on, with guidance for patients to understand the
              meaning of the results at a glance.
            </p>

            <p>
              This course does not have a blueprint, as it is designed to
              work with the individual needs of the practitioner.
            </p>

            <p>
              The training is dependent on the type of device you have, so
              please check before undertaking the course as some devices have
              pre-made templates.
            </p>

            <p>
              If you do not have a device, it is recommended that you discuss
              your requirements before purchasing.
            </p>
          </Section>

          {/* 10 Registration */}
          <section className="tw-border-b tw-border-[var(--training-border)] tw-py-10">
            <h2 className="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-3xl">
              Register for the Course
            </h2>

            <div className="tw-rounded-xl tw-bg-[var(--training-soft)] tw-p-6 md:tw-p-8">
              <p className="tw-leading-8 tw-text-[var(--training-body)]">
                Complete the registration form and send it to the email
                address below. An invoice will be issued for payment and a
                date for the course to commence will be agreed.
              </p>

              <a
                href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%201`}
                className="tw-mt-5 tw-inline-block tw-break-all tw-font-semibold tw-text-[var(--training-heading)] tw-underline tw-underline-offset-4"
              >
                {EMAIL}
              </a>

              <div className="tw-mt-6">
                <a
                  href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%201`}
                  className="tw-inline-flex tw-rounded-lg tw-bg-[var(--training-heading)] tw-px-7 tw-py-3 tw-font-semibold tw-text-white tw-transition hover:tw-opacity-90"
                >
                  Enquire About Part 1 Training
                </a>
              </div>
            </div>
          </section>

          {/* 11 Disclaimer */}
          <section className="tw-pt-10">
            <h2 className="tw-mb-5 tw-text-xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-2xl">
              Bioresonance Therapy Disclaimer Information for All Practitioners
            </h2>

            <div className="tw-rounded-r-xl tw-border-l-4 tw-border-[var(--training-soft-accent)] tw-bg-[var(--training-page)] tw-p-6">
              <h3 className="tw-mb-3 tw-font-semibold tw-text-[var(--training-heading)]">
                Professional Disclaimer
              </h3>

              <p className="tw-leading-8 tw-text-[var(--training-body)]">
                Please note that this is complementary medicine and does not
                form part of any conventional medical process. Julie
                Langton-Smith has been practising since 1997 as a nutritional
                healthcare practitioner specialising in
                BioResonance/BioFeedback Therapy, which is based on a
                bioresonance scanning device that Julie is fully qualified and
                trained in using. Many patients like this therapy as they have
                found it helpful, non-invasive and feel that it allows them
                some control over looking after their own health naturally.
                However, if you are unsure of your health in any way or
                suffering any serious health condition, it is always
                recommended that you seek medical advice from your GP.
              </p>
            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <section className="tw-py-14 tw-text-center">
          <h2 className="tw-text-2xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-3xl">
            Interested in Practitioner Training?
          </h2>

          <p className="tw-mx-auto tw-mt-4 tw-max-w-xl tw-leading-7 tw-text-[var(--training-body)]">
            Contact Julie Langton-Smith to discuss your requirements and how
            the Foundation Course can be tailored to your practice.
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%201`}
            className="tw-mt-7 tw-inline-flex tw-rounded-lg tw-bg-[var(--training-heading)] tw-px-8 tw-py-3 tw-font-semibold tw-text-white tw-transition hover:tw-opacity-90"
          >
            Contact Us
          </a>
        </section>

      </div>
    </main>
  );
}
