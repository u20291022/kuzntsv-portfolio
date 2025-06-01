import FaceSection from "@/components/FaceSection/FaceSection"
import styles from "./page.module.css"
import LaptopSection from "@/components/LaptopSection/LaptopSection"
import PrinciplesSection from "@/components/InfoSections/PrinciplesSection/PrinciplesSection"
import ServicesSection from "@/components/InfoSections/ServicesSection/ServicesSection"

export default function Portfolio() {
    return (
        <main className={`${styles["main-container"]}`}>
            <FaceSection />
            <LaptopSection />
            <PrinciplesSection />
            <ServicesSection />
        </main>
    )
}