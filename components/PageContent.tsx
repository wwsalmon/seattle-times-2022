import {ReactNode} from "react";

export default function PageContent({children}: {children: ReactNode}) {
    return (
        <div className="max-w-2xl mx-auto content my-32">
            {children}
        </div>
    );
}