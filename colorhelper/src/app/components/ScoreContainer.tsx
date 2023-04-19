import ScoreComponent from "./ScoreComponent";

export default function ScoreContainer({
  accessibilityScore,
  beautyScore,
  totalScore,
}: {
  accessibilityScore: number;
  beautyScore: number;
  totalScore: number;
}) {
  return (
    <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left">
      <ScoreComponent
        score={accessibilityScore}
        title="Accessibility Score"
        description="A score based on the AI-models score of color contrast between text and
          background."
      />

      <ScoreComponent
        score={beautyScore}
        title="Beauty Score"
        description="A score based on how well the model thinks the colors goes together."
      />

      <ScoreComponent
        score={totalScore}
        title="Total Score"
        description="This score tells you what the model thinks of the design as a whole."
      />
    </div>
  );
}
