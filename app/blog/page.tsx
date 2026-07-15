"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../components/site-chrome";
import { blogData, blogPageData } from "@/lib/site-data";

export default function BlogListPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const { listHero, categories } = blogPageData;

  // Filter blog entries based on search query and category tab
  const filteredBlogs = blogData.filter((blog) => {
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.cardDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.category.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      activeCategory === "All" || blog.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        rel="stylesheet"
      />
      <SiteHeader active="blog" />
      <main className="pt-20 overflow-x-hidden min-h-screen bg-surface-container-low">
        {/* Hero Section */}
        <section className="relative h-[360px] flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img
              alt={listHero.title}
              className="w-full h-full object-cover brightness-[0.75]"
              src={listHero.backgroundImage}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-container/95 via-primary-container/80 to-transparent"></div>
          </div>
          <div className="relative z-10 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto w-full py-12">
            <div className="max-w-2xl text-white">
              <span className="inline-block py-1 px-3 bg-secondary-container text-on-secondary-container font-label-sm text-label-sm rounded-full mb-4">
                {listHero.tagline}
              </span>
              <h1 className="font-headline-lg-mobile md:font-headline-lg text-headline-lg-mobile md:text-headline-lg font-bold mb-4">
                {listHero.title}
              </h1>
              <p className="font-body-lg text-body-lg text-primary-fixed-dim/90 max-w-xl">
                {listHero.description}
              </p>
            </div>
          </div>
        </section>

        {/* Filters & Search Controls */}
        <section className="py-12 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-10 bg-surface-container-lowest p-6 rounded-2xl shadow-clinical">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="w-full pl-12 pr-4 py-3 bg-surface border border-outline-variant/50 rounded-full font-body-md text-body-md text-on-surface outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/10 transition-all"
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={listHero.searchPlaceholder}
                type="text"
                value={searchQuery}
              />
              {searchQuery && (
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant hover:text-primary"
                  onClick={() => setSearchQuery("")}
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              )}
            </div>

            {/* Filter Tabs */}
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => {
                const isActive = activeCategory === cat.key;
                return (
                  <button
                    className={`px-5 py-2 rounded-full font-label-md text-label-md transition-all cursor-pointer ${
                      isActive
                        ? "bg-secondary text-on-secondary shadow-md scale-[1.02]"
                        : "bg-surface hover:bg-surface-container text-on-surface-variant hover:text-on-surface border border-outline-variant/30"
                    }`}
                    key={cat.key}
                    onClick={() => setActiveCategory(cat.key)}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Cards Grid */}
          {filteredBlogs.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBlogs.map((blog) => {
                // Determine badge color styling based on category
                let badgeClass = "bg-secondary-container text-on-secondary-container";
                if (blog.category === "Neuro-Psychiatry") {
                  badgeClass = "bg-primary-container text-primary-fixed";
                } else if (blog.category === "De-Addiction") {
                  badgeClass = "bg-error-container text-on-error-container";
                } else if (blog.category === "Therapy & Counseling") {
                  badgeClass = "bg-tertiary-fixed text-on-tertiary-fixed";
                }

                return (
                  <article
                    className="group flex flex-col bg-surface-container-lowest rounded-2xl overflow-hidden shadow-clinical border border-outline-variant/20 hover:shadow-lg hover:border-secondary/20 transition-all duration-300"
                    key={blog.slug}
                  >
                    {/* Image Header */}
                    <div className="relative h-52 w-full overflow-hidden bg-primary-container">
                      <img
                        alt={blog.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        src={blog.image}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent"></div>
                      <span
                        className={`absolute top-4 left-4 py-1 px-3 rounded-full font-label-sm text-label-sm font-semibold tracking-wide uppercase ${badgeClass}`}
                      >
                        {blog.category}
                      </span>
                    </div>

                    {/* Content Section */}
                    <div className="flex flex-col flex-1 p-6">
                      <h2 className="font-headline-sm text-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors duration-200 line-clamp-2">
                        {blog.title}
                      </h2>
                      <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 line-clamp-3">
                        {blog.cardDescription}
                      </p>
                      <div className="mt-auto pt-4 border-t border-outline-variant/10">
                        <Link
                          className="inline-flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-secondary-fixed-dim transition-colors group-hover:translate-x-1 duration-200"
                          href={`/blog/${blog.slug}`}
                        >
                          Read Treatment Guide
                          <span className="material-symbols-outlined text-sm">
                            arrow_forward
                          </span>
                        </Link>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-20 bg-surface-container-lowest rounded-2xl border border-outline-variant/20 shadow-clinical">
              <span className="material-symbols-outlined text-5xl text-on-surface-variant/40 mb-4">
                error
              </span>
              <p className="font-headline-sm text-headline-sm text-on-surface-variant mb-2">
                No articles found
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant/70">
                Try adjusting your search query or switching categories.
              </p>
            </div>
          )}
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
