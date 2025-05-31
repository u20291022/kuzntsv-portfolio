import PageSection from "@/components/PageSection/PageSection"
import FaceSection from "@/components/FaceSection/FaceSection"
import styles from "./page.module.css"
import LaptopSection from "@/components/LaptopSection/LaptopSection"

export default function Portfolio() {
    return (
        <main className={`${styles["main-container"]}`}>
            <FaceSection />
            <LaptopSection />
        </main>
    )
}