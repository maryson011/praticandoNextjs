'use client'
import { useState } from "react"
import { IconTrash, IconSend } from "@tabler/icons-react"

export default function Page() {
    const [tarefas, setTarefas] = useState<string[]>([])
    const [nome, setNome] = useState<string>('')

    function adicionarTarefa() {
        if (nome) {
            setTarefas([...tarefas, nome])
            setNome('')
        }
    }

    function excluirTarefa(i: number) {
        setTarefas(tarefas.filter((_, index) => index !== i))
    }

    return <div className="flex flex-col gap-10">
        <div className="flex flex-col">
            <label htmlFor="tarefa">Terefa</label>
            <div className="flex items-center gap-2">
                <input 
                    type="text" 
                    id="tarefa"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    className="flex-grow bg-zinc-800 px-4 py-2 rounded-md outline-none text-xl" 
                    onKeyUp={(e) => {
                        if (e.key === 'Enter') {
                            adicionarTarefa()
                        }
                    }}
                />
                <button onClick={adicionarTarefa} className="bg-blue-500 p-2 rounded-md">
                    <IconSend />
                </button>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <h2 className="text-zinc-400">Lista de Tarefas</h2>
            <ul className="flex flex-col gap-2">
                {tarefas.map((tarefa, i) => {
                    return <li key={i} className="bg-zinc-800 p-2 rounded-md flex justify-between items-center">
                        <span>{tarefa}</span>
                        <IconTrash 
                            stroke={.5}
                            onClick={() => excluirTarefa(i)}
                        />
                    </li>
                })}
            </ul>
        </div>
    </div>
}