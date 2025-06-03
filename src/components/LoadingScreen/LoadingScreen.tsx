"use client";
import { ReactNode, useEffect, useState } from "react";
import styles from "./LoadingScreen.module.css";

export default function LoadingScreen({ children }: { children: ReactNode }) {
    const [loading, setLoading] = useState(true);
    const [fadeOut, setFadeOut] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(() => setFadeOut(true), 500);
            setTimeout(() => setLoading(false), 2000);
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
    <>
        <LoadingComponent fadeOut={fadeOut} visible={loading} />
        {children}
    </>
);
}

function LoadingComponent({ fadeOut, visible }: { fadeOut: boolean, visible: boolean }) {
    if (!visible) return null;

    return (
        <div className={styles["loading-container"]} fade-out={`${fadeOut}`}>
            <LoadingNameAnimation />
            <LoadingCircle />
        </div>
    );
}

export function LoadingNameAnimation() {
    return (
        <div className={styles["names-container"]}>
            <div className={styles["name-wrapper"]}>
                <img className={styles["firstname"]} src="fullname.svg" />
            </div>
            <div className={styles["name-wrapper"]}>
                <img className={styles["lastname"]} src="lastname.svg" />
            </div>
        </div>
    );
}

function LoadingCircle() {
    return (
        <div className={styles["loading-cirlce-container"]}>
            <div className={styles["loading-circle"]}>
                <div className={styles["small-circle"]}></div>
            </div>
        </div>
    )
}
