"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    PenLine, ArrowRight, CheckCircle2, BookOpen, Layers, GitCompare,
    Type, Eye, BookMarked, Wand2, MessageSquareText, Sparkles, Phone,
    Minus, Plus, Search, ShieldCheck, PenTool, Users, FileText,
    AlertTriangle, Zap, Drama, MessageCircle, BookX, ClipboardList
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
const editingTiers = [
    {
        icon: Layers,
        title: "Developmental Editing",
        subtitle: "The Big Picture",
        desc: "We examine your manuscript's foundation — structure, plot, pacing, character arcs, and narrative flow. This is where we reshape the architecture of your book to create a compelling, page-turning experience.",
        highlights: ["Plot & Structure Refinement", "Character Arc Development", "Pacing & Tension Fixes", "Scene Reordering & Cuts"],
    },
    {
        icon: Wand2,
        title: "Line Editing",
        subtitle: "The Art of Language",
        desc: "We refine your prose at the sentence level — enhancing clarity, tightening phrasing, eliminating repetition, and elevating your voice. Every line is crafted to resonate with power and precision.",
        highlights: ["Sentence-Level Refinement", "Voice & Tone Enhancement", "Repetition Elimination", "Show, Don't Tell"],
    },
    {
        icon: Type,
        title: "Copy Editing",
        subtitle: "The Technical Polish",
        desc: "We correct grammar, syntax, spelling, and punctuation with surgical precision. Internal consistency, factual accuracy, and style guide compliance — every technical detail is verified and perfected.",
        highlights: ["Grammar & Syntax Correction", "Internal Consistency Check", "Factual Verification", "Style Guide Compliance"],
    },
];

const manuscriptIssues = [
    { icon: AlertTriangle, title: "Plot Holes & Gaps", desc: "Inconsistencies in your storyline that break reader immersion and credibility." },
    { icon: Zap, title: "Pacing Problems", desc: "Sections that drag or rush — we find the rhythm that keeps readers hooked." },
    { icon: Drama, title: "Flat Characters", desc: "Underdeveloped characters who lack depth, motivation, or believable arcs." },
    { icon: MessageCircle, title: "Weak Dialogue", desc: "Conversations that feel unnatural, on-the-nose, or fail to reveal character." },
    { icon: BookX, title: "Info Dumping", desc: "Heavy exposition blocks that tell instead of show, bogging down the narrative." },
    { icon: BookOpen, title: "Sagging Middle", desc: "The second act slump where momentum dies and reader engagement drops." },
];

const processSteps = [
    { step: "01", title: "Manuscript Evaluation", desc: "A comprehensive read-through with a detailed editorial report outlining your manuscript's strengths, weaknesses, and a custom editing roadmap.", icon: Search },
    { step: "02", title: "Developmental Edit", desc: "Big-picture restructuring — plot, pacing, character arcs, and scene-level improvements to strengthen your story's foundation.", icon: Layers },
    { step: "03", title: "Line & Copy Edit", desc: "Sentence-level refinement and technical correction — voice enhancement, grammar, consistency, and stylistic polish.", icon: PenLine },
    { step: "04", title: "Revision Support", desc: "We guide you through implementing edits, answer questions, and provide a final review of your revised manuscript.", icon: Users },
];

const beforeAfter = {
    before: `John was very angry when he walked into the room. He couldn't believe what Sarah had done. It was really terrible and made him feel bad. He looked at her with an angry expression on his face and started yelling loudly about the situation. Sarah felt sad about it and started crying. The room was very quiet after that and nobody said anything for a long time.`,
    after: `John slammed the door behind him. His jaw tightened the moment he saw Sarah standing by the window, her silence louder than any confession. "You told them," he said, his voice barely above a whisper. Sarah's composure cracked. Her shoulders trembled as she turned away, unable to meet his eyes. The silence between them stretched — thick, suffocating, absolute.`,
};

const faqs = [
    { q: "What type of editing does my book need?", a: "Most manuscripts benefit from all three levels — developmental, line, and copy editing. However, if you've already had structural work done, you may only need line and copy editing. We provide a free manuscript evaluation to determine exactly what your book needs." },
    { q: "Will an editor change my story?", a: "A good editor enhances your story — never hijacks it. We suggest structural improvements and refine your prose, but every creative decision remains yours. All edits are delivered via Track Changes so you can accept or reject any suggestion." },
    { q: "How long does the editing process take?", a: "A full developmental + line + copy edit for a standard manuscript (60,000–80,000 words) typically takes 4–6 weeks. Line and copy editing alone takes 2–3 weeks. We provide an exact timeline during your manuscript evaluation." },
    { q: "Do you edit both fiction and non-fiction?", a: "Absolutely. Our editors specialize in both. Fiction editing focuses on narrative craft — plot, character, pacing. Non-fiction editing emphasizes argument clarity, logical flow, structural coherence, and authoritative voice." },
    { q: "What's included in the editorial report?", a: "You receive a comprehensive document analyzing your manuscript's strengths and weaknesses, specific recommendations for improvement, a chapter-by-chapter breakdown of issues, and a prioritized action plan for revisions." },
    { q: "What if I disagree with an edit?", a: "That's completely normal and expected. Editing is a collaborative process. All changes are tracked, and you have final say on every edit. We encourage dialogue and are happy to explain the reasoning behind any suggestion." },
];

export default function BookEditingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const [showAfter, setShowAfter] = useState(false);
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
                        <PenLine size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Book Editing</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        FROM DRAFT TO <br /><span className="text-[#e8391d]">MASTERPIECE.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        Every great book is built on great editing. Our professional editors refine your manuscript's structure, elevate your prose, and polish every sentence — transforming your draft into a book readers can't put down.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 40px rgba(232, 57, 29, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Learn More <ArrowRight size={16} />
                        </motion.a>
                        <motion.a href="/contact" whileHover={{ borderColor: "#e8391d", color: "#e8391d" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Free Evaluation
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
                            YOUR STORY, <br /><span className="text-[#e8391d]">SHARPENED & REFINED.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            Writing a book is only half the journey. Editing is where good manuscripts become great books. Our editors don't just fix errors — they identify structural weaknesses, strengthen your narrative, and ensure every sentence earns its place on the page.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Whether your manuscript needs a complete structural overhaul or a precise line-level polish, we tailor our editing approach to your book's specific needs and your vision as an author.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Comprehensive Editorial Report Included", "Track Changes with Full Transparency", "Collaborative Revision Support", "Genre-Specific Editorial Expertise"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/services-editing.webp" alt="Book Editing Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: THE EDITING SPECTRUM (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <ClipboardList size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Three Levels of Refinement</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            THE EDITING <span className="text-[#e8391d]">SPECTRUM</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-white/40 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
                            Every manuscript needs a different level of attention. We offer three distinct tiers — each designed to address specific editorial needs.
                        </motion.p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {editingTiers.map(({ icon: Icon, title, subtitle, desc, highlights }, index) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group cursor-default relative overflow-hidden flex flex-col">
                                {/* Accent top bar */}
                                <div className="absolute top-0 left-0 right-0 h-1 bg-[#e8391d] scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                                <div className="w-14 h-14 rounded-xl bg-[#e8391d]/10 flex items-center justify-center mb-6 group-hover:bg-[#e8391d] transition-colors duration-300">
                                    <Icon size={26} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>

                                <span className="text-[#e8391d] font-black uppercase tracking-[0.2em] text-[10px] mb-1">Tier {index + 1}</span>
                                <h3 className="font-black text-white uppercase text-xl mb-1 tracking-wide">{title}</h3>
                                <p className="text-white/30 font-semibold text-[12px] uppercase tracking-widest mb-4">{subtitle}</p>
                                <p className="text-white/50 text-[14px] leading-relaxed mb-6">{desc}</p>

                                <div className="mt-auto pt-6 border-t border-white/5">
                                    <p className="text-white/30 font-bold uppercase tracking-widest text-[10px] mb-3">Includes</p>
                                    {highlights.map((h) => (
                                        <div key={h} className="flex items-center gap-2 mb-2">
                                            <CheckCircle2 size={13} className="text-[#e8391d] shrink-0" />
                                            <span className="text-white/60 text-[13px]">{h}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: THE TRANSFORMATION (UNIQUE - BEFORE/AFTER)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1000px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <GitCompare size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">See The Difference</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            THE <span className="text-[#e8391d]">TRANSFORMATION</span>
                        </motion.h2>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        {/* Toggle */}
                        <div className="flex items-center justify-center gap-4 mb-8">
                            <button onClick={() => setShowAfter(false)} className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[12px] cursor-pointer transition-all duration-300 ${!showAfter ? "bg-[#e8391d] text-white shadow-lg shadow-[#e8391d]/20" : "bg-gray-100 text-black/50 hover:bg-gray-200"}`}>
                                Original Draft
                            </button>
                            <button onClick={() => setShowAfter(true)} className={`px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[12px] cursor-pointer transition-all duration-300 ${showAfter ? "bg-[#e8391d] text-white shadow-lg shadow-[#e8391d]/20" : "bg-gray-100 text-black/50 hover:bg-gray-200"}`}>
                                After Editing
                            </button>
                        </div>

                        {/* Content Card */}
                        <div className="relative bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xl shadow-black/5">
                            <div className="flex items-center gap-3 px-8 py-4 border-b border-gray-100 bg-gray-50/50">
                                <div className="w-3 h-3 rounded-full bg-red-400" />
                                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                                <div className="w-3 h-3 rounded-full bg-green-400" />
                                <span className="ml-3 text-[12px] font-bold text-black/30 uppercase tracking-widest">
                                    {showAfter ? "Edited Manuscript" : "Original Draft"}
                                </span>
                            </div>

                            <div className="p-8 md:p-10 min-h-[220px]">
                                <AnimatePresence mode="wait">
                                    {!showAfter ? (
                                        <motion.div key="before" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 20 }} transition={{ duration: 0.4 }} className="relative">
                                            <p className="text-gray-400 leading-[2] text-[15px] italic">
                                                {beforeAfter.before}
                                            </p>
                                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-red-300/50 rounded-full" />
                                        </motion.div>
                                    ) : (
                                        <motion.div key="after" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }} className="relative">
                                            <p className="text-black/80 leading-[2] text-[15px] font-medium">
                                                {beforeAfter.after}
                                            </p>
                                            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-[#e8391d] rounded-full" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Annotations */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                            {[
                                { label: "Show, Don't Tell", desc: "Emotions demonstrated through action, not stated." },
                                { label: "Sensory Detail", desc: "Concrete imagery replaces vague description." },
                                { label: "Subtext & Tension", desc: "Dialogue carries weight beyond words." },
                            ].map((note) => (
                                <div key={note.label} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                                    <CheckCircle2 size={16} className="text-[#e8391d] shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-black text-[13px]">{note.label}</p>
                                        <p className="text-gray-400 text-[12px]">{note.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 5: WHAT OUR EDITORS FIX (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-[#e8391d]" />
                                <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Common Issues</span>
                            </motion.div>

                            <motion.h2 variants={fadeUp} className="font-black text-white uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                                WHAT OUR EDITORS <br /><span className="text-[#e8391d]">FIX</span>
                            </motion.h2>

                            <motion.p variants={fadeUp} className="text-white/40 leading-[1.85] mb-10" style={{ fontSize: "0.95rem" }}>
                                These are the silent manuscript killers that readers feel but can't always name. Our editors identify and eliminate every one.
                            </motion.p>

                            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                                {manuscriptIssues.map(({ icon: Icon, title, desc }) => (
                                    <motion.div key={title} variants={fadeUp} className="flex items-start gap-4 group">
                                        <div className="mt-1 w-8 h-8 rounded-lg bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                            <Icon size={16} className="text-[#e8391d] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-white font-bold text-[15px] mb-1">{title}</p>
                                            <p className="text-white/40 text-[14px] leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "4/5" }}>
                                <Image src="/images/about-us-bg.webp" alt="Book Editing Process" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />

                            {/* Floating Stats */}
                            <div className="absolute -right-6 top-12 bg-[#e8391d] rounded-2xl px-6 py-4 shadow-2xl shadow-[#e8391d]/30">
                                <p className="font-black text-white text-2xl">97%</p>
                                <p className="text-white/70 text-[11px] font-bold uppercase tracking-wider">Of manuscripts need developmental work</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 6: THE EDITING PROCESS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-20">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            OUR EDITING <span className="text-[#e8391d]">PROCESS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gray-200 z-0" />

                        {processSteps.map(({ step, title, desc, icon: Icon }) => (
                            <motion.div key={step} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-[#e8391d] flex items-center justify-center mb-6 shadow-lg shadow-[#e8391d]/20 border-4 border-[#faf9f7]">
                                    <Icon size={24} className="text-white" />
                                </div>
                                <span className="text-[#e8391d] font-black text-sm tracking-widest mb-2">{step}</span>
                                <h3 className="font-black text-black uppercase text-lg mb-3 tracking-wide">{title}</h3>
                                <p className="text-gray-500 text-[14px] leading-relaxed max-w-[250px]">{desc}</p>
                            </motion.div>
                        ))}
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
                            BOOK EDITING <span className="text-[#e8391d]">FAQS</span>
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
                        READY TO ELEVATE YOUR MANUSCRIPT?
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Get a free manuscript evaluation and discover exactly what your book needs to go from good to extraordinary.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Free Evaluation <ArrowRight size={18} />
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