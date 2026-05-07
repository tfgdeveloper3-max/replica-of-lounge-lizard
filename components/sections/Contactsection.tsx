"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, CheckCircle2 } from "lucide-react";

export default function ContactSection() {
    const [form, setForm] = useState({
        firstName: "", lastName: "", email: "", phone: "", service: "", message: "",
    });
    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };
    const submit = (e: React.FormEvent) => { e.preventDefault(); };

    const inputCls = "w-full bg-white/8 border border-white/15 text-white placeholder-white/35 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] transition-colors duration-200 text-[14px]";

    return (
        <section
            className="relative w-full min-h-screen overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* BG */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/Contact-bg.webp')" }}
            />
            <div className="absolute inset-0 bg-black/78" />

            {/* red left stripe */}
            <div className="absolute top-0 left-0 bottom-0 w-1 bg-[#e8391d] z-20" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-screen">

                {/* ── LEFT: info ── */}
                <div className="flex flex-col justify-center px-14 lg:px-20 py-24">

                    <div className="flex items-center gap-3 mb-10">
                        <span className="w-8 h-[2px] bg-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[11px]">Let's Talk</span>
                    </div>

                    <h2
                        className="font-black text-white uppercase leading-[1.0] mb-8"
                        style={{ fontSize: "clamp(2.8rem, 5.5vw, 5rem)" }}
                    >
                        START YOUR<br />
                        <span className="text-[#e8391d]">STORY</span><br />
                        TODAY.
                    </h2>

                    <p className="text-white/55 leading-[1.85] mb-12 max-w-[380px]" style={{ fontSize: "0.95rem" }}>
                        Whether you have a complete manuscript or just a spark of an idea — our team is here to guide you from concept to bestseller.
                    </p>

                    {/* contact details */}
                    <div className="flex flex-col gap-5 mb-12">
                        {[
                            { icon: Phone, label: "Phone", value: "1-888-444-0110", href: "tel:18884440110" },
                            { icon: Mail, label: "Email", value: "sales@oakmontpublications.com", href: "mailto:sales@oakmontpublications.com" },
                        ].map(({ icon: Icon, label, value, href }) => (
                            <a key={label} href={href} className="flex items-center gap-4 group">
                                <div className="w-12 h-12 rounded-full bg-[#e8391d]/15 border border-[#e8391d]/30 flex items-center justify-center group-hover:bg-[#e8391d] transition-colors duration-300 shrink-0">
                                    <Icon size={17} className="text-[#e8391d] group-hover:text-white transition-colors duration-300" />
                                </div>
                                <div>
                                    <p className="text-white/35 text-[10px] uppercase tracking-widest font-black">{label}</p>
                                    <p className="text-white font-bold text-[14px] mt-0.5">{value}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {/* trust bullets */}
                    <div className="flex flex-col gap-3">
                        {[
                            "Free initial consultation",
                            "100% confidential & NDA protected",
                            "Dedicated project manager assigned",
                            "No upfront fees — pay per milestone",
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3">
                                <CheckCircle2 size={16} className="text-[#e8391d] shrink-0" />
                                <span className="text-white/60 text-[13px]">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── RIGHT: form ── */}
                <div className="flex items-center px-10 lg:px-16 py-20">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-3xl p-10"
                    >
                        <h3
                            className="font-black text-white uppercase leading-tight mb-2"
                            style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
                        >
                            Request a Free Proposal
                        </h3>
                        <p className="text-white/40 text-[13px] mb-8">We'll get back to you within 24 hours.</p>

                        <form onSubmit={submit} className="flex flex-col gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">First Name *</label>
                                    <input name="firstName" value={form.firstName} onChange={handle} required className={inputCls} />
                                </div>
                                <div className="flex flex-col gap-1.5">
                                    <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Last Name *</label>
                                    <input name="lastName" value={form.lastName} onChange={handle} required className={inputCls} />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Email Address *</label>
                                <input name="email" type="email" value={form.email} onChange={handle} required className={inputCls} />
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Phone Number</label>
                                <input name="phone" type="tel" value={form.phone} onChange={handle} className={inputCls} />
                            </div>

                            <div className="flex flex-col gap-1.5">
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
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label className="text-white/40 text-[10px] font-black uppercase tracking-widest">Tell Us About Your Book *</label>
                                <textarea
                                    name="message" value={form.message} onChange={handle} required rows={4}
                                    className={`${inputCls} resize-none`}
                                    placeholder="Share your idea, genre, goals..."
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ backgroundColor: "#c0271a", gap: "14px" }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest py-4 rounded-xl mt-2 transition-all text-[13px]"
                            >
                                Send My Request <ArrowRight size={16} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}