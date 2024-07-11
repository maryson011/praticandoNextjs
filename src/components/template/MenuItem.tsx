import Link from "next/link";

export default function MenuItem(props: any) {
    return (
        <Link href={props.link} className="hover:bg-black p-2">
            {props.texto}
        </Link>
    )
}