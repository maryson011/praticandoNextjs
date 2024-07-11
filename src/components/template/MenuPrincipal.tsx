import Link from "next/link";

export default function MenuPrincipal() {
     function menuItem(link: string, texto: string) {
        return (
            <Link href={link} className="hover:bg-black p-2">
                {texto}
            </Link>
        )
     }

    return (
        <aside className="w-60 bg-zinc-900">
            <nav className="flex flex-col p-5 gap-1">
                {menuItem('/primeiro', 'Primeiro Componente')}
                {menuItem('/flexbox', 'Flexbox')}
                {menuItem('/pagina', 'Componente Página')}
                {/* <Link href="/primeiro" className="hover:bg-black p-2">Primeiro Componente</Link>
                <Link href="/flexbox">Flexbox</Link>
                <Link href="/pagina">Componente Página</Link> */}
            </nav>
        </aside>
    )
}