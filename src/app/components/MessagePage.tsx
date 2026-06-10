interface MessagePageProps {
  message: string;
  onBack: () => void;
  onNext: () => void;
  pageIndex: number;
}

export function MessagePage({ message, onBack, onNext, pageIndex }: MessagePageProps) {
  const hasSoftFrame = pageIndex === 3;

  return (
    <section className={`experience-screen message-screen message-screen-${pageIndex}`}>
      <div className={hasSoftFrame ? "message-panel framed" : "message-panel"}>
        <p>{message}</p>
      </div>

      <ArrowButton direction="back" onClick={onBack} label="Tela anterior" />
      <ArrowButton direction="next" onClick={onNext} label="Próxima tela" />
    </section>
  );
}

export function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "back" | "next";
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      className={`nav-arrow ${direction === "back" ? "back-arrow" : "next-arrow"}`}
      onClick={onClick}
      aria-label={label}
    >
      <WavyArrow />
    </button>
  );
}

function WavyArrow() {
  return (
    <svg
      className="wavy-arrow"
      viewBox="0 0 64 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M4 22 C11 11, 18 33, 25 22 C32 11, 39 33, 46 22"
        stroke="#111111"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M44 14 L56 22 L44 30"
        stroke="#111111"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
