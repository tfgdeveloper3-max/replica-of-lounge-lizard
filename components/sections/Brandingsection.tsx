"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const tabs = [
    {
        id: "writing",
        label: "Writing",
        color: "#e8391d",
        headline: "YOUR STORY DESERVES THE BEST WORDS.",
        sub: "From ghostwriting to genre fiction, our writers craft compelling narratives that captivate readers.",
        items: [
            "Book Writing & Ghostwriting",
            "Fiction & Non-Fiction Writing",
            "Children's Book Writing",
            "Memoir & Biography",
            "Sci-Fi, Mystery & Horror",
            "Script & Screenplay Writing",
            "SEO Content Writing",
        ],
    },
    {
        id: "editing",
        label: "Editing & Publishing",
        color: "#1a6e3c",
        headline: "POLISHED TO PERFECTION.",
        sub: "Expert editors refine your manuscript and our publishing team brings it to the world.",
        items: [
            "Developmental Editing",
            "Book Proofreading",
            "Children's Book Editing",
            "Ebook Creation",
            "Audiobook Narration",
            "Book Formatting",
            "Book Publishing",
        ],
    },
    {
        id: "design",
        label: "Design & Marketing",
        color: "#1a3a6e",
        headline: "STAND OUT ON EVERY SHELF.",
        sub: "Award-winning cover designs and strategic marketing that gets your book discovered.",
        items: [
            "Book Cover Design",
            "Author Website Design",
            "Book Printing",
            "Book Marketing Strategy",
            "Social Media Promotion",
            "Amazon Optimization",
            "Launch Campaign Management",
        ],
    },
];

// --- Animation Variants ---
const headerMask: Variants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
    visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0,
        transition: { duration: 0.7, ease: smoothEase }
    },
};

const listContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.2 } },
};

const listItem: Variants = {
    hidden: { opacity: 0, x: -20, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        x: 0,
        filter: "blur(0px)",
        transition: { duration: 0.4, ease: smoothEase },
    },
};

export default function BrandingSection() {
    const [active, setActive] = useState(0);
    const tab = tabs[active];
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#f7f6f3" }}
        >
            {/* ── Animated Big rotated label background ── */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, ease: smoothEase, delay: 0.3 }}
                className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-black text-black/[0.04] uppercase select-none pointer-events-none"
                style={{ fontSize: "clamp(6rem, 14vw, 14rem)", writingMode: "vertical-rl", letterSpacing: "-0.05em" }}
            >
                SERVICES
            </motion.div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: Video + animated overlay with Ken Burns ── */}
                <motion.div
                    initial={{ clipPath: "inset(0 0 0 0)" }} // Fallback
                    animate={isInView ? { clipPath: "inset(0 0 0 0)" } : { clipPath: "inset(0 100% 0 0)" }}
                    transition={{ duration: 1.2, ease: smoothEase }}
                    className="relative h-[50vh] lg:h-auto overflow-hidden"
                >
                    {/* Infinite Slow-Mo Ken Burns Effect */}
                    <motion.video
                        animate={{ scale: 1.1 }}
                        transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                        src="/video/Branding.mp4"
                        autoPlay muted loop playsInline
                        className="absolute inset-0 w-full h-full object-cover will-change-transform"
                    />

                    {/* Color overlay changes with tab */}
                    <motion.div
                        key={active}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                        style={{ background: `${tab.color}CC` }}
                    />

                    {/* Tab number - 3D Spring Pop */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            key={active}
                            initial={{ scale: 1.6, opacity: 0, rotate: -15 }}
                            animate={{ scale: 1, opacity: 0.15, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 20 }}
                            className="font-black text-white select-none"
                            style={{ fontSize: "clamp(10rem, 25vw, 20rem)" }}
                        >
                            0{active + 1}
                        </motion.span>
                    </div>

                    {/* Tab selector — bottom of image */}
                    <div className="absolute bottom-0 left-0 right-0 flex">
                        {tabs.map((t, i) => (
                            <button
                                key={t.id}
                                onClick={() => setActive(i)}
                                className="flex-1 py-4 font-black uppercase text-[11px] tracking-widest transition-all duration-300 relative cursor-pointer"
                                style={{
                                    background: i === active ? t.color : "rgba(0,0,0,0.6)",
                                    color: i === active ? "#fff" : "rgba(255,255,255,0.5)",
                                }}
                            >
                                {t.label}
                                {i === active && (
                                    <motion.div
                                        layoutId="tabUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-1 bg-white/40"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* ── RIGHT: Content ── */}
                <div className="flex flex-col justify-center px-10 lg:px-16 py-20">

                    {/* Section marker */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <motion.div
                            key={active}
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ duration: 0.4, ease: smoothEase }}
                            className="h-1"
                            style={{ background: tab.color }}
                        />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: tab.color }}>
                            Our {tab.label}
                        </span>
                    </motion.div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            // Parent wrapper handles overall fade in/out
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {/* Heading with Mask Reveal */}
                            <motion.h2
                                variants={headerMask}
                                initial="hidden"
                                animate="visible"
                                className="font-black text-black uppercase leading-[1.05] mb-5"
                                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
                            >
                                {tab.headline}
                            </motion.h2>

                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2, ease: smoothEase }}
                                className="text-gray-500 leading-relaxed mb-8 max-w-[480px]"
                                style={{ fontSize: "0.95rem" }}
                            >
                                {tab.sub}
                            </motion.p>

                            {/* Services list — Staggered Blur-to-Clear */}
                            <motion.ul
                                variants={listContainer}
                                initial="hidden"
                                animate="visible"
                                className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
                            >
                                {tab.items.map((item) => (
                                    <motion.li
                                        key={item}
                                        variants={listItem}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="shrink-0 transition-transform duration-300 group-hover:scale-125"
                                            style={{ color: tab.color }}
                                        />
                                        <span className="text-gray-700 font-semibold text-[14px] group-hover:text-black transition-colors duration-200">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </motion.ul>

                            <motion.a
                                href="#"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                                whileHover={{ paddingRight: "2.5rem" }}
                                whileTap={{ scale: 0.97 }}
                                className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-[12px] text-white px-8 py-4 pr-6 cursor-pointer"
                                style={{ background: tab.color }}
                            >
                                Explore All Services
                                <ArrowUpRight size={16} />
                            </motion.a>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}