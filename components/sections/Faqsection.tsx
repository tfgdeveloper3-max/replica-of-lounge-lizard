"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { Plus, Minus, ArrowRight } from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const faqs = [
    {
        question: "How long does the ghostwriting process take?",
        body: "Timelines depend on your project scope. A short book (20,000–40,000 words) typically takes 6–10 weeks. A full-length novel can take 3–6 months. We provide a detailed schedule after your free consultation.",
        bullets: ["Dedicated writer assigned to your project", "Weekly progress updates provided", "Unlimited revisions included"],
        cta: { label: "Explore Ghostwriting", href: "#" },
    },
    {
        question: "What genres do you write and publish?",
        body: "Our writers are specialists across fiction and non-fiction. From mystery thrillers and sci-fi to memoirs, business books, children's literature — we match you with a writer who lives and breathes your genre.",
        bullets: ["Fiction: Mystery, Sci-Fi, Fantasy, Horror, Romance", "Non-Fiction: Memoirs, Self-Help, Business Books", "Children's Books & Educational Content"],
        cta: { label: "View Writing Services", href: "#" },
    },
    {
        question: "Do I retain full rights and ownership of my book?",
        body: "Absolutely. You retain 100% intellectual property rights to your manuscript. We sign a comprehensive NDA before starting and transfer all rights to you upon completion — we claim zero ownership or royalties.",
        bullets: ["Full copyright ownership — always yours", "Signed NDA before any work begins", "No royalty sharing — 100% royalties to you"],
        cta: { label: "Get Started", href: "#" },
    },
    {
        question: "What does your editing process include?",
        body: "Our editing covers all levels: developmental editing (structure & flow), line editing (voice & style), copy editing (grammar & consistency), and final proofreading. Every manuscript goes through multiple rounds.",
        bullets: ["Developmental & structural editing", "Line editing for voice and clarity", "Final proofreading & quality check"],
        cta: { label: "Explore Editing", href: "#" },
    },
    {
        question: "Where will my book be published and distributed?",
        body: "We distribute your book globally across all major platforms — Amazon KDP, Barnes & Noble, IngramSpark, Kobo, Apple Books, and 30+ more. Print, eBook, and audiobook formats available.",
        bullets: ["Amazon, B&N, Apple Books, Kobo & 30+ platforms", "Print, eBook and Audiobook formats", "Worldwide distribution with ISBN registration"],
        cta: { label: "Explore Publishing", href: "#" },
    },
    {
        question: "Can you help if I only have an idea — not a finished manuscript?",
        body: "Absolutely. Our ghostwriting and manuscript development service starts from scratch. You share your idea, we handle the writing while keeping your voice and vision intact every step of the way.",
        bullets: ["Concept development & story structuring", "Voice matching & character development", "Regular drafts for your review & feedback"],
        cta: { label: "Start With An Idea", href: "#" },
    },
    {
        question: "What book marketing services do you offer?",
        body: "We provide end-to-end book marketing: author website design, Amazon listing optimization, social media strategy, press release distribution, and launch campaign management to maximize your book's visibility.",
        bullets: ["Author website design & SEO", "Amazon listing & keyword optimization", "Social media & launch campaign management"],
        cta: { label: "Explore Marketing", href: "#" },
    },
    {
        question: "How much do your publishing packages cost?",
        body: "We offer flexible packages starting from $499 for first-time authors up to comprehensive professional packages. Every project gets a custom quote based on your specific needs, genre, and goals.",
        bullets: ["Starter packages from $499", "Custom quotes for every project", "Flexible milestone-based payment plans"],
        cta: { label: "View Pricing", href: "#" },
    },
];

// --- Animation Variants ---
const headerMask: Variants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 20 },
    visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0,
        transition: { duration: 0.8, ease: smoothEase }
    },
};

const listStagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.05, delayChildren: 0.2 } },
};

const itemFadeUp: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(3px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.5, ease: smoothEase },
    },
};

const innerContentStagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.04, delayChildren: 0.1 } },
};


export default function FAQSection() {
    const [open, setOpen] = useState<number | null>(0);
    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

    return (
        <section
            ref={sectionRef}
            className="relative w-full bg-[#111]"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* ── Animated Header band ── */}
            <div className="bg-[#e8391d] px-12 lg:px-24 py-16">
                <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
                    <div className="overflow-hidden">
                        <motion.p
                            initial={{ y: "100%" }}
                            animate={isInView ? { y: 0 } : {}}
                            transition={{ duration: 0.5, ease: smoothEase }}
                            className="text-white/70 font-black uppercase tracking-[0.28em] text-[11px] mb-4"
                        >
                            Got Questions?
                        </motion.p>
                        <motion.h2
                            variants={headerMask}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="font-black text-white uppercase leading-[1.0]"
                            style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
                        >
                            EVERYTHING<br />YOU NEED<br />TO KNOW.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.4, duration: 0.6, ease: smoothEase }}
                    >
                        <p className="text-white/80 leading-[1.85] mb-8" style={{ fontSize: "0.95rem" }}>
                            Still have questions? Our publishing consultants are available 7 days a week to guide you through every stage of your book journey — from first idea to bestseller.
                        </p>
                        <motion.a
                            href="#"
                            whileHover={{ backgroundColor: "rgba(0,0,0,0.2)", gap: "14px" }}
                            whileTap={{ scale: 0.97 }}
                            className="inline-flex items-center gap-3 border-2 border-white text-white font-black uppercase tracking-widest px-8 py-4 text-[12px] transition-all cursor-pointer"
                        >
                            Talk To A Consultant <ArrowRight size={15} />
                        </motion.a>
                    </motion.div>
                </div>
            </div>

            {/* ── Scroll-Triggered Accordion ── */}
            <motion.div
                variants={listStagger}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="px-12 lg:px-24 py-8 max-w-[1100px] mx-auto"
            >
                {faqs.map((faq, i) => (
                    <motion.div
                        key={i}
                        variants={itemFadeUp}
                        className="border-b border-white/8"
                    >
                        <button
                            onClick={() => setOpen(open === i ? null : i)}
                            className="w-full flex items-center justify-between py-7 text-left group cursor-pointer"
                        >
                            <div className="flex items-center gap-6 flex-1 min-w-0">
                                <span
                                    className="font-black tabular-nums shrink-0 transition-all duration-300 text-right"
                                    style={{
                                        fontSize: "clamp(1.1rem, 1.8vw, 1.6rem)",
                                        minWidth: "3rem",
                                        color: open === i ? "#e8391d" : "rgba(255,255,255,0.12)",
                                        transform: open === i ? "scale(1.1)" : "scale(1)"
                                    }}
                                >
                                    {String(i + 1).padStart(2, "0")}
                                </span>
                                <span
                                    className="font-bold leading-snug pr-6 transition-colors duration-200"
                                    style={{
                                        fontSize: "clamp(0.9rem, 1.25vw, 1.05rem)",
                                        color: open === i ? "#fff" : "rgba(255,255,255,0.65)",
                                    }}
                                >
                                    {faq.question}
                                </span>
                            </div>
                            <div
                                className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300"
                                style={{ background: open === i ? "#e8391d" : "rgba(255,255,255,0.07)" }}
                            >
                                {open === i
                                    ? <Minus size={15} className="text-white" />
                                    : <Plus size={15} className="text-white/50" />
                                }
                            </div>
                        </button>

                        {/* Inner Cascading Content Animation */}
                        <AnimatePresence initial={false}>
                            {open === i && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.45, ease: smoothEase }} // Silky smooth height animation
                                    className="overflow-hidden"
                                >
                                    <motion.div
                                        variants={innerContentStagger}
                                        initial="hidden"
                                        animate="visible"
                                        className="pl-[4.5rem] pr-4 pb-9 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start"
                                    >
                                        <div>
                                            <motion.p
                                                variants={itemFadeUp}
                                                className="text-white/55 leading-[1.85] mb-6"
                                                style={{ fontSize: "0.9rem" }}
                                            >
                                                {faq.body}
                                            </motion.p>
                                            <motion.ul
                                                variants={innerContentStagger}
                                                className="flex flex-col gap-2.5"
                                            >
                                                {faq.bullets.map((b) => (
                                                    <motion.li
                                                        key={b}
                                                        variants={itemFadeUp}
                                                        className="flex items-start gap-3 text-white/75 text-[13px]"
                                                    >
                                                        <span className="text-[#e8391d] mt-0.5 text-base leading-none shrink-0">›</span>
                                                        {b}
                                                    </motion.li>
                                                ))}
                                            </motion.ul>
                                        </div>
                                        <motion.a
                                            href={faq.cta.href}
                                            variants={itemFadeUp}
                                            whileHover={{ backgroundColor: "#c0271a" }}
                                            whileTap={{ scale: 0.97 }}
                                            className="shrink-0 inline-flex items-center gap-2 bg-[#e8391d] text-white font-black uppercase tracking-widest px-6 py-3.5 rounded-xl text-[11px] whitespace-nowrap transition-colors self-start cursor-pointer"
                                        >
                                            {faq.cta.label} <ArrowRight size={13} />
                                        </motion.a>
                                    </motion.div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}