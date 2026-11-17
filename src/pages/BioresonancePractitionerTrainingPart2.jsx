
import React from "react";

const EMAIL = "langtonsmithclinic@hotmail.co.uk";

const Section = ({ number, title, children }) => (
  <section className="tw-border-b tw-border-[var(--training-border)] tw-py-8 last:tw-border-0">
    <div className="tw-flex tw-gap-4">
      <span className="tw-flex tw-h-9 tw-w-9 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[var(--training-soft-accent)] tw-text-sm tw-font-semibold tw-text-[var(--training-heading)]">
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

export default function BioresonancePractitionerTrainingPart2({ concept = "a" }) {
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
          : "'Manrope', Inter, sans-serif"
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
            Part 2 – Advanced Practitioner Clinical Health Course
          </p>

          <p className="tw-mt-6 tw-max-w-3xl tw-leading-8 tw-text-[var(--training-hero-muted)]">
            Advanced bespoke training for practitioners who want to expand
            their clinical testing knowledge and create a tailored business
            model for their clinic practice based on bioresonance/biofeedback
            therapy.
          </p>

          <div className="tw-mt-8 tw-flex tw-flex-wrap tw-gap-3">
            <a
              href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%202`}
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-bg-[var(--training-card)] tw-px-7 tw-py-3 tw-font-semibold tw-text-[var(--training-heading)] tw-transition hover:tw-bg-[var(--training-soft)]"
            >
              Register for the Course
            </a>

            <a
              href={`mailto:${EMAIL}?subject=Advanced%20Bioresonance%20Training%20Enquiry`}
              className="tw-inline-flex tw-items-center tw-justify-center tw-rounded-lg tw-border tw-border-[var(--training-on-hero)]/50 tw-px-7 tw-py-3 tw-font-medium tw-text-[var(--training-on-hero)] tw-transition hover:tw-bg-[var(--training-soft)]"
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
            Bespoke one-to-one interactive training delivered online via Zoom.
          </DetailCard>

          <DetailCard title="Course Duration">
            5 sessions of 1 hour each. Part 1 and Part 2 must be completed within 3 months when taken together.
          </DetailCard>

          <DetailCard title="Course Investment">
            £1,500.00 – British Pounds Sterling.
          </DetailCard>

        </div>

        <div className="tw-rounded-2xl tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-card)] tw-p-6 tw-shadow-sm md:tw-p-10">

          {/* 01 Introduction */}
          <Section number="01" title="Course Introduction">

            <p>
              This bespoke training is designed for practitioners who want
              to create a tailored business model for their clinic practice
              based on bioresonance/biofeedback therapy.
            </p>

            <p>
              The courses are offered on a one-to-one basis and form an
              intensive programme.
            </p>

            <p>
              A bioresonance device is required. Devices can be supplied by
              Langton Smith.
            </p>

            <p>
              Part 2 is an advanced clinical health training programme for
              practitioners who want a more expanded repertoire of testing
              and the ability to create detailed reports for their
              patients/clients.
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
              Advanced Clinical Health Training.
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
              basis via Zoom, sharing both the trainer's bioresonance device
              and the practitioner student's device for verification.
            </p>

            <p>
              Case studies are required for both Part 1 and Part 2.
              The practitioner will be sent details of the course
              requirements at the start of each module.
            </p>

            <p className="tw-font-medium tw-text-[var(--training-heading)]">
              Case studies must exclude family and friends.
            </p>

          </Section>

          {/* 04 Advanced Clinical Testing */}
          <Section
            number="04"
            title="Part 2 – Advanced Clinical Health Testing"
          >

            <h3 className="tw-font-semibold tw-text-[var(--training-heading)]">
              Advanced Practitioner Clinical Health Testing
            </h3>

            <p>
              Part 2 Advanced Clinical Health Testing includes a comprehensive
              range of testing categories to expand the practitioner's
              clinical testing capabilities.
            </p>

            <div className="tw-grid tw-grid-cols-1 tw-gap-3 sm:tw-grid-cols-2">

              {[
                "Non-food allergens",
                "Toxins and metals/chemicals",
                "E-smog",
                "Excessive burdens",
                "Pathogens",
                "Food intolerances",
                "Vitamin and mineral deficiencies",
                "Diseases and symptoms",
                "Emotional and psychological impact",
                "Body systems",
                "Remedy testing"
              ].map((item, index) => (
                <div
                  key={index}
                  className="tw-flex tw-items-start tw-gap-3 tw-rounded-lg tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-page)] tw-p-4"
                >
                  <span className="tw-mt-1 tw-flex tw-h-5 tw-w-5 tw-flex-shrink-0 tw-items-center tw-justify-center tw-rounded-full tw-bg-[var(--training-soft-accent)] tw-text-xs tw-font-semibold tw-text-[var(--training-heading)]">
                    ✓
                  </span>

                  <span className="tw-text-sm tw-font-medium tw-leading-6 tw-text-[var(--training-heading)]">
                    {item}
                  </span>
                </div>
              ))}

            </div>

            <p>
              Remedy testing covers recommendations for best therapeutic
              healing. This also includes testing and creating healing
              remedies based on bioresonance homeopathic pilules and tinctures.
            </p>

            <p>
              This advanced course is for practitioners who need a more
              expanded repertoire of testing and creating reports for their
              patients/clients.
            </p>

            <p className="tw-font-medium tw-text-[var(--training-heading)]">
              Three case studies are required, excluding family or close
              friends.
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
              This is bespoke training and covers the updates needed for
              the practitioner's clinic, practice or business.
            </p>

          </Section>

          {/* 06 Training Approach */}
          <Section
            number="06"
            title="Training Approach and Clinical Practice"
          >

            <p>
              Bioresonance/Biofeedback Therapy is based on energy and
              intention. As a practitioner, you will need to be focused on
              what you need to achieve from the test. This can be covered
              during the training.
            </p>

            <p>
              Tests are symptom-related and all results are correlated
              to assist the patient/client towards wellness.
            </p>

            <p>
              Each practitioner needs to have some idea of what they want
              to achieve so that the training can be tailored to their
              practice and business model.
            </p>

          </Section>

          {/* 07 Course Pricing */}
          <section className="tw-border-b tw-border-[var(--training-border)] tw-py-10">

            {/* FIX: Dark green background ensures white text is visible */}
            <div className="tw-rounded-2xl tw-bg-[var(--training-heading)] tw-p-7 tw-text-white md:tw-p-10">

              <p className="tw-text-sm tw-uppercase tw-tracking-widest tw-text-[var(--training-accent)]">
                Course Investment
              </p>

              <h2 className="tw-mt-3 tw-text-2xl tw-font-semibold md:tw-text-3xl tw-text-white">
                Part 2 – Advanced Clinical Health Training
              </h2>

              <div className="tw-mt-6 tw-text-4xl tw-font-semibold md:tw-text-5xl tw-text-white">
                £1,500.00
              </div>

              <p className="tw-mt-2 tw-text-white/80">
                British Pounds Sterling
              </p>

              <div className="tw-mt-8 tw-grid tw-grid-cols-1 tw-gap-5 tw-border-t tw-border-white/20 tw-pt-7 sm:tw-grid-cols-2">

                <div>
                  <p className="tw-text-sm tw-text-[var(--training-accent)]">
                    Sessions
                  </p>
                  <p className="tw-mt-1 tw-font-semibold tw-text-white">
                    5 × 1-hour sessions
                  </p>
                </div>

                <div>
                  <p className="tw-text-sm tw-text-[var(--training-accent)]">
                    Delivery
                  </p>
                  <p className="tw-mt-1 tw-font-semibold tw-text-white">
                    Interactive Zoom training
                  </p>
                </div>

              </div>

            </div>

            {/* Combined Course */}
            <div className="tw-mt-6 tw-rounded-2xl tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-page)] tw-p-6 md:tw-p-8">

              <p className="tw-text-sm tw-font-semibold tw-uppercase tw-tracking-widest tw-text-[var(--training-accent)]">
                Combined Training Programme
              </p>

              <h3 className="tw-mt-3 tw-text-xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-2xl">
                Part 1 + Part 2
              </h3>

              <div className="tw-mt-4 tw-text-3xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-4xl">
                £2,650.00
              </div>

              <p className="tw-mt-2 tw-text-sm tw-text-[var(--training-body)]">
                British Pounds Sterling
              </p>

              <p className="tw-mt-5 tw-leading-8 tw-text-[var(--training-body)]">
                Both training programmes include a total of 10 one-hour
                sessions.
              </p>

              <p className="tw-mt-3 tw-leading-8 tw-text-[var(--training-body)]">
                You will receive a Certificate of Completion for Advanced
                Bioresonance Clinical Health Training.
              </p>

            </div>

            {/* Annual Refresher */}
            <div className="tw-mt-6 tw-rounded-xl tw-border tw-border-[var(--training-border)] tw-bg-[var(--training-card)] tw-p-6">

              <p className="tw-font-semibold tw-text-[var(--training-heading)]">
                Annual Practitioner Development & Refresher Training
              </p>

              <div className="tw-mt-3 tw-text-3xl tw-font-semibold tw-text-[var(--training-heading)]">
                £350 <span className="tw-text-base tw-font-normal">/ hour</span>
              </div>

              <p className="tw-mt-2 tw-text-sm tw-leading-7 tw-text-[var(--training-body)]">
                Continued practitioner development and refresher update
                training is recommended on an annual basis.
              </p>

            </div>

          </section>

          {/* 08 Case Studies */}
          <Section
            number="08"
            title="Case Studies and Certification Requirements"
          >

            <p>
              Advanced training (Part 2) requires three case studies so that
              the practitioner/therapist feels confident in performing the
              tests and interpreting the results.
            </p>

            <p>
              The full health test is the top of the range and consists of
              six tests. The practitioner/therapist will need to understand
              what each of the tests means.
            </p>

            <p>
              An assessment is based on successful completion of case studies.
              Certificates are issued on this basis.
            </p>

            <p>
              Case studies are to be independent of the practitioner student,
              not family and not a close friend if possible.
            </p>

            <p className="tw-rounded-lg tw-bg-[var(--training-soft)] tw-p-4 tw-font-medium tw-text-[var(--training-heading)]">
              Part 1 and Part 2 must be completed within a maximum of
              three months from the start date of Session 1.
            </p>

          </Section>

          {/* 09 Training Planning */}
          <Section
            number="09"
            title="Training Planning and Practitioner Requirements"
          >

            <p>
              Each practitioner needs to have some idea of what they want
              to achieve so that the training can be tailored to their
              practice and business model.
            </p>

            <p>
              For Part 1 training, it is advisable to choose no more than
              three different types of tests to perform from scratch.
            </p>

            <p>
              The training covers creating templates to place the results,
              interpreting results to provide an assessment and prognosis,
              and identifying any remedies needed, whether made by the device
              or sourced externally, such as herbs and vitamins.
            </p>

            <p>
              Two case studies are required for Part 1.
            </p>

            <p>
              For Part 2 advanced training, three case studies are required
              to help the practitioner/therapist gain confidence in carrying
              out the tests and interpreting the results.
            </p>

          </Section>

          {/* 10 Course Inclusions */}
          <Section
            number="10"
            title="What Is Included in the Training?"
          >

            <p>
              The training includes creating templates made from a
              comprehensive database and preparing letter templates to
              place the results on, together with guidance for patients
              to understand the meaning of the results at a glance.
            </p>

            <p>
              This course does not have a blueprint, as it is designed
              to work with the individual needs of each practitioner.
            </p>

            <p>
              The training is dependent on the type of device you have,
              so please check before undertaking the course as some
              devices have pre-made templates.
            </p>

            <p>
              If you do not have a device, it is recommended that you
              discuss your requirements before purchasing.
            </p>

            <p className="tw-font-medium tw-text-[var(--training-heading)]">
              A bioresonance device is essential for the student practitioner
              to acquire before training commences. Devices can be supplied
              by Langton Smith.
            </p>

          </Section>

          {/* 11 Registration */}
          <section className="tw-border-b tw-border-[var(--training-border)] tw-py-10">

            <h2 className="tw-mb-5 tw-text-2xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-3xl">
              Register for the Course
            </h2>

            <div className="tw-rounded-xl tw-bg-[var(--training-soft)] tw-p-6 md:tw-p-8">

              <p className="tw-leading-8 tw-text-[var(--training-body)]">
                To register, complete the registration form and send it
                to the email address below. An invoice will be issued
                for payment and a date for the course to commence
                will be agreed.
              </p>

              <a
                href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%202`}
                className="tw-mt-5 tw-inline-block tw-break-all tw-font-semibold tw-text-[var(--training-heading)] tw-underline tw-underline-offset-4"
              >
                {EMAIL}
              </a>

              <div className="tw-mt-6">
                <a
                  href={`mailto:${EMAIL}?subject=Bioresonance%20Practitioner%20Training%20Part%202`}
                  className="tw-inline-flex tw-rounded-lg tw-bg-[var(--training-heading)] tw-px-7 tw-py-3 tw-font-semibold tw-text-white tw-transition hover:tw-opacity-90"
                >
                  Enquire About Part 2 Training
                </a>
              </div>

            </div>
          </section>

          {/* 12 Disclaimer */}
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
                bioresonance scanning device that Julie is fully qualified
                and trained in using. Many patients like this therapy as
                they have found it helpful, non-invasive and feel that it
                allows them some control over looking after their own health
                naturally. However, if you are unsure of your health in any
                way or suffering any serious health condition, it is always
                recommended that you seek medical advice from your GP.
              </p>

            </div>
          </section>

        </div>

        {/* Bottom CTA */}
        <section className="tw-py-14 tw-text-center">

          <h2 className="tw-text-2xl tw-font-semibold tw-text-[var(--training-heading)] md:tw-text-3xl">
            Ready to Advance Your Practitioner Training?
          </h2>

          <p className="tw-mx-auto tw-mt-4 tw-max-w-xl tw-leading-7 tw-text-[var(--training-body)]">
            Contact Julie Langton-Smith to discuss your advanced clinical
            health training requirements and how the programme can be
            tailored to your practice.
          </p>

          <a
            href={`mailto:${EMAIL}?subject=Advanced%20Bioresonance%20Practitioner%20Training`}
            className="tw-mt-7 tw-inline-flex tw-rounded-lg tw-bg-[var(--training-heading)] tw-px-8 tw-py-3 tw-font-semibold tw-text-white tw-transition hover:tw-opacity-90"
          >
            Contact Us
          </a>

        </section>

      </div>
    </main>
  );
}
