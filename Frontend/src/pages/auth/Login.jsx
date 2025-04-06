import Layout from "../../components/layout/Layout"
import { useAuth } from "../../Context/authContext"

const Login = () => {
    const { login } = useAuth();

    return (
        <Layout>
            <div className="custom-padding flex flex-col flex-wrap justify-center items-center space-y-4 mx-auto my-24">
                <h1 className="text-3xl font-bold text-green-800">Login</h1>

                <div className="flex flex-col gap-4">
                    <a
                        href="http://localhost:8000/api/auth/google"
                        className="flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-700 font-semibold py-4 px-8 border border-gray-300 rounded-lg shadow-sm transition duration-200"
                    >
                        <img
                            src="https://img.icons8.com/color/24/000000/google-logo.png"
                            alt="Google"
                        />
                        Continue with Google
                    </a>
                </div>
            </div>
        </Layout>
    )
}

export default Login