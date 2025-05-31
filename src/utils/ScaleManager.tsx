"use client";

import { useEffect } from "react";

export default function ScaleManager() {
    useEffect(() => {
        function updateScaleCompensation() {
            const dpr = window.devicePixelRatio;
            const root = document.documentElement;

            const zoom = 1 / dpr;
            let vhCompensation: number;

            if (dpr <= 1) {
                vhCompensation = 100;
            } else if (dpr <= 1.25) {
                const ratio = (dpr - 1) / 0.25;
                vhCompensation = 100 + 25.5 * ratio;
            } else if (dpr <= 1.5) {
                const ratio = (dpr - 1.25) / 0.25;
                vhCompensation = 125.5 + 23.3 * ratio;
            } else if (dpr <= 1.75) {
                const ratio = (dpr - 1.5) / 0.25;
                vhCompensation = 148.8 + 28.2 * ratio;
            } else if (dpr <= 2) {
                const ratio = (dpr - 1.75) / 0.25;
                vhCompensation = 177 + 23 * ratio;
            } else {
                vhCompensation = dpr * 100;
            }

            root.style.setProperty("--vh-compensation", `${vhCompensation}vh`);
            document.documentElement.style.zoom = zoom.toString();
        }

        updateScaleCompensation();

        const handleResize = () => {
            updateScaleCompensation();
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return null;
}
