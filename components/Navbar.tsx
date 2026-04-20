"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Phone,
    Mail,
    Menu,
    ChevronDown,
    X,
} from "lucide-react";

// ── Nav data ─────────────────────────────────────────────────────────────────
const navItems = [
    {
        label: "About",
        align: "left",
        columns: [
            {
                heading: null,
                links: [
                    "About Lounge Lizard",
                    "Our Team",
                    "Awards & Recognition",
                    "Press & Media",
                    "Careers",
                    "Our Offices",
                    "Contact Us",
                ],
            },
        ],
    },
    {
        label: "Services",
        align: "left",
        columns: [
            {
                heading: "WE ARE BRANDTENDERS",
                links: [
                    "Brand Strategy",
                    "Brand Voice Creation",
                    "Corporate ID Development",
                    "Content Creation",
                    "UI/UX Web Design",
                ],
            },
            {
                heading: "WE ARE MARKETING MIXOLOGISTS",
                links: [
                    "Digital Marketing Strategy",
                    "SEO Services",
                    "Pay-Per-Click (PPC)",
                    "Social Media Management",
                    "Email Marketing",
                    "Influencer Marketing",
                    "CRO Optimization",
                ],
            },
            {
                heading: "WE ARE DEVELOPERS",
                links: [
                    "Web Development",
                    "Mobile App Development",
                    "E-Commerce Development",
                    "Shopify Development",
                    "WordPress Development",
                    "Website Maintenance",
                ],
            },
        ],
    },
    {
        label: "Clients",
        align: "left",
        columns: [
            {
                heading: null,
                links: [
                    "Our Portfolio",
                    "Case Studies",
                    "Testimonials",
                    "Client Results",
                ],
            },
        ],
    },
    {
        label: "Industries",
        align: "right",
        columns: [
            {
                heading: null,
                links: [
                    "Accounting", "Agriculture", "Architecture", "Automotive",
                    "B2B", "B2C", "Banking", "Casino",
                    "Construction", "Consumer Electronics", "Consumer Products",
                    "Dealers And Distributors", "E-Commerce",
                ],
            },
            {
                heading: null,
                links: [
                    "Education", "Energy", "Entertainment", "Events",
                    "Fashion & Beauty", "Film", "Finance", "Fintech",
                    "Food & Beverage", "Franchises", "Gaming",
                    "Government", "Health & Fitness",
                ],
            },
            {
                heading: null,
                links: [
                    "Hotel", "Insurance", "Jewelry", "Law",
                    "Logistics", "Luxury", "Manufacturing", "Marine",
                    "Media", "Medical / Healthcare", "Nonprofit",
                    "Professional Services", "Publishing",
                ],
            },
            {
                heading: null,
                links: [
                    "Real Estate", "Restaurants", "Retail", "SaaS",
                    "Sports", "Start Ups / VC", "Technology",
                    "Tourism", "Transportation", "University",
                ],
            },
        ],
    },
    {
        label: "Case Studies",
        align: "right",
        columns: [
            {
                heading: null,
                links: [
                    "All Case Studies",
                    "Web Design Projects",
                    "Mobile App Projects",
                    "Digital Marketing Projects",
                    "Branding Projects",
                ],
            },
        ],
    },
    {
        label: "Blog",
        align: "right",
        columns: [
            {
                heading: null,
                links: [
                    "All Articles",
                    "Web Design",
                    "Digital Marketing",
                    "SEO News",
                    "Branding & Identity",
                    "Technology Trends",
                ],
            },
        ],
    },
    {
        label: "Contact",
        align: "right",
        columns: [
            {
                heading: null,
                links: [
                    "Get In Touch",
                    "Request a Proposal",
                    "NYC Office",
                    "Long Island Office",
                    "Nashville Office",
                    "Los Angeles Office",
                ],
            },
        ],
    },
];

const dropdownVariants = {
    hidden: { opacity: 0, y: -8 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.2, ease: "easeOut" as const } },
    exit: { opacity: 0, y: -6, transition: { duration: 0.15 } },
};

interface NavbarProps {
    isDay?: boolean;
}

export default function Navbar({ isDay = true }: NavbarProps) {
    const [scrolled, setScrolled] = useState(false);
    const [openNav, setOpenNav] = useState<string | null>(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 60);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const handleMouseEnter = (label: string) => {
        if (closeTimer.current) clearTimeout(closeTimer.current);
        setOpenNav(label);
    };

    const handleMouseLeave = () => {
        closeTimer.current = setTimeout(() => setOpenNav(null), 80);
    };

    // ── Color logic ──//

    const navTextColor = scrolled ? "text-white" : isDay ? "text-black/80" : "text-white";
    const navHoverColor = scrolled ? "hover:text-black/80" : "hover:text-[#e8391d]";
    const contactColor = scrolled ? "text-white/90" : isDay ? "text-black/80" : "text-white";
    const chevronColor = scrolled ? "text-white/60" : isDay ? "text-black/40" : "text-white/40";
    const logoLizard = scrolled ? "text-white" : "text-white";

    return (
        <header
            className="fixed top-0 left-0 right-0 z-[100] transition-all duration-500"
            style={{
                background: scrolled ? "#e8391d" : "transparent",
                backdropFilter: scrolled ? "blur(14px)" : "none",
                WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
            }}
        >
            {/* ── Top bar: phone + email ── */}
            <div className="flex items-center justify-end gap-8 px-8 h-[34px]">
                <a
                    href="tel:18884440110"
                    className={`flex items-center gap-1.5 text-[16px] ${contactColor} ${scrolled ? "hover:text-black/60" : "hover:text-[#e8391d]"} transition-colors group`}
                    style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${scrolled ? "bg-white/20 group-hover:bg-black/20" : "bg-[#e8391d]"}`}>
                        <Phone size={9} className="text-white" />
                    </span>
                    1-888-444-0110
                </a>
                <a
                    href="mailto:sales@loungelizard.com"
                    className={`flex items-center gap-1.5 text-[16px] ${contactColor} ${scrolled ? "hover:text-black/60" : "hover:text-[#e8391d]"} transition-colors group`}
                    style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                >
                    <span className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 transition-colors ${scrolled ? "bg-white/20 group-hover:bg-black/20" : "bg-[#e8391d]"}`}>
                        <Mail size={9} className="text-white" />
                    </span>
                    sales@loungelizard.com
                </a>
            </div>

            {/* ── Main nav row ── */}
            <nav className="flex items-center justify-between px-8 h-[72px]">

                {/* Logo */}
                <a href="/" className="shrink-0 flex items-center h-full">
                    <span
                        className="font-black leading-none tracking-tight italic"
                        style={{
                            fontSize: "clamp(1.25rem, 1.8vw, 1.6rem)",
                            fontFamily: "'Raleway', Arial, sans-serif",
                        }}
                    >
                        <span className="text-white">lounge</span>
                        <span className={`transition-colors duration-300 ${logoLizard}`}>lizard</span>
                    </span>
                </a>

                {/* Desktop nav links */}
                <ul className="hidden lg:flex items-center">
                    {navItems.map((item) => {
                        const isMega = item.columns.length > 1;
                        return (
                            <li
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => handleMouseEnter(item.label)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className={`flex items-center gap-1 px-3 py-2 font-semibold transition-colors duration-300 ${navTextColor} ${navHoverColor}`}
                                    style={{
                                        fontFamily: "'Raleway', Arial, sans-serif",
                                        fontSize: "16px",
                                    }}
                                >
                                    {item.label}
                                    <ChevronDown
                                        size={12}
                                        className={`transition-transform duration-200 ${chevronColor} ${openNav === item.label ? "rotate-180" : ""}`}
                                    />
                                </button>

                                {/* Dropdown */}
                                <AnimatePresence>
                                    {openNav === item.label && (
                                        <motion.div
                                            variants={dropdownVariants}
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            onMouseEnter={() => handleMouseEnter(item.label)}
                                            onMouseLeave={handleMouseLeave}
                                            className={`absolute top-full mt-0 z-50 origin-top ${item.align === "right" ? "right-0" :
                                                item.align === "center" ? "left-1/2 -translate-x-1/2" :
                                                    "left-0"
                                                }`}
                                            style={{
                                                minWidth: isMega
                                                    ? (item.label === "Industries" ? "880px" : "580px")
                                                    : "220px",
                                                background: "rgba(15, 15, 20, 0.88)",
                                                backdropFilter: "blur(20px)",
                                                WebkitBackdropFilter: "blur(20px)",
                                                border: "1px solid rgba(255,255,255,0.08)",
                                                boxShadow: "0 20px 60px rgba(0,0,0,0.5)",
                                            }}
                                        >
                                            {/* Red accent bar */}
                                            <div className="h-1 w-full bg-[#e8391d]" />

                                            <div className={`flex ${isMega ? "divide-x divide-white/10" : ""} py-4`}>
                                                {item.columns.map((col, ci) => (
                                                    <div
                                                        key={ci}
                                                        className={isMega ? "flex-1 px-5" : "w-full"}
                                                    >
                                                        {col.heading && (
                                                            <p
                                                                className="text-[10px] font-black uppercase tracking-widest text-[#e8391d] mb-3 px-2"
                                                                style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                                                            >
                                                                {col.heading}
                                                            </p>
                                                        )}
                                                        <ul>
                                                            {col.links.map((link) => (
                                                                <li key={link}>
                                                                    <a
                                                                        href="#"
                                                                        className="flex items-center gap-2 px-2 py-1.5 text-[13px] text-white/80 hover:text-[#e8391d] hover:bg-white/5 rounded transition-colors group"
                                                                        style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                                                                    >
                                                                        <span className="w-1 h-1 rounded-full bg-[#e8391d] opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                                                                        {link}
                                                                    </a>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </li>
                        );
                    })}
                </ul>

                {/* Mobile hamburger */}
                <button
                    className={`lg:hidden p-2 transition-colors ${scrolled || !isDay ? "text-white" : "text-black"}`}
                    onClick={() => setMobileOpen((v) => !v)}
                >
                    {mobileOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </nav>

            {/* ── Mobile menu ── */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden overflow-hidden"
                        style={{
                            background: "rgba(15, 15, 20, 0.97)",
                            backdropFilter: "blur(20px)",
                        }}
                    >
                        <ul className="px-6 py-4 flex flex-col gap-1">
                            {navItems.map((item) => (
                                <li key={item.label}>
                                    <button
                                        className="w-full text-left px-3 py-3 text-[14px] font-semibold text-white/85 hover:text-[#e8391d] border-b border-white/5 transition-colors flex items-center justify-between"
                                        style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                                        onClick={() => setOpenNav(openNav === item.label ? null : item.label)}
                                    >
                                        {item.label}
                                        <ChevronDown
                                            size={14}
                                            className={`transition-transform ${openNav === item.label ? "rotate-180" : ""} text-white/40`}
                                        />
                                    </button>
                                    <AnimatePresence>
                                        {openNav === item.label && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: "auto" }}
                                                exit={{ opacity: 0, height: 0 }}
                                                className="pl-4 overflow-hidden"
                                            >
                                                {item.columns.flatMap((col) => col.links).map((link) => (
                                                    <li key={link}>
                                                        <a
                                                            href="#"
                                                            className="block px-3 py-2 text-[13px] text-white/60 hover:text-[#e8391d] transition-colors"
                                                            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                                                        >
                                                            {link}
                                                        </a>
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}