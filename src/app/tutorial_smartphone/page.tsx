import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Walter_Turncoat, WindSong } from "next/font/google";

// Importação otimizada das fontes do Google via Next.js
const walterTurncoat = Walter_Turncoat({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const windSong = WindSong({
  weight: ["400", "500"],
  subsets: ["latin"],
  display: "swap",
});

export default function TutorialSmartphone() {
  return (
    // Import do Comic Relief direto para este componente
    <main className="min-h-screen bg-[#fdf6d8] text-[#211c75] p-6 md:p-10 flex flex-col justify-between items-center selection:bg-[#211c75] selection:text-[#fdf6d8]">
      {/* Importação auxiliar para a fonte Comic Relief */}
      <link
        href="https://fonts.googleapis.com/css2?family=Comic+Relief:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <div className="max-w-[900px] w-full flex flex-col items-center justify-center gap-6 my-auto mb-8 text-center">
        
        {/* Título Principal */}
        <h1 
          className="text-4xl md:text-6xl font-bold [text-shadow:1px_1px_2px_blue] mt-4"
          style={{ fontFamily: "'Comic Relief', system-ui, sans-serif" }}
        >
          CanoasEdu no smartphone
        </h1>

        {/* Subtítulo */}
        <h4 className={`${walterTurncoat.className} uppercase text-2xl md:text-3xl [text-shadow:1px_1px_2px_pink]`}>
          Guia Rápido
        </h4>

        {/* Imagem do Envelope (Ajuste o src para a sua pasta public conforme necessário) */}
        <div className="my-2">
          <Image
            src="/envelope.png" // <-- Substitua pelo nome do seu arquivo na pasta public (ex: /images/envelope.png)
            alt="Envelope colorido"
            width={200}
            height={200}
            className="w-48 h-auto object-contain"
            priority
          />
        </div>

        {/* Créditos */}
        <span className={`${walterTurncoat.className} uppercase text-sm md:text-base tracking-wide [text-shadow:1px_1px_2px_pink]`}>
          cordialmente desenvolvido pela utin/sme - time google
        </span>

        {/* Chamada */}
        <h3 className={`${windSong.className} text-3xl md:text-5xl my-4 text-center`}>
          Escolha o sistema do seu celular para começar o passo a passo:
        </h3>

        {/* Links de Seleção de Sistema Operacional */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 mt-2">
          
          {/* Link Android */}
          <Link
            href="/tutorial_smartphone/android" // <-- Altere para a rota desejada do Next.js
            className={`${walterTurncoat.className} flex flex-col items-center gap-2 text-[#211c75] uppercase text-lg hover:scale-105 transition-transform duration-200 group`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              fill="#4169E1"
              viewBox="0 0 256 256"
              className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform duration-200"
            >
              <path d="M176,148a12,12,0,1,1-12-12A12,12,0,0,1,176,148ZM92,136a12,12,0,1,0,12,12A12,12,0,0,0,92,136Zm148,24v24a16,16,0,0,1-16,16H32a16,16,0,0,1-16-16V161.13A113.38,113.38,0,0,1,51.4,78.72L26.34,53.66A8,8,0,0,1,37.66,42.34L63.82,68.5a111.43,111.43,0,0,1,128.55-.19l26-26a8,8,0,0,1,11.32,11.32L204.82,78.5c.75.71,1.5,1.43,2.24,2.17A111.25,111.25,0,0,1,240,160Zm-16,0a96,96,0,0,0-96-96h-.34C74.91,64.18,32,107.75,32,161.13V184H224Z" />
            </svg>
            <span>android</span>
          </Link>

          {/* Link iOS */}
          <Link
            href="/tutorial_smartphone/ios" // <-- Altere para a rota desejada do Next.js
            className={`${walterTurncoat.className} flex flex-col items-center gap-2 text-[#211c75] uppercase text-lg hover:scale-105 transition-transform duration-200 group`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="96"
              height="96"
              fill="#4169E1"
              viewBox="0 0 256 256"
              className="drop-shadow-[3px_3px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform duration-200"
            >
              <path d="M223.3,169.59a8.07,8.07,0,0,0-2.8-3.4C203.53,154.53,200,134.64,200,120c0-17.67,13.47-33.06,21.5-40.67a8,8,0,0,0,0-11.62C208.82,55.74,187.82,48,168,48a72.2,72.2,0,0,0-40,12.13,71.56,71.56,0,0,0-90.71,9.09A74.63,74.63,0,0,0,16,123.4a127.06,127.06,0,0,0,40.14,89.73A39.8,39.8,0,0,0,83.59,224h87.68a39.84,39.84,0,0,0,29.12-12.57,125,125,0,0,0,17.82-24.6C225.23,174,224.33,172,223.3,169.59Zm-34.63,30.94a23.76,23.76,0,0,1-17.4,7.47H83.59a23.82,23.82,0,0,1-16.44-6.51A111.14,111.14,0,0,1,32,123,58.5,58.5,0,0,1,48.65,80.47,54.81,54.81,0,0,1,88,64h.78A55.45,55.45,0,0,1,123,76.28a8,8,0,0,1,10,0A55.44,55.44,0,0,1,168,64a70.64,70.64,0,0,1,36,10.35c-13,14.52-20,30.47-20,45.65,0,23.77,7.64,42.73,22.18,55.3A105.82,105.82,0,0,1,188.67,200.53ZM128.23,30A40,40,0,0,1,167,0h1a8,8,0,0,1,0,16h-1a24,24,0,0,0-23.24,18,8,8,0,1,1-15.5-4Z" />
            </svg>
            <span>ios</span>
          </Link>

        </div>

      </div>

      {/* Botão de Voltar */}
      <a
        href="https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#211c75] text-[#fdf6d8] font-mono font-bold text-xs md:text-sm uppercase px-6 py-3 rounded-xl max-w-[240px] text-center hover:bg-[#3a33a1] hover:scale-95 hover:-translate-x-1 transition-all duration-300 shadow-md self-start md:self-auto mt-4"
      >
        Voltar à página da UTIN
      </a>

    </main>
  );
}