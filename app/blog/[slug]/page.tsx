"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { blogData, blogPageData, homeData, doctorsData } from "@/lib/site-data";

export default function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const blog = blogData.find((b) => b.slug === slug);

  if (!blog) {
    notFound();
  }

  // Determine doctor based on blog category
  const doctorSlug = (blog.category === "General Health" || blog.category === "Therapy & Counseling") 
    ? "dr-preeti-chaudhary" 
    : "dr-nilesh-kumar-kanaujiya";
  const doctor = doctorsData.find((d) => d.slug === doctorSlug) || doctorsData[0];

  // Accordion state for FAQs
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const { detailPage } = blogPageData;

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  // Determine badge styling based on category
  let badgeClass = "bg-secondary-container text-on-secondary-container";
  if (blog.category === "Neuro-Psychiatry") {
    badgeClass = "bg-primary-container text-primary-fixed";
  } else if (blog.category === "De-Addiction") {
    badgeClass = "bg-error-container text-on-error-container";
  } else if (blog.category === "Therapy & Counseling") {
    badgeClass = "bg-tertiary-fixed text-on-tertiary-fixed";
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <SiteHeader active="blog" />
      <main className="pt-20 overflow-x-hidden bg-surface-container-low min-h-screen">
        {/* Back Link & Breadcrumb Header */}
        <div className="bg-surface border-b border-outline-variant/20 py-4">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center">
            <Link
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
              href="/blog"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Clinical Library
            </Link>
          </div>
        </div>

        {/* Hero Banner Section */}
        <section className="relative min-h-[40vh] flex items-center overflow-hidden py-16">
          <div className="absolute inset-0 z-0">
            <img
              alt={blog.title}
              className="w-full h-full object-cover brightness-[0.7]"
              src={blog.image}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/85 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full">
            <div className="max-w-3xl text-white">
              <span
                className={`inline-block py-1.5 px-4 rounded-full font-label-sm text-label-sm font-semibold tracking-wider uppercase mb-6 ${badgeClass}`}
              >
                {blog.category}
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-6">
                {blog.title}
              </h1>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim/95 leading-relaxed max-w-2xl">
                {blog.fullDescription}
              </p>
            </div>
          </div>
        </section>

        {/* Core Layout Grid */}
        <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto py-16 flex flex-col gap-16">
          {/* Section: Symptoms */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-clinical border border-outline-variant/15">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 flex items-center gap-3">
              <span className="material-symbols-outlined text-secondary text-3xl">
                warning
              </span>
              Common Symptoms & Clinical Signs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {blog.symptoms.map((symptom, idx) => (
                <div
                  className="bg-surface border border-outline-variant/30 p-6 rounded-xl hover:border-secondary/30 transition-all duration-200"
                  key={idx}
                >
                  <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center text-secondary mb-4">
                    <span className="material-symbols-outlined text-md">
                      emergency
                    </span>
                  </div>
                  <h3 className="font-label-md text-label-md text-primary font-bold mb-2">
                    Indication {idx + 1}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                    {symptom}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Section: Treatments (Two Column Comparison) */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Column A: Non-Surgical Management */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-clinical border border-outline-variant/15 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-secondary-container flex items-center justify-center text-on-secondary-container">
                  <span className="material-symbols-outlined text-2xl">healing</span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {(detailPage as any).nonSurgicalTitle || "Non-Surgical Care"}
                  </h2>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {(detailPage as any).nonSurgicalSubtitle || "First-line & Conservative Management"}
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                {(detailPage as any).nonSurgicalDesc || "Conservative and rehabilitative pathways focused on reducing irritation, relieving pressure, and building long-term core stability."}
              </p>
              <ul className="space-y-4 mt-auto">
                {blog.nonSurgical.map((item, idx) => (
                  <li
                    className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 hover:border-secondary/20 transition-all"
                    key={idx}
                  >
                    <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                      check_circle
                    </span>
                    <span className="font-body-md text-body-md text-on-surface leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column B: Advanced Surgical Interventions */}
            <div className="bg-surface-container-lowest p-8 md:p-10 rounded-2xl shadow-clinical border border-outline-variant/15 flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary-container flex items-center justify-center text-primary-fixed">
                  <span className="material-symbols-outlined text-2xl">
                    precision_manufacturing
                  </span>
                </div>
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-primary font-bold">
                    {(detailPage as any).surgicalTitle || "Surgical Interventions"}
                  </h2>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {(detailPage as any).surgicalSubtitle || "Advanced & Minimally Invasive Procedures"}
                  </span>
                </div>
              </div>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8">
                {(detailPage as any).surgicalDesc || "Precision surgical options using state-of-the-art keyhole approaches, robotic platforms, and microsurgical stabilization."}
              </p>
              <ul className="space-y-4 mt-auto">
                {blog.surgical.map((item, idx) => (
                  <li
                    className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 hover:border-secondary/20 transition-all"
                    key={idx}
                  >
                    <span className="material-symbols-outlined text-secondary shrink-0 mt-0.5">
                      medical_services
                    </span>
                    <span className="font-body-md text-body-md text-on-surface leading-normal">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Section: Primary Specialist Profile */}
          <section className="bg-primary-container text-white p-8 md:p-12 rounded-2xl shadow-clinical relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute right-0 bottom-0 w-80 h-80 bg-secondary/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Doctor Image */}
              <Link href={`/doctor/${doctorSlug}`} className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-secondary/30 shrink-0 bg-surface hover:scale-105 transition-transform duration-200">
                <img
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  src={doctor.image}
                />
              </Link>

              {/* Profile Details */}
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block py-1 px-3 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full mb-3 uppercase tracking-wider">
                  {detailPage.specialistTagline}
                </span>
                <Link href={`/doctor/${doctorSlug}`} className="block group/doc hover:text-secondary-fixed transition-colors">
                  <h2 className="font-headline-md text-headline-md text-white font-bold mb-1 flex items-center gap-2 justify-center md:justify-start">
                    {doctor.name}
                    <span className="material-symbols-outlined text-sm opacity-0 group-hover/doc:opacity-100 transition-opacity">arrow_forward</span>
                  </h2>
                </Link>
                <p className="font-label-md text-label-md text-secondary-fixed mb-4">
                  {doctor.badgeDesc}
                </p>
                <p className="font-body-md text-body-md text-primary-fixed-dim/90 leading-relaxed mb-6 max-w-2xl">
                  {doctor.biography.slice(0, 150) + "..."}
                </p>

                {/* Bullets */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start">
                  {doctor.bulletPoints.map((bp, idx) => (
                    <div className="flex items-center gap-2 justify-center" key={idx}>
                      <span className="material-symbols-outlined text-secondary text-sm">
                        {bp.icon}
                      </span>
                      <span className="font-label-sm text-label-sm text-white/95">
                        {bp.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Section: Your Recovery Journey */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-clinical border border-outline-variant/15">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-3 uppercase tracking-widest">
                {detailPage.journeyTagline}
              </span>
              <h2 className="font-headline-md text-headline-md text-primary font-bold">
                {detailPage.journeySubtitle}
              </h2>
            </div>

            {/* Timeline */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-10 left-12 right-12 h-0.5 bg-outline-variant/40 z-0"></div>

              {detailPage.journeySteps.map((step, idx) => {
                // Check if specific step override exists in blog's recovery steps
                const stepDesc = blog.recoverySteps[idx] || step.desc;

                return (
                  <div className="relative z-10 flex flex-col items-center text-center" key={idx}>
                    <div className="w-16 h-16 rounded-full bg-surface border-4 border-secondary flex items-center justify-center font-headline-sm text-headline-sm text-secondary font-bold mb-4 shadow-md">
                      {step.num}
                    </div>
                    <h3 className="font-label-md text-label-md text-primary font-bold mb-2">
                      {step.name}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed px-2">
                      {stepDesc}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: Frequently Asked Questions */}
          <section className="bg-surface-container-lowest p-8 md:p-12 rounded-2xl shadow-clinical border border-outline-variant/15">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4 max-w-4xl mx-auto">
              {blog.faqs.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    className="border border-outline-variant/35 rounded-xl overflow-hidden bg-surface"
                    key={idx}
                  >
                    <button
                      className="w-full flex justify-between items-center p-6 text-left font-label-md text-label-md text-primary hover:text-secondary transition-colors outline-none cursor-pointer"
                      onClick={() => toggleFaq(idx)}
                    >
                      <span className="font-bold pr-4">{faq.question}</span>
                      <span
                        className={`material-symbols-outlined transition-transform duration-200 shrink-0 text-on-surface-variant ${
                          isOpen ? "rotate-180 text-secondary" : ""
                        }`}
                      >
                        expand_more
                      </span>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-outline-variant/10 bg-surface-container-lowest">
                        <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </section>

          {/* Section: CTA Panel */}
          <section className="bg-gradient-to-br from-primary-container to-primary-container/90 text-white rounded-2xl p-8 md:p-12 shadow-clinical flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border border-outline-variant/10">
            <div className="max-w-2xl">
              <h2 className="font-headline-md text-headline-md text-white font-bold mb-4">
                {detailPage.ctaTitle}
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 leading-relaxed">
                {detailPage.ctaSubtitle}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link href="/book" className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-secondary/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2">
                {detailPage.ctaBookBtn}{" "}
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <a
                className="bg-transparent border border-outline-variant text-white px-8 py-4 rounded-full font-label-md text-label-md hover:bg-white/10 transition-all flex items-center justify-center gap-2"
                href={`tel:${detailPage.ctaPhone.replace(/-/g, "")}`}
              >
                <span className="material-symbols-outlined text-sm">call</span>
                {detailPage.ctaCallBtn}
              </a>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
