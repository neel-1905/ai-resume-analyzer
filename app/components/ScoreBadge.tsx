import React from "react";

interface ScoreBadgeProps {
  score: number;
  className?: string;
}

const ScoreBadge: React.FC<ScoreBadgeProps> = ({ score, className = "" }) => {
  const getScoreColor = (score: number): string => {
    return score >= 70
      ? "bg-green-100 text-green-800"
      : score >= 49
      ? "bg-yellow-100 text-yellow-800"
      : "bg-red-100 text-red-800";
  };

  const getText = (score: number): string => {
    return score >= 70
      ? "Strong"
      : score >= 49
      ? "Good Start"
      : "Needs Improvement";
  };

  return (
    <span
      className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-medium ${getScoreColor(
        score
      )} ${className}`}
    >
      {getText(score)}
    </span>
  );
};

export default ScoreBadge;
