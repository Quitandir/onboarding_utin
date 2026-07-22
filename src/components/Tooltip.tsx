import React, { useState } from "react";

interface HoverModalProps {
  children: React.ReactNode; // O elemento que dispara o hover (ícone, botão, texto, etc.)
  content: React.ReactNode;  // O conteúdo do modal (pode ser texto ou JSX complexo)
  position?: "top" | "bottom" | "left" | "right"; // Posição do balão
  className?: string;        // Classes extras para customizar o modal se precisar
}

export function Tooltip({
  children,
  content,
  position = "top",
  className = "",
}: HoverModalProps) {
  const [isOpen, setIsOpen] = useState(false);

  // Mapeamento das posições no Tailwind
  const positionClasses = {
    top: "bottom-full mb-2 left-1/2 -translate-x-1/2",
    bottom: "top-full mt-2 left-1/2 -translate-x-1/2",
    left: "right-full mr-2 top-1/2 -translate-y-1/2",
    right: "left-full ml-2 top-1/2 -translate-y-1/2",
  };

  return (
    <div
      className="relative inline-flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onFocus={() => setIsOpen(true)}
      onBlur={() => setIsOpen(false)}
    >
      {/* Elemento Gatilho */}
      {children}

      {/* Modal / Tooltip Flutuante */}
      {isOpen && (
        <div
          role="tooltip"
          className={`absolute z-50 pointer-events-none w-max max-w-xs transition-all duration-150 ${positionClasses[position]} ${className}`}
        >
          <div className="bg-gray-900 text-white text-xs rounded-lg p-3 shadow-xl border border-gray-700 leading-relaxed">
            {content}
          </div>
        </div>
      )}
    </div>
  );
}