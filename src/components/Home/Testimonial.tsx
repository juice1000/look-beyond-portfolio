import React from "react";
import { Testimonial as TestimonialData } from "../../data/credentials";

interface TestimonialProps {
  items: TestimonialData[];
}

const Testimonial = ({ items }: TestimonialProps) => {
  if (items.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="border-b border-white/30 dark:border-[#0f1e35] py-16"
    >
      <div className="mx-auto max-w-4xl space-y-16 px-4">
        {items.map((item) => (
          <figure key={item.name} className="text-center">
            <blockquote className="text-xl font-medium leading-8 text-[#0f1e35] dark:text-slate-100 md:text-2xl md:leading-9">
              “{item.quote}”
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-center justify-center gap-4">
              {item.photo && (
                <img
                  src={item.photo}
                  alt={item.name}
                  loading="lazy"
                  className="h-12 w-12 rounded-full object-cover"
                />
              )}
              <div className="text-left">
                <p className="text-sm font-semibold text-[#0f1e35] dark:text-slate-100">
                  {item.name}
                </p>
                <p className="text-sm text-slate-500 dark:text-[#4a6a8a]">
                  {item.role}, {item.company}
                </p>
              </div>
              {item.logo && (
                <>
                  <span className="h-8 w-px bg-slate-300 dark:bg-[#0f1e35]" />
                  <img
                    src={item.logo}
                    alt={item.company}
                    loading="lazy"
                    className="h-8 w-auto max-w-[8rem] object-contain opacity-70 grayscale"
                  />
                </>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
