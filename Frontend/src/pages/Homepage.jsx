import { FaBrain, FaRecycle } from "react-icons/fa";
import { FaEarthAmericas } from "react-icons/fa6";
import Layout from "../components/layout/Layout";
import  { Link } from "react-router-dom";


const Homepage = () => {
    return (
        <Layout>
            <main>
                {/* Hero Section */}
                <section className="relative bg-green-800 text-white py-20 text-center">
                    <div className="z-10 relative">
                        <h1 className="text-4xl md:text-6xl font-bold">Recycle Smarter, Live Greener</h1>
                        <p className="text-lg mt-4 max-w-2xl mx-auto">
                            Join ECycleNow &ndash; India&apos;s most trusted platform to recycle electronic waste responsibly and earn eco-rewards.
                        </p>
                        <div className="mt-8">
                            <Link
                                to="/register"
                                className="bg-white text-green-800 px-6 py-3 font-semibold rounded-full hover:bg-gray-200 transition"
                            >
                                Get Started
                            </Link>
                        </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20"></div>
                </section>

                {/* Call to Action */}
                <section className="bg-green-100 py-16 px-4 text-center">
                    <h2 className="text-3xl font-bold text-green-800">Ready to Make an Impact?</h2>
                    <p className="text-lg text-gray-700 mt-4 max-w-xl mx-auto">
                        Join thousands of users across India taking small steps for a better planet.
                    </p>
                    <div className="mt-8">
                        <Link
                            to="/register"
                            className="bg-green-700 text-white px-8 py-3 font-semibold rounded-full hover:bg-green-600 transition"
                        >
                            Schedule Your First Pickup
                        </Link>
                    </div>
                </section>

                {/* Latest Blog / News Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto">
                        <h2 className="text-3xl font-bold text-green-800 text-center mb-10">Latest Blog & News</h2>
                        <div className="grid gap-8 md:grid-cols-3">
                            {[
                                {
                                    title: "E-Waste Day 2025: What You Need to Know",
                                    desc: "Mark your calendar! Learn how ECycleNow is participating in this global movement to reduce e-waste.",
                                    link: "/blog/e-waste-day-2025"
                                },
                                {
                                    title: "How to Recycle Electronics Safely",
                                    desc: "Avoid data theft and environmental harm. Tips to wipe, sort and dispose of devices properly.",
                                    link: "/blog/recycle-electronics-safely"
                                },
                                {
                                    title: "Circular Economy: The Future of Tech Disposal",
                                    desc: "Explore how reusing and refurbishing is changing the landscape of sustainability.",
                                    link: "/blog/circular-economy"
                                }
                            ].map(({ title, desc, link }) => (
                                <div key={title} className="bg-green-50 p-6 rounded-xl shadow-md flex flex-col">
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
                                    <p className="text-gray-700 mb-4 flex-grow">{desc}</p>
                                    <Link to={link} className="text-green-700 font-semibold hover:underline">
                                        Read more &rarr;
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* YouTube Video Section */}
                <section className="py-16 px-4 bg-green-50">
                    <div className="max-w-5xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-green-800 mb-8">Watch How ECycleNow Works</h2>
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe
                                className="w-full h-[300px] md:h-[500px] rounded-xl shadow-lg"
                                src="https://www.youtube.com/embed/dJ1VDnUXWM0"
                                title="ECycleNow Intro Video"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </section>

                {/* Awareness Section */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-green-800 mb-8">Why E-Waste Awareness Matters</h2>
                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            {[
                                {
                                    icon: <FaRecycle size={32} />,
                                    title: "Environmental Impact",
                                    desc: "Improper e-waste disposal leads to soil and water contamination due to hazardous chemicals."
                                },
                                {
                                    icon: <FaBrain size={32} />,
                                    title: "Health Hazards",
                                    desc: "Toxic materials like lead and mercury can cause severe neurological and respiratory issues."
                                },
                                {
                                    icon: <FaEarthAmericas size={32} />,
                                    title: "Global Crisis",
                                    desc: "India is one of the top e-waste producers. Public awareness is key to managing this crisis sustainably."
                                }
                            ].map(({ icon, title, desc }) => (
                                <div key={title} className="bg-green-100 p-6 rounded-xl shadow">
                                    <div className="text-4xl mb-4 text-green-800">{icon}</div>
                                    <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
                                    <p className="text-gray-700">{desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Partner Carousel */}
                <section className="py-16 px-4 bg-white">
                    <div className="max-w-6xl mx-auto text-center">
                        <h2 className="text-3xl font-bold text-green-800 mb-10">Our Trusted Partners</h2>
                        <div className="flex gap-8 overflow-x-auto justify-center items-center px-4 py-4 no-scrollbar">
                            {[
                                "https://1000logos.net/wp-content/uploads/2020/04/Tata-Logo.png",
                                "https://1000logos.net/wp-content/uploads/2021/05/Google-logo.png",
                                "https://1000logos.net/wp-content/uploads/2021/02/Flipkart-logo.png",
                                "https://1000logos.net/wp-content/uploads/2020/08/Infosys-Logo.png",
                                "https://1000logos.net/wp-content/uploads/2017/07/Dell-Logo.png"
                            ].map((logo, index) => (
                                <img
                                    key={index}
                                    src={logo}
                                    alt="Partner Logo"
                                    className="h-16 md:h-20 object-contain grayscale hover:grayscale-0 transition duration-300"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </Layout>
    )
}

export default Homepage