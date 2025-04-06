import Layout from "../components/layout/Layout";

const About = () => {
    return (
        <Layout>
            <main className="flex-grow">
                {/* Hero Banner */}
                <section className="relative w-full h-[300px] bg-green-800 flex items-center justify-center text-white text-center">
                    <div className="z-10">
                        <h1 className="text-4xl md:text-5xl font-bold">About ECycleNow</h1>
                        <p className="text-lg mt-3 max-w-2xl mx-auto">Empowering communities to recycle electronics responsibly and build a greener tomorrow.</p>
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </section>

                {/* About Text */}
                <section className="px-4 py-12 max-w-7xl mx-auto">
                    <p className="text-lg text-gray-700 mb-4">
                        <strong>ECycleNow</strong> is an eco-conscious digital platform dedicated to minimizing the growing threat of electronic waste.
                        We connect individuals, recyclers, and institutions to simplify e-waste management and foster eco-awareness.
                    </p>
                    <p className="text-lg text-gray-700 mb-4">
                        Our mission is to provide tools and resources that make recycling easy, accessible, and transparent — helping users track pickups,
                        understand disposal laws, and promote sustainable habits.
                    </p>
                </section>

                {/* Vision / Mission / Values */}
                <section className="px-4 max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3 mb-12">
                    <div className="bg-green-100 p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-green-800 mb-2">Our Vision</h2>
                        <p className="text-gray-700">
                            A cleaner, greener future powered by conscious e-waste management and education.
                        </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-green-800 mb-2">Our Mission</h2>
                        <p className="text-gray-700">
                            Empower users and organizations to dispose of electronics responsibly through a user-friendly platform.
                        </p>
                    </div>
                    <div className="bg-green-100 p-6 rounded-xl shadow-md">
                        <h2 className="text-xl font-semibold text-green-800 mb-2">Our Values</h2>
                        <p className="text-gray-700">
                            Sustainability, Transparency, Innovation, and Community Engagement.
                        </p>
                    </div>
                </section>

                {/* How It Works */}
                <section className="bg-green-50 py-12 px-4">
                    <div className="max-w-5xl mx-auto">
                        <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">How It Works</h2>
                        <div className="space-y-8">
                            {[
                                { step: "1", title: "Sign Up", desc: "Create an account to start recycling and tracking your e-waste." },
                                { step: "2", title: "Schedule a Pickup", desc: "Choose a convenient time for our partners to collect your e-waste." },
                                { step: "3", title: "Track & Earn", desc: "Get eco-points, track impact, and receive recycling certification." }
                            ].map(({ step, title, desc }) => (
                                <div key={step} className="flex items-start gap-4">
                                    <div className="w-10 h-10 flex items-center justify-center bg-green-600 text-white rounded-full text-lg font-bold">
                                        {step}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-green-800">{title}</h3>
                                        <p className="text-gray-700">{desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Our Team */}
                <section className="py-12 px-4 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold text-green-700 mb-8 text-center">Meet Our Team</h2>
                    <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                name: "Swedeshna Mishra",
                                role: "Frontend Developer",
                                img: "https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka"
                            },
                            {
                                name: "Saumyajeet Varma",
                                role: "Frontend Developer",
                                img: "https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka"
                            },
                            {
                                name: "Priyanshu Kumar Anand",
                                role: "Backend Developer",
                                img: "https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka"
                            },
                            {
                                name: "Janmanjey Panigrahi",
                                role: "Backend Developer",
                                img: "https://api.dicebear.com/9.x/thumbs/svg?seed=Aneka"
                            }
                        ].map(({ name, role, img }) => (
                            <div key={name} className="bg-white shadow-md p-6 rounded-xl text-center">
                                <img src={img} alt={name} className="w-24 h-24 mx-auto rounded-full mb-4" />
                                <h3 className="text-xl font-semibold text-green-800">{name}</h3>
                                <p className="text-gray-600">{role}</p>
                            </div>
                        ))}
                    </div>
                </section>
            </main>
        </Layout>
    );
};

export default About;