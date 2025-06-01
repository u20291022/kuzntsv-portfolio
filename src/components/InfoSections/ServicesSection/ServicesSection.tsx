import PageSection from "@/components/PageSection/PageSection";
import InfoHeader from "../Header/InfoHeader";

export default function ServicesSection() {
    return (
        <PageSection id="services-section">
            <InfoHeader
                category="Мои услуги"
                title="КАКОЙ ПРОЕКТ МНЕ НУЖЕН?"
                subtitles={[
                    "ТОТ, ЧТО ПРИНОСИТ ДЕНЬГИ.",
                    "ИЛИ... ТОТ, ЧТО ДЛЯ ДУШИ. ОДНО ДРУГОМУ НЕ МЕШАЕТ.",
                ]}
            />
        </PageSection>
    );
}
