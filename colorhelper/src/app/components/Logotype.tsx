import Image from "next/image";

export default function Logotype() {
  return (
    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
      <a
        className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
        href="https://minlillabyra.se"
        target="_blank"
        rel="noopener noreferrer"
      >
        By{" "}
        <Image
          src="/LogoDark.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={150}
          height={36}
          priority
          style={{ height: "auto" }}
        />
      </a>
    </div>
  );
}
