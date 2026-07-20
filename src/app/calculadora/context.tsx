"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface CalculadoraData {
  cpf: string;
  dataInicio: string;
  faltasLicencias: number;
  pontosExternos: number; // Novo campo para transportar a pontuação
}

interface CalculadoraContextType {
  formData: CalculadoraData;
  updateFormData: (data: Partial<CalculadoraData>) => void;
}

const CalculadoraContext = createContext<CalculadoraContextType | undefined>(undefined);

export function CalculadoraProvider({ children }: { children: ReactNode }) {
  const [formData, setFormData] = useState<CalculadoraData>({
    cpf: "",
    dataInicio: "",
    faltasLicencias: 0,
    pontosExternos: 0, // Iniciado com zero
  });

  const updateFormData = (data: Partial<CalculadoraData>) => {
    setFormData((prev) => ({ ...prev, ...data }));
  };

  return (
    <CalculadoraContext.Provider value={{ formData, updateFormData }}>
      {children}
    </CalculadoraContext.Provider>
  );
}

export function useCalculadora() {
  const context = useContext(CalculadoraContext);
  if (!context) {
    throw new Error("useCalculadora deve ser usado dentro de um CalculadoraProvider");
  }
  return context;
}