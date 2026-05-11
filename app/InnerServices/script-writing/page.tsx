import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import ScriptWritingPage from "@/components/pages/ScriptWritingPage";

export default function ScriptWriting() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar2 isDay={false} />

            <ScriptWritingPage />

            <Footer />
        </>
    );
}