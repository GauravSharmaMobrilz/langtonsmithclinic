/**
 * Navigation utilities for the Langton Smith Clinic prototype.
 * Destination labels and routes are drawn from source website hierarchy and SOW.
 * Every navigation item links to a dedicated page/route.
 */

export const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/about',
  },
  {
    label: 'Clinic Services',
    href: '/services/health-testing',
    dropdown: [
      {
        label: 'Bioresonance Health Testing',
        href: '/services/health-testing',
        // desc: 'Remote 6-point Test via hair sample',
        // formModal: 'health-form',
        formLabel: 'Health Form',
      },
      {
        label: 'Counselling & Psychotherapy',
        href: '/services/counselling',
        // desc: 'Transpersonal & mindful psychological care',
        // formModal: 'client-consultation',
        formLabel: 'Client Form',
      },
      {
        label: 'Clinical Hypnotherapy',
        href: '/services/hypnotherapy',
        // desc: 'Senior clinical hypnotherapist practice',
        // formModal: 'client-consultation',
        formLabel: 'Client Form',
      },
      {
        label: 'Client Health Form',
        href: '/services/health-form',
        // desc: 'Confidential intake record & guidelines',
      },
      // {
      //   label: 'Client Form (Counselling & Hypnotherapy)',
      //   modal: 'client-consultation',
      //   desc: 'Confidential client consultation form for Mind Therapies',
      // },
      // {
      //   label: 'Bioresonance Health Form',
      //   href: '/services/health-form',
      //   modal: 'health-form',
      //   desc: 'Intake form strictly for Bioresonance Health Testing',
      // },
    ],
  },
  {
    label: 'Practitioner Training',
    href: '/training',
    dropdown: [
      { label: 'Training Courses & Syllabus', href: '/training', 
        // desc: 'Part 1, Part 2, Combined & Refresher'
       },
      { label: 'Practitioner Registration', href: '/training/registration',
        // desc: 'Application form & prerequisites' 
      },
      { label: 'Bioresonance Devices (SCOPE, MARS & Scope Q)', href: '/training/devices',
        //  desc: 'Professional diagnostic & therapy equipment'
         },
      { label: 'Training Handbook & Publication', href: '/training/handbook', 
        // desc: 'Food sensitivity testing reference guide' 
      },
    ],
  },
  {
    label: 'Shop',
    href: '/shop',
  },
  {
    label: 'Contact Us',
    href: '/contact',
  }
]

export const CONTACT = {
  email: 'langtonsmithclinic@hotmail.co.uk',
  phone: '07900 218954',
  address: '37 Surrey Street, Littlehampton, West Sussex, BN17 5BH',
  hours: 'Monday – Friday: 9:00am – 6:00pm (Consultations by Appointment)',
  remoteAvailable: 'Remote consultations worldwide via Zoom, Telephone & Hair Sample Testing',
}
