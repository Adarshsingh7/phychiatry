"use client";

import { use, useState } from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../components/site-chrome";
import { doctorsData, globalData } from "@/lib/site-data";

export default function DoctorProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const doctor = doctorsData.find((d) => d.slug === slug);

  if (!doctor) {
    notFound();
  }

  // Active tab state
  const [activeTab, setActiveTab] = useState<"clinical" | "academic" | "leadership">("clinical");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <SiteHeader active="home" />
      <main className="pt-20 overflow-x-hidden bg-surface-container-low min-h-screen">
        {/* Breadcrumb Header */}
        <div className="bg-surface border-b border-outline-variant/20 py-4">
          <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex items-center">
            <Link
              className="inline-flex items-center gap-2 font-label-md text-label-md text-on-surface-variant hover:text-secondary transition-colors"
              href="/"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to Home
            </Link>
          </div>
        </div>

        {/* Doctor Hero Section */}
        <section className="bg-primary-container text-white py-16 px-margin-mobile md:px-margin-desktop relative overflow-hidden">
          {/* Decorative blur elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-container-max mx-auto relative z-10 flex flex-col md:flex-row gap-12 items-center">
            {/* Image Box */}
            <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden border-4 border-secondary shadow-modal shrink-0 bg-surface">
              <img
                alt={doctor.name}
                className="w-full h-full object-cover"
                src={doctor.image}
              />
            </div>

            {/* Doctor Basic Details */}
            <div className="flex-1 text-center md:text-left">
              <span className="inline-block py-1.5 px-4 bg-secondary text-on-secondary font-label-sm text-label-sm rounded-full mb-4 uppercase tracking-wider">
                {doctor.badgeTitle}
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-3">
                {doctor.name}
              </h1>
              <p className="font-headline-sm text-headline-sm text-secondary-fixed mb-6">
                {doctor.tagline}
              </p>
              
              {/* Quick stats / Highlights */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start pt-4 border-t border-outline-variant/20">
                {doctor.bulletPoints.map((bp, idx) => (
                  <div className="flex items-center gap-2.5 justify-center" key={idx}>
                    <span className="material-symbols-outlined text-secondary">
                      {bp.icon}
                    </span>
                    <span className="font-label-md text-label-md text-white/90">
                      {bp.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Info & Dashboard Section */}
        <section className="py-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          {/* Tab Navigation */}
          <div className="flex border-b border-outline-variant/30 mb-10 overflow-x-auto gap-2">
            <button
              className={`pb-4 px-6 font-label-md text-label-md font-bold transition-all relative shrink-0 cursor-pointer ${
                activeTab === "clinical"
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => setActiveTab("clinical")}
            >
              {doctor.tabLabel || "Clinical Profile & Endoscopy"}
            </button>
            <button
              className={`pb-4 px-6 font-label-md text-label-md font-bold transition-all relative shrink-0 cursor-pointer ${
                activeTab === "academic"
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => setActiveTab("academic")}
            >
              Research & Academic Work
            </button>
            <button
              className={`pb-4 px-6 font-label-md text-label-md font-bold transition-all relative shrink-0 cursor-pointer ${
                activeTab === "leadership"
                  ? "text-secondary border-b-2 border-secondary"
                  : "text-on-surface-variant hover:text-primary"
              }`}
              onClick={() => setActiveTab("leadership")}
            >
              Tenure, Credentials & Roles
            </button>
          </div>

          {/* Tab Content Display */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left and Middle Columns (Span 2) */}
            <div className="lg:col-span-2 space-y-8">
              {activeTab === "clinical" && (
                <>
                  {/* Biography */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">person</span>
                      Biography
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                      {doctor.biography}
                    </p>
                  </div>

                  {/* Spine Endoscopy */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">healing</span>
                      {doctor.clinicalFocusTitle || "Spine Endoscopy & Surgical Focus"}
                    </h2>
                    <ul className="space-y-4">
                      {doctor.spineEndoscopy.map((item, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">verified</span>
                          <span className="font-body-md text-body-md text-on-surface">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Projects & Field Work */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">travel_explore</span>
                      Projects & Field Work
                    </h2>
                    <ul className="space-y-4">
                      {doctor.projectsFieldWork.map((item, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">assignment</span>
                          <span className="font-body-md text-body-md text-on-surface-variant leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab === "academic" && (
                <>
                  {/* Publications */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">menu_book</span>
                      Publications & Research Papers
                    </h2>
                    <ul className="space-y-4">
                      {doctor.publications.map((pub, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                          <span className="font-bold text-secondary">{idx + 1}.</span>
                          <span>{pub}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Conferences */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">groups</span>
                      Conferences Attended
                    </h2>
                    <ul className="space-y-4">
                      {doctor.conferences.map((conf, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">event</span>
                          <span>{conf}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Paper Presentations */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">presentation_play</span>
                      Paper Presentations
                    </h2>
                    <ul className="space-y-4">
                      {doctor.paperPresentations.map((pres, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">co_present</span>
                          <span>{pres}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}

              {activeTab === "leadership" && (
                <>
                  {/* Experience / Tenure */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">history_edu</span>
                      Experience & Clinical Tenures
                    </h2>
                    <div className="space-y-6 relative pl-6 border-l border-outline-variant/40">
                      {doctor.experience.map((exp, idx) => (
                        <div className="relative" key={idx}>
                          {/* Dot marker */}
                          <div className="absolute -left-9 top-1.5 w-4 h-4 rounded-full bg-secondary border-4 border-surface"></div>
                          <p className="font-body-md text-body-md text-on-surface font-semibold">{exp}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Credentials */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">school</span>
                      Education & Credentials
                    </h2>
                    <ul className="space-y-4">
                      {doctor.education.map((edu, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">school</span>
                          <span>{edu}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Leadership Roles */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">shield_person</span>
                      Leadership Roles
                    </h2>
                    <ul className="space-y-4">
                      {doctor.leadershipRoles.map((role, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface font-semibold" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">military_tech</span>
                          <span>{role}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Associations */}
                  <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                    <h2 className="font-headline-sm text-headline-sm text-primary mb-5 flex items-center gap-3">
                      <span className="material-symbols-outlined text-secondary text-2xl">card_membership</span>
                      Professional Associations
                    </h2>
                    <ul className="space-y-4">
                      {doctor.associations.map((assoc, idx) => (
                        <li className="flex gap-3 bg-surface p-4 rounded-xl border border-outline-variant/20 font-body-md text-body-md text-on-surface-variant leading-relaxed" key={idx}>
                          <span className="material-symbols-outlined text-secondary mt-0.5">verified_user</span>
                          <span>{assoc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </>
              )}
            </div>

            {/* Right Column (Sidebar - Span 1) */}
            <div className="space-y-6">
              {/* Quick Credentials Summary */}
              <div className="bg-surface-container-lowest p-8 rounded-2xl shadow-clinical border border-outline-variant/15">
                <h3 className="font-label-md text-label-md text-primary font-bold uppercase tracking-wider mb-6 flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-sm">badge</span>
                  Credentials Overview
                </h3>
                <div className="space-y-4">
                  <div className="border-b border-outline-variant/10 pb-3">
                    <p className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">Certification</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">{doctor.badgeTitle}</p>
                  </div>
                  <div className="border-b border-outline-variant/10 pb-3">
                    <p className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">Board Registry</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">{doctor.badgeDesc}</p>
                  </div>
                  <div>
                    <p className="text-xs text-on-surface-variant mb-1 font-semibold uppercase tracking-wider">Primary Practice</p>
                    <p className="font-body-md text-body-md text-on-surface font-medium">{globalData.brandName}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto pb-20">
          <div className="bg-gradient-to-br from-primary-container to-primary-container/90 text-white rounded-3xl p-8 md:p-12 shadow-clinical flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 border border-outline-variant/10">
            <div className="max-w-2xl">
              <h2 className="font-headline-md text-headline-md text-white font-bold mb-4">
                Schedule a Consultation with {doctor.name}
              </h2>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 leading-relaxed">
                Connect with our clinical board to discuss your symptoms, review your diagnostic scans, and chart a personalized recovery pathway.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <Link
                className="bg-secondary text-on-secondary px-8 py-4 rounded-full font-label-md text-label-md hover:shadow-lg hover:shadow-secondary/20 hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-2 font-bold"
                href="/book"
              >
                Book Appointment
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
