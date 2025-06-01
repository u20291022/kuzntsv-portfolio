import styles from "./Footer.module.css";

export default function Footer() {
    return (
        <footer className={styles["footer-container"]}>
            <div className={styles["logo-container"]}>
                <img className={styles["logo"]} src="logo.svg" alt="Dmitriy Kuznetsov"/>
            </div>

            <div className={styles["links-container"]}>
                <div className={styles["social-links"]}>
                    <a href="https://www.behance.net/" target="_blank" rel="noopener noreferrer">behance</a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">instagram</a>
                    <a href="https://t.me/" target="_blank" rel="noopener noreferrer">telegram</a>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">linkedin</a>
                </div>
                
                <div className={styles["info-links"]}>
                    <a href="#" className={styles["docs-link"]}>руководство пользователя</a>
                    <a href="#" className={styles["privacy-link"]}>privacy</a>
                    <a href="tel:+79505951110" className={styles["phone-link"]}>+7 (950) 595 11 - 10</a>
                    <a href="mailto:https.dmitry@yandex.ru" className={styles["email-link"]}>https.dmitry@yandex.ru</a>
                </div>
            </div>

            <div className={styles["copyright"]}>
                KZNTSV © 2025
                <br />
                ALL RIGHTS RESERVED
            </div>
        </footer>
    );
}
