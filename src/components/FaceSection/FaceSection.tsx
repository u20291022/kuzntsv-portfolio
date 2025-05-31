import FaceHeader from "./Header/Header";
import PageSection from "../PageSection/PageSection";
import FaceContent from "./Content/Content";

export default function FaceSection() {
    return (
        <PageSection
            id="face-section"
            backgroundImage="url('art/face.png')"
            backgroundColor="linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.45))"
            nextPageId="laptop-section">
            <FaceHeader />
            <FaceContent />
        </PageSection>
    )
}