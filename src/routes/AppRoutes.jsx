import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Homepage from "../pages/Homepage"
import AboutPage from "../pages/AboutPage"
import ServicesPage from "../pages/ServicesPage"
import ProductsPage from "../pages/ProductsPage"
import BlogPage from "../pages/BlogPage"
import PricingPage from "../pages/PricingPage"
import ContactPage from "../pages/ContactPage"
import DashboardPage from "../pages/DashboardPage"


const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
           <Route element={<MainLayout />}>
                <Route path="/" element={<Homepage />} />
             <Route path="/about" element={<AboutPage />} />
             <Route path="/services" element={<ServicesPage />} />
             <Route path="/products" element={<ProductsPage />} />
             <Route path="/blog" element={<BlogPage />} />
             <Route path="/pricing" element={<PricingPage />} />
             <Route path="/contact" element={<ContactPage />} />
             <Route path="/dashboard" element={<DashboardPage />} />
           </Route>
        </Routes>
    )
}

export default AppRoutes