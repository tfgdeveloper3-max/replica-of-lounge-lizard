"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

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

export default function BrandingSection() {
    const [active, setActive] = useState(0);
    const tab = tabs[active];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#f7f6f3" }}
        >
            {/* ── Big rotated label background ── */}
            <div
                className="absolute right-[-2rem] top-1/2 -translate-y-1/2 font-black text-black/[0.04] uppercase select-none pointer-events-none"
                style={{ fontSize: "clamp(6rem, 14vw, 14rem)", writingMode: "vertical-rl", letterSpacing: "-0.05em" }}
            >
                SERVICES
            </div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: Video + animated overlay ── */}
                <div className="relative h-[50vh] lg:h-auto overflow-hidden">
                    <video
                        src="/video/Branding.mp4"
                        autoPlay muted loop playsInline
                        className="absolute inset-0 w-full h-full object-cover"
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

                    {/* Tab number */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                            key={active}
                            initial={{ scale: 1.4, opacity: 0 }}
                            animate={{ scale: 1, opacity: 0.15 }}
                            transition={{ duration: 0.5 }}
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
                                className="flex-1 py-4 font-black uppercase text-[11px] tracking-widest transition-all duration-300 relative"
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
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: Content ── */}
                <div className="flex flex-col justify-center px-10 lg:px-16 py-20">

                    {/* Section marker */}
                    <div className="flex items-center gap-3 mb-8">
                        <motion.div
                            key={active}
                            initial={{ width: 0 }}
                            animate={{ width: 40 }}
                            transition={{ duration: 0.4 }}
                            className="h-1"
                            style={{ background: tab.color }}
                        />
                        <span className="text-[11px] font-black uppercase tracking-[0.25em]" style={{ color: tab.color }}>
                            Our {tab.label}
                        </span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={active}
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -16 }}
                            transition={{ duration: 0.4 }}
                        >
                            <h2
                                className="font-black text-black uppercase leading-[1.05] mb-5"
                                style={{ fontSize: "clamp(2rem, 3.5vw, 3.2rem)" }}
                            >
                                {tab.headline}
                            </h2>
                            <p className="text-gray-500 leading-relaxed mb-8 max-w-[480px]" style={{ fontSize: "0.95rem" }}>
                                {tab.sub}
                            </p>

                            {/* Services list — 2 col grid */}
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10">
                                {tab.items.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        initial={{ opacity: 0, x: -16 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.06, duration: 0.35 }}
                                        className="flex items-center gap-3 group cursor-pointer"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="shrink-0 transition-transform group-hover:scale-110"
                                            style={{ color: tab.color }}
                                        />
                                        <span className="text-gray-700 font-semibold text-[14px] group-hover:text-black transition-colors">
                                            {item}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>

                            <motion.a
                                href="#"
                                whileHover={{ paddingRight: "2.5rem" }}
                                transition={{ duration: 0.2 }}
                                className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-[12px] text-white px-8 py-4 pr-6"
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