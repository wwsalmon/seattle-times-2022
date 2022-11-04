export default function PageEmbed({url}: {url: string}) {
    return (
        <iframe src={url}
                className="w-full border-4 rounded-lg shadow-2xl my-16" style={{height: 800}}></iframe>
    )
}