import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-between">      
      <h1>Erro</h1>
      <p>Página não encontrada</p>
      <Link href="/">Voltar para página inicial</Link>
    </main>
  );
}
