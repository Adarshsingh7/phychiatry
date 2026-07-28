"use client";

import type { ReactNode } from "react";
import { useState } from "react";
import Link from "next/link";
import { globalData } from "@/lib/site-data";

type ActivePage = "home" | "conditions" | "technology" | "patients" | "blog" | "about" | "contact" | "gallery";
type SocialIconName = "facebook" | "instagram" | "youtube";

const socialIcons: Record<SocialIconName, ReactNode> = {
  facebook: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M14 8.6V7.2c0-.7.5-1.1 1.2-1.1h1.6V3.3c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.5-4.1 4.2v1.3H7.7v3.1h2.6v8.9H14v-8.9h2.5l.4-3.1H14Z" />
    </svg>
  ),
  instagram: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="none">
      <rect x="4" y="4" width="16" height="16" rx="4.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="16.8" cy="7.2" r="1" fill="currentColor" />
    </svg>
  ),
  youtube: (
    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.6 12 4.6 12 4.6s-5.7 0-7.5.5a3 3 0 0 0-2.1 2.1A31.2 31.2 0 0 0 2 12a31.2 31.2 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.5 7.5.5 7.5.5s5.7 0 7.5-.5a3 3 0 0 0 2.1-2.1A31.2 31.2 0 0 0 22 12a31.2 31.2 0 0 0-.4-4.8ZM10 15.3V8.7l5.8 3.3L10 15.3Z" />
    </svg>
  )
};

function getPhoneHref(phone: string) {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}

function getWhatsAppHref(phone: string) {
  return `https://wa.me/${phone.replace(/\D/g, "")}`;
}

export function SiteHeader({ active }: Readonly<{ active: ActivePage }>) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-white border-b border-surface-container-high dark:border-outline-variant h-20">
        <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Avtar Health Care Clinic Logo"
              className="h-14 w-auto object-contain"
            />
          </Link>
          <nav className="hidden md:flex items-center gap-8 font-label-md text-label-md">
            {globalData.navItems.map((item) => {
              const isActive = item.key === active;
              const className = isActive
                ? "text-secondary font-bold border-b-2 border-secondary pb-1"
                : "text-on-surface-variant hover:text-secondary transition-colors";

              return item.href === "#" ? (
                <a key={item.label} className={className} href="#">
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} className={className} href={item.href}>
                  {item.label}
                </Link>
              );
            })}
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/book" className="hidden sm:inline-flex bg-secondary text-on-secondary px-6 py-2.5 rounded-full font-label-md text-label-md hover:opacity-90 active:scale-95 transition-all shadow-clinical items-center justify-center">
              Book Appointment
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-on-surface p-2 rounded-lg hover:bg-surface-container-high transition-colors"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined select-none">
                {isMenuOpen ? "close" : "menu"}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation overlay */}
      <div
        className={`fixed inset-0 top-20 z-40 bg-surface/95 dark:bg-surface-container-lowest/95 backdrop-blur-md transition-all duration-300 md:hidden flex flex-col ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <nav className="flex flex-col p-6 gap-6 font-headline-sm text-headline-sm font-semibold border-t border-surface-container-high dark:border-outline-variant">
          {globalData.navItems.map((item) => {
            const isActive = item.key === active;
            const className = isActive
              ? "text-secondary font-bold pl-4 border-l-4 border-secondary py-1"
              : "text-on-surface-variant hover:text-secondary pl-4 border-l-4 border-transparent py-1 transition-all";

            return (
              <Link
                key={item.label}
                className={className}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="pt-6 border-t border-surface-container-high dark:border-outline-variant px-4">
            <Link
              href="/book"
              className="w-full bg-secondary text-on-secondary py-4 rounded-xl font-label-lg text-label-lg hover:opacity-90 active:scale-[0.98] transition-all shadow-clinical flex items-center justify-center gap-2"
              onClick={() => setIsMenuOpen(false)}
            >
              <span className="material-symbols-outlined">calendar_month</span>
              Book Appointment
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}

export function SiteFooter() {
  const { footer } = globalData;
  return (
    <footer className="bg-primary-container dark:bg-primary w-full pt-16 pb-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-primary-fixed-dim/90">
        <div className="md:col-span-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-white p-2 rounded-xl inline-block shadow-sm">
              <img
                alt="Avtar Health Care Clinic Logo"
                className="h-12 w-auto object-contain"
                src={footer.logoImage}
              />
            </div>
          </div>
          <p className="font-body-md text-body-md text-primary-fixed-dim/80 leading-relaxed mb-6">
            {footer.description}
          </p>
          <div className="flex gap-4">
            {footer.socialLinks.map((link, idx) => (
              <a
                key={idx}
                aria-label={link.label}
                target="_blank"
                className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center hover:bg-secondary transition-colors text-white"
                href={link.href}
              >
                {socialIcons[link.icon as SocialIconName]}
              </a>
            ))}
          </div>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Patient Links</h5>
          <ul className="space-y-3 font-body-md text-body-md text-primary-fixed-dim/80">
            {footer.patientLinks.map((link) => (
              <li key={link.label}>
                <a className="hover:text-white transition-colors hover:underline" href={link.href}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h5 className="text-white font-label-md text-label-md uppercase tracking-widest mb-6">Clinical Hours</h5>
          <ul className="space-y-3 font-body-md text-body-md text-primary-fixed-dim/80">
            {footer.clinicalHours.map((hour, idx) => (
              <li key={idx} className="flex justify-between">
                <span>{hour.days}</span> <span>{hour.time}</span>
              </li>
            ))}
            <li className="pt-4 text-secondary-fixed font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">notification_important</span>
              {footer.supportTagline}
            </li>
          </ul>
        </div>
      </div>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop mt-16 pt-8 border-t border-outline-variant/10 text-center">
        <p className="font-body-md text-body-md text-primary-fixed-dim/60">
          {footer.copyright}
        </p>
        <p className="mt-3 font-label-md text-label-md text-primary-fixed-dim/80">
          <a
            className="hover:text-white transition-colors hover:underline"
            href={footer.creditHref}
            target="_blank"
            rel="noreferrer"
          >
            {footer.creditText}
          </a>
        </p>
      </div>
    </footer>
  );
}

export function FloatingContactButtons() {
  const { businessPhone } = globalData.footer;

  return (
    <div className="fixed bottom-5 right-5 z-[60] flex flex-col gap-3 sm:bottom-6 sm:right-6">
      <a
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-modal transition-transform hover:scale-105 active:scale-95"
        href={getWhatsAppHref(businessPhone)}
        target="_blank"
        rel="noreferrer"
      >
        <svg aria-hidden="true" className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 3.2a8.7 8.7 0 0 0-7.4 13.3l-1 3.7 3.8-1A8.8 8.8 0 1 0 12 3.2Zm0 15.8c-1.5 0-2.9-.4-4.1-1.2l-.3-.2-2.2.6.6-2.2-.2-.3A7.1 7.1 0 1 1 12 19Zm4-5.3c-.2-.1-1.4-.7-1.6-.8-.2-.1-.4-.1-.6.1-.2.3-.6.8-.8 1-.1.2-.3.2-.5.1-.2-.1-1-.4-1.9-1.2-.7-.6-1.2-1.4-1.3-1.6-.1-.2 0-.4.1-.5l.4-.5c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5 0-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.1s.9 2.4 1 2.6c.1.2 1.8 2.8 4.4 3.9.6.3 1.1.4 1.5.5.6.2 1.2.1 1.6.1.5-.1 1.4-.6 1.6-1.1.2-.6.2-1 .1-1.1-.1-.1-.3-.2-.5-.3Z" />
        </svg>
      </a>
      <a
        aria-label="Call the clinic"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-modal transition-transform hover:scale-105 active:scale-95"
        href={getPhoneHref(businessPhone)}
      >
        <span className="material-symbols-outlined">call</span>
      </a>
    </div>
  );
}

