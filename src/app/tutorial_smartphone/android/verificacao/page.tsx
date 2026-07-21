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

export default function AndroidVerificacaoPage() {
  return (
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar para a fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[900px] w-full mx-auto my-auto flex flex-col items-start gap-8 py-8">
        
        {/* Cabeçalho com Número do Passo (3) e Logo Android */}
        <header className="w-full flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-full border-[5px] border-[#a4c639] text-[#211c75] font-bold text-xl flex items-center justify-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
          >
            3
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

        {/* Título / Instrução Principal */}
        <span className={`${walterTurncoat.className} uppercase text-xl md:text-2xl text-center w-full my-4`}>
          Escolha como você quer fazer o login na verificação em duas etapas
        </span>

        {/* Grade com as 3 Opções de Verificação (Responsivo: Coluna no mobile, Linha no desktop) */}
        <div className="w-full flex flex-col min-[765px]:flex-row items-start justify-between gap-10 min-[765px]:gap-6 my-auto">
          
          {/* Opção 1: Código no Dispositivo */}
          <div className="flex flex-col items-center justify-center text-center w-full min-[765px]:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0075ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-4"
            >
              <path d="M12 18l.01 0" />
              <path d="M9.172 15.172a4 4 0 0 1 5.656 0" />
              <path d="M6.343 12.343a7.963 7.963 0 0 1 3.864 -2.14m4.163 .155a7.965 7.965 0 0 1 3.287 2" />
              <path d="M3.515 9.515a12 12 0 0 1 3.544 -2.455m3.101 -.92a12 12 0 0 1 10.325 3.374" />
              <path d="M3 3l18 18" />
            </svg>
            <span className={`${walterTurncoat.className} uppercase text-base md:text-lg leading-snug`}>
              Usar o smartphone ou tablet para receber um código de segurança.
            </span>
          </div>

          {/* Opção 2: Código por SMS / Ligação */}
          <div className="flex flex-col items-center justify-center text-center w-full min-[765px]:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0075ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-4"
            >
              <path d="M16.5 10c3.038 0 5.5 2.015 5.5 4.5c0 1.397 -.778 2.645 -2 3.47l0 2.03l-1.964 -1.178a6.649 6.649 0 0 1 -1.536 .178c-3.038 0 -5.5 -2.015 -5.5 -4.5s2.462 -4.5 5.5 -4.5z" />
              <path d="M11.197 15.698c-.69 .196 -1.43 .302 -2.197 .302a8.008 8.008 0 0 1 -2.612 -.432l-2.388 1.432v-2.801c-1.237 -1.082 -2 -2.564 -2 -4.199c0 -3.314 3.134 -6 7 -6c3.782 0 6.863 2.57 7 5.785l0 .233" />
              <path d="M10 8h.01" />
              <path d="M7 8h.01" />
              <path d="M15 14h.01" />
              <path d="M18 14h.01" />
            </svg>
            <span className={`${walterTurncoat.className} uppercase text-base md:text-lg leading-snug`}>
              Receber um código de verificação no seu número*
            </span>
            <span className={`${walterTurncoat.className} text-[#ff1200] text-xs md:text-sm mt-3 normal-case`}>
              *Confira se o número indicado é o seu telefone atual
            </span>
          </div>

          {/* Opção 3: Código Alternativo de 8 dígitos */}
          <div className="flex flex-col items-center justify-center text-center w-full min-[765px]:w-1/3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="128"
              height="128"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#0075ff"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] mb-4"
            >
              <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
              <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
              <path d="M15 16h.01" />
              <path d="M12.01 16h.01" />
              <path d="M9.02 16h.01" />
            </svg>
            <span className={`${walterTurncoat.className} uppercase text-base md:text-lg leading-snug`}>
              Digite um dos códigos alternativos de oito dígitos**
            </span>
            <span className={`${walterTurncoat.className} text-[#ff1200] text-xs md:text-sm mt-3 normal-case`}>
              **Envie um e-mail para time.google@canoasedu.rs.gov.br ou ligue (51) 3452-7701 Ramal 5345 e nos peça o código.
            </span>
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
          href="/tutorial_smartphone/android/termos" 
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-8 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:translate-x-1 transition-all duration-300 shadow-md w-full sm:w-auto max-w-[180px]`}
        >
          Avançar
        </Link>
      </footer>
    </main>
  );
}