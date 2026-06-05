const ProgressCard = ({ completed, total }) => {
  const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="bg-white rounded-xl shadow p-6 mb-6">
      <h2 className="text-xl font-semibold">Progress Overview</h2>

      <p className="mt-2 text-gray-600">
        {completed} of {total} problems completed
      </p>

      <div className="w-full h-3 bg-gray-200 rounded-full mt-4">
        <div
          className="h-3 bg-green-500 rounded-full"
          style={{
            width: `${percentage}%`,
          }}
        />
      </div>

      <p className="mt-2 text-sm text-gray-500">{percentage}% Complete</p>
    </div>
  );
};

export default ProgressCard;
