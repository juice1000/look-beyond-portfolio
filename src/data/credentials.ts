// Proof assets for the landing page. Both lists render nothing while empty.
//
// Logos: put files in public/images/clients/ and reference them as
// "/images/clients/<file>". Any colour logo works, they are shown in grey.
// Only add a client once they have agreed to be named.

export interface ClientLogo {
  name: string;
  src: string;
  href?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  photo?: string;
  logo?: string;
}

export const clientLogos: ClientLogo[] = [
  // { name: "FGS Global", src: "/images/clients/fgs-global.svg" },
];

export const testimonials: Testimonial[] = [
  // {
  //   quote: "…",
  //   name: "…",
  //   role: "…",
  //   company: "…",
  //   photo: "/images/clients/…",
  //   logo: "/images/clients/…",
  // },
];
