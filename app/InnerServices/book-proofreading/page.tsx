import Navbar2 from "@/components/Navbar2";
import Footer from "@/components/sections/Footer";
import BookProofReadingPage from "@/components/pages/BookProofReadingPage";

export default function BookProofReading() {
    return (
        <>
            <Navbar2 isDay={false} />
            <BookProofReadingPage />
            <Footer />
        </>
    );
}