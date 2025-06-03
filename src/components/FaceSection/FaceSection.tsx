import FaceHeader from "./Header/Header";
import PageSection from "../PageSection/PageSection";
import FaceContent from "./Content/Content";

export default function FaceSection() {
    return (
        <PageSection
            id="face-section"
            backgroundVideo="https://cloud.ayo-server.ru:8443/public.php/dav/files/K4BDXLQ7KoHAXjb/"
            backgroundColor="linear-gradient(to top, rgba(0,0,0,0), rgba(0,0,0,0.45))"
            nextPageId="laptop-section">
            <FaceHeader />
            <FaceContent />
        </PageSection>
    )
}