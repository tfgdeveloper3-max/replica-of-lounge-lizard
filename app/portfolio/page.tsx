// app/portfolio/page.tsx
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import PortfolioPage from "@/components/pages/PortfolioPage";

export default function Portfolio() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar2 isDay={false} />

            <PortfolioPage />

            <Footer />
        </>
    );
}