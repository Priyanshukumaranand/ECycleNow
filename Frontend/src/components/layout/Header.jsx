import { useState, useEffect } from "react";
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useAuth } from "../../Context/authContext.jsx";
import { useNavigate } from "react-router-dom";

const publicNavigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Register", href: "/register" },
    { name: "Login", href: "/login" },
];

const privateNavigationItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
];

const Header = () => {
    const { isAuthenticated, user, logout } = useAuth();
    const [activeTab, setActiveTab] = useState(window.location.pathname);
    const navigate=useNavigate();

    function classNames(...classes) {
        return classes.filter(Boolean).join(" ");
    }

    // useEffect(() => {
    //     // Check if user is authenticated on component mount
    //     const checkAuthStatus = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/api/auth/check', {
    //                 credentials: 'include'
    //             });
    //             const data = await response.json();
                
    //             if (data.isAuthenticated) {
    //                 // Update active tab if user is authenticated
    //                 const savedTab = localStorage.getItem('activeTab');
    //                 if (savedTab) {
    //                     setActiveTab(savedTab);
    //                 }
    //             }
    //         } catch (error) {
    //             console.error('Error checking auth status:', error);
    //         }
    //     };

    //     checkAuthStatus();
    // }, []);



    

    // Update localStorage when activeTab changes
    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    // Update activeTab when route changes
    useEffect(() => {
        setActiveTab(window.location.pathname);
    }, [window.location.pathname]);

    const handleLogout = async () => {
        try {
            await fetch('http://localhost:8000/api/auth/logout', {
                credentials: 'include'
            });
            logout(); // clears context + localStorage
            navigate('/'); // soft navigation triggers re-render
        } catch (error) {
            console.error('Logout failed:', error);
        }
    };

    return (
        <Disclosure as="nav" className="bg-green-700 drop-shadow-lg sticky top-0 z-10">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="relative flex h-16 items-center justify-between">
                    <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-green-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block size-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                        <a href="/">
                            <div className="flex shrink-0 items-center">
                                <img
                                    alt="Your Company"
                                    src="https://img.icons8.com/?size=100&id=FyCprgnwzSWk&format=png&color=FFFFFF"
                                    className="h-16 w-auto"
                                />
                                <p className="text-white text-3xl ml-5">ECycleNow</p>
                            </div>
                        </a>
                    </div>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                        <div className="hidden sm:ml-6 sm:block">
                            <div className="flex space-x-2">
                                {(isAuthenticated ? privateNavigationItems : publicNavigationItems).map((item) => (
                                    <a
                                        key={item.name}
                                        href={item.href}
                                        onClick={() => setActiveTab(item.href)}
                                        className={classNames(
                                            activeTab === item.href
                                                ? "bg-green-800 text-white"
                                                : "text-gray-300 hover:bg-green-700 hover:text-white",
                                            "rounded-md px-3 py-2 text-sm font-medium"
                                        )}
                                    >
                                        {item.name}
                                    </a>
                                ))}
                            </div>
                        </div>

                        {isAuthenticated && (
                            <Menu as="div" className="relative ml-5">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-green-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-800">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            alt=""
                                            src={user?.avatar || "https://static.vecteezy.com/system/resources/previews/004/226/762/original/panda-cartoon-cute-say-hello-panda-animals-illustration-vector.jpg"}
                                            className="size-8 rounded-full"
                                        />
                                    </MenuButton>
                                </div>
                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 transition">
                                    <MenuItem>
                                        {({ active }) => (
                                            <a
                                                href="/dashboard"
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block px-4 py-2 text-sm text-green-700"
                                                )}
                                            >
                                                Dashboard
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ active }) => (
                                            <button
                                                onClick={handleLogout}
                                                className={classNames(
                                                    active ? "bg-gray-100" : "",
                                                    "block w-full text-left px-4 py-2 text-sm text-green-700"
                                                )}
                                            >
                                                Logout
                                            </button>
                                        )}
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        )}
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {(isAuthenticated ? privateNavigationItems : publicNavigationItems).map((item) => (
                        <DisclosureButton
                            key={item.name}
                            onClick={() => setActiveTab(item.href)}
                            className={classNames(
                                activeTab === item.href
                                    ? "bg-green-800 text-white"
                                    : "text-gray-300 hover:bg-green-700 hover:text-white",
                                "block rounded-md px-3 py-2 text-base font-medium"
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    );
};

export default Header;