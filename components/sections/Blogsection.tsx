"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const posts = [
    {
        id: 1,
        date: "03-02-2026",
        title: "Top 10 Best Financial Website Designs [March 2026 Update]",
        excerpt:
            "Key Takeaways The best financial website designs use an intuitive flow and a stellar UI/UX experience to capture site visitors' business. Digital payments reached $6.6 trillion [...]",
        image: "/images/blog/financial-website.webp",
        href: "#",
    },
    {
        id: 2,
        date: "03-02-2026",
        title: "Best Web Design Companies in 2026 [March 2026 Update]",
        excerpt:
            "Whether you're building a new website or revamping an existing one, partnering with a top web design company is crucial to ensuring a site that is [...]",
        image: "/images/blog/web-design-companies.webp",
        href: "#",
    },
    {
        id: 3,
        date: "03-02-2026",
        title: "TOP Web Development Companies in 2026 [March 2026 Update]",
        excerpt:
            "To ensure a fair and objective evaluation, we analyzed numerous web design agencies based on several criteria. These include their portfolio of work, client testimonials, industry [...]",
        image: "/images/blog/web-development.webp",
        href: "#",
    },
];

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.55, ease: "easeOut" as const, delay: i * 0.12 },
    }),
};

export default function BlogSection() {
    return (
        <section
            className="relative w-full bg-[#f5f4f2] overflow-hidden py-20 px-6 lg:px-16"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* Subtle bg pattern */}
            <div
                className="absolute inset-0 opacity-[0.06] pointer-events-none"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpolygon points='40,5 75,25 75,55 40,75 5,55 5,25' fill='none' stroke='%23000' stroke-width='2'/%3E%3C/svg%3E")`,
                    backgroundSize: "80px 80px",
                }}
            />

            <div className="relative z-10 max-w-[1200px] mx-auto">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2
                        className="font-black text-black uppercase leading-none mb-6"
                        style={{ fontSize: "clamp(3rem, 7vw, 6rem)" }}
                    >
                        BLOG
                    </h2>
                    <p
                        className="text-gray-600 leading-relaxed mx-auto"
                        style={{ fontSize: "clamp(1rem, 1.4vw, 1.2rem)", maxWidth: "820px" }}
                    >
                        Check back every week for inspiring articles on website design and digital
                        marketing to help build and expand your digital presence.
                    </p>
                </div>

                {/* Cards grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {posts.map((post, i) => (
                        <motion.a
                            key={post.id}
                            href={post.href}
                            custom={i}
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-60px" }}
                            className="group flex flex-col bg-transparent"
                        >
                            {/* Image */}
                            <div
                                className="relative w-full overflow-hidden"
                                style={{ aspectRatio: "16/10" }}
                            >
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 90vw, 33vw"
                                />
                            </div>

                            {/* Content */}
                            <div className="pt-5 flex flex-col gap-2 flex-1">
                                <span
                                    className="text-gray-400 font-medium"
                                    style={{ fontSize: "0.82rem" }}
                                >
                                    {post.date}
                                </span>
                                <h3
                                    className="font-black text-black leading-snug group-hover:text-[#e8391d] transition-colors duration-200"
                                    style={{ fontSize: "clamp(1rem, 1.3vw, 1.15rem)" }}
                                >
                                    {post.title}
                                </h3>
                                <p
                                    className="text-gray-500 leading-relaxed mt-1"
                                    style={{ fontSize: "clamp(0.82rem, 0.95vw, 0.9rem)" }}
                                >
                                    {post.excerpt}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}