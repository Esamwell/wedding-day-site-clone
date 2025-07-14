import Header from "@/components/Header";

export default function Erro() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <Header />
      <div className="bg-card/80 rounded-lg shadow-lg p-10 mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-destructive">Pagamento não concluído</h1>
        <p className="text-lg mb-2 text-foreground">Houve um problema ao processar seu pagamento.</p>
        <p className="text-muted-foreground">Por favor, tente novamente ou escolha outro presente.</p>
      </div>
    </div>
  );
} 