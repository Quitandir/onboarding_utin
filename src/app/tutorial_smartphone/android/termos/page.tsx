import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Walter_Turncoat, Space_Mono } from "next/font/google";

// Fontes otimizadas
const walterTurncoat = Walter_Turncoat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

export default function AndroidTermosPage() {
  return (
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar para a fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[900px] w-full mx-auto my-auto flex flex-col items-center gap-12 py-8">
        
        {/* Cabeçalho com Número do Passo (4) e Logo Android */}
        <header className="w-full flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-full border-[5px] border-[#a4c639] text-[#211c75] font-bold text-xl flex items-center justify-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
          >
            4
          </div>
          <Image
            src="/android.png" // <-- Nome do arquivo na pasta /public
            alt="Android"
            width={100}
            height={100}
            className="h-24 w-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            priority
          />
        </header>

        {/* Título Principal */}
        <span className={`${walterTurncoat.className} uppercase text-2xl md:text-3xl text-center`}>
          Termos e Serviços do Google
        </span>

        {/* Botão "Concordo" e Seta Decorativa */}
        <div className="w-full flex flex-col items-center relative my-4">
          <span
            className={`${walterTurncoat.className} uppercase text-xl md:text-2xl bg-[#75daff] rounded-[10px] p-4 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] text-center`}
          >
            Concordo
          </span>

          <Image
            src="/seta.png" // <-- Arquivo da seta na pasta /public
            alt="Seta indicativa"
            width={120}
            height={120}
            className="relative transition-transform duration-300 ease-in-out hover:scale-[0.85] hover:-translate-x-[0px] hover:-translate-y-[80px] drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mt-4"
          />
        </div>

      </div>

      {/* Rodapé com Navegação */}
      <footer className="w-full max-w-[900px] mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-6 pt-4">
        <a
          href="https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio"
          target="_blank"
          rel="noopener noreferrer"
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-6 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:-translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[220px]`}
        >
          Voltar à página da UTIN
        </a>

        <Link
          href="/tutorial_smartphone/android/acesso" // <-- Próxima rota no Next.js (acesso.html)
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-8 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[180px]`}
        >
          Avançar
        </Link>
      </footer>
    </main>
  );
}