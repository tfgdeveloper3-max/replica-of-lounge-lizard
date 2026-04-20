"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
    {
        question: "Would a website redesign bring more traffic?",
        body: "Without consistent site traffic, you are leaving money on the table. Our web design and development company is expert at customizing your website design, improving overall UI/UX design, and providing SEO solutions that will boost your company's presence in search engines and attract more visitors to your site.",
        bullets: [
            "Boost website presence on search engines",
            "Capture targeted site traffic",
            "Turn site visitors into leads and customers",
        ],
        cta: { label: "EXPLORE WEB DESIGN SERVICES", href: "#" },
    },
    {
        question: "My website isn't generating enough leads.",
        body: "A high-performing website is your best sales tool. We design conversion-focused websites that guide visitors through a clear journey — from landing to contact form submission — using proven UX strategies and compelling calls to action.",
        bullets: [
            "Conversion rate optimization",
            "Strategic call-to-action placement",
            "Lead capture form design",
        ],
        cta: { label: "BOOST MY LEADS", href: "#" },
    },
    {
        question: "My ecommerce website is continuously losing sales.",
        body: "Cart abandonment and poor UX cost ecommerce businesses millions. We redesign and optimize your online store for frictionless checkout experiences, mobile performance, and search engine visibility.",
        bullets: [
            "Shopify & Magento development",
            "Checkout flow optimization",
            "Mobile-first ecommerce design",
        ],
        cta: { label: "EXPLORE ECOMMERCE SERVICES", href: "#" },
    },
    {
        question: "I want to improve ROI on Digital Marketing, but staying up to speed on trends is a full-time job.",
        body: "Our Marketing Mixologists stay ahead of digital trends so you don't have to. From SEO to paid media, we craft data-driven campaigns that maximize your marketing budget and deliver measurable ROI.",
        bullets: [
            "SEO & paid media management",
            "Data-driven campaign strategy",
            "Monthly performance reporting",
        ],
        cta: { label: "EXPLORE DIGITAL MARKETING", href: "#" },
    },
    {
        question: "Managing a digital campaign takes too much time.",
        body: "Running a business is hard enough. Let our team handle your digital marketing campaigns end-to-end — from strategy and creative to execution and optimization — so you can focus on what you do best.",
        bullets: [
            "Full-service campaign management",
            "Dedicated account managers",
            "Transparent reporting dashboards",
        ],
        cta: { label: "LET'S TALK", href: "#" },
    },
    {
        question: "How often should a website be updated or upgraded?",
        body: "Websites should be reviewed every 2–3 years for a full redesign and updated continuously for content and security. Stale websites hurt SEO rankings and user trust. We offer maintenance plans to keep your site fresh.",
        bullets: [
            "Regular security & performance updates",
            "Content refresh strategies",
            "Technology stack upgrades",
        ],
        cta: { label: "EXPLORE WEBSITE MAINTENANCE", href: "#" },
    },
    {
        question: "What's the importance of using a responsive web design company for my website?",
        body: "Over 60% of web traffic comes from mobile devices. A responsive website adapts seamlessly to any screen size, improving user experience, reducing bounce rates, and boosting your search engine rankings.",
        bullets: [
            "Mobile-first design approach",
            "Improved Google rankings",
            "Better user experience across devices",
        ],
        cta: { label: "EXPLORE RESPONSIVE DESIGN", href: "#" },
    },
    {
        question: "What are the key elements of an effective website design?",
        body: "Great web design combines aesthetics with functionality. Our Brandtenders focus on fast load times, intuitive navigation, strong visual hierarchy, and conversion-focused layouts that turn visitors into customers.",
        bullets: [
            "Fast load times & performance",
            "Intuitive navigation & UX",
            "Conversion-focused layouts",
        ],
        cta: { label: "SEE OUR WORK", href: "#" },
    },
    {
        question: "How can I improve my website's SEO to rank higher in search engine results?",
        body: "SEO success requires a combination of technical optimization, quality content, and authoritative backlinks. Our team conducts thorough audits and implements proven on-page and off-page strategies.",
        bullets: [
            "Technical SEO audits",
            "Keyword research & on-page optimization",
            "Link building strategies",
        ],
        cta: { label: "EXPLORE SEO SERVICES", href: "#" },
    },
    {
        question: "What are the most effective digital marketing channels for my business?",
        body: "The best channels depend on your audience and goals. We analyze your market and build a multi-channel strategy using SEO, PPC, social media, email, and content marketing to maximize reach and ROI.",
        bullets: [
            "Multi-channel marketing strategy",
            "Audience targeting & segmentation",
            "ROI tracking across all channels",
        ],
        cta: { label: "GET MY CUSTOM STRATEGY", href: "#" },
    },
];

export default function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

    return (
        <section
            className="relative w-full bg-[#2a2a2a]"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            <div className="grid grid-cols-1 lg:grid-cols-[40%_60%]">

                {/* ── LEFT: sticky heading ── */}
                <div className="lg:sticky lg:top-0 lg:h-screen flex flex-col justify-center px-12 py-20 bg-[#2a2a2a]">
                    <h2
                        className="font-black text-white uppercase leading-[1.05] mb-10"
                        style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                    >
                        LOUNGE LIZARD SOLVES YOUR WEB DESIGN, DEVELOPMENT AND DIGITAL MARKETING CHALLENGES
                    </h2>
                    <motion.a
                        href="#"
                        whileHover={{ backgroundColor: "#e8391d", borderColor: "#e8391d" }}
                        transition={{ duration: 0.2 }}
                        className="inline-flex items-center justify-center border-2 border-white text-white font-bold uppercase tracking-widest px-8 py-4 transition-colors self-start"
                        style={{ fontSize: "0.75rem" }}
                    >
                        GET MY CUSTOM QUOTE
                    </motion.a>
                </div>

                {/* ── RIGHT: accordion ── */}
                <div className="border-l border-white/10">
                    {faqs.map((faq, i) => (
                        <div key={i} className="border-b border-white/10">

                            {/* Question row */}
                            <button
                                onClick={() => toggle(i)}
                                className="w-full flex items-center justify-between px-10 py-6 text-left group hover:bg-[#e8391d]/15 transition-colors duration-200"
                            >
                                <span
                                    className="font-bold text-white group-hover:text-[#e8391d] pr-8 leading-snug transition-colors duration-200"
                                    style={{ fontSize: "clamp(0.9rem, 1.2vw, 1.05rem)" }}
                                >
                                    {faq.question}
                                </span>
                                <motion.div
                                    animate={{ rotate: openIndex === i ? 180 : 0 }}
                                    transition={{ duration: 0.25 }}
                                    className="shrink-0"
                                >
                                    <ChevronDown
                                        size={22}
                                        className="text-[#e8391d]"
                                    />
                                </motion.div>
                            </button>

                            {/* Answer panel */}
                            <AnimatePresence initial={false}>
                                {openIndex === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.35, ease: "easeInOut" }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-10 pb-8 pt-2">
                                            {/* 2-column layout: body left, bullets right */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                                {/* Left: body text */}
                                                <div>
                                                    <p
                                                        className="text-white/75 leading-relaxed"
                                                        style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
                                                    >
                                                        {faq.body}
                                                    </p>
                                                </div>

                                                {/* Right: bullet points */}
                                                <ul className="flex flex-col gap-2 self-start">
                                                    {faq.bullets.map((b) => (
                                                        <li
                                                            key={b}
                                                            className="flex items-start gap-2 text-white/80"
                                                            style={{ fontSize: "clamp(0.85rem, 1vw, 0.95rem)" }}
                                                        >
                                                            <span className="text-[#e8391d] mt-1 shrink-0">•</span>
                                                            {b}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* CTA button */}
                                            <motion.a
                                                href={faq.cta.href}
                                                whileHover={{ opacity: 0.9 }}
                                                className="inline-flex items-center justify-center mt-6 bg-[#e8391d] text-white font-bold uppercase tracking-widest px-8 py-4 transition-opacity"
                                                style={{ fontSize: "0.75rem" }}
                                            >
                                                {faq.cta.label}
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}