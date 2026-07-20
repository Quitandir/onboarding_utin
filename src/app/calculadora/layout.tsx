import { CalculadoraProvider } from "./context";

export default function CalculadoraLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <CalculadoraProvider>{children}</CalculadoraProvider>;
}