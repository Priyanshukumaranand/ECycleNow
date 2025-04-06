import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

   

    const login = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        localStorage.setItem('isAuthenticated', 'true');
        localStorage.setItem('user', JSON.stringify(userData));
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUser(null);
        localStorage.removeItem('isAuthenticated');
        localStorage.removeItem('user');
    };

    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/auth/check`, {
                    credentials: 'include',
                });
                const data = await response.json();
                if (data.isAuthenticated) {
                    setIsAuthenticated(true);
                    setUser(data.user); // backend should send `user` data
                    localStorage.setItem('isAuthenticated', 'true');
                    localStorage.setItem('user', JSON.stringify(data.user));
                } else {
                    setIsAuthenticated(false);
                    setUser(null);
                    localStorage.removeItem('isAuthenticated');
                    localStorage.removeItem('user');
                }
            } catch (error) {
                console.error("Auth check failed", error);
                setIsAuthenticated(false);
                setUser(null);
            }
        };
    
        checkAuthStatus(); // Run only once when app mounts
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);