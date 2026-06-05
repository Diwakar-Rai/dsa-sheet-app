import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import ProblemItem from "./ProblemItem";

const TopicAccordion = ({ topic }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-5 font-semibold"
      >
        <div className="flex items-center gap-2">
          <ChevronDown
            size={18}
            className={`transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
          <span>{topic.name}</span>
        </div>

        <span className="text-sm text-gray-500">
          {topic.problems.length} Problems
        </span>
      </button>

      {open && (
        <div className="p-5 border-t space-y-3">
          {topic.problems.map((problem) => (
            <ProblemItem key={problem._id} problem={problem} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TopicAccordion;
