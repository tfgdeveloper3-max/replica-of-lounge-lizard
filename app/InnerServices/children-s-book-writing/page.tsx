// app/services/childrens-book-writing/page.tsx
import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import ChildrensBookPage from "@/components/pages/ChildrensBookPage";

export default function ChildrensBookWriting() {
    return (
        <>
            {/* isDay={false} for dark hero background */}
            <Navbar2 isDay={false} />

            <ChildrensBookPage />

            <Footer />
        </>
    );
}