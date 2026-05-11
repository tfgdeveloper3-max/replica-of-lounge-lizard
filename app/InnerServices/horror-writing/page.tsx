import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import HorrorWritingPage from "@/components/pages/HorrorWritingPage";

export default function HorrorWriting() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar2 isDay={false} />

            <HorrorWritingPage />

            <Footer />
        </>
    );
}