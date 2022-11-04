import {ReactNode} from "react";
import BottomBar from "./BottomBar";
import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";

export default function PageContainer({children, index, title}: { children: ReactNode, index: number, title: string }) {
    return (
        <div className="mx-auto px-4 max-w-6xl my-16 pb-32">
            <p className="uppercase tracking-widest uppercase font-bold mb-4 text-center">Project {index}</p>
            <h1 className="text-center text-6xl font-meta font-medium text-center mb-10">{title}</h1>
            {children}
            <Link href="/">
                <a className="w-64 mx-auto block flex items-center justify-center bg-black hover:bg-zinc-800 text-white p-4 rounded-md">
                    <FiArrowLeft/><span className="ml-2">Back home</span>
                </a>
            </Link>
            <BottomBar/>
        </div>
    )
}