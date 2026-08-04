import Image from "next/image";
import Link from "next/link";

type GhaLogoProps = {
  className?: string;
  priority?: boolean;
  inverted?: boolean;
};

export function GhaLogo({
  className = "",
  priority = true,
  inverted = false,
}: GhaLogoProps) {
  return (
    <Link
      href="/"
      className={`inline-flex shrink-0 items-center ${className}`}
      aria-label="Global Health Alliance home"
    >
      <Image
        src="/brand/gha-logo-horizontal.png"
        alt="Global Health Alliance"
        width={869}
        height={315}
        priority={priority}
        className={`h-11 w-auto sm:h-[3.25rem] ${
          inverted ? "brightness-0 invert" : ""
        }`}
      />
    </Link>
  );
}
