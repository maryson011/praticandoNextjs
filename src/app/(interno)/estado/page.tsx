'use client'
import { useState } from "react"

export default function Page() {

    const [nome, setNome] = useState('')

    return <div>
        <div className="flex flex-col">
            <label htmlFor="tarefa">Terefa</label>
            <input 
                type="text" 
                id="tarefa"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl" />
        </div>
        <div>{nome}</div>
    </div>
}