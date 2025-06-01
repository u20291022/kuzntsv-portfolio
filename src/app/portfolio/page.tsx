import FaceSection from "@/components/FaceSection/FaceSection";
import styles from "./page.module.css";
import LaptopSection from "@/components/LaptopSection/LaptopSection";
import PrinciplesSection from "@/components/InfoSections/PrinciplesSection/PrinciplesSection";
import ServicesSection from "@/components/InfoSections/ServicesSection/ServicesSection";
import CostSection from "@/components/CostSection/CostSection";
import Footer from "@/components/Footer/Footer";

export default function Portfolio() {
    return (
        <main className={`${styles["main-container"]}`}>
            <FaceSection />
            <LaptopSection />
            <PrinciplesSection />
            <ServicesSection />
            <CostSection />
            <Footer />
        </main>
    );
}
