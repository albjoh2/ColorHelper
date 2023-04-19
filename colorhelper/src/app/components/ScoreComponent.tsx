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
    <div className="m-5">
      <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {score.toFixed(0)}%
        </span>
      </h2>
      <p className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </div>
  );
}
