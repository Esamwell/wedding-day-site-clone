import Header from "@/components/Header";

export default function Sucesso() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <Header />
      <div className="bg-card/80 rounded-lg shadow-lg p-10 mt-10 flex flex-col items-center">
        <h1 className="text-3xl font-bold mb-4 text-primary">Pagamento realizado com sucesso!</h1>
        <p className="text-lg mb-2 text-foreground">Muito obrigado pelo seu presente e carinho! ❤️</p>
        <p className="text-muted-foreground">Em breve entraremos em contato para agradecer pessoalmente.</p>
      </div>
    </div>
  );
} 