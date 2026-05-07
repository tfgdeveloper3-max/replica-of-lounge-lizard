"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const clients = [
    { name: "Isuzu", logo: "/images/Clients/ISUZU.webp" },
    { name: "Canon", logo: "/images/Clients/Canon.webp" },
    { name: "Random House", logo: "/images/Clients/Random-House.webp" },
    { name: "Daiwa Capital", logo: "/images/Clients/Daiwa-Capital-Markets.webp" },
    { name: "Gold Dust West", logo: "/images/Clients/Gold-Dust-West.webp" },
    { name: "Honeywell", logo: "/images/Clients/Honey-Well.webp" },
    { name: "Dept of Defense", logo: "/images/Clients/D-O-D.webp" },
    { name: "Broadway League", logo: "/images/Clients/The-Broadway-League.webp" },
    { name: "MPA", logo: "/images/Clients/MPA.webp" },
    { name: "Mountaire", logo: "/images/Clients/Mountaire.webp" },
    { name: "A&E Network", logo: "/images/Clients/AE-Network.webp" },
    { name: "Blue Owl", logo: "/images/Clients/Blue-Owl.webp" },
    { name: "Circa", logo: "/images/Clients/Circa.webp" },
    { name: "Loop-LOC", logo: "/images/Clients/Loop-LOC.webp" },
    { name: "Mclaren", logo: "/images/Clients/Mclaren.webp" },
    { name: "Nikon", logo: "/images/Clients/Nikon.webp" },
    { name: "NYU Langone", logo: "/images/Clients/NYU.webp" },
    { name: "TDK", logo: "/images/Clients/TDK.webp" },
    { name: "Watts", logo: "/images/Clients/Watts.webp" },
    { name: "Credit Suisse", logo: "/images/Clients/Credit-Sussie.webp" },
];

const row1 = clients.slice(0, 10);
const row2 = clients.slice(10, 20);

function MarqueeRow({ items, reverse = false }: { items: typeof clients; reverse?: boolean }) {
    const tripled = [...items, ...items, ...items];
    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex gap-4"
                animate={{ x: reverse ? ["0%", "33.33%"] : ["0%", "-33.33%"] }}
                transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
                style={{ width: "max-content" }}
            >
                {tripled.map((c, i) => (
                    <div
                        key={`${c.name}-${i}`}
                        className="shrink-0 bg-white rounded-2xl flex items-center justify-center p-5 group hover:shadow-md transition-shadow duration-300"
                        style={{ width: "156px", height: "88px" }}
                    >
                        <div className="relative w-full h-full">
                            <Image
                                src={c.logo}
                                alt={c.name}
                                fill
                                className="object-contain p-1 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-400"
                                sizes="156px"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function ClientsSection() {
    return (
        <section
            className="relative w-full overflow-hidden py-24"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", background: "#0d0d0d" }}
        >
            {/* BG image */}
            <div className="absolute inset-0">
                <Image src="/images/Client-bg.jpeg" alt="" fill className="object-cover opacity-[0.08]" />
            </div>

            {/* top / bottom accent lines */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8391d]/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e8391d]/50 to-transparent" />

            <div className="relative z-10">

                {/* ── Header ── */}
                <div className="text-center px-8 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex items-center justify-center gap-3 mb-5"
                    >
                        <span className="w-8 h-px bg-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Trusted By Authors Worldwide</span>
                        <span className="w-8 h-px bg-[#e8391d]" />
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="font-black text-white uppercase leading-none mb-5"
                        style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                    >
                        OUR <span className="text-[#e8391d]">CLIENTS</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-white/45 font-medium max-w-lg mx-auto"
                        style={{ fontSize: "clamp(0.88rem, 1.2vw, 1.05rem)" }}
                    >
                        From debut authors to global brands — we've helped stories reach readers everywhere.
                    </motion.p>
                </div>

                {/* ── Marquee rows ── */}
                <div className="flex flex-col gap-4 mb-16">
                    <MarqueeRow items={row1} />
                    <MarqueeRow items={row2} reverse />
                </div>

                {/* ── Stats bar ── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-center px-8"
                >
                    <div className="flex flex-wrap items-stretch gap-0 bg-white/5 border border-white/10 rounded-2xl overflow-hidden">
                        {[
                            ["500+", "Books Published"],
                            ["300+", "Happy Authors"],
                            ["12+", "Years of Excellence"],
                            ["98%", "5-Star Satisfaction"],
                        ].map(([num, label], i, arr) => (
                            <div
                                key={label}
                                className={`flex flex-col items-center justify-center px-10 py-7 ${i < arr.length - 1 ? "border-r border-white/10" : ""}`}
                            >
                                <p className="font-black text-white text-3xl leading-none">{num}</p>
                                <p className="text-white/35 text-[10px] uppercase tracking-widest font-bold mt-1.5">{label}</p>
                            </div>
                        ))}
                        <div className="flex items-center px-8 border-l border-white/10">
                            <motion.a
                                href="#"
                                whileHover={{ backgroundColor: "#c0271a" }}
                                className="inline-flex items-center gap-2 bg-[#e8391d] text-white font-black text-[11px] uppercase tracking-widest px-6 py-3 rounded-xl transition-colors"
                            >
                                Get Started <ArrowRight size={13} />
                            </motion.a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}