import { ReactNode } from "react";
import styles from "./Cards.module.css"

export default function Cards() {
    return (
        <div className={styles["cards-container"]}>
            <Card backgroundImage="url(art/1-card.png)">
                <CardHeader title="Руководство клиента" subtitle="Для тех, кто уже начал работу над проектом" />
                <CardFooter 
                    links={[
                        { text: "https.dmitry@yandex.ru", href: "mailto:https.dmitry@yandex.ru"},
                        { text: "Скачать", href: "#", iconPath: "icons/arrow-top-right.svg" }
                    ]} />
            </Card>
            <Card backgroundImage="url(art/2-card.png)">
                <CardHeader title="Моя последняя работа" subtitle="Проальпстрой" />
                <CardFooter 
                    links={[
                        { text: "Смотреть", href: "#", iconPath: "icons/arrow-right.svg" }
                    ]} />
            </Card>
        </div>
    )
}

function Card({ children, backgroundImage }: { children: ReactNode, backgroundImage: string }) {
    return (
        <div className={styles["card-container"]} style={{backgroundImage}}>
            {children}
        </div>
    )
}

function CardHeader({ title, subtitle }: { title: string, subtitle: string }) {
    return (
        <div className={styles["card-header"]}>
            <h2>{title}</h2>
            <p className="subtext-big">{subtitle}</p>
        </div>
    )
}

function CardFooter({ links }: { links: { text: string, href: string, iconPath?: string }[] }) {
    return (
        <div className={styles["card-footer-container"]}>
            {links.map((link, index) => {
                const icon = link.iconPath
                    ? <img src={link.iconPath} />
                    : ""

                return (
                    <a href={link.href} target="_blank" key={index} className={styles["card-footer-link"]}>
                        <span>{link.text}</span>
                        {icon}
                    </a>
                )
            })}
        </div>
    )
}