// app/services/mystery-writing/page.tsx
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import MysteryWritingPage from "@/components/pages/MysteryWritingPage";

export default function MysteryWriting() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar2 isDay={false} />

            <MysteryWritingPage />

            <Footer />
        </>
    );
}