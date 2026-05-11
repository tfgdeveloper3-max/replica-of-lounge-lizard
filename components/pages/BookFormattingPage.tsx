"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    BookType, ArrowRight, CheckCircle2, BookOpen, Ruler, Type,
    AlignJustify, MoveVertical, TextCursorInput, Printer, Phone,
    Minus, Plus, Sparkles, FileCheck, Palette, Scan, Maximize, BoxSelect
} from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// --- Animation Variants ---
const maskReveal: Variants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 40 },
    visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, transition: { duration: 1, ease: smoothEase } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.7, ease: smoothEase } },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

// --- Data ---
const typesettingDetails = [
    { icon: TextCursorInput, title: "Drop Caps & Chapter Openers", desc: "Professionally styled chapter openings that signal quality the moment a reader turns the page." },
    { icon: AlignJustify, title: "Hyphenation & Justification", desc: "Intelligent hyphenation and word spacing that eliminates rivers of white space and awkward gaps." },
    { icon: MoveVertical, title: "Widow & Orphan Control", desc: "No stray words at the top or bottom of pages — every paragraph flows with visual balance." },
    { icon: Type, title: "Typography & Font Pairing", desc: "Carefully selected typefaces for headings and body text that enhance readability and genre tone." },
    { icon: Maximize, title: "Margin & Gutter Balance", desc: "Inside gutters, outside margins, and running heads calibrated for the reading experience." },
    { icon: Palette, title: "Running Headers & Footers", desc: "Author name, book title, and page numbers positioned consistently across every spread." },
];

const trimSizes = [
    { size: '5.08" × 7.87"', label: "Mass Market", desc: "The classic pocket paperback. Ideal for genre fiction — thriller, romance, sci-fi.", w: "w-12", h: "h-[74px]" },
    { size: '5.5" × 8.5"', label: "Trade Fiction", desc: "The modern fiction standard. Comfortable to hold with excellent readability.", w: "w-14", h: "h-[86px]" },
    { size: '6" × 9"', label: "Standard Non-Fiction", desc: "The go-to for business, self-help, and narrative non-fiction. Professional and authoritative.", w: "w-16", h: "h-[96px]" },
    { size: '8.5" × 8.5"', label: "Square / Children's", desc: "Perfect for illustrated children's books, photography books, and gift formats.", w: "w-[72px]", h: "h-[72px]" },
    { size: '8.5" × 11"', label: "Workbook / Textbook", desc: "Maximum page real estate for workbooks, manuals, and educational materials.", w: "w-20", h: "h-[104px]" },
];

const processSteps = [
    { step: "01", title: "Style Consultation", desc: "We select fonts, margins, and design elements that match your genre and vision before any layout begins.", icon: Palette },
    { step: "02", title: "Professional Typesetting", desc: "Your manuscript is laid out with precision — chapter openers, running headers, and intelligent paragraph flow.", icon: BookType },
    { step: "03", title: "Author Proof Review", desc: "You receive a digital proof to review every page. We refine details until the interior is exactly right.", icon: Scan },
    { step: "04", title: "Print-Ready Delivery", desc: "Final files are exported as press-quality PDFs, rigorously checked against KDP and IngramSpark specifications.", icon: Printer },
];

const faqs = [
    { q: "What is the difference between formatting and typesetting?", a: "Formatting is the general layout of your book — margins, fonts, and spacing. Typesetting is the art of arranging text on the page for optimal readability and aesthetic appeal. It involves detailed adjustments like kerning, ligatures, hyphenation, and widow/orphan control. We provide professional typesetting, not basic formatting." },
    { q: "What trim size should I choose?", a: "It depends on your genre. Fiction typically uses 5.5\" × 8.5\" or 6\" × 9\". Children's books often use square formats like 8.5\" × 8.5\". Workbooks and textbooks favor 8.5\" × 11\". We provide personalized recommendations during your consultation." },
    { q: "Will my formatted book be accepted by KDP and IngramSpark?", a: "Guaranteed. We build your interior to the exact technical specifications required by Amazon KDP, IngramSpark, and other major print-on-demand platforms. We verify bleed areas, margin requirements, color profiles, and page counts before delivery." },
    { q: "Can you format a book with images, charts, and tables?", a: "Absolutely. Complex interiors — including full-page images, data tables, sidebars, pull quotes, and footnotes — are our specialty. Every element is positioned for clarity and visual harmony." },
    { q: "Do I get to choose the fonts?", a: "Yes. We present curated font pairings based on your genre and style preferences. You select the combination that feels right, and we handle the precise implementation and licensing." },
    { q: "What file formats do you deliver?", a: "We deliver a press-quality PDF formatted to your printer's exact specifications. We also provide a web-optimized PDF for digital review, and source files are available upon request." },
];

export default function BookFormattingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const overviewRef = useRef<HTMLDivElement>(null);
    const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });

    return (
        <main className="w-full overflow-hidden" style={{ fontFamily: "'Raleway', Arial, sans-serif" }}>

            {/* ════════════════════════════════════════════
                SECTION 1: CINEMATIC SERVICE HERO
            ════════════════════════════════════════════ */}
            <section className="relative w-full h-screen flex items-center justify-center bg-[#05070f] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-[#e8391d] opacity-10 rounded-full blur-[180px] pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
                        <BookType size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Book Formatting & Typesetting</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        EVERY PAGE, <br /><span className="text-[#e8391d]">PERFECTLY SET.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        Readers judge your book's quality the moment they open it. Professional typesetting ensures your interior is clean, balanced, and undeniably polished — giving your words the stage they deserve.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 40px rgba(232, 57, 29, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Learn More <ArrowRight size={16} />
                        </motion.a>
                        <motion.a href="/contact" whileHover={{ borderColor: "#e8391d", color: "#e8391d" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Get A Free Quote
                        </motion.a>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 2: SERVICE OVERVIEW
            ════════════════════════════════════════════ */}
            <section id="overview" ref={overviewRef} className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={overviewInView ? { width: "100%" } : {}} transition={{ duration: 1.5, ease: smoothEase }} className="absolute top-0 left-0 h-1 bg-[#e8391d] origin-left" />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div variants={staggerContainer} initial="hidden" animate={overviewInView ? "visible" : "hidden"} className="flex flex-col">
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Overview</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
                            INTERIOR DESIGN THAT <br /><span className="text-[#e8391d]">DEMANDS RESPECT.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            A Word document exported to PDF is not a book. Amateur formatting — inconsistent margins, bad typography, broken page flow — signals self-published before the reader finishes chapter one.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Professional typesetting is invisible to the reader, but they feel it in every page turn. Balanced margins, proper hyphenation, and flawless typography create a reading experience that holds attention and builds credibility.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Professional Font Pairing & Licensing", "Widow, Orphan & River Control", "KDP & IngramSpark Compliant", "Complex Elements Supported"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/services-formatting.webp" alt="Book Formatting Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: THE ART OF TYPESETTING (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <Ruler size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Precision Details</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            THE ART OF <span className="text-[#e8391d]">TYPESETTING</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-white/40 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
                            The difference between a Word export and a professionally typeset book is in the details most readers never notice — but always feel.
                        </motion.p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {typesettingDetails.map(({ icon: Icon, title, desc }) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#e8391d]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none" />
                                <div className="relative z-10">
                                    <div className="w-12 h-12 rounded-xl bg-[#e8391d]/10 flex items-center justify-center mb-6 group-hover:bg-[#e8391d] transition-colors duration-300">
                                        <Icon size={22} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h3 className="font-black text-white uppercase text-lg mb-2 tracking-wide">{title}</h3>
                                    <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: CHOOSE YOUR TRIM SIZE (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-16">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <BoxSelect size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Book Dimensions</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            CHOOSE YOUR <span className="text-[#e8391d]">TRIM SIZE</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-gray-400 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
                            The right size signals the right genre. Here are the industry standards — or we can create a custom size for your project.
                        </motion.p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                        {trimSizes.map(({ size, label, desc, w, h }) => (
                            <motion.div key={label} variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-6 hover:border-[#e8391d]/40 hover:shadow-xl hover:shadow-[#e8391d]/5 transition-all duration-500 group cursor-default flex flex-col items-center text-center">
                                {/* Visual Book Representation */}
                                <div className="flex items-end justify-center mb-6 h-[120px]">
                                    <div className={`${w} ${h} bg-gray-100 border-2 border-gray-300 rounded-sm group-hover:border-[#e8391d] group-hover:bg-[#e8391d]/5 transition-all duration-300 flex flex-col p-1.5`}>
                                        <div className="w-full h-1 bg-gray-300 group-hover:bg-[#e8391d]/40 rounded-full mb-1" />
                                        <div className="w-3/4 h-0.5 bg-gray-200 group-hover:bg-[#e8391d]/20 rounded-full mb-1" />
                                        <div className="flex-1 grid grid-cols-2 gap-0.5">
                                            <div className="space-y-0.5">
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                            </div>
                                            <div className="space-y-0.5">
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                                <div className="w-full h-0.5 bg-gray-200 rounded-full" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <span className="text-[#e8391d] font-black text-[13px] tracking-widest mb-1">{size}</span>
                                <h3 className="font-black text-black uppercase text-sm mb-2 tracking-wide">{label}</h3>
                                <p className="text-gray-400 text-[12px] leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 5: FORMATTING PROCESS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            OUR FORMATTING <span className="text-[#e8391d]">PROCESS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-white/10 z-0" />

                        {processSteps.map(({ step, title, desc, icon: Icon }) => (
                            <motion.div key={step} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-[#e8391d] flex items-center justify-center mb-6 shadow-lg shadow-[#e8391d]/20 border-4 border-[#111]">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <span className="text-[#e8391d] font-black text-sm tracking-widest mb-2">{step}</span>
                                <h3 className="font-black text-white uppercase text-lg mb-3 tracking-wide">{title}</h3>
                                <p className="text-white/40 text-[14px] leading-relaxed max-w-[250px]">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 6: WHY CHOOSE OUR FORMATTERS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/about-us-bg.webp" alt="Book Formatting Team" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />

                        {/* Floating Stat */}
                        <div className="absolute -right-6 top-12 bg-[#e8391d] rounded-2xl px-6 py-4 shadow-2xl shadow-[#e8391d]/30">
                            <p className="font-black text-white text-2xl">0</p>
                            <p className="text-white/70 text-[11px] font-bold uppercase tracking-wider">KDP rejections</p>
                        </div>
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Why Bexley?</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-10" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                            FORMATTING THAT <br /><span className="text-[#e8391d]">PASSES EVERY CHECK.</span>
                        </motion.h2>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                            {[
                                "Real Design, Not Templates — Every interior is custom-built for your book's unique structure.",
                                "Printer Specifications Expertise — KDP, IngramSpark, and offset press requirements mastered.",
                                "Complex Interior Specialists — Images, tables, poetry, footnotes, sidebars — all handled.",
                                "Licensed, Professional Fonts — We handle typography licensing so you don't have to.",
                                "Author Proof Included — Review every page and request revisions before final export."
                            ].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                        <CheckCircle2 size={14} className="text-[#e8391d] group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-gray-500 text-[15px] leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 7: SERVICE FAQS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            BOOK FORMATTING <span className="text-[#e8391d]">FAQS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        {faqs.map(({ q, a }, i) => (
                            <motion.div key={i} variants={fadeUp} className="border border-white/10 rounded-2xl overflow-hidden bg-white/[0.02] hover:border-[#e8391d]/40 transition-colors duration-300">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
                                    <span className="font-bold text-white text-[15px] pr-4">{q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#e8391d] text-white" : "bg-white/10 text-white/40"}`}>
                                        {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: smoothEase }} className="overflow-hidden">
                                            <div className="px-6 pb-6 text-white/50 text-[14px] leading-relaxed">
                                                {a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 8: MASSIVE CTA
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#e8391d] py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center px-8 relative z-10">
                    <h2 className="font-black text-white uppercase leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                        READY TO FORMAT YOUR BOOK?
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Stop settling for Word templates. Get a professionally typeset interior that does your writing justice.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Get A Free Quote <ArrowRight size={18} />
                        </motion.a>
                        <motion.a href="tel:18884440110" whileHover={{ gap: "14px" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            <Phone size={16} /> Call Us Now
                        </motion.a>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}