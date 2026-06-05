const DifficultyBadge = ({ difficulty }) => {
  const styles = {
    Easy: "bg-green-100 text-green-700",
    Medium: "bg-yellow-100 text-yellow-700",
    Hard: "bg-red-100 text-red-700",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${styles[difficulty]}`}
    >
      {difficulty}
    </span>
  );
};

export default DifficultyBadge;
