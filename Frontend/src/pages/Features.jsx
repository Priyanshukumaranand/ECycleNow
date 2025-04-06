import { FaBell, FaLink, FaRecycle, FaRobot } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { IoIosGift, IoIosStats } from "react-icons/io";
import { ImBin2 } from "react-icons/im";
import Layout from "../components/layout/Layout"

const features = [
    {
        title: "IoT-Based Smart Bins",
        desc: "Automatically detect, categorize, and record e-waste disposal using sensors for efficient recycling.",
        icon: <ImBin2 size={32} />,
    },
    {
        title: "AI-Powered Waste Classification",
        desc: "Uses Gemini AI to accurately identify the type and recyclability of e-waste items in real-time.",
        icon: <FaRobot size={32} />,
    },
    {
        title: "Blockchain-Backed Transparency (IDX)",
        desc: "Tracks the journey of each e-waste item with immutable records, ensuring trust and traceability.",
        icon: <FaLink size={32} />,
    },
    {
        title: "User Incentives System",
        desc: "Eco-friendly behavior is rewarded through credits, coupons, or discounts for responsible disposal.",
        icon: <IoIosGift size={32} />,
    },
    {
        title: "Real-Time Notifications for Collection Centers",
        desc: "Instant alerts when bins are full or nearing capacity, optimizing collection operations.",
        icon: <FaBell size={32} />,
    },
    {
        title: "Circular Economy Marketplace",
        desc: "Facilitates buying, selling, donating, or repairing used electronics to promote reuse.",
        icon: <FaRecycle size={32} />,
    },
    {
        title: "Dynamic Price Estimation",
        desc: "AI suggests fair resale prices for used gadgets based on real-time condition and market data.",
        icon: <FaSackDollar size={32} />,
    },
    {
        title: "Sustainability Dashboard",
        desc: "Visualizes your environmental impact—track CO₂ saved, items recycled, and more.",
        icon: <IoIosStats size={32} />,
    }
];

const Features = () => {
    return (
        <Layout>
            {/* Banner Section */}
            <section className="relative w-full h-[300px] bg-green-800 flex items-center justify-center text-white text-center">
                <div className="z-10 ">
                    <h1 className="text-4xl md:text-5xl font-bold">
                        Platform Features
                    </h1>
                    <p className="text-lg mt-3 max-w-2xl mx-auto">
                        Explore the smart and sustainable features of ECycleNow.
                    </p>
                </div>
                <div className="absolute inset-0 bg-black/20"></div>
            </section>

            {/* Features Grid */}
            <section className="py-10 px-4 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map(({ title, desc, icon }, index) => (
                        <div
                            key={index}
                            className="bg-green-100 hover:bg-green-200 transition-all duration-300 ease-in-out p-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-[1.02] cursor-default"
                        >
                            <div className="text-4xl mb-3 text-green-800">{icon}</div>
                            <h3 className="text-xl font-semibold text-green-800 mb-2">{title}</h3>
                            <p className="text-gray-700">{desc}</p>
                        </div>
                    ))}
                </div>
            </section>
        </Layout>
    )
}

export default Features