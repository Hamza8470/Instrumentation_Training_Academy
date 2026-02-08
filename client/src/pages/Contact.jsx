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
