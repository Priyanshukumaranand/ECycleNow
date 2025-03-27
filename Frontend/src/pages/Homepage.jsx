import Layout from "../components/layout/Layout"
import { useState, useEffect } from "react"

const Homepage = () => {
    const [homeData, setHomeData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('/api/homedata');
                
                if (!response.ok) {
                    throw new Error(`Network error: ${response.status} ${response.statusText}`);
                }
                
                const data = await response.json();
                setHomeData(data);
                setLoading(false);
            } catch (error) {
                console.error("Fetching error:", error);
                setError(error.message);
                setLoading(false);
            }
        };
        
        fetchData();
        
        // The following line is important: don't return a Promise from useEffect
        return () => {}; 
    }, []);

    if (loading) return (
        <Layout>
            <div className="custom-padding flex justify-center items-center h-64">
                <div className="animate-pulse">Loading data...</div>
            </div>
        </Layout>
    );
    
    if (error) return (
        <Layout>
            <div className="custom-padding text-red-500">
                <h2>Error loading data</h2>
                <p>{error}</p>
                <p>Please try again later or contact support.</p>
            </div>
        </Layout>
    );
    
    return (
        <Layout>
            <div className="custom-padding">
                <h1 className="text-3xl font-bold mb-4">{homeData?.title || "Welcome"}</h1>
                <p className="text-lg mb-6">{homeData?.description || ""}</p>
                
                <h2 className="text-2xl font-semibold mt-6 mb-3">Features:</h2>
                <ul className="list-disc pl-5 space-y-2">
                    {homeData?.features?.map((feature, index) => (
                        <li key={index} className="text-lg">{feature}</li>
                    )) || <li>No features available</li>}
                </ul>
            </div>
        </Layout>
    )
}

export default Homepage