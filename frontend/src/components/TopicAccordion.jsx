import { useState } from "react";
import { ChevronDown } from "lucide-react";

import ProblemItem from "./ProblemItem";

const TopicAccordion = ({ topic, completedProblems, onToggle }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5"
      >
        <div className="flex items-center gap-3">
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />

          <span className="font-semibold">{topic.name}</span>
        </div>

        <span className="text-sm text-gray-500">
          {topic.problems.length} Problems
        </span>
      </button>

      {open && (
        <div className="border-t p-5 space-y-3">
          {topic.problems.map((problem) => (
            <ProblemItem
              key={problem._id}
              problem={problem}
              completedProblems={completedProblems}
              onToggle={onToggle}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicAccordion;
