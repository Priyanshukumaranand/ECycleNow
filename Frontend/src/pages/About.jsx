import Layout from "../components/layout/Layout"
import { useState, useEffect } from "react"

const About = () => {
    const [aboutData, setAboutData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/aboutdata');
                
                if (!response.ok) {
                    throw new Error(`Network error: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();
                setAboutData(data);
                setLoading(false);
            } catch (error) {
                console.error("Fetching error:", error);
                setError(error.message);
                setLoading(false);
            }
        };
        
        fetchData();
        
        return () => {}; 
    }, []);

    if (loading) return (
        <Layout>
            <div className="custom-padding flex justify-center items-center h-64">
                <div className="animate-pulse">Loading about data...</div>
            </div>
        </Layout>
    );
    
    if (error) return (
        <Layout>
            <div className="custom-padding text-red-500">
                <h2>Error loading about data</h2>
                <p>{error}</p>
                <p>Please try again later or contact support.</p>
            </div>
        </Layout>
    );
    
    return (
        <Layout>
            <div className="custom-padding">
                <h1 className="text-3xl font-bold mb-4">{aboutData?.title || "About Us"}</h1>
                <p className="text-xl font-semibold text-green-600 mb-3">{aboutData?.mission || ""}</p>
                <p className="text-lg mb-8">{aboutData?.description || ""}</p>
                
                {aboutData?.stats && (
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-700">{aboutData.stats.yearFounded}</p>
                            <p className="text-sm text-green-600">Founded</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-700">{aboutData.stats.wasteRecycled}</p>
                            <p className="text-sm text-green-600">E-Waste Recycled</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-700">{aboutData.stats.partnersCount}</p>
                            <p className="text-sm text-green-600">Recycling Partners</p>
                        </div>
                        <div className="bg-green-50 p-4 rounded-lg text-center">
                            <p className="text-2xl font-bold text-green-700">{aboutData.stats.usersCount}</p>
                            <p className="text-sm text-green-600">Registered Users</p>
                        </div>
                    </div>
                )}
                
                {aboutData?.team && aboutData.team.length > 0 && (
                    <>
                        <h2 className="text-2xl font-semibold mt-6 mb-4">Our Team</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {aboutData.team.map((member, index) => (
                                <div key={index} className="border border-green-200 rounded-lg p-4">
                                    <h3 className="text-lg font-bold">{member.name}</h3>
                                    <p className="text-green-600 mb-2">{member.role}</p>
                                    <p>{member.bio}</p>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </Layout>
    )
}

export default About