import PageContainer from "../components/PageContainer";
import PageEmbed from "../components/PageEmbed";
import PageContent from "../components/PageContent";

export default function Tuition() {
    return (
        <PageContainer index={4} title="The cost of increasing costs">
            <p className="max-w-2xl text-2xl text-center mx-auto text-zinc-500">5C tuitions increase by up to 4.5% every year, consistently outpacing inflation. I looked through eight years of financial statements to find out where the money goes -- and how students feel the burden.</p>
            <PageEmbed url="https://tsl-tuition-datavis-2022.vercel.app/"/>
            <PageContent>
                <p>This story is by far my most technically impressive and large-scale.</p>
                <p>I've also learned a lot since making it, especially the importance of focusing in on what I'm trying to say.</p>
                <p>The story of increasing tuition pushing students towards professional rather than intellectual pursuits? Loud, clear, substantiated and balanced.</p>
                <p>The story of whether tuition increases are actually necessary? I got a lot of information about this. I dug up revenue and expense flows. I interviewed multiple school finance administrators. But I don't have a clear answer, or even clear questions, and it shows in how broad some of the visualizations are.</p>
                <p>If I were to re-do this story, I would narrow my question substantially. Recently Pomona dining hall workers <a href="https://undercurrents.ghost.io/92-of-pomona-dining-workers-just-voted-to-authorize-a-strike-whats-next/">went on strike in protest of low wages</a>. The school's response: we can't afford a raise.</p>
                <p>Having dug up all the data, I don't believe the school's claim. If I were to return to this dataset I would look not just at general numbers, but how much money is allocated for faculty salaries, how much money is allocated for staff salaries and how these numbers have changed over the past decade. I would use the data to press administrators on the specific question of staff pay.</p>
                <p>But when I wrote this story, a first-time news editor leading a half-dozen eager student writers, I hadn't yet had this sharpness ground from me. That came from Ron Lin, my Pulitzer-winning editor at the AAJA Voices fellowship, which I did the summer after I published this piece.</p>
                <p>Click next to see what a technically less flashy, but much sharper interactive/data/investigative piece from me looks like.</p>
            </PageContent>
        </PageContainer>
    )
}