function PlanResult({ plan }) {
  if (!plan) return null;

  let data;

  try {
    data = typeof plan === "string" ? JSON.parse(plan) : plan;
  } catch {
    return null;
  }

  const riskColor = {
    Low: "border-green-500 bg-green-50",
    Medium: "border-yellow-500 bg-yellow-50",
    High: "border-red-500 bg-red-50",
  };

  const riskEmoji = {
    Low: "🟢",
    Medium: "🟡",
    High: "🔴",
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 mt-8">

      <h2 className="text-3xl font-bold text-blue-600 mb-8">
        🚀 AI Action Plan
      </h2>

      {/* Risk */}

      <div
        className={`border-l-4 rounded-xl p-6 mb-8 ${
          riskColor[data.risk.level]
        }`}
      >
        <h3 className="text-2xl font-bold mb-4">
          {riskEmoji[data.risk.level]} Risk Analysis
        </h3>

        <p>
          <strong>Risk Level:</strong> {data.risk.level}
        </p>

        <p className="mt-4">
          <strong>Reason</strong>
        </p>

        <p>{data.risk.reason}</p>

        <p className="mt-4">
          <strong>Recommendation</strong>
        </p>

        <p>{data.risk.recommendation}</p>
      </div>

      <h3 className="text-2xl font-bold mb-6">
        📅 Daily Action Plan
      </h3>

      <div className="space-y-5">

        {data.plan.map((item, index) => (
          <div
            key={index}
            className="border rounded-xl p-6 hover:shadow-lg transition"
          >
            <div className="flex justify-between items-center">

              <h4 className="text-xl font-bold text-blue-600">
                {item.day}
              </h4>

              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                📅 {item.date}
              </span>

            </div>

            <div className="mt-5">

              <p className="font-semibold">
                📚 Task
              </p>

              <p className="mt-2 text-gray-700">
                {item.task}
              </p>

              <p className="mt-5 font-semibold">
                ⏱ Estimated Hours
              </p>

              <p>{item.hours} Hours</p>

            </div>

          </div>
        ))}

      </div>

      <div className="bg-blue-50 rounded-xl p-6 mt-8 border-l-4 border-blue-600">

        <h3 className="text-xl font-bold mb-3">
          💡 Daily Motivation
        </h3>

        <p>{data.motivation}</p>

      </div>

    </div>
  );
}

export default PlanResult;