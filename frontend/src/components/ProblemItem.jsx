import { CheckSquare, Square } from "lucide-react";

import DifficultyBadge from "./DifficultyBadge";

const ProblemItem = ({ problem, completedProblems, onToggle }) => {
  const completed = completedProblems.includes(problem._id);

  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div className="flex items-start gap-3">
        <button onClick={() => onToggle(problem._id)}>
          {completed ? <CheckSquare className="text-green-600" /> : <Square />}
        </button>

        <div>
          <h3 className="font-medium">{problem.title}</h3>

          <div className="mt-2">
            <DifficultyBadge difficulty={problem.difficulty} />
          </div>
        </div>
      </div>

      <div className="flex gap-3">
        {problem.youtubeLink && (
          <a
            href={problem.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Video
          </a>
        )}

        {problem.articleLink && (
          <a
            href={problem.articleLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Article
          </a>
        )}

        {problem.codingLink && (
          <a
            href={problem.codingLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600"
          >
            Practice
          </a>
        )}
      </div>
    </div>
  );
};

export default ProblemItem;
