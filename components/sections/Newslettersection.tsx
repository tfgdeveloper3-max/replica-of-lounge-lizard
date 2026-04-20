"use client";
import { useState } from "react";
import { motion } from "framer-motion";

const MAX = 60;

export default function NewsletterSection() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ firstName, lastName, email });
    };

    const inputClass =
        "w-full border border-gray-600 text-gray-700 placeholder-gray-400 px-4 py-4 focus:outline-none focus:border-[#e8391d] transition-colors duration-200 bg-white text-[0.95rem]";

    return (
        <section
            className="w-full bg-white px-8 lg:px-16 py-14"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            <div className="max-w-[1200px] mx-auto">

                {/* Heading */}
                <h2
                    className="font-black text-black uppercase mb-2"
                    style={{ fontSize: "clamp(1.6rem, 3vw, 2.2rem)" }}
                >
                    NEWSLETTER SIGN UP
                </h2>

                {/* Required note */}
                <p className="text-gray-400 text-sm mb-8">
                    *** indicates required fields
                </p>

                {/* Form — 4 columns: First | Last | Email | Submit */}
                <form onSubmit={submit}>
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-0 items-start">

                        {/* First Name */}
                        <div className="flex flex-col">
                            <input
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value.slice(0, MAX))}
                                placeholder="First Name"
                                className={inputClass}
                            />
                            <span className="text-gray-400 text-xs mt-1 px-1">
                                {firstName.length} of {MAX} max characters
                            </span>
                        </div>

                        {/* Last Name */}
                        <div className="flex flex-col">
                            <input
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value.slice(0, MAX))}
                                placeholder="Last Name"
                                className={inputClass}
                            />
                            <span className="text-gray-400 text-xs mt-1 px-1">
                                {lastName.length} of {MAX} max characters
                            </span>
                        </div>

                        {/* Email */}
                        <div className="flex flex-col">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email *"
                                required
                                className={inputClass}
                            />
                        </div>

                        {/* Submit button — same height as input */}
                        <motion.button
                            type="submit"
                            whileHover={{ backgroundColor: "#d42f10" }}
                            whileTap={{ scale: 0.97 }}
                            transition={{ duration: 0.18 }}
                            className="bg-[#e8391d] text-white font-black uppercase tracking-widest px-10 h-[54px] self-start"
                            style={{ fontSize: "0.85rem" }}
                        >
                            SUBMIT
                        </motion.button>
                    </div>
                </form>
            </div>
        </section>
    );
}