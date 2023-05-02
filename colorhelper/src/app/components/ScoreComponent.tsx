import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function ScoreComponent({
  score,
  title,
  description,
}: {
  score: number;
  title: string;
  description: string;
}) {
  return (
    <div className="m-3">
      <h2
        className={`${inter.className} mb-3 text-2xl sm:text-xl font-semibold`}
      >
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {score.toFixed(0)}%
        </span>
      </h2>
      <div className="flex justify-center">
        <p
          className={`${inter.className} text-center m-0 max-w-[30ch] text-sm opacity-50`}
        >
          {description}
        </p>
      </div>
    </div>
  );
}
