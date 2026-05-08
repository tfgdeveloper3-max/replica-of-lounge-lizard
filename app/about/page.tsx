// app/about/page.tsx
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/sections/Footer";
import AboutPage from "@/components/pages/AboutPage"; 

export default function About() {
    return (
        <>
            <Navbar isDay={false} />

            <AboutPage />

            <Footer />
        </>
    );
}