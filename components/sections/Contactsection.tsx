"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        jobTitle: "",
        company: "",
        email: "",
        phone: "",
        goals: "",
    });

    const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    };

    const inputClass =
        "w-full bg-transparent border border-white/40 text-white placeholder-white/60 px-5 py-4 focus:outline-none focus:border-[#e8391d] transition-colors duration-200";

    return (
        <section
            className="relative w-full min-h-screen flex items-center overflow-hidden"
            style={{ fontFamily: "'Raleway', Arial, sans-serif" }}
        >
            {/* Background */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/images/Contact-bg.webp')" }}
            />
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content — right side */}
            <div className="relative z-10 w-full grid grid-cols-[42%_1fr]">
                {/* Left empty — telephone area */}
                <div />
                <div className="px-4 py-20 pr-16">

                    {/* Label */}
                    <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-white/70 font-bold uppercase tracking-[0.2em] text-sm mb-4"
                    >
                        RULE THE WEB!
                    </motion.p>

                    {/* Heading */}
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="font-black text-white uppercase leading-[1.0] mb-10"
                        style={{ fontSize: "clamp(2.2rem, 5vw, 4.2rem)" }}
                    >
                        REQUEST A WEB DESIGN AND MARKETING PROPOSAL.
                    </motion.h2>

                    {/* Form */}
                    <motion.form
                        onSubmit={submit}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="flex flex-col gap-4"
                    >
                        {/* Row 1: First + Last name */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="firstName"
                                value={form.firstName}
                                onChange={handle}
                                placeholder="First Name *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                            <input
                                name="lastName"
                                value={form.lastName}
                                onChange={handle}
                                placeholder="Last Name *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                        </div>

                        {/* Row 2: Job Title + Company */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="jobTitle"
                                value={form.jobTitle}
                                onChange={handle}
                                placeholder="Job Title *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                            <input
                                name="company"
                                value={form.company}
                                onChange={handle}
                                placeholder="Company *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                        </div>

                        {/* Row 3: Email + Phone */}
                        <div className="grid grid-cols-2 gap-4">
                            <input
                                name="email"
                                type="email"
                                value={form.email}
                                onChange={handle}
                                placeholder="Email *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                            <input
                                name="phone"
                                type="tel"
                                value={form.phone}
                                onChange={handle}
                                placeholder="Phone *"
                                required
                                className={inputClass}
                                style={{ fontSize: "0.9rem" }}
                            />
                        </div>

                        {/* Row 4: Goals textarea */}
                        <textarea
                            name="goals"
                            value={form.goals}
                            onChange={handle}
                            placeholder="What are your business goals? *"
                            required
                            rows={4}
                            className={`${inputClass} resize-none`}
                            style={{ fontSize: "0.9rem" }}
                        />

                        {/* Submit */}
                        <div>
                            <motion.button
                                type="submit"
                                whileHover={{ backgroundColor: "#d42f10" }}
                                whileTap={{ scale: 0.97 }}
                                transition={{ duration: 0.18 }}
                                className="bg-[#e8391d] text-white font-black uppercase tracking-widest px-10 py-4"
                                style={{ fontSize: "0.85rem" }}
                            >
                                SUBMIT
                            </motion.button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
}