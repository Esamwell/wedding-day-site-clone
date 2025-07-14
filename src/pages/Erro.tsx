import Header from "@/components/Header";
import { useLocation } from "react-router-dom";

export default function Erro() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const status = params.get("status") || params.get("collection_status");

  const isPending = status === "pending";

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-accent to-secondary">
      <Header />
      <div className="bg-card/80 rounded-lg shadow-lg p-10 mt-10 flex flex-col items-center">
        {isPending ? (
          <>
            <h1 className="text-3xl font-bold mb-4 text-primary">Pagamento recebido!</h1>
            <p className="text-lg mb-2 text-foreground">
              Muito obrigado pelo seu presente! Seu pagamento via Pix foi recebido e está em processamento.
            </p>
            <p className="text-muted-foreground">
              Assim que o pagamento for confirmado, você receberá um e-mail de confirmação. Isso normalmente leva poucos minutos.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-3xl font-bold mb-4 text-destructive">Pagamento não concluído</h1>
            <p className="text-lg mb-2 text-foreground">
              Houve um problema ao processar seu pagamento.
            </p>
            <p className="text-muted-foreground">
              Por favor, tente novamente ou escolha outro presente.
            </p>
          </>
        )}
      </div>
    </div>
  );
} 