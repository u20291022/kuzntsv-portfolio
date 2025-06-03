import { CSSProperties } from "react";
import styles from "./PageSection.module.css";

export default function PageSection({
    children,
    backgroundImage,
    backgroundVideo,
    backgroundColor,
    nextPageId,
    id,
    smallImage,
    fullHeightOnMobile,
    heightByContent
}: {
    children: React.ReactNode;
    backgroundImage?: string;
    backgroundVideo?: string;
    backgroundColor?: string;
    nextPageId?: string;
    id: string;
    smallImage?: boolean;
    fullHeightOnMobile?: boolean;
    heightByContent?: boolean
}) {
    const style: CSSProperties = {
        backgroundImage: !backgroundVideo && backgroundColor
            ? `${backgroundColor}, ${backgroundImage}`
            : !backgroundVideo ? backgroundImage : undefined,
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
            height-by-content={`${heightByContent}`}
        >
            {backgroundVideo && (
                <>
                    <video 
                        className={styles["background-video"]}
                        autoPlay 
                        muted 
                        loop 
                        playsInline
                    >
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                    {backgroundColor && (
                        <div className={styles["video-overlay"]} style={{ background: backgroundColor }}></div>
                    )}
                </>
            )}
            {children}
            {nextPageId && (
                <a className={styles["scroll-down"]} href={scrollDownHref}>
                    scroll down
                </a>
            )}
        </section>
    );
}
