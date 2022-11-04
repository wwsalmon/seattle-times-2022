import {ReactNode} from "react";
import BottomBar from "./BottomBar";
import Link from "next/link";
import {FiArrowLeft} from "react-icons/fi";
import {projects} from "../pages";

export default function PageContainer({children, id}: { children: ReactNode, id: string }) {
    const thisProject = projects.find(d => d.id === id);

    return (
        <div className="mx-auto px-4 max-w-6xl my-16 pb-32">
            <p className="uppercase tracking-widest uppercase font-bold mb-4 text-center">Project {thisProject.index}</p>
            <h1 className="text-center text-6xl font-meta font-medium text-center mb-10">{thisProject.hed}</h1>
            <p className="max-w-2xl text-2xl text-center mx-auto text-zinc-500">{thisProject.dek}</p>
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