import { ArrowButton } from "./MessagePage";

interface FinalPageProps {
  onBack: () => void;
}

export function FinalPage({ onBack }: FinalPageProps) {
  return (
    <section className="experience-screen final-screen">
      <div className="final-content">
        <div className="photo-frame">
          <img
            className="couple-photo"
            src="/foto-casal.jpeg"
            alt="Casal abraçado olhando uma paisagem no campo"
          />
        </div>

        <p className="final-message">
          Embora eu tenha dito todas essas palavras bonitas e elogios, eu ainda
          não consegui demonstrar o suficiente. Minha princesa, namorar você é
          achar o sentido da vida e descobrir que as melhores coisas estão nos
          momentos simples, risadas e seus beijos e abraços. Eu te amo com a
          minha alma, porque a alma nunca morre, FELIZ DIA DOS NAMORADOS❤
        </p>
      </div>

      <ArrowButton direction="back" onClick={onBack} label="Tela anterior" />
    </section>
  );
}
