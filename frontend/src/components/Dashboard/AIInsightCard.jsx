import { FaLightbulb, FaArrowTrendUp } from "react-icons/fa6";

function AIInsightCard() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <div className="flex items-center gap-3 mb-4">
        <FaLightbulb className="text-yellow-500 text-2xl" />
        <h2 className="text-2xl font-bold text-gray-800">
          AI Insight
        </h2>
      </div>

      <p className="text-gray-600 leading-7">
        You have enough time available today.
        Focus on your <strong>highest priority task</strong> first to
        stay ahead of your deadlines.
      </p>

      <div className="mt-6 p-4 rounded-xl bg-blue-50 border border-blue-100">

        <div className="flex items-center gap-2 mb-2">
          <FaArrowTrendUp className="text-green-600" />
          <span className="font-semibold">
            Productivity Tip
          </span>
        </div>

        <p className="text-sm text-gray-600">
          Complete one difficult task before switching to easier ones.
          This improves focus and reduces procrastination.
        </p>

      </div>

    </div>
  );
}

export default AIInsightCard;