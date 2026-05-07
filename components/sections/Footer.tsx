"use client";
import { motion } from "framer-motion";
import { ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const writing = ["Book Writing", "Ghostwriting", "Fiction Writing", "Non-Fiction Writing", "Children's Book Writing", "Memoir & Biography", "Script Writing"];
const editing = ["Book Editing", "Book Proofreading", "Children's Book Editing", "Ebook Creation", "Audiobook Narration", "Book Formatting", "Book Publishing"];
const design = ["Book Cover Design", "Author Website Design", "Book Printing", "Book Marketing", "Amazon Optimization", "Launch Campaigns"];
const company = ["About Us", "Our Portfolio", "Blogs & Insights", "Pricing Plans", "Contact Us", "Privacy Policy", "Terms of Use"];

const socials = [
    { label: "FB", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
    { label: "IG", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" },
    { label: "LI", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
    { label: "X", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
];

const lCls = "text-white/40 hover:text-white transition-colors duration-200 text-[13px] leading-[2.1]";
const hCls = "font-black text-white uppercase text-[11px] tracking-[0.2em] mb-4";

export default function Footer() {
    return (
        <footer
            className="w-full bg-[#0d0d0d] border-t border-white/5"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* ── CTA Banner ── */}
            <div className="bg-[#e8391d] px-12 lg:px-20 py-12">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-6">
                    <div>
                        <p className="text-white/70 text-[11px] font-black uppercase tracking-[0.28em] mb-2">Ready to Publish?</p>
                        <h3
                            className="font-black text-white uppercase leading-none"
                            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                        >
                            LET'S BRING YOUR BOOK TO LIFE.
                        </h3>
                    </div>
                    <motion.a
                        href="#"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.15)" }}
                        className="shrink-0 inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 text-[12px] transition-colors"
                    >
                        Get a Free Proposal <ArrowRight size={15} />
                    </motion.a>
                </div>
            </div>

            {/* ── Main body ── */}
            <div className="px-12 lg:px-20 py-16 max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-16">

                    {/* LEFT: brand */}
                    <div>
                        <div className="mb-7">
                            <span
                                className="font-black italic text-white leading-none"
                                style={{ fontSize: "clamp(1.3rem, 2vw, 1.7rem)" }}
                            >
                                Bexley<span className="text-[#e8391d]">publications</span>
                            </span>
                        </div>

                        <p className="text-white/38 text-[13px] leading-[1.85] mb-8 max-w-[220px]">
                            Transforming ideas into published masterpieces since 2012. Your story deserves to be told.
                        </p>

                        {/* contact mini */}
                        <div className="flex flex-col gap-3 mb-8">
                            <a href="tel:18884440110" className="flex items-center gap-2 text-white/40 hover:text-white text-[12px] transition-colors">
                                <Phone size={13} className="text-[#e8391d] shrink-0" />
                                1-888-444-0110
                            </a>
                            <a href="mailto:sales@oakmontpublications.com" className="flex items-center gap-2 text-white/40 hover:text-white text-[12px] transition-colors">
                                <Mail size={13} className="text-[#e8391d] shrink-0" />
                                sales@oakmontpublications.com
                            </a>
                        </div>

                        {/* socials */}
                        <div className="flex items-center gap-2.5 mb-8">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href="#"
                                    className="w-9 h-9 rounded-full bg-white/6 border border-white/10 flex items-center justify-center text-white/45 hover:bg-[#e8391d] hover:border-[#e8391d] hover:text-white transition-all duration-300"
                                >
                                    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                                        <path d={s.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>

                        {/* mini stats */}
                        <div className="grid grid-cols-2 gap-4">
                            {[["500+", "Books"], ["300+", "Authors"], ["12+", "Years"], ["98%", "Rating"]].map(([n, l]) => (
                                <div key={l} className="bg-white/4 rounded-xl p-3 text-center border border-white/6">
                                    <p className="font-black text-white text-lg leading-none">{n}</p>
                                    <p className="text-white/28 text-[9px] uppercase tracking-wider mt-1">{l}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT: 4-col links */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <p className={hCls}>Writing</p>
                            <ul>{writing.map((l) => <li key={l}><a href="#" className={lCls}>{l}</a></li>)}</ul>
                        </div>
                        <div>
                            <p className={hCls}>Editing</p>
                            <ul>{editing.map((l) => <li key={l}><a href="#" className={lCls}>{l}</a></li>)}</ul>
                        </div>
                        <div>
                            <p className={hCls}>Design</p>
                            <ul>{design.map((l) => <li key={l}><a href="#" className={lCls}>{l}</a></li>)}</ul>
                        </div>
                        <div>
                            <p className={hCls}>Company</p>
                            <ul>{company.map((l) => <li key={l}><a href="#" className={lCls}>{l}</a></li>)}</ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── Bottom bar ── */}
            <div className="border-t border-white/5 px-12 lg:px-20 py-6">
                <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center justify-between gap-4">
                    <p className="text-white/25 text-[12px]">
                        © 2026 OakMont Publications LLC. All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {["Privacy Policy", "Terms of Use", "Refund Policy", "Sitemap"].map((l) => (
                            <a key={l} href="#" className="text-white/25 hover:text-white text-[12px] transition-colors">{l}</a>
                        ))}
                    </div>
                </div>
            </div>

            {/* scroll to top */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#e8391d] flex items-center justify-center text-white shadow-xl shadow-[#e8391d]/30"
            >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
            </motion.button>
        </footer>
    );
}