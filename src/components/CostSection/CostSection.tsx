import PageSection from "../PageSection/PageSection";
import styles from "./CostSection.module.css";
import CostBlock from "./CostBlock/CostBlock";

export default function CostSection() {
    return (
        <PageSection id="cost-section" heightByContent={true}>
            <Blocks />
        </PageSection>
    );
}

function Blocks() {
    return (
        <div className={styles["blocks-container"]}>
            <CostBlock />
            <InfoBlocks />
        </div>
    );
}

function InfoBlocks() {
    return (
        <div className={styles["info-blocks-container"]}>
            <InfoBlock title="Знаю стилей в дизайне" value="15+" />
            <InfoBlock title="Работаю с дизайном" value="5 лет" />
            <InfoBlock title="Никогда не бросаю своих клиентов и выполняю правки по сей день" value="365 д/г" />
        </div>
    );
}

function InfoBlock({ title, value }: { title: string, value: string }) {
    return (
        <div className={styles["info-block-container"]}>
            <h2 className={styles["info-block-title"]}>{title}</h2>
            <h1 className={styles["info-block-value"]}>{value}</h1>
        </div>
    );
}
