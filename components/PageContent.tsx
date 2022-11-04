import {ReactNode} from "react";
import classNames from "classnames";

export default function PageContent({children, className}: {children: ReactNode, className?: string}) {
    return (
        <div className={classNames("max-w-2xl mx-auto content my-32", className)}>
            {children}
        </div>
    );
}