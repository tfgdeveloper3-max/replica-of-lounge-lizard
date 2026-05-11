"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import Image from "next/image";
import {
    Wand2, ArrowRight, CheckCircle2, ScrollText, Castle, Flame,
    BookOpen, PenTool, Minus, Plus, Phone, Users, Map, Sparkles, Shield
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
    { icon: Castle, title: "High / Epic Fantasy", desc: "Sprawling continents, ancient prophecies, dark lords, and the fate of the world." },
    { icon: Flame, title: "Dark & Grimdark", desc: "Morally grey characters, brutal realism, and worlds where hope is a rare commodity." },
    { icon: Wand2, title: "Urban Fantasy", desc: "Magic hiding in plain sight in modern cities—vampires in nightclubs and wizards as detectives." },
    { icon: ScrollText, title: "Mythic Retelling", desc: "Reimagining ancient folklore, fairy tales, and mythologies for the modern era." },
];

const magicMatrix = [
    { title: "The Source", desc: "Where does the magic come from? Gods, nature, bloodlines, or cosmic artifacts?", icon: Sparkles, color: "#fbbf24" },
    { title: "The Limitation", desc: "What stops a wizard from snapping his fingers and destroying the world?", icon: Shield, color: "#60a5fa" },
    { title: "The Cost", desc: "Every spell must have a price. Physical toll, sanity, or a debt to darker powers.", icon: Flame, color: "#f87171" },
    { title: "The Effect", desc: "How does it visually and thematically manifest? We design signature aesthetics.", icon: Wand2, color: "#a78bfa" },
];

const processSteps = [
    { step: "01", title: "World Cartography", desc: "Mapping the geography, kingdoms, trade routes, and political borders of your realm.", icon: Map },
    { step: "02", title: "Lore & History Bible", desc: "Writing thousands of years of history, religions, and cultural conflicts that inform the present.", icon: ScrollText },
    { step: "03", title: "Magic Architecture", desc: "Designing a hard or soft magic system with strict rules, costs, and limitations.", icon: Wand2 },
    { step: "04", title: "Epic Drafting", desc: "Writing the quest, developing character arcs, and weaving the prophecy into the plot.", icon: PenTool },
];

const faqs = [
    { q: "What is the difference between Hard and Soft magic systems?", a: "Hard magic has strict, defined rules (like physics). The reader understands exactly what can and cannot be done (e.g., Brandon Sanderson). Soft magic is mysterious and undefined; it creates a sense of wonder but cannot be used to solve plot problems easily (e.g., Tolkien's Gandalf). We help you choose which fits your story best." },
    { q: "How do you avoid 'info-dumping' world-building?", a: "The iceberg theory. We build 90% of the world for our own reference, but only show the 10% that directly affects the characters. World-building should be revealed through action, dialogue, and environment—not encyclopedia entries." },
    { q: "Can you help me create a map for my fantasy world?", a: "Yes! While we don't draw the final artistic map, we create the geographical logic (where mountains make sense, how rivers flow, where cities would realistically form) and can collaborate with cartographers for the visual asset." },
    { q: "How do you handle magic system plot holes?", a: "By establishing the 'Cost' and 'Limitation' before writing chapter one. If a wizard can teleport, why don't they teleport out of every trap? We create logical constraints that force characters to be clever, rather than relying on deus ex machina." },
    { q: "Can you write a 10-book epic fantasy series?", a: "Absolutely. We specialize in series architecture. We map out the overarching series arc, character growth across multiple books, and ensure each book has a satisfying beginning, middle, and end." },
];

export default function FantasyWritingPage() {
    const [openFaq, setOpenFaq] = useState<number | null>(0);
    const overviewRef = useRef<HTMLDivElement>(null);
    const overviewInView = useInView(overviewRef, { once: true, margin: "-100px" });

    return (
        <main className="w-full overflow-hidden" style={{ fontFamily: "'Raleway', Arial, sans-serif" }}>

            {/* ════════════════════════════════════════════
                SECTION 1: CINEMATIC FANTASY HERO
            ════════════════════════════════════════════ */}
            <section className="relative w-full min-h-screen flex items-center justify-center bg-[#05070f] overflow-hidden pt-28 pb-12">
                <div className="absolute inset-0 opacity-[0.04] pointer-events-none" style={{ backgroundImage: `url('/images/Left-Section_bg.webp')`, backgroundSize: "40px 40px" }} />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-[#e8391d] opacity-10 rounded-full blur-[200px] pointer-events-none" />

                <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                    <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }} className="flex items-center justify-center gap-3 mb-6">
                        <Wand2 size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Fantasy Writing Services</span>
                    </motion.div>

                    <motion.h1 variants={maskReveal} initial="hidden" animate="visible" className="font-black text-white uppercase leading-[0.95] mb-8" style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}>
                        REALMS BUILT. <br /><span className="text-[#e8391d]">LEGENDS FORGED.</span>
                    </motion.h1>

                    <motion.p variants={fadeUp} initial="hidden" animate="visible" className="text-white/60 leading-[1.85] max-w-2xl mx-auto mb-10" style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)" }}>
                        From sprawling epic fantasies to gritty urban magic, we architect immersive worlds, design rigorous magic systems, and write quests that readers live inside for years.
                    </motion.p>

                    <motion.div variants={fadeUp} initial="hidden" animate="visible" className="flex flex-wrap justify-center gap-4">
                        <motion.a href="#overview" whileHover={{ backgroundColor: "#1e3a8a", gap: "14px", boxShadow: "0 10px 40px rgba(30, 64, 175, 0.4)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer transition-all">
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
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">World-Building Architects</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-black uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.8vw, 3.2rem)" }}>
                            WORLDS SO REAL, <span className="text-[#e8391d]">YOU CAN SMELL THE AIR.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "0.95rem" }}>
                            A great fantasy is built on the bedrock of its world-building. If the magic system has loopholes, or the politics make no sense, the spell is broken. Readers of fantasy are the smartest, most detail-oriented audience out there.
                        </motion.p>
                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Our fantasy writers don’t just invent worlds—we engineer them. We design logical economies, political histories, and rigid magic systems with costs and limitations that force characters into impossible, compelling choices.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-4">
                            {["Rigorous Magic System Design", "Comprehensive Lore & History Bibles", "Geographically Logical World Maps", "Zero Deus Ex Machina Guarantee"].map((item) => (
                                <motion.div key={item} variants={fadeUp} className="flex items-center gap-3 group">
                                    <CheckCircle2 size={18} className="text-[#e8391d] shrink-0" />
                                    <span className="text-black/80 font-semibold text-[14px]">{item}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={overviewInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.8, ease: smoothEase }} className="relative hidden lg:block">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20" style={{ aspectRatio: "4/5" }}>
                            <Image src="/images/fantasy-writing-overview.webp" alt="Fantasy Writing Service" fill className="object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/20 -z-10" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 3: UNIQUE - THE MAGIC SYSTEM MATRIX
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `radial-gradient(#fff 1px, transparent 1px)`, backgroundSize: "30px 30px" }} />

                <div className="max-w-[1000px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-20 overflow-hidden">
                        <motion.div initial={{ y: "100%" }} whileInView={{ y: 0 }} viewport={{ once: true }} className="flex items-center justify-center gap-3 mb-4">
                            <Wand2 size={16} className="text-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Magic Architecture</span>
                        </motion.div>
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            THE MAGIC <span className="text-[#e8391d]">MATRIX</span>
                        </motion.h2>
                        <p className="text-white/40 max-w-lg mx-auto mt-4 text-[14px] leading-relaxed">Every compelling magic system must answer four crucial questions. We design them all.</p>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
                        {/* Center glowing rune circle (decorative) */}
                        <div className="hidden lg:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-[#e8391d]/20 shadow-[0_0_80px_rgba(30,64,175,0.15)] pointer-events-none" />

                        {magicMatrix.map(({ title, desc, icon: Icon, color }) => (
                            <motion.div
                                key={title}
                                variants={fadeUp}
                                className="relative bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-500 group cursor-default backdrop-blur-sm"
                            >
                                <div className="absolute top-0 left-0 w-1 h-full rounded-l-2xl" style={{ backgroundColor: color }} />

                                <div className="flex items-center gap-4 mb-4">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ backgroundColor: `${color}15` }}>
                                        <Icon size={18} className="shrink-0" style={{ color: color }} />
                                    </div>
                                    <h3 className="font-black text-white uppercase text-lg tracking-wide">{title}</h3>
                                </div>
                                <p className="text-white/50 text-[14px] leading-relaxed pl-14">{desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 4: FANTASY SUB-GENRES
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#faf9f7] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16">
                    <div className="text-center mb-16 overflow-hidden">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-black uppercase leading-none" style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)" }}>
                            GENRES WE <span className="text-[#e8391d]">CONJURE</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {subGenres.map(({ icon: Icon, title, desc }) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#e8391d]/50 hover:shadow-xl transition-all duration-500 group cursor-default flex gap-6 items-start">
                                <div className="w-14 h-14 rounded-xl bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                    <Icon size={26} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <h3 className="font-black text-black uppercase text-lg mb-2 tracking-wide">{title}</h3>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">{desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 5: THE FANTASY WRITING PROCESS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#111] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                        <motion.div variants={fadeUp} className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Our Process</span>
                        </motion.div>

                        <motion.h2 variants={fadeUp} className="font-black text-white uppercase leading-[1.05] mb-6" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                            FORGING THE <br /><span className="text-[#e8391d]">EPIC.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-white/60 leading-[1.85] mb-10" style={{ fontSize: "0.95rem" }}>
                            Writing fantasy is world-building first, storytelling second. If the foundation is flawed, the entire quest crumbles.
                        </motion.p>

                        <motion.div variants={staggerContainer} className="flex flex-col gap-8">
                            {processSteps.map(({ step, title, desc, icon: Icon }) => (
                                <motion.div key={step} variants={fadeUp} className="flex gap-5 items-start group">
                                    <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] group-hover:border-[#e8391d] transition-colors duration-300">
                                        <Icon size={20} className="text-white/60 group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-white uppercase tracking-wider mb-1">{step} — {title}</h4>
                                        <p className="text-white/40 text-[13px] leading-relaxed">{desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative hidden lg:block">
                        <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: "1/1" }}>
                            <Image src="/images/fantasy-team.webp" alt="Fantasy World Builders" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[#e8391d]/20 mix-blend-multiply" />
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-full h-full rounded-3xl border-[3px] border-[#e8391d]/25 -z-0" />
                    </motion.div>
                </div>
            </section>

            {/* ════════════════════════════════════════════
                SECTION 6: WHY CHOOSE OUR ARCHITECTS
            ════════════════════════════════════════════ */}
            <section className="relative w-full bg-[#05070f] py-32 overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-8 lg:px-16 relative z-10">
                    <div className="text-center mb-16">
                        <motion.h2 variants={maskReveal} initial="hidden" whileInView="visible" viewport={{ once: true }} className="font-black text-white uppercase leading-none" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                            WHY CHOOSE <span className="text-[#e8391d]">BEXLEY?</span>
                        </motion.h2>
                    </div>

                    <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Lore Masters", desc: "We create history bibles so deep, your readers will write wikis about your world." },
                            { title: "Magic Auditors", desc: "We find the loopholes in your magic system before your most pedantic readers do." },
                            { title: "No Info-Dumping", desc: "We reveal the world through character experience, not author monologues." },
                        ].map(({ title, desc }) => (
                            <motion.div key={title} variants={fadeUp} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-[#e8391d]/50 transition-colors duration-500">
                                <h3 className="font-black text-white uppercase text-lg mb-3 tracking-wide">{title}</h3>
                                <p className="text-white/50 text-[14px] leading-relaxed">{desc}</p>
                            </motion.div>
                        ))}
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
                            FANTASY WRITING <span className="text-[#e8391d]">FAQS</span>
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
                        YOUR EPIC AWAITS ITS AUTHOR.
                    </h2>
                    <p className="text-white/80 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                        Don't let your fantasy world stay trapped in your imagination. Let's build the realm and write the legend together.
                    </p>
                    <div className="flex flex-wrap justify-center gap-5">
                        <motion.a href="/contact" whileHover={{ backgroundColor: "#fff", color: "#e8391d", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.2)" }} whileTap={{ scale: 0.95 }} className="inline-flex items-center gap-3 bg-black text-white font-black uppercase tracking-widest px-10 py-5 rounded-xl text-[14px] cursor-pointer transition-all duration-300">
                            Begin Your Quest <ArrowRight size={18} />
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