import PageContainer from "../components/PageContainer";
import PageEmbed from "../components/PageEmbed";
import PageContent from "../components/PageContent";

export default function Tuition() {
    return (
        <PageContainer id="tuition">
            <PageEmbed url="https://tsl-tuition-datavis-2022.vercel.app/"/>
            <PageContent>
                <p>This story is by far my most technically impressive and large-scale. But I've learned a lot since making it, especially the importance of focusing in on what I'm trying to say.</p>
                <p>If I were to re-do this story, I would narrow my question substantially. Recently Pomona dining hall workers <a href="https://undercurrents.ghost.io/92-of-pomona-dining-workers-just-voted-to-authorize-a-strike-whats-next/">went on strike in protest of low wages</a>. The school's response: "We can't afford a raise."</p>
                <p>Having dug up all the data, I don't believe the school's claim. If I were to return to this dataset I would look not just at general numbers, but how much money is allocated for faculty salaries, how much money is allocated for staff salaries and how these numbers have changed over the past decade. I would use the data to press administrators on the specific question of staff pay.</p>
                <p>But when I wrote this story, a first-time news editor leading a half-dozen eager student writers, I hadn't yet had this sharpness ground into me. That came from Ron Lin, my Pulitzer-winning editor at the AAJA Voices fellowship, which I did the summer after I published this piece.</p>
                <p>Click next to see what the interactives I made under his guidance look like.</p>
            </PageContent>
        </PageContainer>
    )
}