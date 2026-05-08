// app/portfolio/page.tsx
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";
import PortfolioPage from "@/components/pages/PortfolioPage";

export default function Portfolio() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar isDay={false} />

            <PortfolioPage />

            <Footer />
        </>
    );
}