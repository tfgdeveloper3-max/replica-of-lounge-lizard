"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

// ── Portfolio projects data ───────────────────────────────────────────────────
const projects = [
    {
        id: 1,
        title: "NIGHT OF MYSTERY",
        description:
            "Night of Mystery is a leading creator of downloadable murder mystery party kits that turn any gathering—whether at home or the office—into an unforgettable whodunit.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/industry-page-slider.webp",
    },
    {
        id: 2,
        title: "LANTECH",
        description:
            "Lantech, a global leader in packaging equipment, specializes in stretch wrapping, case handling, and shrink-wrapping machines serving a diverse international customer base.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/lantech.webp",
    },
    {
        id: 3,
        title: "AXIUM PACKAGING",
        description:
            "Axium Packaging provides next-generation packaging products that combine engineering expertise, sustainable practices, and deep industry knowledge.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/axium-packaging.webp",
    },
    {
        id: 4,
        title: "THE AMERICAN CAMP ASSOCIATION",
        description:
            "The American Camp Association, New York and New Jersey (ACA, NY & NJ) is a prominent organization dedicated to advancing the camp and advocacy communities across New York and New Jersey.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/the-american-camp.webp",
    },
    {
        id: 5,
        title: "MIND GAME FRAGRANCE",
        description:
            "Cheers to a 93% engagement rate for this luxury fragrance line that delivers a scent wardrobe of extreme signatures. Their fragrances are crafted by master perfumers, and this website masters branding.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/mind-games-fragrance.webp",
    },
    {
        id: 6,
        title: "WINSPIRE",
        description:
            "Winspire crafts a gateway to philanthropic adventure, presenting an unmatched array of travel packages complemented by expert concierge assistance, ensuring the cultivation of enduring donor relationships.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/winspire.webp",
    },
    {
        id: 7,
        title: "GOLD DUST WEST CASINOS",
        description:
            "With a modern, design-forward spin on casino websites, Lounge Lizard created a multi-facility rebrand and Hollywood-style websites for Jacobs Entertainment's Nevada flagships.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/gold-dust-west-casinos.webp",
    },
    {
        id: 8,
        title: "ANDERSEN GLOBAL",
        description:
            "Andersen provides a wide range of tax, valuation, financial advisory, and related consulting services to individuals, families, businesses, and funds.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/Andersen-global.webp",
    },
    {
        id: 9,
        title: "COLORADO RAFTING",
        description:
            "Lounge Lizard scores another success with a new Strategic Audit Solutions brand and website — clean, professional, and results-driven.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/colorado-rafting.webp",
    },
    {
        id: 10,
        title: "EVOLVE BANK & TRUST",
        description:
            "Founded in 1925, Evolve Bank & Trust has spent the past century at the intersection of tradition and innovation.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/evolve-industry-page-slider.webp",
    },
    {
        id: 11,
        title: "IMAGINE SOFTWARE",
        description:
            "ImagineSoftware™ is the leading provider of revenue cycle management technology, including medical billing software, workflow automation, and an Artificial Intelligence-driven RCM platform.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/imagine-software.webp",
    },
    {
        id: 12,
        title: "LAI SPEAKERS",
        description:
            "Leading Authorities, Inc. (LAI) is a premier speakers bureau and one of the most recognizable names in the industry.",
        websiteUrl: "#",
        caseStudyUrl: "#",
        screenshot: "/images/lai-speakers.webp",
    },
];

const slideVariants = {
    enter: (dir: number) => ({ opacity: 0, x: dir > 0 ? 60 : -60 }),
    center: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
    exit: (dir: number) => ({ opacity: 0, x: dir > 0 ? -60 : 60, transition: { duration: 0.3, ease: "easeIn" as const } }),
};

export default function FeaturedWork() {
    const [current, setCurrent] = useState(0);
    const [direction, setDirection] = useState(1);
    const autoRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const goTo = (idx: number, dir: number) => {
        setDirection(dir);
        setCurrent(idx);
    };

    const prev = () => goTo((current - 1 + projects.length) % projects.length, -1);
    const next = () => goTo((current + 1) % projects.length, 1);

    useEffect(() => {
        autoRef.current = setTimeout(() => next(), 5000);
        return () => { if (autoRef.current) clearTimeout(autoRef.current); };
    }, [current]);

    const project = projects[current];

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden flex flex-col justify-center"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* ── Background image ── */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/portfolio-background.webp')" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/60" />

            {/* ── Content ── */}
            <div className="relative mt-20 z-10 w-full px-6 lg:px-16 py-20">

                {/* Header row */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10 items-start">
                    <h2
                        className="font-black px-20 text-white uppercase leading-none"
                        style={{ fontSize: "clamp(2rem, 4vw, 5rem)" }}
                    >
                        FEATURED WORK
                    </h2>
                    <p
                        className="text-white/80 leading-relaxed self-center"
                        style={{ fontSize: "clamp(0.9rem, 1.1vw, 1.05rem)", maxWidth: "520px" }}
                    >
                        Our passion is to provide innovative, responsive, highly functional, visually
                        appealing, and feature-rich website designs and digital marketing campaigns that
                        drive business growth.
                    </p>
                </div>

                {/* Main slider area */}
                <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-10 items-center">

                    {/* ── LEFT: project info ── */}
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.div
                            key={project.id}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="flex flex-col gap-5"
                        >
                            <h3
                                className="font-black text-white uppercase leading-tight"
                                style={{ fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)" }}
                            >
                                {project.title}
                            </h3>
                            <p
                                className="text-white/75 leading-relaxed"
                                style={{ fontSize: "clamp(0.82rem, 1vw, 0.95rem)" }}
                            >
                                {project.description}
                            </p>
                            <div className="flex flex-col gap-3 mt-2">
                                <motion.a
                                    href={project.websiteUrl}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.97 }}
                                    className="bg-[#e8391d] text-white font-bold uppercase tracking-widest text-center py-4 px-6 hover:bg-[#d42f10] transition-colors"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    View Website
                                </motion.a>
                                <motion.a
                                    href={project.caseStudyUrl}
                                    whileHover={{ scale: 1.02, backgroundColor: "#e8391d", color: "#fff" }}
                                    whileTap={{ scale: 0.97 }}
                                    transition={{ duration: 0.15 }}
                                    className="border-2 border-white text-white font-bold uppercase tracking-widest text-center py-4 px-6 transition-colors"
                                    style={{ fontSize: "0.75rem" }}
                                >
                                    View Case Study
                                </motion.a>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* ── RIGHT: monitor mockup ── */}
                    <div className="relative flex items-center justify-center">

                        {/* Prev arrow */}
                        <motion.button
                            onClick={prev}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute left-0 lg:-left-8 z-20 w-14 h-14 rounded-full bg-[#e8391d] flex items-center justify-center text-white shadow-lg shadow-[#e8391d]/30 hover:bg-[#d42f10] transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </motion.button>

                        {/* Monitor wrapper */}
                        <div className="relative w-full max-w-[720px] mx-14">

                            {/* Monitor frame — base layer, sets dimensions */}
                            <Image
                                src="/images/portfolio-monitor.webp"
                                alt="Monitor"
                                width={720}
                                height={540}
                                className="w-full h-auto select-none"
                                priority
                            />

                            {/* Screenshot — z-20, strictly clipped inside screen area */}
                            <div
                                className="absolute z-20 overflow-hidden"
                                style={{
                                    top: "4%",
                                    left: "3.55%",
                                    right: "3.55%",
                                    bottom: "27.1%",
                                }}
                            >
                                <AnimatePresence mode="wait" custom={direction}>
                                    <motion.div
                                        key={project.id + "-screen"}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        className="absolute left-0 right-0 top-0 bottom-[40px]"
                                    >
                                        <Image
                                            src={project.screenshot}
                                            alt={project.title}
                                            fill
                                            className="object-cover object-top"
                                            sizes="(max-width: 768px) 90vw, 55vw"
                                            
                                        />
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Next arrow */}
                        <motion.button
                            onClick={next}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="absolute right-0 lg:-right-8 z-20 w-14 h-14 rounded-full bg-[#e8391d] flex items-center justify-center text-white shadow-lg shadow-[#e8391d]/30 hover:bg-[#d42f10] transition-colors"
                        >
                            <ChevronRight size={24} />
                        </motion.button>
                    </div>
                </div>

                {/* ── Dot indicators ── */}
                <div className="flex items-center justify-center gap-2 mt-10">
                    {projects.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goTo(i, i > current ? 1 : -1)}
                            className={`rounded-full transition-all duration-300 ${i === current
                                ? "bg-[#e8391d] w-5 h-3"
                                : "bg-white/30 hover:bg-white/60 w-3 h-3"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
