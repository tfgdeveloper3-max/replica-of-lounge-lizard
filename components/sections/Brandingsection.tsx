"use client";
import { useRef } from "react";
import { CheckCircle } from "lucide-react";

const services = [
    {
        title: "BRANDING",
        items: [],
    },
    {
        title: "CUSTOM WEBSITE DESIGN",
        items: [
            "Custom WordPress Website Design",
            "Responsive Website Design & Development",
            "UI/UX Website Design",
            "Content Strategy & Management",
            "Website Maintenance",
        ],
    },
    {
        title: "WEBSITE REDESIGN SERVICES",
        items: [
            "Landing Page Design",
            "Rebrand Existing Websites",
            "Corporate Blog Design Services",
        ],
    },
    {
        title: "ECOMMERCE WEBSITE DEVELOPMENT",
        items: [
            "Shopify Web Design",
            "Magento Web Design",
            "Amazon SEO Optimization Services",
        ],
    },
    {
        title: "DIGITAL MARKETING",
        items: [
            "Lead Generation Campaigns",
            "SEO Optimization",
            "Social Media Marketing",
            "Influencer Marketing",
            "Email Marketing",
            "Amazon Marketing",
            "Content Marketing",
        ],
    },
];

export default function BrandingSection() {
    const rightRef = useRef<HTMLDivElement>(null);

    return (
        <section
            className="relative w-full flex overflow-hidden bg-[#f0efed]"
            style={{ fontFamily: "'Raleway', Arial, sans-serif", height: "100vh" }}
        >
            {/* ── LEFT: Fixed video — full height ── */}
            <div className="w-[40%] shrink-0 relative h-full">
                <video
                    src="/video/Branding.mp4"
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                />
            </div>

            {/* ── RIGHT: Scrollable content ── */}
            <div
                ref={rightRef}
                className="flex-1 overflow-y-auto h-full px-14 py-16 scroll-smooth [&::-webkit-scrollbar]:hidden"
                style={{ scrollbarWidth: "none" } as React.CSSProperties}
            >
                {/* Big heading */}
                <h2
                    className="font-black text-black uppercase leading-[1.05] mb-6"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                >
                    OUR WEB DESIGN,<br />
                    DEVELOPMENT,<br />
                    AND MARKETING<br />
                    SERVICES DRIVE<br />
                    REVENUE!
                </h2>

                {/* Sub heading */}
                <p
                    className="font-black text-black leading-snug mb-4"
                    style={{ fontSize: "clamp(0.95rem, 1.3vw, 1.1rem)" }}
                >
                    Looking for a web design and development company or digital marketing agency to drive growth?
                </p>

                {/* Body */}
                <p
                    className="text-gray-600 leading-relaxed mb-8"
                    style={{ fontSize: "clamp(0.82rem, 1vw, 0.95rem)", maxWidth: "520px" }}
                >
                    Our team of Brandtenders and Marketing Mixologists are master crafters of website design, development, and digital marketing services that attracts, delights, and converts users to customers.
                </p>

                {/* Services list */}
                <div className="flex flex-col gap-6">
                    {services.map((service) => (
                        <div key={service.title}>
                            {/* Service heading with red check */}
                            <div className="flex items-start gap-3 mb-2">
                                <CheckCircle
                                    size={22}
                                    className="shrink-0 mt-0.5"
                                    style={{ color: "#e8391d" }}
                                    fill="#e8391d"
                                    stroke="white"
                                    strokeWidth={2}
                                />
                                <span
                                    className="font-black text-black uppercase leading-tight"
                                    style={{ fontSize: "clamp(0.85rem, 1.1vw, 1rem)" }}
                                >
                                    {service.title}
                                </span>
                            </div>

                            {/* Sub items */}
                            {service.items.length > 0 && (
                                <ul className="ml-9 flex flex-col gap-1">
                                    {service.items.map((item) => (
                                        <li
                                            key={item}
                                            className="text-gray-600"
                                            style={{ fontSize: "clamp(0.8rem, 0.95vw, 0.9rem)" }}
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom padding */}
                <div className="h-16" />
            </div>
        </section>
    );
}