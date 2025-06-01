import PageSection from "@/components/PageSection/PageSection";
import InfoHeader from "../Header/InfoHeader";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
    return (
        <PageSection id="services-section" heightByContent={true}>
            <InfoHeader
                category="Мои услуги"
                title="КАКОЙ ПРОЕКТ МНЕ НУЖЕН?"
                subtitles={[
                    "ТОТ, ЧТО ПРИНОСИТ ДЕНЬГИ.",
                    "ИЛИ... ТОТ, ЧТО ДЛЯ ДУШИ. ОДНО ДРУГОМУ НЕ МЕШАЕТ.",
                ]}
            />
            <Cards
                cards={[
                    {
                        title: "Landing page",
                        caption:
                            "Одностраничный сайт, который красиво и эффектно расскажет о ваших услугах. " +
                            "Идеальное решение, чтобы ярко заявить о себе\nВесь бизнес рекомендуем начинать именно с этого",
                        imgPath: "art/landing-page.png",
                        isRecommended: true,
                        blackSquareArrow: false,
                    },
                    {
                        title: "Многостраничный сайт",
                        caption:
                            "Проработанное и объемное описание вашей компании, раскрывая деятельность вашего бизнеса",
                        imgPath: "art/multipage.png",
                        isRecommended: false,
                        blackSquareArrow: true,
                    },
                    {
                        title: "App design",
                        caption:
                            "Разработка дизайна вашего приложения, через анализ поведения вашей целевой аудитории (UI / UX)",
                        imgPath: "art/app-design.png",
                        isRecommended: false,
                        blackSquareArrow: true,
                    },
                    {
                        title: "Интернет магазин",
                        caption:
                            "Интернет магазин - необходимая часть бизнеса среди общепита, магазина одежды и других сфер продаж, где есть каталог",
                        imgPath: "art/web-store.png",
                        isRecommended: false,
                        blackSquareArrow: false,
                    },
                ]}
            />
        </PageSection>
    );
}

function Cards({
    cards,
}: {
    cards: {
        title: string;
        caption: string;
        imgPath: string;
        isRecommended: boolean;
        blackSquareArrow: boolean;
    }[];
}) {
    return (
        <div className={styles["cards-container"]}>
            {cards.map((card, index) => (
                <Card key={index} {...card} />
            ))}
        </div>
    );
}

function Card({
    title,
    caption,
    imgPath,
    isRecommended,
    blackSquareArrow,
}: {
    title: string;
    caption: string;
    imgPath: string;
    isRecommended: boolean;
    blackSquareArrow: boolean;
}) {
    const imageProps = { imgPath, isRecommended, blackSquareArrow };
    const textProps = { title, caption };

    return (
        <div className={styles["card-container"]}>
            <CardImage {...imageProps} />
            <CardText {...textProps} />
        </div>
    );
}

function CardImage({
    imgPath,
    isRecommended,
    blackSquareArrow,
}: {
    imgPath: string;
    isRecommended: boolean;
    blackSquareArrow: boolean;
}) {
    const arrowIconPath = blackSquareArrow
        ? "icons/black-square-arrow-top-right.svg"
        : "icons/white-square-arrow-top-right.svg";

    return (
        <a href="#" target="_blank" className={styles["card-image-container"]}>
            <img className={styles["card-image"]} src={imgPath} />
            <img className={styles["card-image-arrow"]} src={arrowIconPath} />
            {isRecommended && (
                <p className={`${styles["recommend-text"]} accent`}>
                    РЕКОМЕНДУЕМ
                </p>
            )}
        </a>
    );
}

function CardText({ title, caption }: { title: string; caption: string }) {
    return (
        <div className={styles["card-text-container"]}>
            <h2 className={styles["card-title"]}>{title}</h2>
            {caption.split("\n").map((line, index) => (
                <p className={styles["card-text-paragraph"]} key={index}>
                    {line}
                </p>
            ))}
        </div>
    );
}
