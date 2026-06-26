import { FaTelegramPlane, FaInstagram } from "react-icons/fa";
import { SiOnlyfans } from "react-icons/si";

const fullscreenImg = "/FullScreen_1782240749824.png";

const TELEGRAM_URL = "https://t.me/desiresride";
const INSTAGRAM_URL = "https://www.instagram.com/desiresride/";
const ONLYFANS_URL = "https://onlyfans.com/desiresride";

const PINK = "#FAC0C0";
const CREAM = "#FFFEF7";
const TELEGRAM_COLOR = "#29A8E0";
const INSTAGRAM_GRADIENT = "linear-gradient(45deg, #833AB4, #F77737, #FD1D1D)";
const ONLYFANS_COLOR = "#00AFF0";

interface CtaButtonProps {
  href: string;
  label: string;
  icon?: React.ReactNode;
  background: string;
  delay: string;
  ariaLabel: string;
  arrowColor: string;
  badge?: string;
}

function CtaButton({
  href,
  label,
  icon,
  background,
  delay,
  ariaLabel,
  arrowColor,
  badge,
}: CtaButtonProps) {
  return (
    <div className={`animate-fade-in-up ${delay} relative flex flex-col items-center shrink-0`}>
      <svg className="w-4 h-4 sm:w-5 sm:h-5 mb-1 animate-bounce" viewBox="0 0 20 20" fill="none">
        <path
          d="M5 7l5 5 5-5"
          stroke={arrowColor}
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {badge && (
  <span
    className="
      absolute
      -top-3
      right-2
      px-3
      py-[3px]
      rounded-full
      text-[8px] sm:text-[9px]
      font-bold
      uppercase
      tracking-widest
      text-white
      shadow-lg
      z-20
    "
    style={{
      background: "linear-gradient(90deg,#FF7A3D,#FF5A2E)",
      boxShadow: "0 6px 16px rgba(255,120,60,.45)",
    }}
  >
    {badge}
  </span>
)}

      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={ariaLabel}
        className="
          flex items-center justify-center gap-1.5
          rounded-full font-semibold text-white
          text-[10px] sm:text-xs tracking-wide select-none
          transition-all duration-300
          hover:scale-105 active:scale-95
          focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
        "
        style={{
          background,
          boxShadow: "0 4px 18px rgba(0,0,0,0.22)",
          width: "clamp(108px, 31vw, 155px)",
          height: "clamp(35px, 8.5vw, 38px)",
        }}
      >
        {icon}
        {label}
      </a>
    </div>
  );
}

export default function App() {
  return (
    <main
      className="relative w-full h-[100dvh] min-h-[100dvh] flex flex-col overflow-hidden"
      style={{
        backgroundImage: `url(${fullscreenImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0" style={{ backgroundColor: "rgba(0,0,0,0.50)" }} />

      <div className="relative z-10 flex flex-col flex-1 justify-end px-3 pb-[max(10px,env(safe-area-inset-bottom))] sm:px-5 sm:pb-8 text-center">
        <div className="mb-3 sm:mb-8">
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

        <div className="flex flex-row justify-center items-center w-full gap-1.5 sm:gap-6 max-w-full">
          <CtaButton
            href={ONLYFANS_URL}
            ariaLabel="Unlock More"
            background={ONLYFANS_COLOR}
            arrowColor={ONLYFANS_COLOR}
            delay="delay-300"
            icon={<SiOnlyfans size={17} />}
            label="Unlock More 🍑"
            badge="Exclusive"
          />

          <CtaButton
            href={INSTAGRAM_URL}
            ariaLabel="Instagram"
            background={INSTAGRAM_GRADIENT}
            arrowColor="#F77737"
            delay="delay-400"
            icon={<FaInstagram size={16} />}
            label="Instagram"
          />

          <CtaButton
            href={TELEGRAM_URL}
            ariaLabel="Telegram"
            background={TELEGRAM_COLOR}
            arrowColor={TELEGRAM_COLOR}
            delay="delay-500"
            icon={<FaTelegramPlane size={16} />}
            label="Telegram"
          />
        </div>
      </div>
    </main>
  );
}
