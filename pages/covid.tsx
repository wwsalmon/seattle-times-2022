import {useEffect} from "react";
import PageContainer from "../components/PageContainer";
import PageEmbed from "../components/PageEmbed";
import PageImage from "../components/PageImage";
import PageContent from "../components/PageContent";

export default function Covid() {
    useEffect(() => {
        JSON.parse(window.localStorage.getItem("readList") || "[]")
    }, []);

    return (
        <>
            <PageContainer id="covid">
                <PageEmbed url="https://tsl-covid.samsonzhang.com/"/>
                <PageContent>
                    <p>The Claremont Colleges' 9,000 students and 3,600 faculty and staff are split between seven
                        undergraduate and graduate schools. Each school reported COVID testing data in a different way
                        and place.</p>
                    <p>In September 2021, I developed the 5C COVID dashboard, <b>a single interface collecting
                        up-to-date information from the five undergraduate Claremont Colleges</b>, as well as historical
                        data going back to October 2020.</p>
                    <p>Initially created for students, soon faculty and staff told us that they relied on the dashboard
                        to make decisions about COVID policy for their classes.</p>
                    <p>When I noticed inconsistencies in published COVID data, I developed a tool to <a
                        href="https://github.com/wwsalmon/tsl-covid-screenshotter">take a screenshot of every school
                        dashboard every day</a>. The tool <a href="https://tsl.news/shs-overcounted-covid-cases/">exposed
                        multiple over-counting errors</a> and led to a statement and correction from administrators.</p>
                    <p>The dashboard also informed our coverage of campus COVID surges and policy changes. It was part
                        of a package that was <b>awarded Best COVID Coverage of 2021 by the California College Media
                            Association</b>.</p>
                    <p>In Fall 2022 the Claremont Colleges stopped publicly reporting COVID data completely, leaving
                        this dashboard as the only publicly accessible archive of case counts over the last two
                        years.</p>
                </PageContent>
                <PageImage src="/covid/slide1.png"/>
                <PageImage src="/covid/slide2.png"/>
            </PageContainer>
        </>
    )
}