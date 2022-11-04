import PageContainer from "../components/PageContainer";
import PageEmbed from "../components/PageEmbed";
import PageContent from "../components/PageContent";
import TweetEmbed from "react-tweet-embed";

export default function Pulitzers() {
    return (
        <PageContainer index={2} title="AAJA Voices">
            <PageEmbed url="https://wwsalmon.github.io/aaja-voices-vis/demographics/hispanic" height={450}/>
            <PageEmbed url="https://wwsalmon.github.io/aaja-voices-vis/demographics/asian" height={480}/>
            <PageEmbed url="https://wwsalmon.github.io/aaja-voices-vis/demographics/black" height={450}/>
            <div className="grid grid-cols-2">
                <TweetEmbed tweetId="1553580536248930304"/>
                <TweetEmbed tweetId="1553766124680101888"/>
                <TweetEmbed tweetId="1553785560002490369"/>
                <TweetEmbed tweetId="1553755909976776711"/>
            </div>
            <PageContent>
                <p>Over summer 2021, I worked with the other Asian American Journalists Association's Voices Investigative Fellows to collect and publish a <b>first-of-its kind dataset</b> on the racial and ethnic background of judges at top journalism awards, including the Pulitzer, Livingston, Loeb and Peabody awards.</p>
                <p>I built the <a href="https://github.com/wwsalmon/aaja-voices-scraping">initial Python web scraper</a> used to collect the names, titles and organizations of judges at these awards. I then handled outreach to all judges of the Livingston Awards, and conducted interviews with the director of the awards, one judge, one award submission contractor and other sources.</p>
                <p>Finally, I built all the interactive graphics for the piece from scratch (using React and d3), which are all shown on this page.</p>
                <p>The final piece was presented at the AAJA National Convention in Los Angeles and <a href="https://objectivejournalism.org/2022/08/journalism-awards-lack-diverse-judges/">republished by The Objective.</a></p>
            </PageContent>
            <PageEmbed url="https://aaja-voices-table.vercel.app/"/>
        </PageContainer>
    )
}