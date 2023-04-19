export default function ScoreComponent({
  score,
  title,
  description,
  font,
}: {
  score: number;
  title: string;
  description: string;
  font: string;
}) {
  return (
    <div className="m-5">
      <h2 className={`${font} mb-3 text-2xl font-semibold`}>
        {title}{" "}
        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
          -&gt; {score}%
        </span>
      </h2>
      <p className={`${font} m-0 max-w-[30ch] text-sm opacity-50`}>
        {description}
      </p>
    </div>
  );
}
