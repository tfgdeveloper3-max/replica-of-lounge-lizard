"use client";
import { motion } from "framer-motion";
import Image from "next/image";


const webDesign = [
    "Custom Website Design",
    "Website Redesign Services",
    "Responsive Website Design",
    "UI UX Web Design",
    "Shopify Web Design",
    "Magento Web Design",
];

const webDev = [
    "E-Commerce Website Development",
    "WordPress Development",
    "Shopify Development",
    "Magento Development",
    "Laravel Development",
    "Contentful Development",
];

const seo = [
    "Answer Engine Optimization (AEO)",
    "SEO Audit Services",
    "Page Speed Optimization",
    "Content Marketing",
    "Product Optimization Services",
    "Google Analytics 4 Setup Services",
];

const digitalMarketing = [
    "Marketing and Sales Automation",
    "Pay-Per-Click Advertising (PPC)",
    "Social Media Marketing",
    "Email Marketing Services",
    "Brand Strategy Services",
    "Conversion Rate Optimization",
];

const offices = [
    {
        city: "NYC",
        address: "112 West 34th Street\n18th Floor\nNew York, NY 10120",
    },
    {
        city: "LONG ISLAND",
        address: "991 Main St.\nSuite 200\nHolbrook, NY 11741",
    },
    {
        city: "WASHINGTON D.C.",
        address: "1101 Connecticut Avenue NW\nSuite 450\nWashington, DC 20036",
    },
    {
        city: "NASHVILLE",
        address: "424 Church St\nSuite 2000\nNashville, TN 37219",
    },
    {
        city: "LA",
        address: "1100 Glendon Avenue\n17th Floor\nLos Angeles, CA 90024",
    },
    {
        city: "MIAMI",
        address: "1221 Brickell Ave\nSuite 900\nMiami, FL 33131",
    },
    {
        city: "CHARLESTON",
        address: "170 Meeting Street\nCharleston, SC 29401",
    },
    {
        city: "RICHMOND",
        address: "919 E. Main Street\nSuite 1000\nRichmond, VA 23219",
    },
    {
        city: "LAS VEGAS",
        address: "2300 West Sahara Avenue\nSuite 800\nLas Vegas, NV 89102",
    },
    {
        city: "AUSTIN",
        address: "2021 Guadalupe Street\nSuite 260\nAustin, Texas 78705",
    },
];

const legalLinks = [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Use", href: "#" },
    { label: "Press", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Scam Alert", href: "#", bold: true },
    { label: "Scholarship", href: "#" },
    { label: "Sitemap", href: "#" },
];

const linkClass = "text-white/60 hover:text-white transition-colors duration-200 text-[13px] leading-[1.9]";
const headingClass = "font-black text-white uppercase text-[13px] tracking-wide mb-3";

export default function Footer() {
    return (
        <footer
            className="w-full bg-[#2d2d2d] px-8 lg:px-16 pt-14 pb-8"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* ── Top section ── */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 mb-12">

                {/* LEFT: logo + heading + service columns */}
                <div>
                    {/* Logo + heading row */}
                    <div className="flex items-center gap-8 mb-10">
                        {/* Logo circle */}
                        <div className="w-24 h-24 rounded-full bg-[#e8391d] flex items-center justify-center shrink-0 overflow-hidden">
                            <Image
                                src="/images/logo-footer.svg"
                                alt="Lounge Lizard"
                                width={100}
                                height={100}
                                className="object-contain"
                            />
                        </div>
                        <h2
                            className="font-black text-white uppercase leading-[1.05]"
                            style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                        >
                            LET'S GROW YOUR<br />BRAND
                        </h2>
                    </div>

                    {/* 4-column service links */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                        {/* Web Design */}
                        <div>
                            <p className={headingClass}>WEB DESIGN</p>
                            <ul>
                                {webDesign.map((l) => (
                                    <li key={l}><a href="#" className={linkClass}>{l}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Web Development */}
                        <div>
                            <p className={headingClass}>WEB DEVELOPMENT</p>
                            <ul>
                                {webDev.map((l) => (
                                    <li key={l}><a href="#" className={linkClass}>{l}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* SEO */}
                        <div>
                            <p className={headingClass}>SEO</p>
                            <ul>
                                {seo.map((l) => (
                                    <li key={l}><a href="#" className={linkClass}>{l}</a></li>
                                ))}
                            </ul>
                        </div>

                        {/* Digital Marketing */}
                        <div>
                            <p className={headingClass}>DIGITAL MARKETING</p>
                            <ul>
                                {digitalMarketing.map((l) => (
                                    <li key={l}><a href="#" className={linkClass}>{l}</a></li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* RIGHT: offices */}
                <div className="min-w-[420px]">
                    {/* Location pin + heading */}
                    <div className="flex items-start gap-2 mb-6">
                        <svg width="18" height="22" viewBox="0 0 18 22" fill="#e8391d" xmlns="http://www.w3.org/2000/svg">
                            <path d="M9 0C4.03 0 0 4.03 0 9c0 6.75 9 13 9 13s9-6.25 9-13c0-4.97-4.03-9-9-9zm0 12a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <h3
                            className="font-black text-white uppercase leading-tight"
                            style={{ fontSize: "clamp(1.2rem, 2vw, 1.6rem)" }}
                        >
                            LOUNGE LIZARD<br />WORLDWIDE
                        </h3>
                    </div>

                    {/* Offices grid — 2 columns */}
                    <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                        {offices.map((o) => (
                            <div key={o.city}>
                                <p className="font-black text-white text-[12px] uppercase tracking-wide mb-0.5">
                                    {o.city}
                                </p>
                                <p className="text-white/60 text-[12px] leading-relaxed whitespace-pre-line">
                                    {o.address}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* ── Divider ── */}
            <div className="border-t border-white/10 mb-6" />

            {/* ── Social row ── */}
            <div className="flex items-center gap-4 mb-6">
                <span className="text-white font-bold text-sm">Follow Us</span>
                <div className="flex items-center gap-3">
                    <a href="#" className="text-white/60 hover:text-[#e8391d] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                    {/* X (Twitter) */}
                    <a href="#" className="text-white/60 hover:text-[#e8391d] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                    </a>
                    <a href="#" className="text-white/60 hover:text-[#e8391d] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </a>
                    <a href="#" className="text-white/60 hover:text-[#e8391d] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/></svg>
                    </a>
                    {/* Pinterest */}
                    <a href="#" className="text-white/60 hover:text-[#e8391d] transition-colors">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z"/>
                        </svg>
                    </a>
                </div>
            </div>

            {/* ── Copyright + legal links ── */}
            <div className="mb-6">
                <p className="text-white/50 text-[12px] mb-2">
                    All Rights Reserved © 2018-26 Lounge Lizard Worldwide is a Web Design Company since 1998.
                </p>
                <div className="flex flex-wrap items-center gap-1 text-[12px]">
                    {legalLinks.map((l, i) => (
                        <span key={l.label} className="flex items-center gap-1">
                            <a
                                href={l.href}
                                className={`${l.bold ? "font-black text-white underline" : "text-white/60"} hover:text-[#e8391d] transition-colors`}
                            >
                                {l.label}
                            </a>
                            {i < legalLinks.length - 1 && (
                                <span className="text-white/30">|</span>
                            )}
                        </span>
                    ))}
                </div>
            </div>

            {/* ── DMCA badge ── */}
            <div>
                <a href="#" target="_blank" rel="noopener noreferrer">
                    <Image
                        src="/images/footer-badge.png"
                        alt="DMCA Protected"
                        width={120}
                        height={40}
                        className="object-contain"
                    />
                </a>
            </div>

            {/* ── Scroll to top / Rooftop Lounge button ── */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="fixed bottom-28 right-8 z-50 w-14 h-14 rounded-full bg-[#e8391d] flex flex-col items-center justify-center text-white shadow-xl shadow-[#e8391d]/40"
            >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="18 15 12 9 6 15" />
                </svg>
                <span className="text-[8px] font-black uppercase tracking-wide leading-tight mt-0.5 text-center px-1">
                    ROOFTOP<br />LOUNGE
                </span>
            </motion.button>
        </footer>
    );
}