import Pagina from "@/components/template/Pagina";
import Link from "next/link";

const raio = 4.5
const PI = 3.14159

const titulo = (
    <div>
        <h1>Titulo</h1>
        <h2>Sub titulo</h2>
    </div>
)

function anoAtual() {
    return new Date().getFullYear()
}

function gerarUmaLista() {
    return (
        <ul className=" pl-12 list-disc">
            <li>João</li>
            <li>Maria</li>
            <li>Rute</li>
        </ul>
    )
}

export default function Primeiro() {
    return (
            <>
                <h1>Primeiro</h1>
                <nav>
                    <Link href="/">Home</Link>
                </nav>
                <div className="flex flex-col">
                    <span>{Math.random()}</span>
                    <span>{anoAtual()}</span>
                    <span>{gerarUmaLista()}</span>
                </div>
                <div>
                    <span>{PI * Math.pow(raio, 2)}</span>
                </div>
                <div>
                    {titulo}
                </div>
            </>
    )
}