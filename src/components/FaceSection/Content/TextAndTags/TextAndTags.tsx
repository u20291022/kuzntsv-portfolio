import styles from "./TextAndTags.module.css"

export default function TextAndTags() {
    return (
        <div className={styles["text-and-tags-container"]}>
            <FaceText />
            <Tags />
        </div>
    )
}

function FaceText() {
    return (
        <h1 className={`${styles["face-text"]} accent`}>
            200+ экранов, 0 шаблонных решений, полная одержимость<br/>к искусству
        </h1>
    )
}

function Tags() {
    return (
        <div className={styles["tags-container"]}>
            <Tag text="WEB-SITES" />
            <Tag text="ВЕРСТКА НА TILDA" />
            <Tag text="ДИЗАЙН НА FIGMA" />
            <Tag text="ОНЛАЙН ШКОЛЫ" />
            <Tag text="UX/UI ДИЗАЙН" />
            <Tag text="ЗАПУСКИ" />
            <Tag text="ИНТЕРНЕТ-МАГАЗИНЫ" />
            <Tag text="КРЕАТИВЫ" />
            <Tag text="WEBFLOW" />
            <Tag text="FRAMER" />
        </div>
    )
}

function Tag({ text }: { text: string }) {
    return (
        <p className={styles["tag"]}>{text}</p>
    )
}

