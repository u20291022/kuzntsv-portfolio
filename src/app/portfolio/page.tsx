import PageSection from "@/components/PageSection/PageSection"
import styles from "./page.module.css"

export default function Portfolio() {
    return (
        <main className={`${styles["main-container"]} ${styles["scroll-proximity"]}`}>
            <PageSection backgroundImage="url('art/face.png')" />
            <PageSection backgroundImage="url(art/laptop.png)" />
            <PageSection backgroundImage="#224" />
        </main>
    )
}