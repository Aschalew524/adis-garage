import { useState } from "react";

const PREVIEW_LENGTH = 110;

interface JobInstructionProps {
  instruction: string;
  instructionId: string;
}

export function JobInstruction({
  instruction,
  instructionId,
}: JobInstructionProps) {
  const isLong = instruction.length > PREVIEW_LENGTH;
  const [expanded, setExpanded] = useState(false);
  const preview = `${instruction.slice(0, PREVIEW_LENGTH).trim()}…`;

  return (
    <section className="instruction" aria-labelledby={`${instructionId}-label`}>
      <h3 id={`${instructionId}-label`}>Advisor instruction</h3>
      <p data-testid={`${instructionId}-text`}>
        {isLong ? preview : instruction}
      </p>
      {isLong ? (
        <button
          type="button"
          className="linkish"
          aria-expanded={expanded}
          onClick={() => setExpanded((current) => !current)}
        >
          {expanded ? "Hide instruction" : "Read full instruction"}
        </button>
      ) : null}
    </section>
  );
}
