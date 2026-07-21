import React from "react";
import Image from "next/image";
import Link from "next/link";
import { WindSong, Space_Mono, Walter_Turncoat } from "next/font/google";

// Fontes otimizadas do Google Fonts
const windSong = WindSong({
  weight: "500",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

const walterTurncoat = Walter_Turncoat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function AndroidPasso2Page() {
  return (
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] px-6 md:px-10 py-8 flex flex-col justify-between selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar da fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[1000px] w-full mx-auto my-auto flex flex-col gap-8 py-6">
        
        {/* Cabeçalho com Número do Passo (2) e Logo Android */}
        <header className="w-full flex items-center justify-between">
          <div
            className="w-12 h-12 rounded-full border-[5px] border-[#eee] text-[#211c75] font-bold text-xl flex items-center justify-center drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
          >
            2
          </div>
          <Image
            src="/logo_ios.png" // <-- Logo Android em /public
            alt="ios"
            width={100}
            height={100}
            className="h-24 w-auto object-contain drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]"
            priority
          />
        </header>

        {/* Fluxo de Passos em Caixas (Responsivo) */}
        <div className="w-full flex flex-col min-[765px]:flex-row items-center justify-center gap-6 min-[765px]:gap-4 my-auto">
          
          {/* Item 1: Configurar e-mail */}
          <div className="flex flex-col items-center justify-between gap-6 text-center max-w-[240px]">
            <span className={`${walterTurncoat.className} text-xl md:text-2xl uppercase tracking-wider`}>
              Configurar e-mail
            </span>
            <div className="w-24 h-24 relative overflow-hidden my-2 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)]">
              <Image
                src="https://drive.google.com/thumbnail?id=1OJvGE4_n3RcnWSrirjeyFk5k7UobivOw&sz=w200"
                alt="Logo Google"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Seta Divisória 1 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] rotate-90 min-[765px]:rotate-0 transition-transform flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
            <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
            <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
          </svg>

          {/* Item 2: Modal "Continuar" */}
          <div className="flex flex-col items-center justify-between gap-6 text-center max-w-[240px]">
            <span className={`${walterTurncoat.className} text-lg md:text-lg uppercase tracking-wider`}>
              “Gmail” Deseja Usar “accounts.google.com” para Iniciar Sessão
            </span>
            <div className="bg-gray-500 text-white font-bold text-xs uppercase px-6 py-3 rounded-[10px] shadow-md drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] cursor-default select-none my-2">
              Continuar
            </div>
          </div>

          {/* Seta Divisória 2 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-12 h-12 drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] rotate-90 min-[765px]:rotate-0 transition-transform flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M12.089 3.634a2 2 0 0 0 -1.089 1.78l-.001 2.585l-1.999 .001a1 1 0 0 0 -1 1v6l.007 .117a1 1 0 0 0 .993 .883l1.999 -.001l.001 2.587a2 2 0 0 0 3.414 1.414l6.586 -6.586a2 2 0 0 0 0 -2.828l-6.586 -6.586a2 2 0 0 0 -2.18 -.434l-.145 .068z" />
            <path d="M3 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
            <path d="M6 8a1 1 0 0 1 .993 .883l.007 .117v6a1 1 0 0 1 -1.993 .117l-.007 -.117v-6a1 1 0 0 1 1 -1z" />
          </svg>

          {/* Item 3: Inserir E-mail */}
          <div className="flex flex-col items-center justify-between gap-6 text-center max-w-[240px]">
            <span className={`${walterTurncoat.className} text-lg md:text-lg uppercase tracking-wider`}>
              Faça login, digitando o seu e-mail @canoasedu.rs.gov.br
            </span>
            <div className="bg-gray-500 text-white font-bold text-xs uppercase px-6 py-3 rounded-[10px] shadow-md drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] cursor-default select-none my-2">
              E-mail ou telefone
            </div>
          </div>

        </div>

      </div>

      {/* Rodapé com Navegação */}
      <footer className="w-full max-w-[1000px] mx-auto flex flex-col-reverse sm:flex-row justify-between items-center gap-4 pt-4">
        <a
          href="https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio"
          target="_blank"
          rel="noopener noreferrer"
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-6 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 transition-all duration-300 shadow-md w-full sm:w-auto`}
        >
          Voltar à página da UTIN
        </a>

        <Link
          href="/tutorial_smartphone/ios/acesso" // <-- Rota para a próxima etapa (Passo 3)
          className={`${spaceMono.className} bg-[#211c75] text-[#fdf6d8] font-bold text-xs md:text-sm uppercase px-8 py-3 rounded-[10px] text-center hover:bg-[#3a33a1] hover:scale-95 transition-all duration-300 shadow-md w-full sm:w-auto`}
        >
          Avançar
        </Link>
      </footer>
    </main>
  );
}