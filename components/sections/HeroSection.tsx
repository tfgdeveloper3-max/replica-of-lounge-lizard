"use client";
import "@/lib/gsap-init";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
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
} from "lucide-react";

// --- Premium Framer Motion Variants ---
const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.15, delayChildren: 1.2 },
    },
};

const fadeUp = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    },
};

// --- Magnetic Button Hook ---
function useMagnetic() {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
    const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

    const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) * 0.35);
        y.set((e.clientY - centerY) * 0.35);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
    };

    return { x: springX, y: springY, handleMouse, handleLeave };
}

interface HeroSectionProps {
    isDay: boolean;
    onDayChange: (val: boolean) => void;
}

export default function HeroSection({ isDay, onDayChange }: HeroSectionProps) {
    const headingRef = useRef<HTMLHeadingElement>(null);
    const leftBgRef = useRef<HTMLDivElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);
    const magnetic1 = useMagnetic();
    const magnetic2 = useMagnetic();

    // --- Spotlight State & Motion Values ---
    const [isHoveringLeft, setIsHoveringLeft] = useState(false);
    const spotlightX = useMotionValue(-1000);
    const spotlightY = useMotionValue(-1000);

    // Dynamic HIGH-INTENSITY background glow color based on Day/Night mode
    const spotlightBg = useTransform(
        [spotlightX, spotlightY],
        ([x, y]) => {
            const glowColor = isDay
                ? `radial-gradient(600px circle at ${x}px ${y}px, rgba(255, 255, 220, 0.6), rgba(255, 160, 50, 0.3) 40%, transparent 70%)`
                : `radial-gradient(600px circle at ${x}px ${y}px, rgba(200, 240, 255, 0.7), rgba(50, 50, 255, 0.3) 40%, transparent 70%)`;
            return glowColor;
        }
    );

    const handleLeftMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        spotlightX.set(e.clientX - rect.left);
        spotlightY.set(e.clientY - rect.top);
    };

    // GSAP Animations
    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

            if (leftBgRef.current) {
                tl.fromTo(
                    leftBgRef.current,
                    { scale: 1.2 },
                    { scale: 1, duration: 2.5, ease: "power2.out" },
                    0
                );
            }

            if (headingRef.current) {
                try {
                    const split = new SplitText(headingRef.current, { type: "chars" });
                    gsap.set(headingRef.current, { perspective: 1000 });

                    tl.from(
                        split.chars,
                        {
                            opacity: 0,
                            y: 80,
                            rotateX: -90,
                            z: -150,
                            stagger: 0.015,
                            duration: 1.4,
                            ease: "back.out(1.7)",
                        },
                        0.3
                    );
                } catch (e) {
                    console.error("SplitText Error:", e);
                }
            }
        });

        return () => ctx.revert();
    }, []);

    // Simplified Video Loop & Visibility Management
    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Safe play function to prevent AbortError on console
        const safePlay = () => {
            const p = video.play();
            if (p !== undefined) {
                p.catch(error => {
                    if (error.name !== 'AbortError') {
                        console.error("Video play error:", error);
                    }
                });
            }
        };

        // Handle tab visibility to prevent power-save/AbortError and save battery
        const handleVisibilityChange = () => {
            if (document.visibilityState === 'visible') {
                if (video.paused) safePlay();
            } else {
                video.pause();
            }
        };

        document.addEventListener('visibilitychange', handleVisibilityChange);

        // Initial setup: ensure it plays safely
        safePlay();

        return () => {
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, []); // No isDay dependency needed since video never changes

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {/* ── Background split panels ── */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
                {/* LEFT — Red + bg image */}
                <div className="relative bg-[#e8391d] overflow-hidden h-full">
                    <div
                        ref={leftBgRef}
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
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
                </div>

                {/* RIGHT — Dark video (Locked to Night) */}
                <div className="relative bg-[#05070f] overflow-hidden h-full">
                    <motion.video
                        ref={videoRef}
                        src="/video/BexleyNight.mp4"
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        autoPlay
                        muted
                        loop // Native HTML5 loop for seamless 1-minute restart
                        playsInline
                        className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-transparent pointer-events-none" />
                </div>
            </div>

            {/* ── Content layer ── */}
            <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[2fr_3fr] pt-0">
                {/* LEFT content - Spotlight Moved Here for better Z-index */}
                <div
                    className="relative flex flex-col px-10 lg:px-14 pb-10 pt-32 lg:pt-40 h-full"
                    onMouseMove={handleLeftMouseMove}
                    onMouseEnter={() => setIsHoveringLeft(true)}
                    onMouseLeave={() => {
                        setIsHoveringLeft(false);
                        spotlightX.set(-1000);
                    }}
                >
                    {/* Spotlight Cursor Glow Layer - Now inside content layer with mix-blend-mode */}
                    <motion.div
                        className="absolute inset-0 z-[2] pointer-events-none transition-opacity duration-300"
                        style={{
                            opacity: isHoveringLeft ? 1 : 0,
                            background: spotlightBg,
                            mixBlendMode: "overlay", // Makes the glow blend beautifully with the red background
                        }}
                    />

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="relative z-10"
                    >
                        {/* Heading - Enhanced Zoom & Brightness Effect */}
                        <motion.h1
                            ref={headingRef}
                            animate={{
                                scale: isHoveringLeft ? 1.06 : 1, // Increased zoom from 1.03 to 1.06
                                filter: isHoveringLeft ? "brightness(1.3)" : "brightness(1)", // Text glows brighter
                            }}
                            transition={{ type: "spring", stiffness: 150, damping: 20 }}
                            className="font-black text-white leading-[1.0] tracking-tight mb-6 uppercase"
                            style={{
                                fontSize: "clamp(2rem, 3vw, 3.2rem)",
                                fontFamily: "'Raleway', Arial, sans-serif",
                                wordBreak: "keep-all",
                                overflowWrap: "normal",
                                transformOrigin: "left center",
                            }}
                        >
                            A BEST OF BREED WEB DESIGN COMPANY AND DIGITAL MARKETING AGENCY.
                        </motion.h1>

                        {/* Body */}
                        <motion.p
                            variants={fadeUp}
                            className="text-white/85 leading-relaxed mb-8"
                            style={{ fontSize: "clamp(0.82rem, 1vw, 0.95rem)", maxWidth: "450px", fontFamily: "'Raleway', Arial, sans-serif" }}
                        >
                            Elevate the design and development of your Website and ignite your Digital Marketing
                            results. Our brand-centric storytelling drives high conversions — where intoxicating
                            creative strategy catapults sales.
                        </motion.p>

                        {/* CTAs with Magnetic Effect */}
                        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
                            <motion.a
                                href="#"
                                style={{ x: magnetic1.x, y: magnetic1.y }}
                                onMouseMove={magnetic1.handleMouse}
                                onMouseLeave={magnetic1.handleLeave}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 border-2 border-white text-white font-bold uppercase tracking-widest px-7 py-3.5 bg-transparent cursor-pointer"
                            >
                                Request Growth Strategy <ArrowRight size={16} />
                            </motion.a>
                            <motion.a
                                href="#"
                                style={{ x: magnetic2.x, y: magnetic2.y }}
                                onMouseMove={magnetic2.handleMouse}
                                onMouseLeave={magnetic2.handleLeave}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center gap-3 bg-black/25 text-white font-bold uppercase tracking-widest px-7 py-3.5 backdrop-blur-sm border border-white/10 cursor-pointer"
                            >
                                View Our Work
                            </motion.a>
                        </motion.div>
                    </motion.div>

                    {/* Accessibility icon */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 2, duration: 0.5 }}
                        className="absolute left-6 bottom-6 w-9 h-9 rounded-full border border-white/40 flex items-center justify-center text-white/60 cursor-pointer hover:border-white hover:text-white transition-all duration-300 z-10"
                    >
                        <Accessibility size={16} />
                    </motion.div>
                </div>

                {/* RIGHT content */}
                <div className="relative h-full">
                    {/* Day/Night label */}
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isDay ? "day-label" : "night-label"}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="absolute top-24 right-6 z-20 text-white/50 text-xs font-bold uppercase tracking-widest"
                            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
                        >
                            {isDay ? "Day" : "Night"}
                        </motion.div>
                    </AnimatePresence>

                    {/* Bottom left: toggle + audio */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute bottom-7 left-7 flex items-center gap-3 z-20"
                    >
                        <motion.button
                            onClick={() => onDayChange(!isDay)}
                            whileHover={{ scale: 1.15, borderColor: "rgba(255,255,255,0.8)" }}
                            whileTap={{ scale: 0.9 }}
                            title={isDay ? "Switch to Night" : "Switch to Day"}
                            className="w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                        >
                            {isDay ? <Sun size={17} /> : <Moon size={17} />}
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.15, borderColor: "rgba(255,255,255,0.8)" }}
                            whileTap={{ scale: 0.9 }}
                            className="w-10 h-10 rounded-full border border-white/30 bg-black/40 backdrop-blur-sm flex items-center justify-center text-white transition-colors"
                        >
                            <Volume2 size={17} />
                        </motion.button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}