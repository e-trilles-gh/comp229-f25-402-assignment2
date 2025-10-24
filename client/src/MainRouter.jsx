import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Footer from './components/Footer';
import PdfViewer from './components/PdfViewer';

const MainRouter = () => {
    return (
        <>
            <Layout />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/education" element={<Education />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/services" element={<Services />} />
                <Route path="/pdf-view" element={<PdfViewer />} />
            </Routes>
            <Footer />
        </>
    )
}

export default MainRouter;