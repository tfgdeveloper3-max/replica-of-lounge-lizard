"use client";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";


const clients = [
    { name: "Isuzu", logo: "/images/Clients/ISUZU.webp" },
    { name: "Canon", logo: "/images/Clients/Canon.webp" },
    { name: "Random House", logo: "/images/Clients/Random-House.webp" },
    { name: "Daiwa Capital Markets", logo: "/images/Clients/Daiwa-Capital-Markets.webp" },
    { name: "Gold Dust West", logo: "/images/Clients/Gold-Dust-West.webp" },
    { name: "Honeywell", logo: "/images/Clients/Honey-Well.webp" },
    { name: "Dept of Defense", logo: "/images/Clients/D-O-D.webp" },
    { name: "The Broadway League", logo: "/images/Clients/The-Broadway-League.webp" },
    { name: "MPA", logo: "/images/Clients/MPA.webp" },
    { name: "Mountaire", logo: "/images/Clients/Mountaire.webp" },
    { name: "AE", logo: "/images/Clients/AE-Network.webp" },
    { name: "Blue Owl", logo: "/images/Clients/Blue-Owl.webp" },
    { name: "Circa", logo: "/images/Clients/Circa.webp" },
    { name: "Loop-LOC", logo: "/images/Clients/Loop-LOC.webp" },
    { name: "Mclaren", logo: "/images/Clients/Mclaren.webp" },
    { name: "Nikon", logo: "/images/Clients/Nikon.webp" },
    { name: "NYU Langone", logo: "/images/Clients/NYU.webp" },
    { name: "TDK", logo: "/images/Clients/TDK.webp" },
    { name: "Watts", logo: "/images/Clients/Watts.webp" },
    { name: "Credit Suissie", logo: "/images/Clients/Credit-Sussie.webp" },
];

const TOTAL = clients.length; // 20
const VISIBLE = 10;             // 5 cols × 2 rows always visible
const COLS = 5;

export default function ClientsSection() {
    const [offset, setOffset] = useState(0);
    const trackRef = useRef<HTMLDivElement>(null);

    // We render TOTAL + VISIBLE cards in a horizontal track
    // offset moves 1 card at a time
    const shift = (dir: number) => {
        setOffset((prev) => (prev + dir + TOTAL) % TOTAL);
    };

    const goToStep = (step: number) => {
        setOffset((step) % TOTAL);
    };

    // Build infinite list: repeat clients twice so we always have enough
    const infinite = [...clients, ...clients, ...clients];

    // Get cards starting from offset, enough for 2 rows × 5 = 10
    const row1 = Array.from({ length: COLS }, (_, i) => infinite[(offset + i) % TOTAL]);
    const row2 = Array.from({ length: COLS }, (_, i) => infinite[(offset + COLS + i) % TOTAL]);

    const currentDot = offset % TOTAL;

    return (
        <section
            className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden py-20"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/Client-bg.jpeg')" }}
            />
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="relative z-10 w-full max-w-[1200px] px-6 flex flex-col items-center gap-8">

                {/* Heading */}
                <div className="text-center">
                    <h2
                        className="font-black text-white uppercase leading-none mb-4"
                        style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                    >
                        OUR CLIENTS
                    </h2>
                    <p className="text-white/80 font-medium" style={{ fontSize: "clamp(1rem, 1.5vw, 1.3rem)" }}>
                        From Boutique to Enterprise, We Drive Results
                    </p>
                </div>

                {/* Slider */}
                <div className="relative w-full flex items-center gap-4">

                    {/* Prev */}
                    <motion.button
                        onClick={() => shift(-1)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="shrink-0 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-700 shadow-lg hover:bg-white transition-colors"
                    >
                        <ChevronLeft size={22} />
                    </motion.button>

                    {/* Grid — 2 rows, each row slides 1 card at a time */}
                    <div className="flex-1 overflow-hidden">
                        {/* Row 1 */}
                        <div className="grid grid-cols-5 gap-4 mb-4">
                            {row1.map((client, i) => (
                                <LogoCard key={`r1-${offset}-${i}`} client={client} />
                            ))}
                        </div>
                        {/* Row 2 */}
                        <div className="grid grid-cols-5 gap-4">
                            {row2.map((client, i) => (
                                <LogoCard key={`r2-${offset}-${i}`} client={client} />
                            ))}
                        </div>
                    </div>

                    {/* Next */}
                    <motion.button
                        onClick={() => shift(1)}
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.92 }}
                        className="shrink-0 w-12 h-12 rounded-full bg-white/90 flex items-center justify-center text-gray-700 shadow-lg hover:bg-white transition-colors"
                    >
                        <ChevronRight size={22} />
                    </motion.button>
                </div>

                {/* Dots — 20 steps */}
                <div className="flex items-center gap-2 mt-2">
                    {Array.from({ length: TOTAL }).map((_, i) => (
                        <button
                            key={i}
                            onClick={() => goToStep(i)}
                            className={`rounded-full transition-all duration-300 ${i === currentDot
                                    ? "bg-[#e8391d] w-5 h-3"
                                    : "bg-white/40 hover:bg-white/70 w-3 h-3"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

function LogoCard({ client }: { client: { name: string; logo: string } }) {
    return (
        <motion.div
            layout
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white rounded-2xl flex items-center justify-center p-5 aspect-[4/3]"
        >
            <div className="relative w-full h-full">
                <Image
                    src={client.logo}
                    alt={client.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 40vw, 18vw"
                />
            </div>
        </motion.div>
    );
}