"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    Mic, ArrowRight, CheckCircle2, BookOpen, Headphones, Volume2,
    UserCheck, Users, AudioLines, SlidersHorizontal, UploadCloud,
    Phone, Minus, Plus, Sparkles, FileAudio, Clapperboard, Gauge, AudioWaveform
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
const voiceStyles = [
    { icon: Clapperboard, title: "Fiction & Character Voices", desc: "Actors who bring characters to life with distinct voices, accents, and emotional depth. Perfect for novels, thrillers, and fantasy.", tag: "Character-Driven" },
    { icon: UserCheck, title: "Non-Fiction & Authority", desc: "Voices that command attention and convey expertise. Ideal for business, self-help, history, and educational titles.", tag: "Authoritative" },
    { icon: Mic, title: "Author Narration Coaching", desc: "Want to narrate your own book? We provide professional coaching, studio direction, and production support to make you sound your best.", tag: "DIY Friendly" },
    { icon: Users, title: "Multi-Voice & Full Cast", desc: "Multiple narrators for dialogue-rich books, or a full-cast production with dedicated voices for every character.", tag: "Immersive" },
];

const audioStandards = [
    { icon: Gauge, title: "ACX/Audible Compliant", desc: "Every file meets Audible's strict requirements — no rejections, no re-uploads." },
    { icon: AudioWaveform, title: "Studio-Quality Recording", desc: "Broadcast-standard audio captured in professional sound-treated studios." },
    { icon: SlidersHorizontal, title: "Precision Mastering", desc: "RMS normalization, peak limiting, and noise floor optimization for crystal-clear playback." },
    { icon: FileAudio, title: "Chapter-Perfect Files", desc: "Individually tracked chapters with proper spacing, intro/outro, and retail metadata." },
];

const processSteps = [
    { step: "01", title: "Voice Casting", desc: "We curate narrator auditions based on your book's genre, tone, and character requirements. You choose the voice that fits.", icon: Headphones },
    { step: "02", title: "Pre-Production", desc: "Pronunciation guides, character voice notes, and pacing direction are prepared before recording begins.", icon: BookOpen },
    { step: "03", title: "Professional Recording", desc: "Your narrator records in a professional studio with a director ensuring emotional accuracy and consistent pacing.", icon: Mic },
    { step: "04", title: "Editing & Mastering", desc: "Rigorous editing removes breaths, mistakes, and mouth clicks. Final mastering ensures retail-ready audio quality.", icon: Volume2 },
];

const faqs = [
    { q: "How do I choose the right narrator?", a: "We handle the entire casting process. Based on your book's genre, tone, and target audience, we curate a shortlist of professional narrators who submit custom auditions reading a passage from your book. You have final approval on the voice." },
    { q: "How long does audiobook production take?", a: "A standard 60,000-word audiobook typically takes 4–6 weeks from casting to final delivery. This includes recording, editing, mastering, and quality assurance. Rush timelines are available." },
    { q: "What is ACX compliance and why does it matter?", a: "ACX (Audiobook Creation Exchange) is Audible's platform. They have strict technical requirements for audio quality — specific RMS levels, noise floor limits, and file formatting. Non-compliant files are rejected. We guarantee every file passes on the first submission." },
    { q: "Can I narrate my own book?", a: "Absolutely. Author-narrated audiobooks are increasingly popular, especially for non-fiction and memoirs. We provide professional coaching, studio direction during recording, and full post-production to ensure you sound polished and professional." },
    { q: "Do you handle distribution to Audible, Apple, and Spotify?", a: "We deliver retail-ready files that can be uploaded to any platform. We also offer distribution assistance where we handle the entire upload process to ACX, Findaway Voices, and other major distributors." },
    { q: "What if I'm not happy with the narration?", a: "We include a chapter-by-chapter review process. You approve each chapter before the narrator proceeds. If a section doesn't meet your expectations, we re-record it at no additional cost." },
];

export default function AudiobookNarrationPage() {
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
                        <Mic size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Audiobook Narration & Production</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        YOUR STORY, <br /><span className="text-[#e8391d]">GIVEN VOICE.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        The right narrator can transform your book into an unforgettable listening experience. We handle everything — from casting the perfect voice to delivering retail-ready, ACX-compliant audio.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 40px rgba(232, 57, 29, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Learn More <ArrowRight size={16} />
                        </motion.a>
                        <motion.a href="/contact" whileHover={{ borderColor: "#e8391d", color: "#e8391d" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Hear Sample Voices
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
                            PROFESSIONAL AUDIO <br /><span className="text-[#e8391d]">FROM PAGE TO PLAYBACK.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            Audiobooks are the fastest-growing segment in publishing. But a badly narrated audiobook doesn't just lose listeners — it damages your brand. Professional narration ensures your book translates beautifully from the page to the ear.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            We manage the entire production pipeline — casting, directing, recording, editing, and mastering — so you receive a polished, retail-ready audiobook that captivates listeners from the first sentence to the last.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Professional Voice Casting Included", "Chapter-by-Chapter Approval", "ACX & Audible Compliant", "Full Distribution Support"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/services-audiobook.webp" alt="Audiobook Narration Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: FIND YOUR PERFECT VOICE (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <Headphones size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Voice Casting</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            FIND YOUR <span className="text-[#e8391d]">PERFECT VOICE</span>
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }} className="text-white/40 mt-4 max-w-xl mx-auto text-[15px] leading-relaxed">
                            The right narrator breathes life into your words. We match your book with a voice that captures its soul.
                        </motion.p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {voiceStyles.map(({ icon: Icon, title, desc, tag }) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white/[0.02] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group cursor-default relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-20 h-20 bg-[#e8391d]/5 rounded-bl-[100px] transition-all duration-500 group-hover:w-full group-hover:h-full group-hover:rounded-none" />
                                <div className="relative z-10">
                                    <div className="flex items-center gap-4 mb-5 flex-wrap">
                                        <div className="w-14 h-14 rounded-xl bg-[#e8391d]/10 flex items-center justify-center group-hover:bg-[#e8391d] transition-colors duration-300">
                                            <Icon size={26} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <span className="bg-[#e8391d]/10 text-[#e8391d] text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full">{tag}</span>
                                    </div>
                                    <h3 className="font-black text-white uppercase text-lg mb-3 tracking-wide">{title}</h3>
                                    <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: RETAIL-READY AUDIO (UNIQUE)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-[#e8391d]" />
                                <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Technical Excellence</span>
                            </motion.div>

                            <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                                RETAIL-READY <br /><span className="text-[#e8391d]">AUDIO</span>
                            </motion.h2>

                            <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-10" style={{ fontSize: "0.95rem" }}>
                                Audible rejects thousands of audiobooks every month for failing to meet technical standards. Our audio engineers ensure every file passes validation on the first submission — guaranteed.
                            </motion.p>

                            <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                                {audioStandards.map(({ icon: Icon, title, desc }) => (
                                    <motion.div key={title} variants={fadeUp} className="flex items-start gap-4 group">
                                        <div className="mt-1 w-8 h-8 rounded-lg bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                            <Icon size={16} className="text-[#e8391d] group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <p className="text-black font-bold text-[15px] mb-1">{title}</p>
                                            <p className="text-gray-400 text-[14px] leading-relaxed">{desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>

                        <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
                            <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                                <Image src="/images/about-us-bg.webp" alt="Audio Production Studio" fill className="object-cover" />
                                <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                            </div>
                            <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />

                            {/* Floating Stats */}
                            <div className="absolute -right-6 top-12 bg-[#e8391d] rounded-2xl px-6 py-4 shadow-2xl shadow-[#e8391d]/30">
                                <p className="font-black text-white text-2xl">100%</p>
                                <p className="text-white/70 text-[11px] font-bold uppercase tracking-wider">ACX pass rate</p>
                            </div>

                            <div className="absolute -left-6 bottom-12 bg-black rounded-2xl px-6 py-4 shadow-2xl border border-white/10">
                                <p className="font-black text-white text-2xl">-60dB</p>
                                <p className="text-white/50 text-[11px] font-bold uppercase tracking-wider">Noise floor or below</p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 5: PRODUCTION PROCESS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-20">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            OUR PRODUCTION <span className="text-[#e8391d]">PROCESS</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                        {/* Connecting line */}
                        <div className="hidden lg:block absolute top-8 left-[12%] right-[12%] h-[2px] bg-white/10 z-0" />

                        {processSteps.map(({ step, title, desc, icon: Icon }) => (
                            <motion.div key={step} variants={fadeUp} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-[#e8391d] flex items-center justify-center mb-6 shadow-lg shadow-[#e8391d]/20 border-4 border-[#05070f]">
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
                SECTION 6: WHY CHOOSE OUR STUDIO
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
                        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/about-us-bg.webp" alt="Professional Narrators" fill className="object-cover" />
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
                            AUDIO THAT KEEPS <br /><span className="text-[#e8391d]">LISTENERS HOOKED.</span>
                        </motion.h2>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                            {[
                                "Hand-Picked Narrators — We cast voices, not just assign them. Custom auditions for every project.",
                                "Studio-Directed Sessions — A director ensures consistent pacing, emotion, and character accuracy.",
                                "Rigorous Quality Control — Every minute of audio is reviewed by a dedicated QA engineer.",
                                "Chapter-by-Chapter Approval — You review and approve each chapter before we proceed.",
                                "Full Distribution Support — We help you publish on Audible, Apple, Spotify, and beyond."
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
                            AUDIOBOOK <span className="text-[#e8391d]">FAQS</span>
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
                        READY TO BRING YOUR BOOK TO LIFE?
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Millions of listeners are searching for their next great audiobook. Let's make sure yours is the one they discover.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Hear Voice Samples <ArrowRight size={18} />
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