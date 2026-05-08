"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// --- Animation Variants ---
const headerMask: Variants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
    visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0,
        transition: { duration: 0.8, ease: smoothEase }
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 25, filter: "blur(3px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: smoothEase },
    },
};

const formStagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
};


export default function NewsletterSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [done, setDone] = useState(false);

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setDone(true);
    };

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* diagonal split bg - Static but elegant */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(108deg, #0d0d0d 50%, #faf9f7 50%)" }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">

                {/* LEFT: dark — heading with Left-to-Right Wipe */}
                <motion.div
                    initial={{ clipPath: "inset(0 100% 0 0)" }}
                    animate={isInView ? { clipPath: "inset(0 0% 0 0)" } : {}}
                    transition={{ duration: 1, ease: smoothEase }}
                    className="flex flex-col justify-center px-12 lg:px-20 py-16"
                >
                    <motion.div
                        initial={{ y: "100%" }}
                        animate={isInView ? { y: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.4, ease: smoothEase }}
                        className="flex items-center gap-3 mb-5 overflow-hidden"
                    >
                        <BookOpen size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[10px]">Newsletter</span>
                    </motion.div>

                    <motion.h2
                        variants={headerMask}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="font-black text-white uppercase leading-[1.0] mb-4"
                        style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                    >
                        STAY IN THE<br />
                        <span className="text-[#e8391d]">STORY.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.6, duration: 0.6, ease: smoothEase }}
                        className="text-white/45 text-[13px] leading-[1.85] max-w-[290px]"
                    >
                        Publishing tips, author success stories, and industry insights — delivered every week to your inbox.
                    </motion.p>
                </motion.div>

                {/* RIGHT: light — form with Right-to-Left Wipe */}
                <motion.div
                    initial={{ clipPath: "inset(0 0 0 100%)" }}
                    animate={isInView ? { clipPath: "inset(0 0 0 0%)" } : {}}
                    transition={{ duration: 1, ease: smoothEase }}
                    className="flex items-center px-12 lg:px-16 py-16"
                >
                    <div className="w-full max-w-[440px]">
                        <AnimatePresence mode="wait">
                            {done ? (
                                <motion.div
                                    key="thanks"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.5, ease: smoothEase }}
                                    className="flex flex-col items-start gap-4"
                                >
                                    {/* Spring Pop Checkmark */}
                                    <motion.div
                                        initial={{ scale: 0, rotate: -45 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                        className="w-14 h-14 rounded-full bg-[#e8391d] flex items-center justify-center shadow-lg shadow-[#e8391d]/30"
                                    >
                                        <svg width="20" height="16" viewBox="0 0 24 20" fill="none">
                                            <motion.path
                                                d="M2 10L8.5 16.5L22 2"
                                                stroke="white"
                                                strokeWidth="3"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                initial={{ pathLength: 0 }}
                                                animate={{ pathLength: 1 }}
                                                transition={{ delay: 0.4, duration: 0.5, ease: smoothEase }}
                                            />
                                        </svg>
                                    </motion.div>
                                    <p className="font-black text-black uppercase text-xl">You're subscribed!</p>
                                    <p className="text-gray-500 text-[13px]">Watch your inbox for our next issue.</p>
                                </motion.div>
                            ) : (
                                <motion.form
                                    key="form"
                                    onSubmit={submit}
                                    variants={formStagger}
                                    initial="hidden"
                                    animate="visible"
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="w-full flex flex-col gap-3"
                                >
                                    <motion.input
                                        variants={fadeUp}
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Your Name"
                                        className="border border-gray-300 text-gray-800 placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] focus:ring-2 focus:ring-[#e8391d]/10 transition-all text-[14px] bg-white"
                                    />
                                    <motion.input
                                        variants={fadeUp}
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Email Address *"
                                        required
                                        className="border border-gray-300 text-gray-800 placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] focus:ring-2 focus:ring-[#e8391d]/10 transition-all text-[14px] bg-white"
                                    />
                                    <motion.button
                                        variants={fadeUp}
                                        type="submit"
                                        whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 25px rgba(232, 57, 29, 0.25)" }}
                                        whileTap={{ scale: 0.97 }}
                                        className="flex items-center justify-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all text-[12px] cursor-pointer"
                                    >
                                        Subscribe Now <ArrowRight size={15} />
                                    </motion.button>
                                    <motion.p variants={fadeUp} className="text-gray-400 text-[11px] text-center">
                                        No spam. Unsubscribe anytime.
                                    </motion.p>
                                </motion.form>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}