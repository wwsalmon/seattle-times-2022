import {useEffect, useState} from "react";
import classNames from "classnames";
import {useRouter} from "next/router";

export default function BottomBar({inline}: {inline?: boolean}) {
    const router = useRouter();
    const [readList, setReadList] = useState<string[]>([]);

    useEffect(() => {
        let localReadList = JSON.parse(window.localStorage.getItem("readList") || "[]");
        const thisRoute = router.route.substring(1);
        if (["covid", "pulitzers", "admissions", "ice"].includes(thisRoute) && !localReadList.includes(thisRoute)) {
            localReadList.push(thisRoute);
        }
        setReadList(localReadList);
    }, []);

    useEffect(() => {
        window.localStorage.setItem("readList", JSON.stringify(readList));
    }, [readList]);

    return (
        <div className={classNames(!inline && "p-4 fixed w-full bottom-0 bg-white left-0 z-5")}>
            <div className={classNames(!inline && "max-w-2xl mx-auto px-4")}>
                <p>You've read {readList.length} of 4 scenarios.</p>
                <div className="w-full h-4 bg-zinc-200 my-2 relative">
                    <div className={classNames("absolute h-full bg-green-500", {1: "w-1/4", 2: "w-1/2", 3: "w-3/4", 4: "w-full"}[readList.length])}></div>
                </div>
                {inline && (
                    <p className="text-right">Click through all four stories below to unlock my final message.</p>
                )}
            </div>
        </div>
    )
}