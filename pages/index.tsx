import BottomBar from "../components/BottomBar";
import {useEffect, useState} from "react";
import classNames from "classnames";
import Link from "next/link";

export const projects = [
    {
        index: 1,
        title: "COVID data that faculty relied on in the absence of admin reporting",
        hed: "5C COVID Dashboard",
        dek: "A dashboard for COVID testing data that faculty relied on, that exposed official over-counting and that was awarded Best COVID Coverage of 2021 by the CA College Media Assoc.",
        id: "covid",
    },
    {
        index: 2,
        title: "Explaining tuition increases with 8 years of school financial reports",
        hed: "The Cost of Increasing Costs",
        dek: "5C tuitions increase by up to 4.5% every year, consistently outpacing inflation. I looked through eight years of financial statements to find out where the money goes -- and how students feel the burden.",
        id: "tuition",
    },
    {
        index: 3,
        title: "A first-of-its-kind investigation into journalism’s top awards",
        hed: "Journalism’s influential awards lack diverse judges",
        dek: "A groundbreaking investigative through the AAJA Voices fellowship that resulted in a first-of-its kind dataset and calls for change by top news leaders.",
        id: "pulitzers",
    },
    {
        index: 4,
        title: "Explaining COVID's damage to admitted student diversity",
        hed: "The COVID effect",
        dek: "How did Pomona admit its most competitive and least diverse class in years? Because of a record number of deferrals, the data shows.",
        id: "admissions",
    },
]

const TOD = (() => {
    const currHour = new Date().getHours();
    if (currHour < 12) return "morning";
    if (currHour < 18) return "afternoon";
    return "evening";
})();

function Card({index, title, read, id}: {index: number, title: string, read: boolean, id: string}) {
    return (
        <Link href={`/${id}`}>
            <a className={classNames(read ? "bg-zinc-400 hover:scale-[1.02] hover:shadow-lg" : "bg-zinc-800 hover:scale-105 hover:shadow-xl", "p-4 rounded-md mb-4 flex flex-col justify-between relative card transform transition")}>
                {read && (
                    <p className="absolute top-4 right-4 font-bold uppercase tracking-widest">READ</p>
                )}
                <h2 className="font-meta text-3xl font-bold mb-8">{index}.</h2>
                <p className="text-3xl">{title}</p>
            </a>
        </Link>
    )
}

export default function Home() {
    const [readList, setReadList] = useState<string[]>([]);

    useEffect(() => {
        let localReadList = JSON.parse(window.localStorage.getItem("readList"));
        setReadList(localReadList);
    }, []);

    return (
        <div className="mx-auto max-w-2xl px-4">
            <div className="text-center my-16 text-xl max-w-lg mx-auto">
                <h1 className="font-meta font-medium text-4xl">Good {TOD}, Seattle Times.</h1>
                <p className="my-4">Click through the four scenarios below to learn how I’ve <b>served communities as a journalist and interactives developer,</b> and why I want to keep doing it at The Seattle Times this summer.</p>
                <div className="flex items-center justify-center my-16">
                    <img src="/profile.jpg" alt="Profile picture of Samson Zhang" className="w-12 h-12 rounded-full mr-6"/>
                    <p><span className="font-meta">By </span><a href="twitter.com/wwsalmon" className="text-linkBlue">Samson Zhang</a></p>
                </div>
            </div>
            <BottomBar inline={true}/>
            <div className="grid grid-cols-2 gap-x-4 text-white my-24">
                {projects.map((d, i) => (
                    <Card index={i + 1} title={d.title} read={readList.includes(d.id)} key={d.id} id={d.id}/>
                ))}
            </div>
        </div>
    );
}