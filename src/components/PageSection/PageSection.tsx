import styles from "./PageSection.module.css"

export default function PageSection({ backgroundImage }: { backgroundImage: string }) {
    return (
        <section className={styles["page-section"]} style={{backgroundImage}}>

        </section>
    )
}