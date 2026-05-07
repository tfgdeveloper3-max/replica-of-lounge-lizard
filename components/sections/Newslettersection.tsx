"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";

export default function NewsletterSection() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [done, setDone] = useState(false);

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        setDone(true);
    };

    return (
        <section
            className="relative w-full overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* diagonal split bg */}
            <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(108deg, #0d0d0d 52%, #faf9f7 52%)" }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 min-h-[300px]">

                {/* LEFT: dark — heading */}
                <div className="flex flex-col justify-center px-12 lg:px-20 py-16">
                    <div className="flex items-center gap-3 mb-5">
                        <BookOpen size={16} className="text-[#e8391d]" />
                        <span className="text-[#e8391d] font-black uppercase tracking-[0.28em] text-[10px]">Newsletter</span>
                    </div>
                    <h2
                        className="font-black text-white uppercase leading-[1.0] mb-4"
                        style={{ fontSize: "clamp(1.8rem, 3.5vw, 3rem)" }}
                    >
                        STAY IN THE<br />
                        <span className="text-[#e8391d]">STORY.</span>
                    </h2>
                    <p className="text-white/45 text-[13px] leading-[1.85] max-w-[290px]">
                        Publishing tips, author success stories, and industry insights — delivered every week to your inbox.
                    </p>
                </div>

                {/* RIGHT: light — form */}
                <div className="flex items-center px-12 lg:px-16 py-16">
                    <AnimatePresence mode="wait">
                        {done ? (
                            <motion.div
                                key="thanks"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-start gap-4"
                            >
                                <div className="w-14 h-14 rounded-full bg-[#e8391d] flex items-center justify-center">
                                    <svg width="20" height="16" viewBox="0 0 24 20" fill="none">
                                        <path d="M2 10L8.5 16.5L22 2" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <p className="font-black text-black uppercase text-xl">You're subscribed!</p>
                                <p className="text-gray-500 text-[13px]">Watch your inbox for our next issue.</p>
                            </motion.div>
                        ) : (
                            <motion.form
                                key="form"
                                onSubmit={submit}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="w-full flex flex-col gap-3 max-w-[440px]"
                            >
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your Name"
                                    className="border border-gray-300 text-gray-800 placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] transition-colors text-[14px] bg-white"
                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Email Address *"
                                    required
                                    className="border border-gray-300 text-gray-800 placeholder-gray-400 px-5 py-4 rounded-xl focus:outline-none focus:border-[#e8391d] transition-colors text-[14px] bg-white"
                                />
                                <motion.button
                                    type="submit"
                                    whileHover={{ backgroundColor: "#c0271a", gap: "14px" }}
                                    whileTap={{ scale: 0.98 }}
                                    className="flex items-center justify-center gap-3 bg-[#e8391d] text-white font-black uppercase tracking-widest py-4 rounded-xl transition-all text-[12px]"
                                >
                                    Subscribe Now <ArrowRight size={15} />
                                </motion.button>
                                <p className="text-gray-400 text-[11px] text-center">No spam. Unsubscribe anytime.</p>
                            </motion.form>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}