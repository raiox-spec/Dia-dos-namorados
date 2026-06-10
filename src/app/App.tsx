import { useState } from "react";
import { LandingPage } from "./components/LandingPage";
import { MessagePage } from "./components/MessagePage";
import { FinalPage } from "./components/FinalPage";

export type Page = "landing" | "page1" | "page2" | "page3" | "page4";

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("landing");

  return (
    <main className="love-experience">
      {currentPage === "landing" && (
        <LandingPage onStart={() => setCurrentPage("page1")} />
      )}
      {currentPage === "page1" && (
        <MessagePage
          message="Meu amor, você sem sombra de dúvidas foi a melhor coisa que aconteceu na minha vida."
          onBack={() => setCurrentPage("landing")}
          onNext={() => setCurrentPage("page2")}
          pageIndex={1}
        />
      )}
      {currentPage === "page2" && (
        <MessagePage
          message="Eu preciso de você na minha vida mais do que você imagina."
          onBack={() => setCurrentPage("page1")}
          onNext={() => setCurrentPage("page3")}
          pageIndex={2}
        />
      )}
      {currentPage === "page3" && (
        <MessagePage
          message="Dentre todas as coisas mais belas que a natureza criou, sem sombra de dúvidas você é a mais bela, a mais elegante, a mais deslumbrante, charmosa, linda e entre outras infinitas definições que se eu for citar todas, certamente não caberão em um simples site como esse..."
          onBack={() => setCurrentPage("page2")}
          onNext={() => setCurrentPage("page4")}
          pageIndex={3}
        />
      )}
      {currentPage === "page4" && (
        <FinalPage onBack={() => setCurrentPage("page3")} />
      )}
    </main>
  );
}
