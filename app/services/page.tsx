import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import ServicesPage from "@/components/pages/ServicesPage";

export default function Services() {
    return (
        <>
            <Navbar isDay={false} />

            <ServicesPage />

            <Footer />
        </>
    );
}