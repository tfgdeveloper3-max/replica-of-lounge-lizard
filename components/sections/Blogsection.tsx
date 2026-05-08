"use client";
import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Clock } from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const posts = [
    {
        id: 1,
        date: "May 1, 2026",
        readTime: "5 min",
        tag: "Publishing",
        tagColor: "#e8391d",
        title: "How to Get Your Book Published in 2026: A Step-by-Step Guide",
        excerpt: "Navigating the publishing world doesn't have to be overwhelming. Whether you're pursuing traditional or self-publishing, this guide breaks down every step from manuscript to marketplace.",
        image: "/images/Blog/financial-website.webp",
        featured: true,
    },
    {
        id: 2,
        date: "Apr 18, 2026",
        readTime: "4 min",
        tag: "Writing",
        tagColor: "#1a6e3c",
        title: "10 Ghostwriting Secrets Professional Authors Swear By",
        excerpt: "The best ghostwriters disappear into your voice. Here's what separates the pros from the rest.",
        image: "/images/Blog/web-design-companies.webp",
        featured: false,
    },
    {
        id: 3,
        date: "Apr 5, 2026",
        readTime: "6 min",
        tag: "Marketing",
        tagColor: "#1a3a6e",
        title: "Book Marketing in the Age of Social Media: What Actually Works",
        excerpt: "With thousands of books published daily, targeted strategy is everything. We break down what drives real results.",
        image: "/images/Blog/web-development.webp",
        featured: false,
    },
    {
        id: 4,
        date: "Mar 22, 2026",
        readTime: "3 min",
        tag: "Design",
        tagColor: "#7c3aed",
        title: "Why Your Book Cover Can Make or Break Your Sales",
        excerpt: "Readers absolutely judge books by their covers. An expert cover designer explains what makes them reach for a book.",
        image: "/images/Blog/financial-website.webp",
        featured: false,
    },
];

// --- Animation Variants ---
const headerMask: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: smoothEase } },
};

const smallCardContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12, delayChildren: 0.4 } },
};

const smallCard: Variants = {
    hidden: { opacity: 0, y: 40, filter: "blur(5px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: smoothEase },
    },
};

export default function BlogSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

    const featured = posts[0];
    const rest = posts.slice(1);

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden py-24 px-6 lg:px-16"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#f5f4f1" }}
        >
            {/* subtle dot pattern */}
            <div
                className="absolute inset-0 opacity-[0.035] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#000 1px, transparent 1px)`,
                    backgroundSize: "28px 28px",
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto">

                {/* ── Animated Header ── */}
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
                    <div className="overflow-hidden">
                        <motion.div
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 0.6, ease: smoothEase }}
                            className="flex items-center gap-3 mb-4"
                        >
                            <span className="w-8 h-[2px] bg-[#e8391d]" />
                            <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Latest From Our Blog</span>
                        </motion.div>
                        <motion.h2
                            variants={headerMask}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="font-black text-black uppercase leading-none"
                            style={{ fontSize: "clamp(2.8rem, 6vw, 5.5rem)" }}
                        >
                            PUBLISHING<br />
                            <span className="text-[#e8391d]">INSIGHTS</span>
                        </motion.h2>
                    </div>
                    <motion.a
                        href="#"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.5, duration: 0.6 }}
                        whileHover={{ gap: "14px" }}
                        className="inline-flex items-center gap-3 font-black uppercase tracking-widest text-[12px] text-black group self-end mb-2 cursor-pointer"
                    >
                        All Articles
                        <span className="w-9 h-9 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-[#e8391d] transition-colors duration-300">
                            <ArrowRight size={15} />
                        </span>
                    </motion.a>
                </div>

                {/* ── Magazine Grid ── */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.55fr_1fr] gap-6">

                    {/* Featured — tall card with Cinematic Wipe */}
                    <motion.a
                        href="#"
                        initial={{ clipPath: "inset(100% 0% 0% 0% round 24px)", scale: 1.05 }}
                        animate={isInView ? { clipPath: "inset(0% 0% 0% 0% round 24px)", scale: 1 } : {}}
                        transition={{ duration: 1.2, ease: smoothEase }}
                        className="group relative overflow-hidden rounded-3xl block"
                        style={{ minHeight: "580px" }}
                    >
                        <Image
                            src={featured.image}
                            alt={featured.title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-[1200ms] ease-out"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                        {/* tag with pop effect */}
                        <motion.div 
                            initial={{ opacity: 0, scale: 0.8, y: -10 }}
                            animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 20 }}
                            className="absolute top-6 left-6"
                        >
                            <span
                                className="font-black uppercase tracking-widest text-[10px] text-white px-3 py-1.5 rounded-full"
                                style={{ background: featured.tagColor }}
                            >
                                {featured.tag}
                            </span>
                        </motion.div>

                        <div className="absolute bottom-0 left-0 right-0 p-8">
                            <div className="flex items-center gap-4 text-white/50 text-[12px] font-semibold mb-4">
                                <span>{featured.date}</span>
                                <span>·</span>
                                <span className="flex items-center gap-1"><Clock size={11} /> {featured.readTime} read</span>
                            </div>
                            <h3
                                className="font-black text-white uppercase leading-[1.15] mb-3 group-hover:text-[#e8391d] transition-colors duration-300"
                                style={{ fontSize: "clamp(1.3rem, 2.2vw, 1.9rem)" }}
                            >
                                {featured.title}
                            </h3>
                            <p className="text-white/65 leading-relaxed line-clamp-2" style={{ fontSize: "0.88rem" }}>
                                {featured.excerpt}
                            </p>
                        </div>
                    </motion.a>

                    {/* Right col — Staggered Blur-to-Clear Cards */}
                    <motion.div
                        variants={smallCardContainer}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        className="flex flex-col gap-5"
                    >
                        {rest.map((post) => (
                            <motion.a
                                key={post.id}
                                href="#"
                                variants={smallCard}
                                className="group flex gap-5 bg-white rounded-2xl p-5 hover:shadow-xl transition-all duration-500 overflow-hidden border border-transparent hover:border-gray-100"
                            >
                                {/* thumb */}
                                <div className="relative shrink-0 rounded-xl overflow-hidden" style={{ width: "96px", height: "96px" }}>
                                    <Image 
                                        src={post.image} 
                                        alt={post.title} 
                                        fill 
                                        className="object-cover group-hover:scale-125 transition-transform duration-700 ease-out" 
                                    />
                                </div>

                                <div className="flex flex-col justify-center min-w-0">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span
                                            className="font-black uppercase tracking-widest text-[9px] text-white px-2 py-1 rounded-full"
                                            style={{ background: post.tagColor }}
                                        >
                                            {post.tag}
                                        </span>
                                        <span className="text-gray-400 text-[11px] flex items-center gap-1">
                                            <Clock size={10} /> {post.readTime}
                                        </span>
                                    </div>
                                    <h3
                                        className="font-black text-black uppercase leading-snug group-hover:text-[#e8391d] transition-colors duration-200 line-clamp-2"
                                        style={{ fontSize: "clamp(0.82rem, 0.95vw, 0.92rem)" }}
                                    >
                                        {post.title}
                                    </h3>
                                    <p className="text-gray-400 text-[11px] mt-1.5 font-medium">{post.date}</p>
                                </div>
                            </motion.a>
                        ))}

                        {/* View All pill with Spring Pop */}
                        <motion.a
                            href="#"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
                            whileHover={{ backgroundColor: "#c0271a", scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            className="flex items-center justify-between bg-[#e8391d] text-white rounded-2xl px-7 py-5 transition-colors duration-300 group cursor-pointer"
                        >
                            <span className="font-black uppercase tracking-widest text-[13px]">Browse All Articles</span>
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </motion.a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}