import DifficultyBadge from "./DifficultyBadge";

const ProblemItem = ({ problem }) => {
  return (
    <div className="border rounded-lg p-4 flex justify-between items-center">
      <div>
        <h3 className="font-medium">{problem.title}</h3>

        <div className="mt-2">
          <DifficultyBadge difficulty={problem.difficulty} />
        </div>
      </div>

      <div className="flex gap-2">
        {problem.youtubeLink && (
          <a
            href={problem.youtubeLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-sm"
          >
            Video
          </a>
        )}

        {problem.articleLink && (
          <a
            href={problem.articleLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-sm"
          >
            Article
          </a>
        )}

        {problem.codingLink && (
          <a
            href={problem.codingLink}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 text-sm"
          >
            Practice
          </a>
        )}
      </div>
    </div>
  );
};

export default ProblemItem;
