import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { contactData, homeData } from "@/lib/site-data";

const contactStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}`;

export default function ContactPage() {
  return (
    <>
      <ContactRuntime />
      <SiteHeader active="contact" />
      <main className="pt-20 overflow-x-hidden bg-surface">
        <HeroSection />
        <DetailsSection />
        <InteractiveMapSection />
      </main>
      <SiteFooter />
      <ContactInteractions />
    </>
  );
}

function ContactRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: contactStyles }} />
    </>
  );
}

function HeroSection() {
  const { hero } = contactData;
  return (
    <section className="relative min-h-[40vh] md:h-[480px] py-16 md:py-0 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="Contact Us Hero" className="w-full h-full object-cover" src={hero.backgroundImage} />
        <div className="absolute inset-0 bg-primary/45 backdrop-blur-[2px]"></div>
      </div>
      <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
        <div className="max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 bg-on-primary-fixed-variant/20 backdrop-blur-sm border border-outline-variant/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
            <span className="text-primary-fixed font-label-sm text-label-sm uppercase tracking-widest">{hero.tagline}</span>
          </div>
          <h1 className="font-headline-lg text-headline-lg mb-6 leading-tight">{hero.title}</h1>
          <p className="font-body-lg text-body-lg text-primary-fixed-dim/90">{hero.description}</p>
        </div>
      </div>
    </section>
  );
}

function DetailsSection() {
  const { contactMap } = homeData;
  const { form } = contactData;
  
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Left column: Contact Info cards */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-4">{contactMap.title}</h2>
            <p className="text-on-surface-variant leading-relaxed">{contactMap.description}</p>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {contactMap.details.map((detail, idx) => (
              <div key={idx} className="flex gap-4 rounded-2xl bg-surface-container-low p-6 border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined !text-2xl">{detail.icon}</span>
                </div>
                <div>
                  <h5 className="font-label-lg text-label-lg font-bold text-primary mb-2">{detail.title}</h5>
                  <p className="text-on-surface-variant text-body-md leading-relaxed">
                    {detail.lines.map((line, lIdx) => (
                      <span key={lIdx} className="block">
                        {line}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column: Message Form */}
        <div className="lg:col-span-7 bg-surface-container-low rounded-3xl p-8 md:p-12 border border-outline-variant/10 shadow-clinical">
          <h3 className="font-headline-sm text-headline-sm text-primary mb-4 font-bold">{form.title}</h3>
          <p className="text-on-surface-variant mb-8">{form.description}</p>
          <form className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">{form.fields.name}</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="John Doe" type="text" required />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">{form.fields.email}</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="john@example.com" type="email" required />
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">{form.fields.phone}</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="+91 8821840512" type="tel" />
              </div>
              <div>
                <label className="block font-label-md text-label-md text-on-surface mb-2">{form.fields.subject}</label>
                <input className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all" placeholder="Inquiry about services" type="text" required />
              </div>
            </div>
            <div>
              <label className="block font-label-md text-label-md text-on-surface mb-2">{form.fields.message}</label>
              <textarea rows={5} className="w-full bg-surface border border-outline-variant rounded-lg p-3 focus:border-secondary focus:ring-1 focus:ring-secondary outline-none transition-all resize-none" placeholder="Write your message here..." required></textarea>
            </div>
            <button className="w-full bg-secondary text-on-secondary font-label-md text-label-md py-4 rounded-lg hover:opacity-90 active:scale-95 transition-all shadow-clinical flex items-center justify-center gap-2 font-bold cursor-pointer" type="submit">
              {form.buttonText}
              <span className="material-symbols-outlined !text-sm">send</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function InteractiveMapSection() {
  return (
    <section className="pb-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
      <div className="h-[450px] bg-surface-container rounded-3xl overflow-hidden relative border border-outline-variant/20 shadow-clinical">
        <iframe
          src="https://maps.google.com/maps?q=Avtar%20Health%20Care%20Clinic,%20Kaushalpuri,%20Khargapur,%20Gomti%20Nagar,%20Lucknow&t=&z=16&ie=UTF8&iwloc=&output=embed"
          className="w-full h-full border-0 opacity-95"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

function ContactInteractions() {
  return (
    <Script
      id="contact-interactions"
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
