"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const stats = [
    {
        id: 1,
        percent: "396%",
        label: "RETURN ON AD SPEND",
        client: "Peter MAX",
        image: "/images/the-american-camp.webp",
    },
    {
        id: 2,
        percent: "187%",
        label: "INCREASE IN ORGANIC TRAFFIC",
        client: "Evolve Bank",
        image: "/images/mind-games-fragrance.webp",
    },
    {
        id: 3,
        percent: "93%",
        label: "ENGAGEMENT RATE",
        client: "Mind Game Fragrance",
        image: "/images/winspire.webp",
    },
    {
        id: 4,
        percent: "104%",
        label: "INCREASE IN HIRING EVENTS",
        client: "ACA NY & NJ",
        image: "/images/gold-dust-west-casinos.webp",
    },
    {
        id: 5,
        percent: "52%",
        label: "INCREASE TRAFFIC IN MEXICO",
        client: "Lantech",
        image: "/images/Andersen-global.webp",
    },
    {
        id: 6,
        percent: "97",
        label: "GOOGLE PAGESPEED SCORE",
        client: "Axium Packaging",
        image: "/images/colorado-rafting.webp",
    },
    {
        id: 7,
        percent: "87%",
        label: "INCREASE OF USERS",
        client: "Imagine Software",
        image: "/images/imagine-software.webp",
    },
];

export default function MarketingSection() {
    const [current, setCurrent] = useState(0);

    const goTo = (i: number) => setCurrent(i);

    // Auto-slide every 3.5s
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrent((prev) => (prev + 1) % stats.length);
        }, 3500);
        return () => clearTimeout(timer);
    }, [current]);

    const stat = stats[current];

    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/Marketing-bg.webp')" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

            {/* Content — all centered */}
            <div className="relative z-10 w-full max-w-[700px] px-10 lg:px-20 py-24 flex flex-col gap-10">

                {/* Heading — centered */}
                <h2
                    className="font-black text-white uppercase leading-[1.05] text-center w-full"
                    style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}
                >
                    OUR RESULTS-DRIVEN WEB
                    DESIGN AND MARKETING
                    CAMPAIGNS
                </h2>

                {/* Stat pill — centered below heading */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={stat.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="relative flex items-center w-full"
                        style={{ maxWidth: "520px", marginLeft: 0 }}
                    >
                        {/* Pill */}
                        <div
                            className="relative flex items-center w-full rounded-full overflow-hidden"
                            style={{
                                background: "linear-gradient(135deg, #c0271a 0%, #e8391d 50%, #c0271a 100%)",
                                minHeight: "160px",
                            }}
                        >
                            {/* Decorative circles */}
                            <div className="absolute left-8 top-1/2 -translate-y-1/2 w-32 h-32 rounded-full border-2 border-white/10" />
                            <div className="absolute left-12 top-1/2 -translate-y-1/2 w-24 h-24 rounded-full border-2 border-white/10" />
                            <div className="absolute left-16 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-white/10" />

                            {/* Stat text */}
                            <div className="flex flex-col pl-12 pr-4 py-8 flex-1">
                                <span
                                    className="font-black text-white leading-none"
                                    style={{ fontSize: "clamp(3rem, 6vw, 5.5rem)" }}
                                >
                                    {stat.percent}
                                </span>
                                <span
                                    className="font-black text-white uppercase leading-tight mt-1"
                                    style={{ fontSize: "clamp(0.75rem, 1.2vw, 1rem)", letterSpacing: "0.05em" }}
                                >
                                    {stat.label}
                                </span>
                            </div>

                            {/* Circular client image */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 rounded-full overflow-hidden border-4 border-[#c0271a] shadow-xl"
                                style={{ width: "160px", height: "160px", right: "-10px" }}
                            >
                                <Image
                                    src={stat.image}
                                    alt={stat.client}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-center py-2 font-bold text-[13px]">
                                    {stat.client}
                                </div>
                            </div>

                            {/* Spacer for circle */}
                            <div style={{ width: "160px", flexShrink: 0 }} />
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Bottom row: dots + CTA — centered below pill */}
                <div className="relative flex justify-center items-center gap-8">
                    {/* Dots */}
                    <div className="relative justify-center flex items-center gap-2">
                        {stats.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => goTo(i)}
                                className={`rounded-full transition-all duration-300 ${
                                    i === current
                                        ? "bg-[#e8391d] w-5 h-3"
                                        : "bg-white/40 hover:bg-white/70 w-3 h-3"
                                }`}
                            />
                        ))}
                    </div>

                    {/* CTA */}
                    <motion.a
                        href="#"
                        whileHover={{ backgroundColor: "#e8391d", borderColor: "#e8391d" }}
                        transition={{ duration: 0.2 }}
                        className="border-2 border-white text-white font-bold uppercase tracking-widest px-8 py-4 transition-colors whitespace-nowrap"
                        style={{ fontSize: "0.78rem" }}
                    >
                        SEE ALL OUR WORK
                    </motion.a>
                </div>
            </div>
        </section>
    );
}