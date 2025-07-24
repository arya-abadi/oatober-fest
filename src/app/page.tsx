import Header from "@/components/Header/Header";
import PageContainer from "@/components/General/PageContainer/PageContainer";
import AboutSection from "@/components/AboutSection/AboutSection";

export default function Home() {

    return (
        <PageContainer>
            <Header />
            <AboutSection />
        </PageContainer>
    );
}
