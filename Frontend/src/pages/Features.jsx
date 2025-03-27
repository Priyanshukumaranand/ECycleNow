import Layout from "../components/layout/Layout"
import { useState, useEffect } from "react"

const Features = () => {
    const [featuresData, setFeaturesData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/featuresdata');
                
                if (!response.ok) {
                    throw new Error(`Network error: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();
                setFeaturesData(data);
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
                <div className="animate-pulse">Loading features...</div>
            </div>
        </Layout>
    );
    
    if (error) return (
        <Layout>
            <div className="custom-padding text-red-500">
                <h2>Error loading features</h2>
                <p>{error}</p>
                <p>Please try again later or contact support.</p>
            </div>
        </Layout>
    );
    
    return (
        <Layout>
            <div className="custom-padding">
                <header className="text-center mb-12">
                    <h1 className="text-4xl font-bold mb-4">{featuresData?.title || "Our Features"}</h1>
                    <p className="text-xl text-gray-600">{featuresData?.subtitle || ""}</p>
                </header>
                
                {/* Main Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {featuresData?.mainFeatures?.map((feature) => (
                        <div key={feature.id} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500">
                            <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                            <p className="text-gray-700">{feature.description}</p>
                        </div>
                    ))}
                </div>
                
                {/* Statistics */}
                {featuresData?.stats && (
                    <div className="bg-green-50 p-8 rounded-lg mb-12">
                        <h2 className="text-2xl font-semibold mb-6 text-center">Our Impact</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                            <div>
                                <p className="text-3xl font-bold text-green-600">{featuresData.stats.locationsCount}</p>
                                <p className="text-sm text-gray-600">Drop-off Locations</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">{featuresData.stats.itemsRecycled}</p>
                                <p className="text-sm text-gray-600">Items Recycled</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">{featuresData.stats.pointsAwarded}</p>
                                <p className="text-sm text-gray-600">Points Awarded</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-green-600">{featuresData.stats.co2Reduced}</p>
                                <p className="text-sm text-gray-600">CO2 Reduced</p>
                            </div>
                        </div>
                    </div>
                )}
                
                {/* Additional Features */}
                {featuresData?.additionalFeatures && featuresData.additionalFeatures.length > 0 && (
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold mb-4">Additional Services</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {featuresData.additionalFeatures.map((feature, index) => (
                                <li key={index} className="flex items-center">
                                    <span className="mr-2 text-green-500">✓</span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </Layout>
    )
}

export default Features