
import MenuItem from "./MenuItem";

export default function MenuPrincipal() {

    return (
        <aside className="w-60 bg-zinc-900">
            <nav className="flex flex-col p-5 gap-1">
                <MenuItem link='/primeiro'>Primeiro Componente</MenuItem>
                <MenuItem link='/flexbox'>Flexbox</MenuItem>
                <MenuItem link='/pagina'>Componente Página</MenuItem>
                {/* {menuItem('/primeiro', 'Primeiro Componente')}
                {menuItem('/flexbox', 'Flexbox')}
                {menuItem('/pagina', 'Componente Página')} */}
                {/* <Link href="/primeiro" className="hover:bg-black p-2">Primeiro Componente</Link>
                <Link href="/flexbox">Flexbox</Link>
                <Link href="/pagina">Componente Página</Link> */}
            </nav>
        </aside>
    )
}