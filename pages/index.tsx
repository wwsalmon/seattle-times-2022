import {useEffect, useState} from "react";

const TOD = (() => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "morning";
    if (currHour < 18) return "afternoon";
    return "evening";
})();

function Card({index, title}: {index: number, title: string}) {
    return (
        <div className="bg-zinc-800 p-4 rounded-md mb-4 card flex flex-col justify-between">
            <h2 className="font-meta text-3xl font-bold mb-8">{index}.</h2>
            <p className="text-3xl">{title}</p>
        </div>
    )
}

export default function Home() {
    const [numRead, setNumRead] = useState<number>(0);

    useEffect(() => {
        setNumRead(JSON.parse(window.localStorage.getItem("numRead")))
    }, []);

    useEffect(() => {
        window.localStorage.setItem("numRead", numRead.toString());
    }, [numRead]);

    return (
        <div className="mx-auto max-w-2xl px-4">
            <div className="text-center py-16 text-xl max-w-lg mx-auto">
                <h1 className="font-meta font-medium text-4xl">Good {TOD}, Seattle Times.</h1>
                <p className="my-4">I thought an interactive portfolio would be appropriate for an interactives internship application.</p>
                <p className="my-4">Click through the four scenarios below to learn how I’ve <b>served communities as a journalist and interactives developer,</b> and why I want to keep doing it at The Seattle Times this summer.</p>
                <div className="flex items-center justify-center">
                    <img src="/profile.jpg" alt="Profile picture of Samson Zhang" className="w-12 h-12 rounded-full mr-6"/>
                    <p><span className="font-meta">By </span><a href="twitter.com/wwsalmon" className="text-linkBlue">Samson Zhang</a></p>
                </div>
            </div>
            <div className="my-8">
                <p>You've read {numRead} of 4 scenarios.</p>
                <div className="w-full h-4 bg-zinc-200 my-2"></div>
                <p className="text-right">Click through all four stories below to unlock my final message.</p>
            </div>
            <div className="grid grid-cols-2 gap-x-4 text-white my-24">
                <Card index={1} title="COVID data that faculty relied on in the absence of admin reporting"/>
                <Card index={2} title="A first-of-its-kind investigation into journalism’s top awards"/>
                <Card index={3} title="Explaining a COVID-driven decrease in student diversity"/>
                <Card index={4} title="Insights from 10 years of anti-ICE organizing"/>
            </div>
        </div>
    );
}