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

export default function AndroidContaPage() {
  return (
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar para a fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[900px] w-full mx-auto my-auto flex flex-col items-start gap-8 py-8">
        
        {/* Cabeçalho com Número do Passo (2) e Logo Android */}
        <header className="w-full flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-full border-[5px] border-[#a4c639] text-[#211c75] font-bold text-xl flex items-center justify-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
          >
            2
          </div>
          <Image
            src="/android.png" // <-- Arquivo na pasta /public
            alt="Android"
            width={100}
            height={100}
            className="h-24 w-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            priority
          />
        </header>

        {/* Conteúdo do Passo 2 (Responsivo: Coluna no mobile, Linha no desktop) */}
        <div className="w-full flex flex-col min-[765px]:flex-row items-center justify-center gap-10 min-[765px]:gap-8 my-auto">
          
          {/* Opção 1: Selecionar Google */}
          <div className="flex flex-col items-center justify-center text-center">
            <span className={`${walterTurncoat.className} uppercase text-xl md:text-2xl mb-4`}>
              google
            </span>
            <Image
              src="/logo_google.png" // <-- Salve o logo do Google em /public/google-logo.png
              alt="Logo Google"
              width={200}
              height={100}
              className="w-48 h-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            />
          </div>

          {/* Seta Divisória (Gira 90 graus no mobile) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="rotate-90 min-[765px]:rotate-0 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] transition-transform duration-300"
          >
            <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
            <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
            <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
          </svg>

          {/* Opção 2: Digitar E-mail Institucional */}
          <div className="flex flex-col items-center justify-center text-center max-w-xs">
            <span className={`${walterTurncoat.className} uppercase text-lg md:text-xl leading-snug mb-4`}>
              Digite seu e-mail institucional
              <br />
              <span className="text-[#211c75] opacity-90">...@canoasedu.rs.gov.br</span>
            </span>
            <Image
              src="/inserir_email.png"
              alt="Instrução de e-mail institucional"
              width={350}
              height={200}
              className="w-64 md:w-80 h-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            />
          </div>

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
          href="/tutorial_smartphone/android/verificacao" // <-- Próxima rota no Next.js (verificacao.html)
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-8 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[180px]`}
        >
          Avançar
        </Link>
      </footer>
    </main>
  );
}