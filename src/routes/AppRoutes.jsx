import { Route, Routes } from "react-router-dom"
import MainLayout from "../layouts/MainLayout"
import Homepage from "../pages/Homepage"
import AboutUsPage from "../pages/AboutUsPage"
import ServicesPage from "../pages/ServicesPage"
import ProjectsPage from "../pages/ProjectsPage"
import BlogPage from "../pages/BlogPage"
import ContactUsPage from "../pages/ContactUsPage"
import LoginPage from "../pages/LoginPage"


const AppRoutes = () => {
    return (
        <Routes>
            {/* Public Routes */}
           <Route element={<MainLayout />}>
                         <Route path="/" element={<Homepage />} />
                         <Route path="/about-us" element={<AboutUsPage />} />
                         <Route path="/services" element={<ServicesPage />} />
                         <Route path="/projects" element={<ProjectsPage />} />
                         <Route path="/blog" element={<BlogPage />} />
                         <Route path="/contact-us" element={<ContactUsPage />} />
             <Route path="/login" element={<LoginPage />} />
           </Route>
        </Routes>
    )
}

export default AppRoutes