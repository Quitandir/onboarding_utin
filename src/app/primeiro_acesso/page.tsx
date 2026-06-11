import { CircleArrowRight, KeyRound } from "lucide-react";
import Image from "next/image";

/*
const background_logo = {
    background-color: var(--bg-color);
    background-image: url(https://drive.google.com/thumbnail?id=149bDidWbPZg6MO8AujH9RZVcWF546OlH&sz=w1500);
    background-blend-mode: multiply;
    background-repeat: no-repeat;
    background-position: left;
}
*/

export default function Page() {
    return (
        <div className="flex flex-col flex-1 items-center justify-center bg-emerald-100 
            bg-[url('https://drive.google.com/thumbnail?id=149bDidWbPZg6MO8AujH9RZVcWF546OlH&sz=w1500')] 
            bg-no-repeat 
            bg-left 
            bg-blend-multiply
            bg-fixed 
            overflow-y-auto"
        >
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col gap-10">
                <section className="flex flex-col items-center border-b border-indigo-900">
                    <h1 className="text-3xl sm:text-4xl tracking-tight mb-4 font-love text-indigo-900 drop-shadow">
                        Primeiro acesso ao e-mail institucional
                    </h1>
                    <h2 className="text-3xl sm:text-4xl tracking-tight mb-4 font-love text-indigo-900 drop-shadow">
                        GUIA RÁPIDO
                    </h2>
                    <Image src='/envelope.png' alt='envelope colorido' width={200} height={200} loading="eager" className='object-contain mb-10' />
                    <span className="text-2xl sm:text-2xl tracking-tight mb-4 font-love text-red-900">
                        Cordialmente desenvolvido pela UTIN/SME - Time Google
                    </span>
                </section>
                <section className="flex flex-col items-start border-b border-indigo-900 gap-10 md:flex-row ">
                    <span className="font-madi text-4xl sm:text-6xl tracking-tight mb-4 text-indigo-900">
                        Novo na rede?
                    </span>
                    <p className="text-lg sm:text-4xl tracking-tight mb-4 font-love text-indigo-900 leading-relaxed">
                        Você receberá em seu e-mail pessoal uma mensagem do Canoastec informando seu login 
                        e senha para sua conta institucional @canoasedu. 
                    </p>
                    <p className="text-lg sm:text-4xl tracking-tight mb-4 font-love text-indigo-900 leading-relaxed"   >
                        No seu primeiro acesso, você conseguirá acessar somente com a senha disponibilizada, mas depois você precisará 
                        ter ativado a verificação em duas etapas para acessar de sua conta de novos dispositivos.
                    </p>

                </section>
                <section className="flex flex-col items-center border-b border-indigo-900">
                    <p className="text-lg sm:text-3xl tracking-tight mb-4 font-love text-indigo-900 leading-relaxed">
                        A verificação em duas etapas funciona como uma segunda chave de segurança. Mesmo que alguém saiba a sua senha, não consegue entrar na sua conta sem essa segunda chave. Então, sempre que você entrar em um aparelho novo, além da senha, o sistema vai pedir esse código extra (que chega no celular ou no e-mail).
                    </p>
                    <div className="flex gap-10 mb-10">
                        <KeyRound size={140} color="red" strokeWidth={1.5} className="drop-shadow-md" />
                        <p className="text-lg sm:text-4xl tracking-tight mb-4 font-love text-red-900 leading-relaxed">
                            É como uma porta com duas fechaduras: para abrir, precisa das duas chaves.
                        </p>

                    </div>
                </section>
                <section className="flex flex-col border-b border-indigo-900">
                    <span className="font-madi text-lg sm:text-4xl tracking-tight mb-4 text-indigo-900">
                        1. No primeiro acesso à sua conta:
                    </span>
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                        <div className="flex flex-col">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900">GMAIL</span>
                            <Image src='/logo_google.png' alt='logo do google' width={100} height={100} className='object-contain drop-shadow' />
                        </div>
                        <CircleArrowRight size={56} color="indigo" strokeWidth={1.5} className="drop-shadow-xl rotate-90 md:rotate-0" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900 ">
                                Clique na sua foto ou letra inicial do seu nome bem em cima à direita
                            </span>
                            <Image src='/user_logo.png' alt='ícone de usuário' width={100} height={100} className='object-contain drop-shadow' />
                        </div>
                        <CircleArrowRight size={56} color="indigo" strokeWidth={1.5} className="drop-shadow-xl rotate-90 md:rotate-0" />
                        <div className="flex flex-col">
                            <span className="text-3xl sm:text-2xl tracking-tight font-love text-indigo-900">
                                E clique em “Gerenciar sua conta”
                            </span>
                            <Image src='/gerenciar.png' alt='link de acesso às configurações de conta' width={350} height={350} className='object-contain drop-shadow' />
                        </div>
                    </div>

                </section>
                <section className="flex flex-col border-b border-indigo-900">
                    <span className="font-madi text-3xl sm:text-4xl tracking-tight mb-4 text-indigo-900">
                        2.
                    </span>
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                        <div className="flex flex-col">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900">
                                Clique na opção “Segurança e login”
                            </span>
                            <Image src='/seg_login.png' alt='opções de segurança' width={400} height={400} className='object-contain drop-shadow' />
                        </div>
                        <CircleArrowRight size={56} color="indigo" strokeWidth={1.5} className="drop-shadow-xl rotate-90 md:rotate-0" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900 ">
                                Ative um smartphone para a verificação em duas etapas.
                            </span>
                            <Image src='/smartphone.png' alt='opções para verificação em duas etapas'
                                width={400} height={400} className='object-contain drop-shadow' />
                        </div>
                    </div>

                </section>
                <section className="flex flex-col border-b border-indigo-900">
                    <span className="font-madi text-3xl sm:text-4xl tracking-tight mb-4 text-indigo-900">
                        3.
                    </span>
                    <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                        <div className="flex flex-col">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900">
                                Adicione o seu melhor número de telefone
                            </span>
                            <Image src='/telefone.png' alt='opções de segurança' width={400} height={400} className='object-contain drop-shadow' />
                        </div>
                        <CircleArrowRight size={56} color="indigo" strokeWidth={1.5} className="drop-shadow-xl rotate-90 md:rotate-0" />
                        <div className="flex flex-col items-center">
                            <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900 ">
                                Confira se a verificação em duas etapas está ativa.
                            </span>
                            <Image src='/confirmacao.png' alt='opções para verificação em duas etapas'
                                width={400} height={400} className='object-contain drop-shadow' />
                        </div>
                    </div>
                </section>
                <section className="flex flex-col border-b border-indigo-900">
                    <span className="font-madi text-3xl sm:text-4xl tracking-tight mb-4 text-indigo-900">
                        4.
                    </span>
                    <div className="flex flex-col gap-10 items-center justify-center">
                        <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-indigo-900">
                            Na próxima vez que você for logar, irá aparecer esta mensagem. Solicite o recebimento do código pelo celular e clique em avançar.
                        </span>
                        <Image src='/tente.png' alt='opções para verificação em duas etapas'
                            width={400} height={400} className='object-contain drop-shadow' />
                        <span className="text-3xl sm:text-2xl tracking-tight mb-4 font-love text-red-900 ">
                            O código será enviado via SMS para o número cadastrado anteriormente.
                        </span>
                    </div>

                </section>
                <section className="flex flex-col md:flex-row gap-8 items-start bg-indigo-950 text-white p-8 rounded-3xl shadow-xl">
                    <h3 className="font-madi text-5xl sm:text-7xl text-amber-400 shrink-0 md:w-1/3">
                        Nada ainda?
                    </h3>
                    <div className="flex flex-col gap-4 md:w-2/3">
                        <h4 className="text-xl sm:text-2xl font-bold font-love text-amber-200">
                            Não está recebendo um código de verificação?
                        </h4>
                        <p className="text-base sm:text-lg opacity-90 border-b border-white/20 pb-4">
                            Entre em contato com o Time e solicite um novo código de 8 dígitos para acesso, e tente novamente realizar a ativação da verificação em duas etapas.
                        </p>
                        <p className="text-base sm:text-lg font-semibold bg-white/10 p-4 rounded-xl border border-white/10">
                            📧 Fale conosco: <span className="text-amber-300 underline">time.google@canoasedu.rs.gov.br</span>
                            <br />
                            📞 Telefone: (51) 3452-7701 — Ramal 5345
                        </p>
                    </div>
                </section>
            </main>
        </div>
    )
}