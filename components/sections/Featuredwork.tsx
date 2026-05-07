"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, ArrowRight, ExternalLink, BookOpen } from "lucide-react";

const projects = [
    {
        id: 1,
        tag: "Mystery Thriller",
        tagColor: "#e8391d",
        title: "SHADOWS OF THE FORGOTTEN",
        author: "James Harlow",
        description: "A gripping psychological thriller that kept readers on the edge of their seats. OakMont handled ghostwriting, editing, cover design, and launched it to Amazon Top 100.",
        stat: { num: "2,400+", label: "Copies Sold" },
        screenshot: "/images/industry-page-slider.webp",
    },
    {
        id: 2,
        tag: "Business & Finance",
        tagColor: "#1a3a6e",
        title: "BEYOND THE NUMBERS",
        author: "Sarah Chen",
        description: "A comprehensive business strategy guide that reached Top 10 on Amazon's Finance category within its first month of launch.",
        stat: { num: "Top 10", label: "Amazon Finance" },
        screenshot: "/images/lantech.webp",
    },
    {
        id: 3,
        tag: "Children's Book",
        tagColor: "#1a6e3c",
        title: "THE LITTLE STAR WHO WAS AFRAID",
        author: "Emily Rose",
        description: "A beautifully illustrated children's picture book with custom artwork. Now a school reading list staple in three US states.",
        stat: { num: "5★", label: "Avg. Rating" },
        screenshot: "/images/axium-packaging.webp",
    },
    {
        id: 4,
        tag: "Memoir",
        tagColor: "#7c3aed",
        title: "A LIFE REBUILT",
        author: "Marcus Webb",
        description: "A deeply personal memoir about resilience and recovery. OakMont's ghostwriting team worked closely with Marcus to capture his authentic voice.",
        stat: { num: "15+", label: "Platforms" },
        screenshot: "/images/the-american-camp.webp",
    },
    {
        id: 5,
        tag: "Science Fiction",
        tagColor: "#0891b2",
        title: "ECHOES OF TOMORROW",
        author: "Priya Nair",
        description: "A sweeping sci-fi epic set 500 years in the future. Complete ghostwriting, world-building, and a cinematic cover design that drives discoverability.",
        stat: { num: "3x", label: "Sales Boost" },
        screenshot: "/images/mind-games-fragrance.webp",
    },
    {
        id: 6,
        tag: "Self-Help",
        tagColor: "#d97706",
        title: "THE MINDFUL LEADER",
        author: "David Torres",
        description: "A practical leadership guide combining mindfulness and business strategy. Featured in Forbes and distributed across 30+ global platforms.",
        stat: { num: "Forbes", label: "Featured" },
        screenshot: "/images/winspire.webp",
    },
];

export default function FeaturedWork() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = (idx: number, dir: number) => { setDirection(dir); setCurrent(idx); };
    const prev = () => goTo((current - 1 + projects.length) % projects.length, -1);
    const next = () => goTo((current + 1) % projects.length, 1);

    useEffect(() => {
        autoRef.current = setTimeout(() => next(), 5500);
        return () => { if (autoRef.current) clearTimeout(autoRef.current); };
    }, [current]);

    const p = projects[current];

    if (!p) return null;

    const slideVars = {
        enter: (d: number) => ({ opacity: 0, x: d > 0 ? 50 : -50 }),
        center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const } },
        exit: (d: number) => ({ opacity: 0, x: d > 0 ? -50 : 50, transition: { duration: 0.3 } }),
    };

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex items-center"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#faf9f7" }}
        >
            {/* decorative large bg text */}
            <div
                className="absolute right-[-1rem] top-1/2 -translate-y-1/2 font-black text-black/[0.03] uppercase select-none pointer-events-none leading-none"
                style={{ fontSize: "clamp(8rem, 20vw, 18rem)", writingMode: "vertical-rl" }}
            >
                PORTFOLIO
            </div>

            {/* top accent */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-[#e8391d]" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-8 lg:px-16 py-24">

                {/* ── Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Our Work</span>
                        </div>
                        <h2
                            className="font-black text-black uppercase leading-none"
                            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
                        >
                            FEATURED<br />
                            <span className="text-[#e8391d]">PORTFOLIO</span>
                        </h2>
                    </div>
                    <motion.a
                        href="#"
                        whileHover={{ gap: "14px" }}
                        className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-[12px] text-black group self-end mb-2"
                    >
                        View All Work
                        <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-[#e8391d] transition-colors duration-300">
                            <ArrowRight size={15} />
                        </span>
                    </motion.a>
                </div>

                {/* ── Main slider ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_480px] gap-12 items-center">

                    {/* LEFT: project info */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={p.id}
                            custom={direction}
                            variants={slideVars}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex flex-col"
                        >
                            {/* tag */}
                            <span
                                className="inline-flex items-center gap-2 font-black uppercase tracking-widest text-[10px] text-white px-3 py-1.5 rounded-full self-start mb-6"
                                style={{ background: p.tagColor }}
                            >
                                <BookOpen size={10} /> {p.tag}
                            </span>

                            <h3
                                className="font-black text-black uppercase leading-[1.05] mb-2"
                                style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                            >
                                {p.title}
                            </h3>

                            <p className="text-gray-400 font-bold uppercase tracking-widest text-[11px] mb-5">
                                by {p.author}
                            </p>

                            <p className="text-gray-500 leading-[1.85] mb-8 max-w-[460px]" style={{ fontSize: "0.92rem" }}>
                                {p.description}
                            </p>

                            {/* stat highlight */}
                            <div className="flex items-center gap-4 mb-10">
                                <div
                                    className="flex flex-col items-center justify-center w-24 h-24 rounded-2xl text-white"
                                    style={{ background: p.tagColor }}
                                >
                                    <span className="font-black text-xl leading-none">{p.stat.num}</span>
                                    <span className="text-white/70 text-[9px] uppercase tracking-wider mt-1 text-center leading-snug px-2">{p.stat.label}</span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <motion.a
                                        href="#"
                                        whileHover={{ backgroundColor: "#c0271a" }}
                                        className="inline-flex items-center gap-2 bg-[#e8391d] text-white font-black uppercase tracking-widest px-6 py-3 rounded-xl text-[11px] transition-colors"
                                    >
                                        View Case Study <ExternalLink size={12} />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{ borderColor: p.tagColor, color: p.tagColor }}
                                        className="inline-flex items-center gap-2 border-2 border-black/15 text-black/60 font-black uppercase tracking-widest px-6 py-3 rounded-xl text-[11px] transition-colors"
                                    >
                                        Buy on Amazon <ArrowRight size={12} />
                                    </motion.a>
                                </div>
                            </div>

                            {/* dot nav */}
                            <div className="flex items-center gap-2.5">
                                {projects.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => goTo(i, i > current ? 1 : -1)}
                                        className={`rounded-full transition-all duration-300 ${i === current
                                            ? "w-7 h-2.5 bg-[#e8391d]"
                                            : "w-2.5 h-2.5 bg-black/15 hover:bg-black/35"
                                            }`}
                                    />
                                ))}
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* RIGHT: book cover mockup */}
                    <div className="relative flex items-center justify-center">

                        {/* Prev */}
                        <motion.button
                            onClick={prev}
                            whileHover={{ scale: 1.1, backgroundColor: "#c0271a" }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -left-6 z-20 w-12 h-12 rounded-full bg-[#e8391d] flex items-center justify-center text-white shadow-lg shadow-[#e8391d]/25 transition-colors"
                        >
                            <ArrowLeft size={20} />
                        </motion.button>

                        {/* Stacked cards effect */}
                        <div className="relative w-full max-w-[380px]">

                            {/* back card */}
                            <div
                                className="absolute inset-0 rounded-3xl overflow-hidden opacity-30"
                                style={{ transform: "translateX(20px) translateY(20px) rotate(3deg)" }}
                            >
                                <Image
                                    src={projects[(current + 1) % projects.length].screenshot}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* mid card */}
                            <div
                                className="absolute inset-0 rounded-3xl overflow-hidden opacity-50"
                                style={{ transform: "translateX(-10px) translateY(10px) rotate(-1.5deg)" }}
                            >
                                <Image
                                    src={projects[(current + 2) % projects.length].screenshot}
                                    alt=""
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* front card — active */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={p.id}
                                    initial={{ opacity: 0, scale: 0.95, rotate: direction > 0 ? 2 : -2 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    exit={{ opacity: 0, scale: 0.93 }}
                                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                    className="relative rounded-3xl overflow-hidden shadow-2xl shadow-black/20"
                                    style={{ aspectRatio: "3/4" }}
                                >
                                    <Image
                                        src={p.screenshot}
                                        alt={p.title}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 90vw, 380px"
                                    />
                                    {/* bottom overlay */}
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-7">
                                        <span
                                            className="font-black text-white text-[9px] uppercase tracking-widest px-2.5 py-1 rounded-full mb-3 inline-block"
                                            style={{ background: p.tagColor }}
                                        >
                                            {p.tag}
                                        </span>
                                        <p className="font-black text-white uppercase text-[14px] leading-tight">{p.title}</p>
                                        <p className="text-white/60 text-[11px] mt-1">by {p.author}</p>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Next */}
                        <motion.button
                            onClick={next}
                            whileHover={{ scale: 1.1, backgroundColor: "#c0271a" }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute -right-6 z-20 w-12 h-12 rounded-full bg-[#e8391d] flex items-center justify-center text-white shadow-lg shadow-[#e8391d]/25 transition-colors"
                        >
                            <ArrowRight size={20} />
                        </motion.button>
                    </div>
                </div>
            </div>
        </section>
    );
}