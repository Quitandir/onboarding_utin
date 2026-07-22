"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCalculadora } from "./context";
import { Tooltip } from "@/components/Tooltip";

export default function Passo1() {
  const router = useRouter();
  const { formData, updateFormData } = useCalculadora();

  // Estados locais iniciados com o que já estiver no contexto (caso o usuário decida voltar para corrigir)
  const [cpf, setCpf] = useState(formData.cpf);
  const [dataInicio, setDataInicio] = useState(formData.dataInicio);
  const [faltasLicencias, setFaltasLicencias] = useState(formData.faltasLicencias);

  // Máscara para CPF em tempo real
  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length <= 11) {
      value = value
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d)/, "$1.$2")
        .replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      setCpf(value);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Salva os dados no nosso Contexto Global
    updateFormData({
      //cpf: cpf.replace(/\D/g, ""), // Salvamos apenas números do CPF - Melhor salvar com os dígitos.
      cpf: cpf,
      dataInicio,
      faltasLicencias: Number(faltasLicencias),
    });

    // Navega suavemente para a próxima etapa
    router.push("/calculadora/passo-2");
  };

  return (
    <main className="max-w-xl mx-auto p-6 md:p-12">
      <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xs font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full uppercase tracking-wider">
            Etapa 1 de 2
          </span>
          <span className="text-xs text-slate-500">Identificação</span>
        </div>

        <h1 className="text-2xl font-bold text-slate-900 mb-2">
          Dados da sua Progressão
        </h1>
        <p className="text-slate-600 mb-8 text-sm leading-relaxed">
          Preencha os dados abaixo para iniciar a simulação da sua pontuação de <strong>qualificação profissional</strong>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Campo CPF */}
          <div>
            <label htmlFor="cpf" className="block text-sm font-semibold text-slate-700 mb-2">
              CPF do Servidor
            </label>
            <input
              type="text"
              id="cpf"
              required
              placeholder="000.000.000-00"
              value={cpf}
              onChange={handleCpfChange}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          {/* Campo Data de Início */}
          <div>
            <Tooltip position="right" content="A data que você ingressou no município ou a data que marca o início do novo ciclo de cinco anos.">
              <label htmlFor="data-inicio" className="block text-sm font-semibold text-slate-700 mb-2">
                Data de Início do Ciclo ℹ️
              </label>
            </Tooltip>
            <input
              type="date"
              id="data-inicio"
              required
              value={dataInicio}
              onChange={(e) => setDataInicio(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          {/* Campo Faltas e Licenças */}
          <div>
            <label htmlFor="faltas" className="block text-sm font-semibold text-slate-700 mb-2">
              Número de Faltas e Licenças (em dias)
            </label>
            <input
              type="number"
              id="faltas"
              min="0"
              //required
              placeholder="Ex: 12"
              value={faltasLicencias || ""}
              onChange={(e) => setFaltasLicencias(Number(e.target.value))}
              className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-slate-800"
            />
          </div>

          {/* Botão de Avançar */}
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors mt-8 cursor-pointer"
          >
            Continuar para Próxima Etapa
          </button>
        </form>
      </div>
      <p className="text-slate-600 text-sm leading-relaxed my-3 text-center">Ferramenta desenvolvida por Jonathan Zotti da Silva.</p>
    </main>
  );
}