"use client";
import { useState, useRef } from "react";
import { motion, useScroll, useTransform, useInView, Variants } from "framer-motion";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

// Safe TS Easing
const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

// --- Animation Variants ---
const maskReveal: Variants = {
    hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)", y: 30 },
    visible: {
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        y: 0,
        transition: { duration: 0.8, ease: smoothEase }
    },
};

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30, filter: "blur(4px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: { duration: 0.6, ease: smoothEase },
    },
};

const staggerContainer: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const formStagger: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.06, delayChildren: 0.4 } },
};

export default function ContactSection() {
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
    });

    const sectionRef = useRef<HTMLElement>(null);
    const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

    // Parallax Logic
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });
    const bgY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submit = (e: React.FormEvent) => { e.preventDefault(); };

    const inputCls = "w-full bg-white/8 border border-white/15 text-white placeholder-white/35 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] focus:bg-white/10 transition-all duration-300 text-[14px]";

    return (
        <section
            ref={sectionRef}
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* BG with Parallax */}
            <motion.div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat will-change-transform"
                style={{ y: bgY, backgroundImage: "url('/images/Contact-bg.webp')" }}
            />
            <div className="absolute inset-0 bg-black/78" />

            {/* red left stripe - Drawing Animation */}
            <motion.div
                initial={{ scaleY: 0 }}
                animate={isInView ? { scaleY: 1 } : {}}
                transition={{ duration: 1.5, ease: smoothEase }}
                className="absolute top-0 left-0 bottom-0 w-1 bg-[#e8391d] z-20 origin-top"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: info ── */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="flex flex-col justify-center px-14 lg:px-20 py-24"
                >
                    <motion.div variants={fadeUp} className="flex items-center gap-3 mb-10">
                        <span className="w-8 h-[2px] bg-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Let's Talk</span>
                    </motion.div>

                    <motion.h2
                        variants={maskReveal}
                        className="font-black text-white uppercase leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
                    >
                        START YOUR<br />
                        <span className="text-[#e8391d]">STORY</span><br />
                        TODAY.
                    </motion.h2>

                    <motion.p variants={fadeUp} className="text-white/55 leading-[1.85] mb-12 max-w-[380px]" style={{ fontSize: "0.95rem" }}>
                        Whether you have a complete manuscript or just a spark of an idea — our team is here to guide you from concept to bestseller.
                    </motion.p>

                    {/* contact details - Staggered */}
                    <motion.div variants={staggerContainer} className="flex flex-col gap-5 mb-12">
                        {[
                            { icon: Phone, label: "Phone", value: "1-888-444-0110", href: "tel:18884440110" },
                            { icon: Mail, label: "Email", value: "sales@oakmontpublications.com", href: "mailto:sales@oakmontpublications.com" },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <motion.a key={label} href={href} variants={fadeUp} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-[#e8391d]/15 border border-[#e8391d]/30 flex items-center justify-center group-hover:bg-[#e8391d] transition-colors duration-300 shrink-0">
                                    <Icon size={17} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-black">{label}</p>
                                    <p className="text-white font-bold text-[14px] mt-0.5">{value}</p>
                                </div>
                            </motion.a>
                        ))}
                    </motion.div>

                    {/* trust bullets - Staggered */}
                    <motion.div variants={staggerContainer} className="flex flex-col gap-3">
                        {[
                            "Free initial consultation",
                            "100% confidential & NDA protected",
                            "Dedicated project manager assigned",
                            "No upfront fees — pay per milestone",
                        ].map((item) => (
                            <motion.div key={item} variants={fadeUp} className="flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-[#e8391d] shrink-0" />
                                <span className="text-white/60 text-[13px]">{item}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* ── RIGHT: form ── */}
                <div className="flex items-center px-10 lg:px-16 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 40, scale: 0.98 }}
                        animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                        transition={{ duration: 0.8, ease: smoothEase, delay: 0.3 }}
                        className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-10 shadow-2xl shadow-black/30"
                    >
                        <motion.h3
                            initial={{ opacity: 0, y: 10 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="font-black text-white uppercase leading-tight mb-2"
                            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                        >
                            Request a Free Proposal
                        </motion.h3>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ delay: 0.7, duration: 0.5 }}
                            className="text-white/40 text-[13px] mb-8"
                        >
                            We'll get back to you within 24 hours.
                        </motion.p>

                        <motion.form
                            onSubmit={submit}
                            variants={formStagger}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            className="flex flex-col gap-4"
                        >
                            <div className="grid grid-cols-2 gap-4">
                                <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">First Name *</label>
                                    <input name="firstName" value={form.firstName} onChange={handle} required className={inputCls} />
                                </motion.div>
                                <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Last Name *</label>
                                    <input name="lastName" value={form.lastName} onChange={handle} required className={inputCls} />
                                </motion.div>
                            </div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Email Address *</label>
                                <input name="email" type="email" value={form.email} onChange={handle} required className={inputCls} />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Phone Number</label>
                                <input name="phone" type="tel" value={form.phone} onChange={handle} className={inputCls} />
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Service Needed</label>
                                <select name="service" value={form.service} onChange={handle} className={`${inputCls} appearance-none`}>
                                    <option value="" className="bg-[#1a1a1a]">Select a service...</option>
                                    <option value="writing" className="bg-[#1a1a1a]">Book Writing / Ghostwriting</option>
                                    <option value="editing" className="bg-[#1a1a1a]">Editing & Proofreading</option>
                                    <option value="publishing" className="bg-[#1a1a1a]">Book Publishing</option>
                                    <option value="design" className="bg-[#1a1a1a]">Cover Design & Formatting</option>
                                    <option value="marketing" className="bg-[#1a1a1a]">Book Marketing</option>
                                    <option value="other" className="bg-[#1a1a1a]">Other</option>
                                </select>
                            </motion.div>

                            <motion.div variants={fadeUp} className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Tell Us About Your Book *</label>
                                <textarea
                                    name="message" value={form.message} onChange={handle} required rows={4}
                                    className={`${inputCls} resize-none`}
                                    placeholder="Share your idea, genre, goals..."
                                />
                            </motion.div>

                            <motion.button
                                type="submit"
                                variants={fadeUp}
                                whileHover={{ backgroundColor: "#c0271a", gap: "14px", boxShadow: "0 10px 30px rgba(232, 57, 29, 0.4)" }}
                                whileTap={{ scale: 0.97 }}
                                className="flex items-center justify-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest py-4 rounded-xl mt-2 transition-all text-[13px] cursor-pointer"
                            >
                                Send My Request <ArrowRight size={16} />
                            </motion.button>
                        </motion.form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}