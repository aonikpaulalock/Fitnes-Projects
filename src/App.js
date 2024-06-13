import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Header from './Shared/Header';
import Footer from './Shared/Footer';
import AboutPage from './Pages/About/AboutPage';
import ServicesPage from './Pages/Services/ServicesPage';
import ServiceDetailsPage from './Pages/ServiceDetailsPage/ServiceDetailsPage';
import Blogs from './Pages/Blogs/Blogs';
import BlogsDetails from './Pages/BlogsDetails/BlogsDetails';
import BlogsTainerInformation from './Pages/BlogsDetails/BlogsTainerInformation';
import Contact from './Pages/Contactpage/Contact';
import ContactSuccessPage from './Pages/ContactSuccessPage/ContactSuccessPage';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';



function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 200,
      easing: 'ease-in-out',
      delay: 0,
      once: true,
    });
}, []);
return (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/aboutpage" element={<AboutPage />}></Route>
      <Route path="/servicePages" element={<ServicesPage />}></Route>
      <Route path="/serviceDetails/:id" element={<ServiceDetailsPage />}></Route>
      <Route path="/blogs" element={<Blogs />}></Route>
      <Route path="/blogsDetails/:id" element={<BlogsDetails />}></Route>
      <Route path="/tainerInformation/:id" element={<BlogsTainerInformation />}></Route>
      <Route path="/contactPage" element={<Contact />}></Route>
      <Route path="/contactSuccessPage" element={<ContactSuccessPage />}></Route>
    </Routes>
    <Footer />
  </>
);
}

export default App;
