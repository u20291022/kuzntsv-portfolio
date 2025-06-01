"use client";

import { motion, useScroll, useTransform } from "motion/react";
import styles from "./CostBlock.module.css";
import { ReactNode, useRef } from "react";

export default function CostBlock() {
    return (
        <div className={styles["cost-block-container"]}>
            <CostBlockHeader />
            <CostBlockInfo>
                <CostTextInfo />
                <CostTelegramGif />
                <CostCards />
            </CostBlockInfo>
        </div>
    );
}

function CostBlockHeader() {
    const ref = useRef(null);

    const { scrollYProgress } = useScroll({
        offset: ["start end", "end start"],
    });

    const x = useTransform(scrollYProgress, [0, 1], ["-40%", "-25%"]);

    return (
        <motion.header ref={ref} className={styles["cost-block-header"]}>
            <motion.h1 className={styles["cost-header-text"]} style={{x}}>
                СТОИМОСТЬ / стоимость / стоимость / СТОИМОСТЬ / стоимость /
                СТОИМОСТЬ / стоимость / стоимость / СТОИМОСТЬ / стоимость /
                СТОИМОСТЬ / стоимость / стоимость / СТОИМОСТЬ / стоимость /
                СТОИМОСТЬ / стоимость / стоимость / СТОИМОСТЬ / стоимость /
                СТОИМОСТЬ / стоимость / стоимость / СТОИМОСТЬ / стоимость /
                стоимость / СТОИМОСТЬ / стоимость / стоимость /
            </motion.h1>
        </motion.header>
    );
}

function CostBlockInfo({ children }: { children: ReactNode }) {
    return <div className={styles["cost-block-info"]}>{children}</div>;
}

function CostTextInfo() {
    return (
        <div className={styles["cost-text-info"]}>
            <p className={styles["cost-text-info-p"]}>DMITRY KUZNTESOV</p>
            <div className={styles["cost-text-center"]}>
                <p className={styles["cost-text-info-p"]}>
                    Можно от балды сказать, что стоимость проекта будет
                    составлять от 5.000 рублей. Или больше сотни.
                </p>
                <p className={styles["cost-text-info-p"]}>
                    Но настоящий профессионал называет стоимость лишь после
                    того, как услышит объем работы.
                </p>
            </div>
            <p
                className={styles["cost-text-info-p"]}
                role-mark="true"
            >
                UX/UI DESIGNER
            </p>
        </div>
    );
}

function CostTelegramGif() {
    return (
        <div className={styles["telegram-gif-container"]}>
            <img className={styles["telegram-gif"]} src="gifs/telegram.gif" />
        </div>
    );
}

function CostCards() {
    const costCard1Info = {
        category: "Консультация",
        cost: "бесплатно",
        caption:
            "Бесплатно расскажу в каком направлении вам двигаться и какой проект вам необходим для поднятия продаж.",
        askQuestionButton: true,
    };

    const costCard2Info = {
        category: "Разработка проекта / Проект под ключ",
        cost: "От 45.000 руб.",
        caption:
            "Минимальная стоимость моей работы. Именно столько стоит разработка одностраничного сайта из 5 блоков, собранный по шаблонам.",
    };

    return (
        <div className={styles["cost-cards-container"]}>
            <CostCard {...costCard1Info} />
            <CostCard {...costCard2Info} />
        </div>
    );
}

function CostCard({
    category,
    cost,
    caption,
    askQuestionButton,
}: {
    category: string;
    cost: string;
    caption: string;
    askQuestionButton?: boolean;
}) {
    return (
        <div
            className={styles["cost-card-container"]}
            has-button={`${askQuestionButton}`}
        >
            <h2 className={styles["cost-card-category"]}>{category}</h2>
            {askQuestionButton && (
                <a href="#" className={styles["cost-card-button"]}>
                    Задать вопрос
                </a>
            )}
            <div className={styles["cost-card-text-container"]}>
                <h1 className={styles["cost-text"]}>{cost}</h1>
                <p className={styles["cost-text-p"]}>{caption}</p>
            </div>
        </div>
    );
}
