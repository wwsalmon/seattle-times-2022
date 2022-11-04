import PageContainer from "../components/PageContainer";
import PageEmbed from "../components/PageEmbed";
import PageContent from "../components/PageContent";

export default function Admissions() {
    return (
        <PageContainer index={3} title="Admissions">
            <p className="text-center -mb-8">(Scroll in the embedded graphic below)</p>
            <PageEmbed url="https://idyll.pub/post/tsl-pomona-admissions-2025-37d26b9ee85d2445bd19a155/" height={600}/>
            <PageContent>
                <p>When reporters from my student paper, <i>The Student Life</i>, got a tip from a faculty meeting that the class of 2025 was less diverse than previous classes, I started digging into why.</p>
                <p>I found that the record number of deferrals -- 83 students out of a class of 469 students -- was the main contributor, as not a single student who deferred admission was a first-generation student.</p>
                <p>Interviews with admissions officers further revealed that the pandemic compromised the school's outreach and recruiting initiatives.</p>
                <p>I produced an interactive scroller piece that visualized these impacts, as well as the year's record low acceptance rate, the skewed class enrollments and how exactly the student body racial composition had changed.</p>
                <p>The piece was awarded <b>Best Interactive Graphic of 2021 by the California College Media Association</b>.</p>
                <p><a href="https://tsl.news/pomona-class-of-2025-diversity/">Read the full story here</a>.</p>
            </PageContent>
        </PageContainer>
    )
}