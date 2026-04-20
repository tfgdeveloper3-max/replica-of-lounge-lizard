"use client";
import "@/lib/gsap-init";
import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, Variants } from "framer-motion";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import {
    Phone,
    Mail,
    Sun,
    Moon,
    Volume2,
    ArrowRight,
    Accessibility,
    Menu,
} from "lucide-react";



const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const slideIn: Variants = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
};



interface HeroSectionProps {
    isDay: boolean;
    onDayChange: (val: boolean) => void;
}

export default function HeroSection({ isDay, onDayChange }: HeroSectionProps) {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const controls = useAnimation();


    useEffect(() => {
        if (!videoRef.current) return;
        const video = videoRef.current;
        video.src = isDay ? "/video/LoungeLizardDay.mp4" : "/video/LoungeLizardNight.mp4";
        video.load();
        video.play().catch(() => { });
    }, [isDay]);

    useEffect(() => {
        controls.start("visible");
        if (headingRef.current) {
            try {
                const split = new SplitText(headingRef.current, { type: "chars" });
                gsap.from(split.chars, {
                    opacity: 0, y: 40, rotateX: -40,
                    stagger: 0.02, duration: 0.5, ease: "back.out(1.2)", delay: 0.4,
                });
            } catch { }
        }
    }, []);



    return (
        <section className="relative w-full h-screen overflow-hidden">

            {/* ── Background split panels ── */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">

                {/* LEFT — Red + bg image */}
                <div className="relative bg-[#e8391d] overflow-hidden h-full">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: "url('/images/Left-Section_bg.webp')" }}
                    />
                    <div className="absolute inset-0 bg-[#e8391d]/75" />
                    <div
                        className="absolute inset-0 opacity-[0.18] pointer-events-none"
                        style={{
                            backgroundImage: `url('/images/Left-Section_bg.webp')`,
                            backgroundSize: "40px 40px",
                        }}
                    />
                    <span className="absolute right-[-10px] bottom-4 text-[150px] font-black text-black/10 leading-none select-none pointer-events-none">
                        1998
                    </span>
                </div>

                {/* RIGHT — Dark video */}
                <div className="relative bg-[#05070f] overflow-hidden h-full">
                    <motion.video
                        ref={videoRef}
                        variants={slideIn}
                        initial="hidden"
                        animate={controls}
                        autoPlay muted loop playsInline
                        className="absolute inset-0 w-full h-full object-cover"
                    >
                        <source src="/video/LoungeLizardDay.mp4" type="video/mp4" />
                    </motion.video>
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* ── Content layer ── */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2 pt-0">

                {/* LEFT content */}
                <div className="relative flex flex-col justify-center px-10 lg:px-14 pb-10 h-full">
                    <motion.div variants={containerVariants} initial="hidden" animate={controls} className="relative z-10">

                        {/* Badge */}
                        <motion.div variants={fadeUp} className="mb-5">
                            <span className="inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white border border-white/40 rounded-full px-4 py-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-white" />
                                Digital Agency Since 1998
                            </span>
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            ref={headingRef}
                            variants={fadeUp}
                            className="font-black text-white leading-[1.0] tracking-tight mb-6 uppercase"
                            style={{
                                fontSize: "clamp(2rem, 4vw, 4.2rem)",
                                fontFamily: "'Raleway', Arial, sans-serif",
                                wordBreak: "keep-all",
                                overflowWrap: "normal",
                            }}
                        >
                            A BEST OF BREED WEB DESIGN COMPANY AND DIGITAL MARKETING AGENCY.
                        </motion.h1>

                        {/* Body */}
                        <motion.p
                            variants={fadeUp}
                            className="text-white/85 leading-relaxed mb-8"
                            style={{ fontSize: "clamp(0.82rem, 1vw, 0.95rem)", maxWidth: "460px", fontFamily: "'Raleway', Arial, sans-serif" }}
                        >
                            Elevate the design and development of your Website and ignite your Digital Marketing
                            results. Our brand-centric storytelling drives high conversions — where intoxicating
                            creative strategy catapults sales.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <motion.a
                                href="#"
                                whileHover={{ backgroundColor: "#fff", color: "#e8391d" }}
                                transition={{ duration: 0.18 }}
                                className="inline-flex items-center gap-3 border-2 border-white text-white font-bold uppercase tracking-widest px-7 py-3.5"
                                style={{ fontSize: "0.75rem", fontFamily: "'Raleway', Arial, sans-serif" }}
                            >
                                Request Growth Strategy <ArrowRight size={16} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                                transition={{ duration: 0.18 }}
                                className="inline-flex items-center gap-3 bg-black/25 text-white font-bold uppercase tracking-widest px-7 py-3.5"
                                style={{ fontSize: "0.75rem", fontFamily: "'Raleway', Arial, sans-serif" }}
                            >
                                View Our Work
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Accessibility icon */}
                    <div className="absolute left-6 bottom-6 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white/60 cursor-pointer hover:border-white transition-colors">
                        <Accessibility size={16} />
                    </div>
                </div>

                {/* RIGHT content */}
                <div className="relative h-full">
                    {/* Day/Night label */}
                    <motion.div
                        key={isDay ? "day" : "night"}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        transition={{ duration: 0.4 }}
                        className="absolute top-4 right-6 z-20 text-white/50 text-xs font-bold uppercase tracking-widest"
                        style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                    >
                        {isDay ? "Day" : "Night"}
                    </motion.div>

                    {/* Bottom left: toggle + audio */}
                    <div className="absolute bottom-7 left-7 flex items-center gap-3 z-20">
                        <motion.button
                            onClick={() => onDayChange(!isDay)}
                            whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                            title={isDay ? "Switch to Night" : "Switch to Day"}
                            className="w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors hover:border-white/60"
                        >
                            {isDay ? <Sun size={17} /> : <Moon size={17} />}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            className="w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors hover:border-white/60"
                        >
                            <Volume2 size={17} />
                        </motion.button>
                    </div>


                </div>
            </div>
        </section>
    );
}