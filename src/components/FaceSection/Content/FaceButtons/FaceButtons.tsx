import styles from "./FaceButtons.module.css"

export default function FaceButtons() {
    return (
        <div className={styles["buttons-container"]}>
            <Button
                text="Рассчитать стоимость"
                isFilled={false}
                iconPath="icons/filled-arrow-top-right.svg" />
            <Button
                text="Портфолио"
                isFilled={true}
                iconPath="icons/behance.svg" />
        </div>
    )
}

function Button({ text, isFilled, iconPath }: { text: string, isFilled: boolean, iconPath: string }) {
    const filledClass = isFilled ? styles["filled-button"] : ""

    return (
        <div className={`${styles["button-container"]} ${filledClass}`}>
            <h1 className="accent">{text}</h1>
            <img src={iconPath} />
        </div>
    )
}