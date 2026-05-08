"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { BookOpen, Users, Award, Star, ArrowRight, Play } from "lucide-react";
import { section } from "framer-motion/client";

// Reusable safe easing for TypeScript
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// --- Variants ---
const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(3px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: smoothEase },
    },
};

const statCard: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5, ease: smoothEase },
    },
};

const stats = [
    { icon: BookOpen, num: "500+", label: "Books Published" },
    { icon: Users, num: "300+", label: "Happy Authors" },
    { icon: Award, num: "12+", label: "Years Experience" },
    { icon: Star, num: "98%", label: "5-Star Reviews" },
];

export default function AboutSection() {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section
            ref={ref}
            className="relative w-full overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#faf9f7" }}
        >
            {/* top accent line - Drawing Animation */}
            <motion.div
                initial={{ width: "0%" }}
                animate={inView ? { width: "100%" } : {}}
                transition={{ duration: 1.5, ease: smoothEase }}
                className="h-1 w-full bg-[#e8391d] origin-left"
            />

            <div className="max-w-[1200px] mx-auto px-8 lg:px-16 py-24">

                {/* label */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, ease: smoothEase }}
                    className="flex items-center gap-3 mb-12"
                >
                    <motion.span
                        initial={{ width: 0 }}
                        animate={inView ? { width: 40 } : {}}
                        transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
                        className="h-[2px] bg-[#e8391d]"
                    />
                    <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">
                        About Bexley Publications
                    </span>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* ── LEFT: image block with Clip Reveal ── */}
                    <div className="relative">
                        <motion.div
                            // Cinematic wipe-up reveal
                            initial={{ clipPath: "inset(100% 0% 0% 0% round 24px)" }}
                            animate={inView ? { clipPath: "inset(0% 0% 0% 0% round 24px)" } : {}}
                            transition={{ duration: 1.2, ease: smoothEase }}
                            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/15"
                            style={{ aspectRatio: "3/4" }}
                        >
                            <div
                                className="absolute inset-0 bg-cover bg-center scale-110 will-change-transform"
                                style={{ backgroundImage: "url('/images/about-us-bg.webp')" }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.button
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                                    transition={{ delay: 1, type: "spring", stiffness: 200, damping: 15 }}
                                    whileHover={{ scale: 1.1, boxShadow: "0 0 40px rgba(255,255,255,0.3)" }}
                                    whileTap={{ scale: 0.95 }}
                                    className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/60 flex items-center justify-center group cursor-pointer"
                                >
                                    <Play size={28} fill="white" className="text-white ml-1 group-hover:scale-110 transition-transform" />
                                </motion.button>
                            </div>

                            {/* bottom text */}
                            <div className="absolute bottom-0 left-0 right-0 p-8">
                                <p className="text-white/60 text-[11px] font-bold uppercase tracking-[0.25em] mb-1">Est. 2012</p>
                                <p className="text-white font-black text-xl uppercase leading-tight">
                                    Turning Ideas Into<br />Published Masterpieces
                                </p>
                            </div>
                        </motion.div>

                        {/* floating badge - Spring Pop Effect */}
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 0.8, type: "spring", stiffness: 300, damping: 20 }}
                            whileHover={{ scale: 1.05, rotate: -5 }}
                            className="absolute -top-6 -right-6 w-32 h-32 rounded-full bg-[#e8391d] shadow-xl shadow-[#e8391d]/30 flex flex-col items-center justify-center text-center z-10"
                        >
                            <span className="font-black text-white text-3xl leading-none">500+</span>
                            <span className="text-white/80 text-[9px] font-bold uppercase tracking-wider mt-1 leading-snug px-2">Books<br />Published</span>
                        </motion.div>

                        {/* decorative corner box */}
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={inView ? { scale: 1, opacity: 1 } : {}}
                            transition={{ delay: 1.2, duration: 0.6, ease: smoothEase }}
                            className="absolute -bottom-5 -left-5 w-28 h-28 rounded-2xl border-[3px] border-[#e8391d]/25 -z-10"
                        />
                    </div>

                    {/* ── RIGHT: content with Stagger ── */}
                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        className="flex flex-col"
                    >
                        {/* Heading - Clip Path Reveal */}
                        <motion.h2
                            variants={{
                                hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 30 },
                                visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)", y: 0, transition: { duration: 0.8, ease: smoothEase } }
                            }}
                            className="font-black text-black uppercase leading-[1.05] mb-6"
                            style={{ fontSize: "clamp(2rem, 3.8vw, 3.5rem)" }}
                        >
                            YOUR STORY DESERVES A{" "}
                            <span className="text-[#e8391d]">PROFESSIONAL TOUCH.</span>
                        </motion.h2>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-5" style={{ fontSize: "clamp(0.88rem, 1.05vw, 1rem)" }}>
                            At OakMont Publications, we believe every author has a story worth sharing with the world. Since 2012, we've partnered with hundreds of first-time and seasoned authors to transform raw manuscripts into professionally published books that captivate readers globally.
                        </motion.p>

                        <motion.p variants={fadeUp} className="text-gray-500 leading-[1.85] mb-10" style={{ fontSize: "clamp(0.88rem, 1.05vw, 1rem)" }}>
                            From ghostwriting and editing to cover design, publishing, and marketing — we handle every step of the journey so you can focus on what you do best: writing.
                        </motion.p>

                        {/* stats grid - Staggered Scale Entry */}
                        <motion.div variants={staggerContainer} className="grid grid-cols-2 gap-4 mb-10">
                            {stats.map(({ icon: Icon, num, label }) => (
                                <motion.div
                                    key={label}
                                    variants={statCard}
                                    className="flex items-center gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-[#e8391d]/30 transition-all duration-500 group cursor-default"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[#e8391d]/10 flex items-center justify-center shrink-0 group-hover:bg-[#e8391d] transition-colors duration-300">
                                        <Icon size={19} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <p className="font-black text-black text-[1.35rem] leading-none">{num}</p>
                                        <p className="text-gray-400 text-[11px] uppercase tracking-widest font-bold mt-0.5">{label}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* CTAs */}
                        <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-5">
                            <motion.a
                                href="#"
                                whileHover={{ backgroundColor: "#c0271a", gap: "14px" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest px-8 py-4 rounded-xl text-[12px] cursor-pointer"
                            >
                                Start Your Journey <ArrowRight size={15} />
                            </motion.a>
                            <motion.a
                                href="#"
                                whileHover={{ color: "#e8391d", gap: "10px" }}
                                className="inline-flex items-center gap-2 text-black font-black uppercase tracking-widest text-[12px] border-b-2 border-black/20 pb-1 transition-all hover:border-[#e8391d] cursor-pointer"
                            >
                                View Portfolio <ArrowRight size={14} />
                            </motion.a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}