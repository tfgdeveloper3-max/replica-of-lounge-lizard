"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    BookOpen, ArrowRight, CheckCircle2, Sword, Heart, Ghost,
    PenTool, Minus, Plus, Phone, Users, Map, Sparkles
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
const subGenres = [
    { icon: Sword, title: "Thriller & Suspense", desc: "High-stakes plots, ticking clocks, and twists that leave readers gasping for breath." },
    { icon: Heart, title: "Romance", desc: "Emotional connections, slow burns, and love stories that make the heart race." },
    { icon: Sparkles, title: "Literary Fiction", desc: "Character-driven narratives, profound themes, and prose that challenges the mind." },
    { icon: Ghost, title: "Horror & Dark Fantasy", desc: "Atmospheric dread, psychological terror, and monsters that lurk in the shadows." },
];

const processSteps = [
    { step: "01", title: "Premise & Hook", desc: "We crystallize your core idea into a compelling premise that grabs the reader from page one.", icon: Sparkles },
    { step: "02", title: "Character Profiling", desc: "Crafting three-dimensional characters with desires, flaws, and compelling character arcs.", icon: Users },
    { step: "03", title: "Plot Architecture", desc: "Mapping the three-act structure, pacing, subplots, and planting seeds for the climax.", icon: Map },
    { step: "04", title: "Drafting & Polishing", desc: "Writing the manuscript scene-by-scene, followed by rigorous developmental editing.", icon: PenTool },
];

const faqs = [
    { q: "Do I need a complete outline before we start?", a: "Not at all. Whether you are a 'plotter' with a detailed outline or a 'pantser' with just a spark of an idea, our writers can adapt to your style. We can help you build the outline from scratch or simply start writing and see where the story goes." },
    { q: "How do you ensure the characters don't feel flat?", a: "Before writing a single chapter, we create in-depth character profiles. We define their childhood traumas, secret desires, fears, and contradictions. Characters drive the plot in great fiction, and we ensure yours are unforgettable." },
    { q: "What makes a fiction book a 'page-turner'?", a: "Pacing and stakes. Every chapter must end with a reason to turn the page. We use proven narrative techniques—ticking clocks, moral dilemmas, and escalating conflicts—to ensure your reader simply cannot put the book down." },
    { q: "Can you write a series, or just standalone books?", a: "We do both! If you're planning a series, we can map out the overarching series arc across multiple books while ensuring each individual book has a satisfying beginning, middle, and end." },
    { q: "How do you handle writer's block or plot holes?", a: "Our collaborative process is designed to eliminate writer's block. If we hit a plot hole, our team brainstorms solutions. With multiple creative minds on your project, we never get stuck for long." },
];

export default function FictionWritingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const overviewRef = useRef<HTMLDivElement>(null);
    const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });

    return (
        <main className="w-full overflow-hidden" style={{ fontFamily: "'Raleway', Arial, sans-serif" }}>

            {/* ════════════════════════════════════════════
                SECTION 1: CINEMATIC FICTION HERO
            ════════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-[#05070f] overflow-hidden pt-28 pb-12">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />
                <div className="absolute top-1/3 left-1/4 w-[900px] h-[600px] bg-[#e8391d] opacity-10 rounded-full blur-[180px] pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
                        <BookOpen size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Fiction Writing Services</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        STORIES THAT <br /><span className="text-[#e8391d]">CAPTIVATE.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        From heart-pounding thrillers to epic romances, we craft page-turning fiction with unforgettable characters and plots that keep readers up all night.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#6d28d9", gap: "14px", boxShadow: "0 10px 40px rgba(124, 58, 237, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
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
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Master Storytellers</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
                            CHARACTERS THAT BREATHE, <span className="text-[#e8391d]">PLOTS THAT GRIP.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            Great fiction isn't just about what happens—it's about who it happens to and how it changes them. A poorly paced plot or a flat character can ruin even the best ideas.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Our fiction specialists are obsessive about narrative structure and character psychology. We don’t just write scenes; we engineer emotional journeys that keep readers hooked from the first sentence to the final period.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Deep Character Profiling & Arcs", "Rigorous Plot Architecture (3-Act Structure)", "Masterful Pacing & Tension Building", "Unlimited Revisions Until It's Perfect"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/fiction-writing-overview.webp" alt="Fiction Writing Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: FICTION SUB-GENRES
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <BookOpen size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Specializations</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            GENRES WE <span className="text-[#e8391d]">MASTER</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {subGenres.map(({ icon: Icon, title, desc }) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group cursor-default flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-xl bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                    <Icon size={26} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-black text-white uppercase text-lg mb-2 tracking-wide">{title}</h3>
                                    <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: THE FICTION WRITING PROCESS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-20">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            OUR FICTION <span className="text-[#e8391d]">PROCESS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
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
                SECTION 5: WHY CHOOSE OUR FICTION WRITERS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/fiction-team.webp" alt="Fiction Writing Team" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />
                    </motion.div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Why Bexley?</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-white uppercase leading-[1.05] mb-10" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                            ARCHITECTS OF <br /><span className="text-[#e8391d]">GREAT STORIES.</span>
                        </motion.h2>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                            {[
                                "Character Psychologists — We create people, not just names on a page.",
                                "Plot Perfectionists — No sagging middles or rushed endings.",
                                "Masterful Pacing — Tension that builds and twists that land.",
                                "Genre Specialists — Published authors who know your category inside out.",
                                "Collaborative Spirit — We write with you, not just for you."
                            ].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                        <CheckCircle2 size={14} className="text-[#e8391d] group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-white/60 text-[15px] leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 6: SERVICE FAQS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            FICTION WRITING <span className="text-[#e8391d]">FAQS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        {faqs.map(({ q, a }, i) => (
                            <motion.div key={i} variants={fadeUp} className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:border-[#e8391d]/30 transition-colors duration-300">
                                <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="w-full flex items-center justify-between p-6 text-left group cursor-pointer">
                                    <span className="font-bold text-black text-[15px] pr-4">{q}</span>
                                    <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${openFaq === i ? "bg-[#e8391d] text-white" : "bg-gray-100 text-black/50"}`}>
                                        {openFaq === i ? <Minus size={14} /> : <Plus size={14} />}
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {openFaq === i && (
                                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: smoothEase }} className="overflow-hidden">
                                            <div className="px-6 pb-6 text-gray-500 text-[14px] leading-relaxed">
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
                SECTION 7: MASSIVE CTA
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#e8391d] py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center px-8 relative z-10">
                    <h2 className="font-black text-white uppercase leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                        READY TO WRITE YOUR BESTSELLER?
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Don't let your story remain untold. Let's craft the fiction book that readers won't be able to put down.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Start Your Novel <ArrowRight size={18} />
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