const fullscreenImg = "/FullScreen_1782240749824.png";

const TELEGRAM_URL = "https://t.me/desiresride";
const INSTAGRAM_URL = "https://www.instagram.com/desiresride/";
const ONLYFANS_URL = "https://onlyfans.com/desiresride";

const PINK = "#FAC0C0";
const CREAM = "#FFFEF7";

const TELEGRAM_COLOR = "#29A8E0";
const INSTAGRAM_GRADIENT =
  "linear-gradient(45deg, #833AB4, #F77737, #FD1D1D)";
const ONLYFANS_COLOR = "#00AFF0";

interface CtaButtonProps {
  href: string;
  label: React.ReactNode;
  background: string;
  delay: string;
  ariaLabel: string;
  arrowColor: string;
}

function CtaButton({
  href,
  label,
  background,
  delay,
  ariaLabel,
  arrowColor,
}: CtaButtonProps) {
  return (
    <div className={`animate-fade-in-up ${delay} flex flex-col items-center`}>
      
      {/* ARROW */}
      <svg
        className="w-5 h-5 mb-1 animate-bounce"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M5 7l5 5 5-5"
          stroke={arrowColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* BUTTON */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="
          flex items-center justify-center
          rounded-full font-semibold text-white
          text-xs tracking-wide select-none
          transition-all duration-300
          hover:scale-105
          active:scale-95
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
        style={{
          background,
          boxShadow: "0 4px 18px rgba(0,0,0,0.22)",
          width: "140px",
          height: "38px",
        }}
      >
        {label}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main
      className="relative w-full min-h-screen flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${fullscreenImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* overlay */}
      <div
        className="absolute inset-0"
        style={{ backgroundColor: "rgba(0,0,0,0.50)" }}
      />

      {/* content */}
      <div className="relative z-10 flex flex-col flex-1 justify-end px-5 pb-8 text-center">

        {/* TEXT */}
        <div className="mb-6 sm:mb-8">
          <h1
            className="text-4xl sm:text-5xl font-bold"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              color: CREAM,
              textShadow: "0 2px 24px rgba(0,0,0,0.55)",
            }}
          >
            Desires Ride
          </h1>

          <p
            className="mt-2 text-xs sm:text-base uppercase tracking-widest"
            style={{
              color: PINK,
              textShadow: "0 1px 10px rgba(0,0,0,0.5)",
            }}
          >
            Content Creator
          </p>
        </div>

        {/* CTA BUTTONS */}
        <div className="flex flex-row justify-center w-full gap-2 sm:gap-6">

          <CtaButton
            href={TELEGRAM_URL}
            ariaLabel="Telegram"
            background={TELEGRAM_COLOR}
            arrowColor={TELEGRAM_COLOR}
            delay="delay-300"
            label="✈️ Telegram"
          />

          <CtaButton
            href={INSTAGRAM_URL}
            ariaLabel="Instagram"
            background={INSTAGRAM_GRADIENT}
            arrowColor="#F77737"
            delay="delay-400"
            label="📸 Instagram"
          />

          <CtaButton
            href={ONLYFANS_URL}
            ariaLabel="OnlyFans"
            background={ONLYFANS_COLOR}
            arrowColor={ONLYFANS_COLOR}
            delay="delay-500"
            label="💙 O.F."
          />

        </div>

      </div>
    </main>
  );
}
