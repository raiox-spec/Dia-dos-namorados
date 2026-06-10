import { useState } from "react";

interface LandingPageProps {
  onStart: () => void;
}

export function LandingPage({ onStart }: LandingPageProps) {
  const [pressed, setPressed] = useState(false);

  function handleClick() {
    setPressed(true);
    window.setTimeout(onStart, 220);
  }

  return (
    <section className="experience-screen landing-screen">
      <div className="landing-content">
        <button
          className={pressed ? "heart-button is-pressed" : "heart-button"}
          onClick={handleClick}
          aria-label="Começar a experiência"
        >
          <HeartIcon />
        </button>

        <p className="start-hint">clique no coração para começar!</p>
      </div>
    </section>
  );
}

function HeartIcon() {
  return (
    <svg
      className="heart-icon"
      viewBox="0 0 100 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M50 82 C50 82 6 54 6 27 C6 14 16 5 28 5 C37 5 44 10 50 18 C56 10 63 5 72 5 C84 5 94 14 94 27 C94 54 50 82 50 82Z"
        fill="#D62839"
      />
    </svg>
  );
}
