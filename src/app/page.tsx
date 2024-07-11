import Pagina from "@/components/template/Pagina";
import { IconDashboard } from '@tabler/icons-react';

export default function Home() {
  return (
    <Pagina>
      <div className="flex flex-col justify-center items-center w-full h-96">
        <IconDashboard size={100} stroke={.5} className="text-zinc-500"/>
        <div className="flex flex-col items-center">
          <h1 className="font-black">Masterclass Next</h1>
        </div>
      </div>
    </Pagina>
  );
}
