export default function PageEmbed({url, height}: {url: string, height?: number}) {
    return (
        <iframe src={url}
                className="w-full border-4 rounded-lg shadow-2xl my-16" style={{height: height || 800}}></iframe>
    )
}