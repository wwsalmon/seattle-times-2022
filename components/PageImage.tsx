export default function PageImage({src}: {src: string}) {
    return (
        <img src={src} className="rounded-lg shadow-2xl my-16"/>
    )
}