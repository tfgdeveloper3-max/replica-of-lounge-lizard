"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    Landmark, ArrowRight, CheckCircle2, ScrollText, Crown, Swords,
    BookOpen, PenTool, Minus, Plus, Phone, Users, Globe, Search, ShieldCheck
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
const eras = [
    { icon: Landmark, title: "Ancient World", desc: "Egyptian pharaohs, Roman legions, and Greek philosophers.", period: "3000 BC – 500 AD" },
    { icon: Crown, title: "Medieval & Renaissance", desc: "Knights, plagues, empires, and the rebirth of art and science.", period: "500 AD – 1600 AD" },
    { icon: ScrollText, title: "Colonial & Victorian", desc: "Revolutions, industrialization, and the age of empire.", period: "1600 AD – 1900 AD" },
    { icon: Swords, title: "World Wars & Modern", desc: "Trench warfare, espionage, and the reshaping of the global order.", period: "1900 AD – Present" },
];

const researchSteps = [
    { step: "01", title: "Primary Source Analysis", desc: "Mining letters, diaries, and official records from the era to ensure absolute accuracy.", icon: Search },
    { step: "02", title: "Cultural & Social Mapping", desc: "Understanding the etiquette, slang, class structures, and daily routines of the period.", icon: Globe },
    { step: "03", title: "Anachronism Scrub", desc: "A dedicated pass to remove any modern phrases, objects, or ideas that break the period illusion.", icon: ShieldCheck },
    { step: "04", title: "Narrative Integration", desc: "Weaving the historical facts so seamlessly into the plot that it never reads like a textbook.", icon: PenTool },
];

const subGenres = [
    { icon: ScrollText, title: "Historical Epic", desc: "Sweeping generational sagas set against the backdrop of monumental historical events." },
    { icon: Swords, title: "Alternate History", desc: "What if the South won? What if Rome never fell? Exploring the roads not taken." },
    { icon: Users, title: "Biographical Fiction", desc: "Bringing real historical figures to life by imagining their private moments and motives." },
    { icon: Search, title: "Historical Mystery", desc: "Murder and intrigue solved within the strict social and forensic limits of the past." },
];

const faqs = [
    { q: "How do you ensure historical accuracy without making it boring?", a: "The golden rule is: 'History is the stage, not the play.' We do the exhaustive research so your characters can live naturally in the era. We avoid 'info-dumping' and instead let the historical facts emerge through action, dialogue, and sensory details." },
    { q: "What if I want to change a historical fact for the sake of the story?", a: "That's where Alternate History comes in! If you're writing fictional history, we help you establish the 'point of divergence' and ensure the resulting world is logically consistent. If you're writing factual history, we work within the constraints of the record." },
    { q: "How much research do you do before writing?", a: "Extensively. We immerse ourselves in the era's primary sources, art, architecture, and social norms. For a historical novel, the research phase often takes as long as the writing phase to ensure flawless world-building." },
    { q: "Can you write in period-accurate dialogue?", a: "Yes, but with a caveat. True period-accurate dialogue (like Shakespearean English) is often unreadable for modern audiences. We write 'period-flavored' dialogue—using correct terminology, syntax rhythm, and class distinctions, while keeping it accessible." },
    { q: "What is an anachronism and why does it matter?", a: "An anachronism is something placed in the wrong time period (e.g., a character checking a watch in 1800). It instantly shatters the reader's immersion. Our 'Anachronism Scrub' process ensures zero such errors make it to the final draft." },
];

export default function HistoricalWritingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const overviewRef = useRef<HTMLDivElement>(null);
    const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });

    return (
        <main className="w-full overflow-hidden" style={{ fontFamily: "'Raleway', Arial, sans-serif" }}>

            {/* ════════════════════════════════════════════
                SECTION 1: CINEMATIC HISTORICAL HERO
            ════════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-[#05070f] overflow-hidden pt-28 pb-12">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#e8391d] opacity-10 rounded-full blur-[200px] pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
                        <Landmark size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Historical Writing Services</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        WHERE HISTORY <br /><span className="text-[#e8391d]">BREATHES.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        Transport readers to ancient empires, medieval battlefields, and forgotten eras. We craft meticulously researched historical fiction where the past feels alive, not like a textbook.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#92400e", gap: "14px", boxShadow: "0 10px 40px rgba(180, 83, 9, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
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
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Meticulous World-Building</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
                            THE PAST IS ANOTHER COUNTRY. <span className="text-[#e8391d]">WE SPEAK ITS LANGUAGE.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            Writing historical fiction isn’t just about putting characters in old clothes. A single anachronism—a modern phrase, a wrong food, an impossible mode of transport—can shatter the illusion forever.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Our historical writers are researchers first. We dive deep into primary sources, period etiquette, and cultural nuances, ensuring your world is so immersive that readers smell the streets of Victorian London and feel the dust of ancient Rome.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Primary Source Research", "Anachronism-Free Guarantee", "Period-Accurate Dialogue & Etiquette", "Seamless Fact-to-Fiction Integration"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/historical-writing-overview.webp" alt="Historical Writing Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: UNIQUE - ERAS WE WRITE (Museum Timeline)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-20 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <Globe size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Time Periods</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            ERAS WE <span className="text-[#e8391d]">INHABIT</span>
                        </motion.h2>
                    </div>

                    {/* Museum Placard Style Layout */}
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Vertical Connecting Line */}
                        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2" />

                        {eras.map(({ icon: Icon, title, desc, period }, i) => (
                            <motion.div key={title} variants={fadeUp} className={`relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group cursor-default flex gap-6 items-start ${i % 2 !== 0 ? 'lg:translate-x-[20px]' : 'lg:translate-x-[-20px]'}`}>
                                {/* Era Node Dot */}
                                <div className="hidden lg:block absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#e8391d] border-4 border-[#05070f] z-10" style={{ left: i % 2 === 0 ? 'calc(50% + 20px)' : 'calc(50% - 20px)' }}></div>

                                <div className="w-14 h-14 rounded-xl bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                    <Icon size={26} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <span className="text-[#e8391d] text-[11px] font-bold uppercase tracking-widest mb-1 block">{period}</span>
                                    <h3 className="font-black text-white uppercase text-xl mb-2 tracking-wide">{title}</h3>
                                    <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: THE RESEARCH PROTOCOL
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-20">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            FROM ARCHIVES TO <span className="text-[#e8391d]">MANUSCRIPT</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-gray-200 z-0" />

                        {researchSteps.map(({ step, title, desc, icon: Icon }) => (
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
                SECTION 5: SUB-GENRES
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            HISTORICAL <span className="text-[#e8391d]">SUB-GENRES</span>
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
                SECTION 6: WHY CHOOSE OUR HISTORIANS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/historical-team.webp" alt="Historical Researchers" fill className="object-cover" />
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
                            HISTORIANS WHO <br /><span className="text-[#e8391d]">TELL STORIES.</span>
                        </motion.h2>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                            {[
                                "Archival Researchers — We dig into the primary sources others skip.",
                                "Zero Anachronisms — Rigorous checks for period-accurate details.",
                                "Balancing Fact & Fiction — We make history read like a thriller.",
                                "Period Dialogue Experts — Authentic voice without being unreadable.",
                                "Cultural Immersion — Capturing the unspoken rules of past societies."
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
                SECTION 7: SERVICE FAQS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[900px] mx-auto px-8 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            HISTORICAL WRITING <span className="text-[#e8391d]">FAQS</span>
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
                SECTION 8: MASSIVE CTA
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#e8391d] py-28 overflow-hidden">
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />

                <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="max-w-4xl mx-auto text-center px-8 relative z-10">
                    <h2 className="font-black text-white uppercase leading-tight mb-6" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                        BRING THE PAST BACK TO LIFE.
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        History deserves more than a textbook. Let's write a novel that makes the past breathe again.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Start Your Epic <ArrowRight size={18} />
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