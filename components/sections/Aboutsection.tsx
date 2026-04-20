"use client";
import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Play } from "lucide-react";

const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.7,
            ease: "easeOut" as const,
            delay: i * 0.12,
        },
    }),
};

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            ref={ref}
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* ── Full bleed background image ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/about-us-bg.webp')" }}
            />

            {/* Dark overlay — stronger on right for text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-black/40 to-black/70" />
            {/* Extra right panel darkening */}
            <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-transparent to-transparent" />

            {/* ── Content grid ── */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: Video play button ── */}
                <div className="relative flex items-center justify-center px-10 py-24 lg:py-0">
                    {/* Accessibility icon bottom-left */}
                    <div className="absolute left-8 bottom-8 w-9 h-9 rounded-full border border-white/30 flex items-center justify-center text-white/50 text-sm cursor-pointer hover:border-white/60 transition-colors">
                        ♿
                    </div>

                    {/* Play button group */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.85 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                        className="flex flex-col items-center gap-8 cursor-pointer group"
                    >
                        {/* Circular play button */}
                        <div className="relative">
                            {/* Ripple rings */}
                            <motion.div
                                animate={{ scale: [1, 1.35, 1], opacity: [0.3, 0, 0.3] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute inset-0 rounded-full bg-[#e8391d]/30"
                            />
                            <motion.div
                                animate={{ scale: [1, 1.6, 1], opacity: [0.2, 0, 0.2] }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
                                className="absolute inset-0 rounded-full bg-[#e8391d]/20"
                            />

                            {/* Main button */}
                            <motion.div
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative w-28 h-28 rounded-full bg-[#e8391d]/85 flex items-center justify-center shadow-2xl shadow-[#e8391d]/40 group-hover:bg-[#e8391d] transition-colors"
                            >
                                <Play size={40} className="text-white ml-2" fill="white" />
                            </motion.div>
                        </div>

                        {/* Label */}
                        <div className="text-center">
                            <p
                                className="text-white font-black uppercase leading-tight tracking-wide"
                                style={{ fontSize: "clamp(1.4rem, 2.5vw, 2rem)" }}
                            >
                                VIEW OUR<br />AGENCY SHOWREEL
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* ── RIGHT: About text ── */}
                <div className="relative flex flex-col justify-center mt-15 px-10 lg:px-16 py-24 lg:py-20">

                    {/* Section label */}
                    <motion.p
                        custom={0}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="text-white/60 text-[14px] font-bold uppercase tracking-[0.25em] mb-5"
                    >
                        About Us
                    </motion.p>

                    {/* Big heading */}
                    <motion.h2
                        custom={1}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="font-extralight text-white uppercase leading-[1.05] tracking-tight mb-8"
                        style={{ fontSize: "clamp(0.85rem, 3vw, 3.8rem)" }}
                    >
                        AWARD-WINNING WEB DESIGN, DEVELOPMENT AND DIGITAL MARKETING AGENCY DRIVING BUSINESS GROWTH SINCE 1998.
                    </motion.h2>

                    {/* Body text */}
                    <motion.p
                        custom={2}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="text-white/75 leading-relaxed mb-10"
                        style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)", maxWidth: "520px" }}
                    >
                        Lounge Lizard is a full-service web design and digital marketing agency
                        creating high-performance websites and scalable digital platforms for brands
                        ready to grow and lead. Since 1998, we've partnered with companies across
                        the U.S. to deliver custom design, development, and conversion-focused
                        experiences. We blend strategic branding, UI/UX, SEO, and AI-driven search
                        visibility to help brands stand out, attract qualified traffic, and turn
                        engagement into measurable revenue.
                    </motion.p>

                    {/* CTA button */}
                    <motion.div
                        custom={3}
                        variants={fadeUp}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                    >
                        <motion.a
                            href="#"
                            whileHover={{ backgroundColor: "#e8391d", borderColor: "#e8391d", color: "#fff" }}
                            transition={{ duration: 0.2 }}
                            className="inline-flex items-center gap-3 border-2 border-white text-white font-bold uppercase tracking-widest px-8 py-4"
                            style={{ fontSize: "0.78rem" }}
                        >
                            Schedule Meeting
                        </motion.a>
                    </motion.div>
                </div>
            </div>


        </section>
    );
}