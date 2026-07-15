import Link from "next/link";
import Script from "next/script";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { aboutData, doctorsData, homeData } from "@/lib/site-data";

const aboutStyles = `.material-symbols-outlined {
  font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}`;

export default function AboutPage() {
  return (
    <>
      <AboutRuntime />
      <SiteHeader active="about" />
      <main className="pt-20 overflow-x-hidden bg-surface">
        <HeroSection />
        <StatsSection />
        <MissionSection />
        <DoctorsSection />
        <FacilitySection />
      </main>
      <SiteFooter />
      <AboutInteractions />
    </>
  );
}

function AboutRuntime() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      <style dangerouslySetInnerHTML={{ __html: aboutStyles }} />
    </>
  );
}

function HeroSection() {
  const { hero } = aboutData;
  return (
    <section className="relative min-h-[40vh] md:h-[480px] py-16 md:py-0 flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img alt="About Us Hero" className="w-full h-full object-cover" src={hero.backgroundImage} />
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

function StatsSection() {
  return (
    <section className="py-16 px-margin-mobile md:px-margin-desktop bg-surface">
      <div className="max-w-container-max mx-auto bg-surface-container-low shadow-clinical rounded-2xl grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-outline-variant/30">
        {homeData.stats.map((stat, idx) => (
          <div key={idx} className="p-10 flex flex-col items-center text-center">
            <span className="font-headline-lg text-headline-lg text-primary mb-2">{stat.value}</span>
            <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function MissionSection() {
  const { mission } = aboutData;
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 reveal-card">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{mission.tagline}</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-6 leading-tight">{mission.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
            {mission.description}
          </p>
        </div>
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {mission.values.map((val, idx) => (
            <div key={idx} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/10 shadow-sm hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center text-secondary mb-6">
                <span className="material-symbols-outlined !text-2xl">{val.icon}</span>
              </div>
              <h3 className="font-label-lg text-label-lg font-bold text-primary mb-3">{val.title}</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DoctorsSection() {
  const { doctorsSection } = aboutData;
  return (
    <section className="py-24 bg-surface-container-low px-margin-mobile md:px-margin-desktop">
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{doctorsSection.tagline}</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">{doctorsSection.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">{doctorsSection.description}</p>
        </div>
        <div className="flex flex-col gap-12 max-w-5xl mx-auto">
          {doctorsData.map((doc, idx) => (
            <div key={idx} className="bg-surface-container-lowest rounded-3xl p-8 md:p-12 shadow-clinical hover:shadow-modal transition-all border border-outline-variant/10 flex flex-col md:flex-row gap-8 md:gap-12 items-start md:items-center">
              <div className="w-48 h-48 md:w-72 md:h-72 rounded-3xl overflow-hidden shrink-0 shadow-md bg-surface mx-auto md:mx-0">
                <img alt={doc.name} className="w-full h-full object-cover" src={doc.image} />
              </div>
              <div className="flex-1">
                <span className="inline-block py-1.5 px-4 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full mb-4 uppercase tracking-wider">
                  {doc.badgeTitle}
                </span>
                <h3 className="font-headline-md text-headline-md text-primary mb-3 font-bold">{doc.name}</h3>
                <p className="text-secondary-fixed text-base mb-4 font-semibold">{doc.tagline}</p>
                <p className="text-on-surface-variant text-body-md mb-6 leading-relaxed">
                  {doc.biography}
                </p>
                <Link href={`/doctor/${doc.slug}`} className="text-primary font-label-md text-label-md flex items-center gap-2 hover:gap-3 transition-all font-bold">
                  View Full Clinical Profile <span className="material-symbols-outlined !text-sm">arrow_forward</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FacilitySection() {
  const { facility } = aboutData;
  return (
    <section className="py-24 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="order-2 lg:order-1">
          <span className="text-secondary font-label-md text-label-md uppercase tracking-widest mb-4 block">{facility.tagline}</span>
          <h2 className="font-headline-md text-headline-md text-primary mb-6 leading-tight">{facility.title}</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 leading-relaxed">
            {facility.description}
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {facility.items.map((item, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <span className="material-symbols-outlined text-secondary">check_circle</span>
                <span className="font-label-md text-label-md text-on-surface">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="order-1 lg:order-2 relative">
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-secondary/5 rounded-full blur-3xl"></div>
          <img alt="Avtar Clinic Facility" className="rounded-2xl shadow-clinical relative z-10 w-full h-[380px] object-cover" src={facility.image} />
        </div>
      </div>
    </section>
  );
}

function AboutInteractions() {
  return (
    <Script
      id="about-interactions"
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
