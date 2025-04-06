import { Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import About from "./pages/About"
import Features from "./pages/Features"
import PageNotFound from "./pages/PageNotFound"
import Login from "./pages/auth/Login"
import Register from "./pages/auth/Register"
import UserRegister from "./pages/auth/UserRegister"
import CompanyRegister from "./pages/auth/CompanyRegister"
import UserLogin from "./pages/auth/UserLogin"
import CompanyLogin from "./pages/auth/CompanyLogin"

const App = () => {

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/about" element={<About />} />
      <Route path="/features" element={<Features />} />

      <Route path="/register" element={<Register />} />
      <Route path="/register/user" element={<UserRegister />} />
      <Route path="/register/company" element={<CompanyRegister />} />

      <Route path="/login" element={<Login />} />
      <Route path="/login/user" element={<UserLogin />} />
      <Route path="/login/company" element={<CompanyLogin />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}

export default App