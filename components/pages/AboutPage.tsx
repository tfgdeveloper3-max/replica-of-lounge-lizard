"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform, Variants } from "framer-motion";
import Image from "next/image";
import { BookOpen, Target, Eye, Award, ArrowRight, CheckCircle2, Quote, PenTool, Palette, Rocket, Users } from "lucide-react";

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
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const stats = [
    { icon: BookOpen, num: "500+", label: "Books Published" },
    { icon: Award, num: "12+", label: "Years Legacy" },
    { icon: Target, num: "300+", label: "Happy Authors" },
];

const processSteps = [
    { icon: Users, step: "01", title: "Consultation", desc: "We discuss your vision, genre, and goals to map out the perfect publishing strategy." },
    { icon: PenTool, step: "02", title: "Writing & Editing", desc: "Our ghostwriters and editors craft your manuscript while keeping your voice intact." },
    { icon: Palette, step: "03", title: "Design & Formatting", desc: "World-class cover design and interior formatting that captivates readers." },
    { icon: Rocket, step: "04", title: "Launch & Marketing", desc: "Global distribution and targeted marketing to make your book a bestseller." },
];

const team = [
    { name: "James Harlow", role: "Founder & CEO", img: "/images/team-1.webp" },
    { name: "Sarah Chen", role: "Head of Editing", img: "/images/team-2.webp" },
    { name: "Marcus Webb", role: "Lead Designer", img: "/images/team-3.webp" },
    { name: "Emily Rose", role: "Marketing Director", img: "/images/team-4.webp" },
];

const testimonials = [
    { name: "David Torres", book: "The Mindful Leader", quote: "Bexley Publications didn't just publish my book; they brought my vision to life. Their ghostwriting team captured my voice perfectly, and the marketing campaign pushed me to the Top 10 on Amazon." },
    { name: "Priya Nair", book: "Echoes of Tomorrow", quote: "From the cover design to the final formatting, every detail was handled with precision. I felt supported every step of the way. Truly a world-class publishing partner." },
];

export default function AboutPage() {
    const storyRef = useRef<HTMLDivElement>(null);
    const timelineRef = useRef<HTMLDivElement>(null);

    const storyInView = useInView(storyRef, { once: true, margin: "-100px" });
    const timelineInView = useInView(timelineRef, { once: true, margin: "-80px" });

    const { scrollYProgress: heroScroll } = useScroll({ target: storyRef, offset: ["start end", "end start"] });
    const heroImgY = useTransform(heroScroll, [0, 1], ["-15%", "15%"]);

    return (
        <main className="w-full overflow-hidden" style={{ fontFamily: "'Raleway', Arial, sans-serif" }}>

            {/* ════════════════════════════════════════════
                SECTION 1: CINEMATIC ABOUT HERO
            ════════════════════════════════════════════ */}
            <section className="relative w-full h-screen flex items-center justify-center bg-[#05070f] overflow-hidden">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#e8391d] opacity-10 rounded-full blur-[150px] pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
                        <span className="w-8 h-[2px] bg-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">About Bexley Publications</span>
                        <span className="w-8 h-[2px] bg-[#e8391d]" />
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        STORIES THAT <br /><span className="text-[#e8391d]">SHAPE</span> THE WORLD.
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        We are more than a publishing house. We are architects of imagination, turning raw manuscripts into global masterpieces since 2012.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible">
                        <motion.a href="#story" whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 40px rgba(232, 57, 29, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
                            Read Our Story <ArrowRight size={16} />
                        </motion.a>
                    </motion.div>
                </div>

                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2 }} className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
                    <span className="text-white/30 text-[10px] uppercase tracking-widest">Scroll</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-white/40 to-transparent" />
                </motion.div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 2: OUR STORY & MISSION
            ════════════════════════════════════════════ */}
            <section id="story" ref={storyRef} className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <motion.div initial={{ width: "0%" }} animate={storyInView ? { width: "100%" } : {}} transition={{ duration: 1.5, ease: smoothEase }} className="absolute top-0 left-0 h-1 bg-[#e8391d] origin-left" />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center mb-32">
                        <div className="relative">
                            <motion.div initial={{ clipPath: "inset(100% 0% 0% 0% round 24px)" }} animate={storyInView ? { clipPath: "inset(0% 0% 0% 0% round 24px)" } : {}} transition={{ duration: 1.4, ease: smoothEase }} className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                                <motion.div className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform" style={{ y: heroImgY, backgroundImage: "url('/images/about-us-bg.webp')" }} />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                                <div className="absolute bottom-0 left-0 right-0 p-8">
                                    <p className="text-white/50 text-[10px] font-bold uppercase tracking-[0.25em] mb-2">Est. 2012</p>
                                    <p className="text-white font-black text-2xl uppercase leading-tight">From Raw Ideas To<br />Global Bestsellers</p>
                                </div>
                            </motion.div>
                            <motion.div initial={{ scale: 0, opacity: 0 }} animate={storyInView ? { scale: 1, opacity: 1 } : {}} transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }} className="absolute -bottom-8 -right-8 bg-[#05070f] text-white rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col items-center justify-center z-10">
                                <span className="font-black text-4xl text-[#e8391d]">12+</span>
                                <span className="text-white/50 text-[10px] uppercase tracking-widest mt-1">Years of Excellence</span>
                            </motion.div>
                        </div>

                        <motion.div variants={staggerContainer} initial="hidden" animate={storyInView ? "visible" : "hidden"} className="flex flex-col">
                            <motion.h2 variants={maskReveal} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
                                WE DON'T JUST PUBLISH BOOKS. WE <span className="text-[#e8391d]">CULTIVATE LEGACIES.</span>
                            </motion.h2>
                            <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                                Bexley Publications was born from a simple frustration: talented authors were getting lost in the slush piles of traditional publishing, while self-publishing felt like navigating a maze blindfolded.
                            </motion.p>
                            <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-10" style={{ fontSize: "0.95rem" }}>
                                We built a hybrid model that combines the prestige and quality of traditional publishing with the creative control and speed of independent publishing. Your vision, amplified by our expertise.
                            </motion.p>

                            <motion.div variants={staggerContainer} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    { icon: Eye, title: "Our Vision", desc: "To be the global beacon for independent authorship, making bestseller dreams accessible." },
                                    { icon: Target, title: "Our Mission", desc: "Delivering end-to-end publishing excellence with unmatched author royalties and support." }
                                ].map(({ icon: Icon, title, desc }) => (
                                    <motion.div key={title} variants={fadeUp} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#e8391d]/30 transition-all duration-500 group cursor-default">
                                        <div className="w-10 h-10 rounded-lg bg-[#e8391d]/10 flex items-center justify-center mb-4 group-hover:bg-[#e8391d] transition-colors duration-300">
                                            <Icon size={18} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                        </div>
                                        <h4 className="font-black text-black uppercase text-sm tracking-wider mb-2">{title}</h4>
                                        <p className="text-gray-400 text-[13px] leading-relaxed">{desc}</p>
                                    </motion.div>
                                ))}
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Stats Bar */}
                    <motion.div initial={{ opacity: 0, y: 40 }} animate={storyInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.8, duration: 0.8, ease: smoothEase }} className="bg-[#05070f] rounded-3xl p-10 grid grid-cols-1 md:grid-cols-3 gap-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-2 h-full bg-[#e8391d]" />
                        {stats.map(({ icon: Icon, num, label }, i) => (
                            <div key={label} className={`flex items-center gap-5 pl-6 ${i < stats.length - 1 ? 'md:border-r border-white/10' : ''}`}>
                                <div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                                    <Icon size={22} className="text-[#e8391d]" />
                                </div>
                                <div>
                                    <p className="font-black text-white text-3xl leading-none">{num}</p>
                                    <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold mt-1">{label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: THE PUBLISHING PROCESS (New)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-20 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center justify-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">How It Works</span>
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            YOUR JOURNEY TO <span className="text-[#e8391d]">BESTSELLER</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {processSteps.map(({ icon: Icon, step, title, desc }) => (
                            <motion.div key={step} variants={fadeUp} className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-[#e8391d]/50 transition-all duration-500 group">
                                <span className="font-black text-[80px] leading-none absolute top-4 right-6 text-white/[0.03] group-hover:text-[#e8391d]/10 transition-colors duration-500">{step}</span>
                                <div className="w-12 h-12 rounded-xl bg-[#e8391d]/10 flex items-center justify-center mb-6 group-hover:bg-[#e8391d] transition-colors duration-300">
                                    <Icon size={22} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <h3 className="font-black text-white uppercase text-lg mb-3 tracking-wide">{title}</h3>
                                <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: MEET THE TEAM (New)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                        <div className="overflow-hidden">
                            <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex items-center gap-3 mb-4">
                                <span className="w-8 h-[2px] bg-[#e8391d]" />
                                <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Our Team</span>
                            </motion.div>
                            <motion.h2 initial={{ y: "110%" }} whileInView={{ y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                                THE MINDS BEHIND <br /><span className="text-[#e8391d]">THE MASTERPIECES</span>
                            </motion.h2>
                        </div>
                        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="text-gray-500 max-w-md text-[15px] leading-relaxed">
                            A dedicated team of editors, designers, and strategists committed to making your book a success.
                        </motion.p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {team.map(({ name, role, img }) => (
                            <motion.div key={name} variants={fadeUp} className="group relative rounded-2xl overflow-hidden cursor-pointer" style={{ aspectRatio: "3/4" }}>
                                <Image src={img} alt={name} fill className="object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="font-black text-white text-lg leading-tight">{name}</p>
                                    <p className="text-[#e8391d] text-[12px] font-bold uppercase tracking-widest mt-1">{role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 5: TESTIMONIALS (New)
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px16 relative z-10">
                    <div className="text-center mb-16">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Author Love</span>
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase" style={{ fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}>
                            WHAT OUR AUTHORS SAY
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {testimonials.map(({ name, book, quote }) => (
                            <motion.div key={name} variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-3xl p-10 relative hover:border-[#e8391d]/30 transition-colors duration-500">
                                <Quote size={40} className="text-[#e8391d]/20 absolute top-8 right-8" />
                                <p className="text-white/70 text-[16px] leading-[1.8] mb-8 italic">"{quote}"</p>
                                <div>
                                    <p className="font-black text-white text-lg">{name}</p>
                                    <p className="text-[#e8391d] text-[12px] font-bold uppercase tracking-widest mt-1">Author: {book}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 6: WHY CHOOSE US
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Why Bexley?</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-10" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                            BUILT FOR AUTHORS. <br /><span className="text-[#e8391d]">DRIVEN BY RESULT.</span>
                        </motion.h2>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-5">
                            {[
                                "100% Copyright Ownership — Your book, your rules.",
                                "No Upfront Fees — Flexible milestone-based payments.",
                                "Global Distribution — Amazon, B&N, Ingram, and 40+ platforms.",
                                "Dedicated Project Manager — Personal guidance from Day 1.",
                                "Premium Ghostwriting — Voice-matched, confidential, and NDA protected."
                            ].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-start gap-4 group">
                                    <div className="mt-1 w-6 h-6 rounded-full bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                        <CheckCircle2 size={14} className="text-[#e8391d] group-hover:text-white transition-colors" />
                                    </div>
                                    <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-xl z-10" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/about-us-bg.webp" alt="Author writing" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />
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
                        READY TO WRITE YOUR CHAPTER?
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Join 300+ authors who trusted Bexley Publications to turn their ideas into global bestsellers. Let's start your journey today.
                    </p>
                    <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                        Get A Free Consultation <ArrowRight size={18} />
                    </motion.a>
                </motion.div>
            </section>

        </main>
    );
}