"use client"

import { useContext } from "react";
import styles from "./Header.module.css";
import { MenuContext } from "@/utils/MenuContext";

export default function FaceHeader() {
    return (
        <header className={styles["header"]}>
            <NameContainer />
            <ContactAndMenuContainer />
        </header>
    );
}

function NameContainer() {
    return (
        <div className={styles["name-container"]}>
            <p>dmitry kuznetsov</p>
            <p className="subtext-big">ux/ui designer</p>
        </div>
    );
}

function ContactAndMenuContainer() {
    return (
        <div className={styles["contact-menu-container"]}>
            <ContactElement />
            <MenuElement />
        </div>
    );
}

function ContactElement() {
    return (
        <div className={styles["contact-container"]}>
            <p>
                tg:{" "}
                <a href="https://t.me/kuzntswwww" target="_blank">
                    @kuzntswwww
                </a>
            </p>
            <p>
                call:{" "}
                <a href="tel:79505951110" target="_blank">
                    +7 (950) 595 11 - 10
                </a>
            </p>
        </div>
    );
}

function MenuElement() {
    const { setIsMenuOpen } = useContext(MenuContext);

    return (
        <div
            className={styles["menu-container"]}
            onClick={() => setIsMenuOpen(true)}
        >
            <p>menu</p>
            <img src="icons/menu.svg" />
        </div>
    );
}
