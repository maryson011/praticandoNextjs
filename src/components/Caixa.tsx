export default function Caixa(props: any) {
    return (
        <div className={`
            flex justify-center
            items-center
            p-5
            w-30 h-30 bg-red-500
            border-2 border-zinc-500 rounded-md m-1
            ${props.className ?? ''}
        `}>
            <span>{props.texto}</span>
        </div>
    )
}