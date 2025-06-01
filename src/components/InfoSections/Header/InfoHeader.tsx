import styles from "./InfoHeader.module.css";

export default function InfoHeader({
    category,
    title,
    subtitles,
    subtitleWidth
}: {
    category: string;
    title: string;
    subtitles: string[],
    subtitleWidth?: string
}) {
    return (
        <header className={styles["info-header"]}>
            <p className={styles["category-text"]}>{category}</p>
            <div className={styles["info-container"]}>
                <h1 className={styles["info-title"]}>{title}</h1>
                <InfoText subtitles={subtitles} subtitleWidth={subtitleWidth} />
            </div>
        </header>
    );
}

function InfoText({ subtitles, subtitleWidth }: { subtitles: string[], subtitleWidth?: string }) {
    return (
        <div className={styles["info-text-container"]}>
            {subtitles.map((subtitle, index) => (
                <p className={`${styles["info-text"]} subtext-big`} style={{width: subtitleWidth}} key={index}>
                    {subtitle}
                </p>
            ))}
        </div>
    );
}
