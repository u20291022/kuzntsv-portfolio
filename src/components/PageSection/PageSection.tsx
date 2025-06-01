import { CSSProperties } from "react";
import styles from "./PageSection.module.css";

export default function PageSection({
    children,
    backgroundImage,
    backgroundColor,
    nextPageId,
    id,
    smallImage,
    fullHeightOnMobile,
}: {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundColor?: string;
    nextPageId?: string;
    id: string;
    smallImage?: boolean;
    fullHeightOnMobile?: boolean;
}) {
    const style: CSSProperties = {
        backgroundImage: backgroundColor
            ? `${backgroundColor}, ${backgroundImage}`
            : backgroundImage,
    };

    const scrollDownHref = nextPageId
        ? `${nextPageId.startsWith("#") ? "" : "#"}${nextPageId}`
        : "";

    const smallImageClass = smallImage ? styles["small-image"] : "";

    return (
        <section
            className={`${styles["page-section"]} ${smallImageClass}`}
            style={style}
            id={id}
            full-height={`${fullHeightOnMobile}`}
        >
            {children}
            {nextPageId && (
                <a className={styles["scroll-down"]} href={scrollDownHref}>
                    scroll down
                </a>
            )}
        </section>
    );
}
