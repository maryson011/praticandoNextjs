import Caixa from "@/components/Caixa";
import Pagina from "@/components/template/Pagina";
import Link from "next/link";

export default function Page() {
    return (
            <div className="h-96">
                <nav>
                    <Link href="/">Home</Link>
                </nav>
                <h1>Flexbox</h1>
                <div className="
                    h-full
                    flex
                    justify-around
                    items-center
                ">
                    <Caixa texto="Primeiro Texto" className="bg-green-400"/>
                    <Caixa texto="@ texto 2" className="flex-grow"/>
                    <Caixa texto="3@@ TEXTO 3"/>
                </div>
            </div>
    )
}