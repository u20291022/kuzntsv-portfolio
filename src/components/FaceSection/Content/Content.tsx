import Cards from "./Cards/Cards";
import TextAndTags from "./TextAndTags/TextAndTags";
import styles from "./Content.module.css"
import FaceButtons from "./FaceButtons/FaceButtons";

export default function FaceContent() {
    return (
        <div className={styles["content-container"]}>
            <div>
                <Cards />
                <TextAndTags />
            </div>
            <FaceButtons />
        </div>
    )
}