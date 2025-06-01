import PageSection from "../../PageSection/PageSection";
import InfoHeader from "../Header/InfoHeader";
import styles from "./PrinciplesSection.module.css";

export default function PrinciplesSection() {
    return (
        <PageSection id="principles-section" fullHeightOnMobile={true}>
            <InfoHeader
                category="Мои принципы"
                title="художник без принципов просто ремесленник."
                subtitles={[
                    "а творчество - это когда ты рискуешь быть непонятым, но никогда не рискуешь быть фальшивым",
                ]}
                subtitleWidth="212px"
            />
            <BodyContainer />
        </PageSection>
    );
}

function BodyContainer() {
    return (
        <div className={styles["body-container"]}>
            <img src="art/vangog.png" />
            <p className={`${styles["info-text"]} subtext-big`}>
                а творчество - это когда ты рискуешь быть непонятым, но никогда
                не рискуешь быть фальшивым
            </p>
            <Principles
                principles={[
                    {
                        title: "Честность с клиентом",
                        text: "Я не соглашаюсь на решения, которые вредят проекту. Если идея не работает - честно скажу и предложу альтернативу.",
                    },
                    {
                        title: "Дизайн - это не только красиво, но и удобно",
                        text: "В каждом проекте ищу баланс между эстетикой и функциональностью. Интерфейс должен быть не только стильным, но и интуитивным.",
                    },
                    {
                        title: "Думаю как разработчик",
                        text: "Создаю макеты, которые реально внедрить без боли для айтишников: продумываю все состояния, адаптивы и детали.",
                    },
                    {
                        title: "Не работаю «на поток»",
                        text: "Каждый проект - это часть моего портфолио и репутации. Вкладываю душу и время, чтобы результатом гордились оба - и я, и заказчик.",
                    },
                    {
                        title: "Поддержка после сдачи",
                        text: "Не бросаю проекты на полпути: помогаю с внедрением, дорабатываю, консультирую по всем вопросам.",
                    },
                    {
                        title: "Простота - главное оружие",
                        text: "Чем проще и понятнее решение, тем оно сильнее. Убираю лишнее, чтобы оставить главное.",
                    },
                    {
                        title: "Постоянное развитие",
                        text: "Следую за трендами, но не слепо: беру из них лучшее, чтобы твой проект был актуальным и долговечным.",
                    },
                    { title: "", text: "", isEmpty: true },
                ]}
            />
        </div>
    );
}

function Principles({
    principles,
}: {
    principles: { title: string; text: string; isEmpty?: boolean }[];
}) {
    return (
        <div className={styles["principles-container"]}>
            {principles.map((principal, index) => {
                const orderNumber = index + 1;
                return (
                    <Principal
                        key={index}
                        order={`${orderNumber < 10 ? "0" : ""}${orderNumber}`}
                        title={principal.title}
                        text={principal.text}
                        isEmpty={!!principal.isEmpty}
                    />
                );
            })}
        </div>
    );
}

function Principal({
    order,
    title,
    text,
    isEmpty,
}: {
    order: string;
    title: string;
    text: string;
    isEmpty: boolean;
}) {
    if (isEmpty) {
        return <div className={styles["principal-container"]}></div>;
    }

    return (
        <div className={styles["principal-container"]}>
            <p className="subtext-big">{order}</p>
            <p className={styles["principal-title"]}>{title}</p>
            <p className={styles["principal-text"]}>{text}</p>
        </div>
    );
}
