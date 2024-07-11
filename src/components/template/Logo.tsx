export default function Logo() {
    return (
        <div className="flex gap-2">
            <div className="flex gap-1">
                <span className="h-5 w-5 rounded-full m-1 bg-red-500"></span>
                <span className="h-5 w-5 rounded-full m-1 bg-green-500"></span>
                <span className="h-5 w-5 rounded-full m-1 bg-blue-500"></span>
            </div>
            <span className="font-black">LogoJS</span>
        </div>
    )
}