"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, TrendingUp } from "lucide-react";

const stats = [
    { id: 1, percent: "500+", label: "Books Successfully Published", client: "Across All Genres", image: "/images/the-american-camp.webp" },
    { id: 2, percent: "98%", label: "5-Star Client Satisfaction Rate", client: "Verified Author Reviews", image: "/images/mind-games-fragrance.webp" },
    { id: 3, percent: "30+", label: "Global Distribution Platforms", client: "Amazon, B&N, Kobo & More", image: "/images/winspire.webp" },
    { id: 4, percent: "2,400+", label: "Copies Sold — Single Title", client: "Mystery Thriller Author", image: "/images/gold-dust-west-casinos.webp" },
    { id: 5, percent: "3x", label: "Average Sales Increase", client: "After Our Marketing Plans", image: "/images/Andersen-global.webp" },
    { id: 6, percent: "12+", label: "Years of Publishing Excellence", client: "Est. 2012", image: "/images/colorado-rafting.webp" },
    { id: 7, percent: "300+", label: "Happy Authors Served", client: "First-Time to Bestsellers", image: "/images/imagine-software.webp" },
];

export default function MarketingSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const t = setTimeout(() => setCurrent((p) => (p + 1) % stats.length), 4000);
        return () => clearTimeout(t);
    }, [current]);

    const s = stats[current];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#0d0d0d" }}
        >
            {/* BG image */}
            <div className="absolute inset-0">
                <Image src="/images/Marketing-bg.webp" alt="" fill className="object-cover opacity-10" />
                <div className="absolute inset-0 bg-gradient-to-br from-[#0d0d0d]/95 via-[#0d0d0d]/80 to-[#0d0d0d]/60" />
            </div>

            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#e8391d]" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: heading + big stat ── */}
                <div className="flex flex-col justify-center px-12 lg:px-20 py-24 border-r border-white/5">

                    {/* label */}
                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-8 h-[2px] bg-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Our Results</span>
                    </div>

                    <h2
                        className="font-black text-white uppercase leading-[1.0] mb-14"
                        style={{ fontSize: "clamp(2rem, 4vw, 3.8rem)" }}
                    >
                        NUMBERS THAT<br />
                        SPEAK FOR<br />
                        <span className="text-[#e8391d]">THEMSELVES.</span>
                    </h2>

                    {/* Big animated stat */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={s.id}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                            className="mb-10"
                        >
                            {/* number */}
                            <div
                                className="font-black text-[#e8391d] leading-none mb-3"
                                style={{ fontSize: "clamp(4.5rem, 10vw, 9rem)" }}
                            >
                                {s.percent}
                            </div>
                            {/* label */}
                            <p
                                className="font-black text-white uppercase leading-tight mb-2"
                                style={{ fontSize: "clamp(0.95rem, 1.4vw, 1.2rem)" }}
                            >
                                {s.label}
                            </p>
                            {/* sub */}
                            <p className="text-white/35 text-[12px] uppercase tracking-widest font-bold">
                                — {s.client}
                            </p>
                        </motion.div>
                    </AnimatePresence>

                    {/* dots */}
                    <div className="flex items-center gap-2.5 mb-10">
                        {stats.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                className={`rounded-full transition-all duration-300 ${i === current
                                        ? "bg-[#e8391d] w-7 h-2.5"
                                        : "bg-white/20 hover:bg-white/40 w-2.5 h-2.5"
                                    }`}
                            />
                        ))}
                    </div>

                    <motion.a
                        href="#"
                        whileHover={{ backgroundColor: "#c0271a", gap: "14px" }}
                        className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] transition-all self-start"
                    >
                        See Our Portfolio <ArrowRight size={15} />
                    </motion.a>
                </div>

                {/* ── RIGHT: stat cards grid ── */}
                <div className="grid grid-cols-2 gap-px bg-white/5 self-stretch">
                    {stats.map((st, i) => (
                        <motion.button
                            key={st.id}
                            onClick={() => setCurrent(i)}
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.2 }}
                            className={`relative flex flex-col justify-end p-7 text-left overflow-hidden transition-all duration-300 ${i === current
                                    ? "bg-[#e8391d]/15"
                                    : "bg-[#111] hover:bg-white/4"
                                }`}
                            style={{ minHeight: "185px" }}
                        >
                            {/* bg image */}
                            <div className="absolute inset-0 opacity-15">
                                <Image src={st.image} alt="" fill className="object-cover" />
                            </div>

                            {/* active top bar */}
                            {i === current && (
                                <motion.div
                                    layoutId="activeBar"
                                    className="absolute top-0 left-0 right-0 h-[3px] bg-[#e8391d]"
                                />
                            )}

                            {/* TrendingUp icon */}
                            <div className={`relative z-10 mb-3 w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${i === current ? "bg-[#e8391d]" : "bg-white/8"}`}>
                                <TrendingUp size={15} className={i === current ? "text-white" : "text-white/40"} />
                            </div>

                            <div className="relative z-10">
                                <p
                                    className="font-black leading-none mb-1 transition-colors"
                                    style={{
                                        fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                                        color: i === current ? "#e8391d" : "rgba(255,255,255,0.75)",
                                    }}
                                >
                                    {st.percent}
                                </p>
                                <p className="text-white/50 text-[10px] uppercase tracking-widest font-bold leading-snug">
                                    {st.label}
                                </p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>
        </section>
    );
}