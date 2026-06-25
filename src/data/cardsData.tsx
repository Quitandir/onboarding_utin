"use client";

import { BadgeQuestionMark, BanknoteArrowDown, BookUser, ChartNoAxesCombined, Computer, DoorClosedLocked, HeartPulse, KeyRound, MailQuestionMark, NotebookPen, Scale, StickyNoteCheck } from 'lucide-react';
import { GoogleChromeLogoIcon } from "@phosphor-icons/react";
import React from 'react';

export interface CardItem {
    id: number;
    title: string;
    icon: React.ReactNode;
    description: string;
    buttontext: string;
    bgColorClass: string;
    btnColorClass: string;
    link: string;
    support: string;
    secondaryButtonText?: string;
    secondaryLink?: string;
}

export const cardsData: CardItem[] = [

    {
        id: 9,
        title: "Primeiro acesso ao email institucional",
        description: "Tutorial desenvolvido pela UTIN para guiar seu primeiro acesso ao seu email institucional.",
        icon: <DoorClosedLocked color="#111111" className="w-20 h-20" />,
        buttontext: "Primeiro acesso",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "./primeiro_acesso",
        support: "Suporte: UTIN - 34257701 - R:5345 | time.google@canoasedu.rs.gov.br"
    },
    {
        id: 6,
        title: "Email Institucional no celular",
        description: "Tutorial da UTIN de como configurar sua conta institucional no seu smartphone",
        icon: <MailQuestionMark color="#111111" className="w-20 h-20" />,
        buttontext: "Tutorial da UTIN",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://tutorial-canoasedu-smartphone.web.app/",
        support: "Suporte: UTIN - 34257701 - R:5345 | time.google@canoasedu.rs.gov.br"
    },
    {
        id: 5,
        title: "Unidade de Tecnologia e Inovação",
        description: "Informações dos projetos e recursos geridos pela UTIN - Time Google",
        icon: <GoogleChromeLogoIcon size={32} color="#111111" className="w-20 h-20" />,
        buttontext: "Site da UTIN",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://sites.google.com/canoasedu.rs.gov.br/tecnologia/in%C3%ADcio",
        support: "Suporte: UTIN - 34257701 - R:5345 | time.google@canoasedu.rs.gov.br"
    },
    {
        id: 1,
        title: "RH",
        description: "Informações referentes ao seu contracheque, informes de recebimentos, declaração de bens.",
        icon: <BanknoteArrowDown color="#111111" className="w-20 h-20" />,
        buttontext: "Site do RH 24 horas",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://portaldoservidor.canoas.rs.gov.br/servico-rh-24-horas/",
        support: ""
    },
    {
        id: 2,
        title: "Chamadas e Diários de Classe",
        description: "I-Diário é a plataforma que os profes usam para registrar notas, presenças e registros de aula.",
        icon: <NotebookPen color="#111111" className="w-20 h-20" />,
        buttontext: "Site do I-Diário",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://idiario.canoas.rs.gov.br/usuarios/logar",
        support: "Suporte: Secretário de sua escola"
    },
    {
        id: 3,
        title: "Memorandos",
        description: "Plataforma de comunicação oficial dos servidores do Município de Canoas.",
        icon: <StickyNoteCheck color="#111111" className="w-20 h-20" />,
        buttontext: "Site dos Memorandos",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://sistemas.canoas.rs.gov.br/memorandos/entrar",
        support: ""
    },
    {
        id: 4,
        title: "Conveniados do CanoasPrev",
        description: "Onde encontrar serviços de saúde conveniados pelo plano do município.",
        icon: <HeartPulse color="#111111" className="w-20 h-20" />,
        buttontext: "Site do CanoasPrev",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://facgeocanoasprev.facilinformatica.com.br/",
        support: "Suporte: Canoasprev - (51) 3462.8800"
    },

    {
        id: 7,
        title: "Senhas institucionais",
        description: "As suas senhas funcionais para as diferentes plataformas que você vai usar são geridas pelo Canoastec. Quando precisar redefinir uma nova senha para o Portal do Servidor, contate o Canoastec e depois acesse o botão abaixo.",
        icon: <KeyRound color="#111111" className="w-20 h-20" />,
        buttontext: "Troca de senha",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://sistemas.canoas.rs.gov.br/servicos#/troca-senha",
        support: "Suporte: Canoastec - (51) 3236-1700"
    },
    {
        id: 8,
        title: "Incentivo financeiro para compra de notebook",
        description: "Informações pertinentes sobre o subsídio docente para aquisição de dispositivos eletrônicos.",
        icon: <Computer color="#111111" className="w-20 h-20" />,
        buttontext: "Acesse o decreto",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://www.canoas.rs.gov.br/wp-content/uploads/2022/02/Decreto-31-Altera-Dec-117-2014-_2021061514_.pdf",
        support: "Suporte: Direção da sua escola"
    },
    {
        id: 12,
        title: "Estatuto do Servidor Público de Canoas",
        description: "Esta Lei institui o regime jurídico dos servidores públicos municipais do Poder Legislativo e dos órgãos da administração direta e autárquica do Poder Executivo, de natureza estatutária e de direito público.",
        icon: <Scale color="#111111" className="w-20 h-20" />,
        buttontext: "Acesse o estatuto",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://leismunicipais.com.br/estatuto-do-servidor-funcionario-publico-canoas-rs",
        support: ""
    },
    {
        id: 10,
        title: "Progressões da lei 5878/2014",
        description: "Informações úteis sobre as progressões de classe e grau para servidores enquadrados na lei 5878/2014.",
        icon: <ChartNoAxesCombined color="#111111" className="w-20 h-20" />,
        buttontext: "Mudança de Grau",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://drive.google.com/file/d/1G9ftRPjL3CLYL-JWOT_dQ3T-pMgstxOS/view?usp=sharing",
        support: "Suporte: nucleo.gestao@canoasedu.rs.gov.br",
        secondaryButtonText: "Mudança de Classe",
        secondaryLink: "https://drive.google.com/file/d/1hkMxp-x-Y3lKtNUsAzDWutrNZ5URqH9l/view?usp=sharing"
    },
    {
        id: 11,
        title: "Outras dúvidas",
        description: "Se você tiver qualquer outra dúvida pertinente ao sua vida docente e funcional, preencha esse formulário que nós vamos te orientar.",
        icon: <BadgeQuestionMark color="#111111" className="w-20 h-20" />,
        buttontext: "Formulário de dúvidas",
        bgColorClass: "bg-blue-50 border-blue-200",
        btnColorClass: "bg-blue-600 hover:bg-blue-700",
        link: "https://docs.google.com/forms/d/e/1FAIpQLSdRmzhaolYngg63HqH9B2ERah3SwhCA53Bl8gT9me3YaNBh1g/viewform?usp=publish-editor",
        support: ""
    },


]