import Script from "next/script";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "./components/site-chrome";
import { blogData, homeData, doctorsData } from "@/lib/site-data";

export default function Home() {
  return (
    <>
      <StitchRuntime />
      <SiteHeader active="home" />
      <main className="pt-20 overflow-x-hidden">
        <HeroSection />
        <StatsSection />
        <DoctorProfileSection />
        <ClinicServicesSection />
        <ConditionsTreatedSection />
        <AdvancedTechnologySection />
        <PatientJourneySection />
        <Testimonials />
        <AppointmentBooking />
        <FAQSection />
        <ContactMapSection />
      </main>
      <SiteFooter />
      <HomeInteractions />
    </>
  );
}

function StitchRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
    </>
  );
}

function HeroSection() {
  const { hero } = homeData;
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-primary-container overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary-container via-primary-container/80 to-transparent z-10"></div>
          <img alt="Lead Neurosurgeon Hero" className="w-full h-full object-cover object-center" src={hero.backgroundImage} />
        </div>
        <div className="relative z-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-on-primary-fixed-variant/20 backdrop-blur-sm border border-outline-variant/30 px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
              <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest">{hero.tagline}</span>
            </div>
            <h2 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg text-white mb-6">
              {hero.title} <br />
              <span className="text-secondary-fixed">{hero.titleAccent}</span>
            </h2>
            <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 mb-10 max-w-lg leading-relaxed">
              {hero.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/book" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-secondary/20 transition-all flex items-center justify-center gap-2">
                {hero.primaryBtn} <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a href="#specialties" className="bg-transparent border border-outline-variant text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all flex items-center justify-center gap-2">
                {hero.secondaryBtn}
              </a>
            </div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 opacity-20 pointer-events-none">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M44.7,-76.4C58.1,-69.2,69.2,-58.1,76.4,-44.7C83.6,-31.3,86.9,-15.7,85.2,-0.9C83.6,13.8,77.1,27.7,68.2,39.3C59.3,50.9,48.1,60.2,35.5,67.6C22.9,75,8.9,80.5,-5.8,80.5C-20.5,80.5,-35.9,75,-48.9,67.3C-61.9,59.6,-72.5,49.7,-79.8,37.3C-87.1,24.9,-91.1,10,-90,-4.5C-88.9,-19,-82.7,-33.1,-73.4,-45C-64.1,-56.9,-51.7,-66.6,-38.3,-73.8C-24.9,-81,-10.7,-85.7,2.2,-89.5C15.1,-93.3,31.3,-83.6,44.7,-76.4Z"
              fill="#89f5e7" transform="translate(100 100)"></path>
          </svg>


        </div>
      </section>
    </>
  );
}

function StatsSection() {
  return (
    <>
      <section className="bg-surface py-16 -mt-10 relative z-30 px-margin-mobile md:px-margin-desktop">
        <div className="max-w-container-max mx-auto bg-surface-container-lowest shadow-clinical rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
          {homeData.stats.map((stat, idx) => (
            <div key={idx} className="p-10 flex flex-col items-center text-center">
              <span className="font-headline-lg text-headline-lg text-primary mb-2">{stat.value}</span>
              <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function DoctorProfileSection() {
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface space-y-24">
        <div className="max-w-container-max mx-auto text-center mb-10">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">Meet Our Specialists</span>
          <h2 className="font-headline-md text-headline-md text-primary font-bold">Our Leading Medical Practitioners</h2>
        </div>
        {doctorsData.map((doc, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={doc.slug} className={`max-w-container-max mx-auto flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-16`}>
              <div className="w-full md:w-1/2 relative reveal-card reveal-delay-100">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-modal bg-surface">
                  <img alt={doc.name} className="w-full h-full object-cover" src={doc.image} />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-secondary text-on-secondary p-6 rounded-2xl hidden md:block shadow-clinical">
                  <p className="font-headline-sm text-headline-sm mb-1">{doc.badgeTitle}</p>
                  <p className="font-body-md text-body-md opacity-90">{doc.badgeDesc}</p>
                </div>
              </div>
              <div className="w-full md:w-1/2 reveal-card reveal-delay-200">
                <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{doc.tagline}</span>
                <h2 className="font-headline-md text-headline-md text-primary mb-6">{doc.name}</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
                  {doc.biography}
                </p>
                <ul className="space-y-4 mb-10">
                  {doc.bulletPoints.map((bp, bpIdx) => (
                    <li key={bpIdx} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary">{bp.icon}</span>
                      <span className="font-label-md text-label-md text-on-surface">{bp.text}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/doctor/${doc.slug}`} className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-4 transition-all font-bold">
                  View Full Clinical Profile <span className="material-symbols-outlined">arrow_forward</span>
                </Link>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
}

function ClinicServicesSection() {
  const { services } = homeData;
  const blogImagesBySlug = new Map(blogData.map((blog) => [blog.slug, blog.image]));

  return (
    <>
      <section id="specialties" className="scroll-mt-24 py-16 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto text-center mb-10 md:mb-16 px-margin-mobile md:px-margin-desktop">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{services.tagline}</span>
          <h2 className="font-headline-md text-headline-md text-primary">{services.title}</h2>
        </div>
        <div className="max-w-container-max mx-auto flex gap-4 overflow-x-auto px-margin-mobile pb-4 snap-x snap-mandatory md:grid md:grid-cols-12 md:gap-6 md:overflow-visible md:px-margin-desktop md:pb-0">
          {services.items.map((item, idx) => {
            const slug = item.link.split("/").pop() ?? "";
            const image = blogImagesBySlug.get(slug);

            return (
              <div key={idx} className={`min-w-[82%] snap-start bg-surface-container-lowest rounded-2xl shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 group overflow-hidden sm:min-w-[48%] md:col-span-4 md:min-w-0 reveal-card reveal-delay-${Math.min((idx + 1) * 100, 600)}`}>
                {image && (
                  <div className="relative h-44 overflow-hidden bg-primary-container">
                    <img alt={item.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" src={image} />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/35 to-transparent" />
                  </div>
                )}
                <div className="p-6 md:p-8">
                  <div className="w-14 h-14 bg-secondary-container rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-on-secondary-container" style={{ fontVariationSettings: `'FILL' 1` }}>{item.icon}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-primary mb-3">{item.title}</h3>
                  <p className="text-on-surface-variant mb-6">{item.description}</p>
                  <Link className="text-secondary font-label-md text-label-md hover:underline inline-flex items-center gap-1 transition-transform group-hover:translate-x-1 duration-200" href={item.link}>
                    Learn more
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

function ConditionsTreatedSection() {
  const { conditions } = homeData;
  return (
    <>
      <section id="conditions" className="scroll-mt-24 py-16 px-margin-mobile md:py-24 md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-10 md:gap-16">
          <div className="w-full md:w-1/3 reveal-card reveal-delay-100">
            <h2 className="font-headline-md text-headline-md text-primary mb-6">{conditions.title}</h2>
            <p className="text-body-lg text-on-surface-variant mb-8">{conditions.description}</p>
            <button className="bg-primary text-on-primary px-8 py-3 rounded-full font-label-md text-label-md">{conditions.buttonText}</button>
          </div>
          <div className="w-full md:w-2/3 grid grid-cols-2 gap-3 md:gap-4">
            {conditions.items.map((item, idx) => (
              <div key={idx} className={`flex items-start gap-2 p-4 bg-surface-container-low rounded-xl border border-outline-variant/10 md:items-center md:gap-4 md:p-6 reveal-card reveal-delay-${Math.min((idx + 1) * 100, 600)}`}>
                <span className="material-symbols-outlined text-secondary text-base md:text-2xl">fiber_manual_record</span>
                <span className="font-label-md text-label-md text-on-surface leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function AdvancedTechnologySection() {
  const { technology } = homeData;
  return (
    <>
      <section id="technology" className="scroll-mt-24 py-16 px-margin-mobile md:py-24 md:px-margin-desktop bg-primary-container text-white">
        <div className="max-w-container-max mx-auto grid grid-cols-1 gap-10 md:grid-cols-12 md:items-center md:gap-6">
          <div className="order-2 md:order-1 md:col-span-6 reveal-card reveal-delay-200">
            <span className="text-secondary-fixed font-label-md text-label-md uppercase tracking-widest mb-4 block">{technology.tagline}</span>
            <h2 className="font-headline-md text-headline-md mb-8">{technology.title}</h2>
            <div className="space-y-5 md:space-y-8">
              {technology.items.map((item, idx) => (
                <div key={idx} className={`flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 md:gap-6 md:border-0 md:bg-transparent md:p-0 reveal-card reveal-delay-${Math.min((idx + 1) * 100, 300)}`}>
                  <div className="shrink-0 w-11 h-11 rounded-full border border-secondary-fixed/50 flex items-center justify-center md:h-12 md:w-12">
                    <span className="material-symbols-outlined text-secondary-fixed">{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-headline-sm mb-2 text-primary-fixed">{item.title}</h4>
                    <p className="text-primary-fixed-dim opacity-80 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 md:order-2 md:col-span-6 reveal-card reveal-delay-100">
            <div className="rounded-2xl md:rounded-3xl overflow-hidden shadow-modal border border-white/10">
              <img alt="Operating Room Technology" className="w-full h-64 object-cover sm:h-80 md:h-[500px]" src={technology.image} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PatientJourneySection() {
  const { patientJourney } = homeData;
  return (
    <>
      <section id="journey" className="scroll-mt-24 py-16 md:py-24 bg-surface overflow-hidden">
        <div className="max-w-container-max mx-auto text-center mb-10 md:mb-20 px-margin-mobile md:px-margin-desktop">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{patientJourney.tagline}</span>
          <h2 className="font-headline-md text-headline-md text-primary">{patientJourney.title}</h2>
        </div>
        <div className="max-w-container-max mx-auto relative px-margin-mobile md:px-margin-desktop">
          {/* Timeline Line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-outline-variant/30 hidden md:block"></div>
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory md:grid md:grid-cols-4 md:gap-12 md:overflow-visible md:pb-0 relative z-10">
            {patientJourney.steps.map((step, idx) => (
              <div key={idx} className={`min-w-[78%] snap-start flex flex-col items-center text-center bg-surface-container-lowest rounded-2xl border border-outline-variant/10 p-6 shadow-clinical sm:min-w-[44%] md:min-w-0 md:bg-transparent md:border-0 md:p-0 md:shadow-none reveal-card reveal-delay-${Math.min((idx + 1) * 100, 400)}`}>
                <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center mb-6 shadow-clinical relative">
                  <span className="material-symbols-outlined">{step.icon}</span>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full text-[10px] flex items-center justify-center border-2 border-white">
                    {step.number}
                  </div>
                </div>
                <h4 className="font-headline-sm text-headline-sm mb-3">{step.title}</h4>
                <p className="text-on-surface-variant text-body-md">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Testimonials() {
  const { testimonials } = homeData;
  return (
    <>
      <section id="reviews" className="scroll-mt-24 py-16 md:py-24 bg-surface-container-low overflow-hidden">
        <div className="max-w-container-max mx-auto text-center mb-10 md:mb-16 px-margin-mobile md:px-margin-desktop">
          <h2 className="font-headline-md text-headline-md text-primary">{testimonials.title}</h2>
        </div>
        <div className="max-w-container-max mx-auto flex gap-4 overflow-x-auto px-margin-mobile pb-4 snap-x snap-mandatory md:grid md:grid-cols-3 md:gap-8 md:overflow-visible md:px-margin-desktop md:pb-0">
          {testimonials.items.map((item, idx) => (
            <div key={idx} className={`min-w-[84%] snap-start bg-surface-container-lowest p-6 rounded-2xl shadow-clinical border border-outline-variant/10 sm:min-w-[48%] md:min-w-0 md:p-10 reveal-card reveal-delay-${Math.min((idx + 1) * 100, 300)}`}>
              <div className="flex text-secondary mb-4">
                {Array.from({ length: item.stars }).map((_, sIdx) => (
                  <span key={sIdx} className="material-symbols-outlined" style={{ fontVariationSettings: `'FILL' 1` }}>star</span>
                ))}
              </div>
              <p className="font-body-lg italic text-on-surface-variant mb-6">&quot;{item.quote}&quot;</p>
              <div className="font-label-md text-label-md text-primary">— {item.author}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

function AppointmentBooking() {
  const { appointment } = homeData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface relative overflow-hidden">
        <div className="max-w-container-max mx-auto flex flex-col lg:flex-row bg-surface-container-lowest rounded-3xl overflow-hidden shadow-modal reveal-card">
          <div className="w-full lg:w-1/2 p-12 md:p-16">
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{appointment.title}</h2>
            <p className="text-on-surface-variant mb-10">{appointment.description}</p>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Full Name</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="John Doe" type="text" />
                </div>
                <div>
                  <label className="block font-label-md text-label-md text-on-surface mb-2">Phone Number</label>
                  <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="(555) 000-0000" type="tel" />
                </div>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Requested Service</label>
                <select className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all">
                  {appointment.services.map((service, idx) => (
                    <option key={idx}>{service}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">Preferred Date</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" type="date" />
              </div>
              <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-4 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-clinical" type="submit">
                {appointment.buttonText}
              </button>
            </form>
          </div>
          <div className="w-full lg:w-1/2 min-h-[400px] relative">
            <img alt="Doctor Consultation" className="absolute inset-0 w-full h-full object-cover" src={appointment.image} />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[2px]"></div>
            <div className="absolute bottom-12 left-12 right-12 bg-white/90 backdrop-blur p-8 rounded-2xl shadow-clinical border border-white/20">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-secondary">support_agent</span>
                </div>
                <div>
                  <h4 className="font-label-md text-label-md text-primary">{appointment.supportTitle}</h4>
                  <p className="text-sm text-on-surface-variant">{appointment.supportDesc}</p>
                </div>
              </div>
              <p className="font-headline-sm text-headline-sm text-primary">{appointment.supportPhone}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function FAQSection() {
  const { faqs } = homeData;
  return (
    <>
      <section className="py-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-headline-md text-headline-md text-primary text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className={`group bg-surface-container-lowest rounded-xl border border-outline-variant/10 shadow-clinical reveal-card reveal-delay-${Math.min((idx + 1) * 100, 600)}`} open={idx === 0 ? true : undefined}>
                <summary className="flex justify-between items-center p-6 cursor-pointer list-none">
                  <span className="font-label-md text-label-md text-on-surface">{faq.question}</span>
                  <span className="material-symbols-outlined transition-transform group-open:rotate-180">expand_more</span>
                </summary>
                <div className="px-6 pb-6 text-on-surface-variant leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactMapSection() {
  const { contactMap } = homeData;
  return (
    <>
      <section id="contact" className="scroll-mt-24 py-16 px-margin-mobile md:py-24 md:px-margin-desktop bg-surface">
        <div className="max-w-container-max mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-6">
          <div className="space-y-8 lg:col-span-4 reveal-card reveal-delay-100">
            <div>
              <h2 className="font-headline-md text-headline-md text-primary mb-4">{contactMap.title}</h2>
              <p className="text-on-surface-variant">{contactMap.description}</p>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactMap.details.map((detail, idx) => (
                <div key={idx} className={`flex min-w-0 gap-3 rounded-2xl bg-surface-container-low p-4 border border-outline-variant/10 md:gap-4 reveal-card reveal-delay-${Math.min((idx + 1) * 100, 300)}`}>
                  <span className="material-symbols-outlined text-secondary shrink-0">{detail.icon}</span>
                  <div className="min-w-0">
                    <h5 className="font-label-md text-label-md text-on-surface">{detail.title}</h5>
                    <p className="text-on-surface-variant break-words">
                      {detail.lines.map((line, lIdx) => (
                        <span key={lIdx}>
                          {line}
                          {lIdx < detail.lines.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-8 reveal-card reveal-delay-200">
            <div className="h-full min-h-[320px] bg-surface-container rounded-2xl md:rounded-3xl overflow-hidden relative border border-outline-variant/20 shadow-clinical md:min-h-[400px]">
              <iframe
                src="https://maps.google.com/maps?q=Avtar%20Health%20Care%20Clinic,%20Kaushalpuri,%20Khargapur,%20Gomti%20Nagar,%20Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full min-h-[320px] border-0 opacity-95 md:min-h-[400px]"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function HomeInteractions() {
  return (
    <Script
      id="home-interactions"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
        document.querySelectorAll('button').forEach(button => {
            button.addEventListener('mousedown', () => button.classList.add('scale-95'));
            button.addEventListener('mouseup', () => button.classList.remove('scale-95'));
            button.addEventListener('mouseleave', () => button.classList.remove('scale-95'));
        });
    `,
      }}
    />
  );
}
