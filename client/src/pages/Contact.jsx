const Contact = () => {
    return (
        <div className="mx-auto w-full max-w-5xl px-6 py-16">
            <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber">Contact</p>
                    <h1 className="mt-4 font-display text-4xl text-ink">Talk to our admissions team.</h1>
                    <p className="mt-4 text-base text-slate">
                        Share your background and goals. We will map a program route and schedule a campus
                        walkthrough.
                    </p>
                    <div className="mt-8 space-y-3 text-sm text-slate">
                        <p>academy@institute.com</p>
                        <p>+91 7546062889</p>
                        <p>Nohsa, Phulwari Sharif, Patna, Bihar</p>
                        <div className="flex flex-wrap gap-3 pt-2">
                            <a
                                href="https://www.facebook.com/qamar.mallick.ita"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-card transition hover:-translate-y-0.5 hover:text-amber"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1877F2]/10">
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="#1877F2">
                                        <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.4V12h2.4V9.8c0-2.4 1.4-3.7 3.5-3.7 1 0 2 .2 2 .2v2.2H15c-1.2 0-1.5.8-1.5 1.5V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12Z"/>
                                    </svg>
                                </span>
                                Facebook
                            </a>
                            <a
                                href="https://www.instagram.com/i.t.a_official/"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-card transition hover:-translate-y-0.5 hover:text-amber"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#E1306C]/10">
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="#E1306C" strokeWidth="1.8">
                                        <rect x="4" y="4" width="16" height="16" rx="4"/>
                                        <circle cx="12" cy="12" r="4"/>
                                        <circle cx="17" cy="7" r="1" fill="#E1306C" stroke="none"/>
                                    </svg>
                                </span>
                                Instagram
                            </a>
                            <a
                                href="https://www.google.com/maps/place/INSTRUMENTATION+TRAINING+ACADEMY+(ITA)+PATNA/@25.5710728,85.0569775,17z/data=!3m1!4b1!4m6!3m5!1s0x39f2a9b6ec2fc477:0xf0cfc91cd667a90c!8m2!3d25.5710728!4d85.0569775!16s%2Fg%2F11rrs28dh6?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full border border-cloud bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-ink shadow-card transition hover:-translate-y-0.5 hover:text-amber"
                            >
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#34A853]/10">
                                    <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true" fill="#34A853">
                                        <path d="M12 2c-3.9 0-7 3.1-7 7 0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7Zm0 9.5c-1.4 0-2.5-1.1-2.5-2.5S10.6 6.5 12 6.5s2.5 1.1 2.5 2.5S13.4 11.5 12 11.5Z"/>
                                    </svg>
                                </span>
                                Google Maps
                            </a>
                        </div>
                    </div>
                    <div className="mt-6 overflow-hidden rounded-3xl border border-cloud bg-white shadow-card">
                        <iframe
                            title="Instrumentation Training Academy location"
                            src="https://www.google.com/maps?q=INSTRUMENTATION%20TRAINING%20ACADEMY%20(ITA)%20PATNA&output=embed"
                            className="h-64 w-full border-0"
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
                <form className="rounded-3xl border border-cloud bg-white p-6 shadow-card">
                    <div className="grid gap-4">
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                            Full Name
                            <input
                                className="mt-2 w-full rounded-2xl border border-cloud px-4 py-3 text-sm"
                                type="text"
                                placeholder="Enter your full name"
                            />
                        </label>
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                            Email Address
                            <input
                                className="mt-2 w-full rounded-2xl border border-cloud px-4 py-3 text-sm"
                                type="email"
                                placeholder="Enter your email"
                            />
                        </label>
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                            Mobile Number
                            <input
                                className="mt-2 w-full rounded-2xl border border-cloud px-4 py-3 text-sm"
                                type="tel"
                                placeholder="Enter your mobile number"
                                required
                            />
                        </label>

                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                            Preferred Program
                            <select className="mt-2 w-full rounded-2xl border border-cloud px-4 py-3 text-sm">
                                <option>Select a program</option>
                                <option>Instrumentation Technician Foundations</option>
                                <option>QA/QC Instrumentation</option>
                            </select>
                        </label>
                        <label className="text-xs font-semibold uppercase tracking-[0.2em] text-slate">
                            Message
                            <textarea
                                className="mt-2 min-h-[120px] w-full rounded-2xl border border-cloud px-4 py-3 text-sm"
                                placeholder="Tell us about your goals"
                            />
                        </label>
                    </div>
                    <button
                        type="button"
                        className="mt-6 w-full rounded-full bg-ink px-6 py-3 text-xs font-semibold uppercase tracking-[0.2em] text-mist transition hover:-translate-y-0.5"
                    >
                        Send Inquiry
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact
