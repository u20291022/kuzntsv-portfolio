import PageSection from "../PageSection/PageSection";
import styles from "./CostSection.module.css";

export default function CostSection() {
    return (
        <PageSection id="cost-section">
            <Blocks />
        </PageSection>
    );
}

function Blocks() {
    return <div className={styles["blocks-container"]}></div>;
}
