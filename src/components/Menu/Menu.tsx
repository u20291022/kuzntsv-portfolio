"use client";

import { useContext, useEffect, useState } from "react";
import styles from "./Menu.module.css";
import { MenuContext } from "@/utils/MenuContext";

export default function Menu() {
    const { isMenuOpen, setIsMenuOpen } = useContext(MenuContext);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        let timeouts: NodeJS.Timeout[] = [];

        if (isMenuOpen) {
            const bgTimeout = setTimeout(() => setShowBackground(true), 500);
            timeouts.push(bgTimeout);
        } else {
            setShowBackground(false);
        }

        return () => timeouts.forEach(clearTimeout);
    }, [isMenuOpen]);

    return (
        <div className={`${styles["overlay"]} ${isMenuOpen ? styles["open"] : ""}`}>
            <button
                className={styles["closeButton"]}
                onClick={() => setIsMenuOpen(false)}
            >
                <span>CLOSE</span>
                <div className={styles["closeIcon"]}></div>
            </button>

            <div
                className={`${styles["backgroundImage"]} ${
                    showBackground ? styles.show : ""
                }`}
            ></div>
        </div>
    );
}
