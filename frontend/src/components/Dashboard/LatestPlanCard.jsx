function LatestPlanCard() {
  const latestPlan = JSON.parse(localStorage.getItem("latestPlan"));

  if (!latestPlan) {
    return (
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">
          📋 Latest AI Plan
        </h2>

        <p className="text-gray-500">
          No AI plans generated yet.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-blue-600 mb-4">
        📋 Latest AI Plan
      </h2>

      <div className="space-y-3">

        <p>
          <strong>Task:</strong> {latestPlan.task}
        </p>

        <p>
          <strong>Deadline:</strong> {latestPlan.deadline}
        </p>

        <p>
          <strong>Difficulty:</strong> {latestPlan.difficulty}
        </p>

        <p>
          <strong>Priority:</strong> {latestPlan.priority}
        </p>

        <p className="text-sm text-gray-500">
          Generated on {latestPlan.createdAt}
        </p>

      </div>

    </div>
  );
}

export default LatestPlanCard;