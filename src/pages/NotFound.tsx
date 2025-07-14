import Header from "@/components/Header";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <Header />
      <div className="bg-card/80 rounded-lg shadow-lg p-10 mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-destructive">Página não encontrada</h1>
        <p className="text-lg mb-2 text-foreground">A página que você procura não existe.</p>
        <p className="text-muted-foreground">Verifique o endereço ou volte para a página inicial.</p>
      </div>
    </div>
  );
}
