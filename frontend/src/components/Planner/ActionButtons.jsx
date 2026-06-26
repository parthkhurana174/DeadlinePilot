import DownloadButton from "./DownloadButton";
import toast from "react-hot-toast";

function ActionButtons({ plan, resetPlanner }) {
  if (!plan) return null;

  const copyPlan = () => {
    const data = typeof plan === "string" ? JSON.parse(plan) : plan;

    let text = "";

    text += "🚀 Deadline Pilot\n\n";

    text += "🚦 Risk Analysis\n";
    text += `Risk Level: ${data.risk.level}\n`;
    text += `Reason: ${data.risk.reason}\n`;
    text += `Recommendation: ${data.risk.recommendation}\n\n`;

    text += "📅 Daily Action Plan\n\n";

    data.plan.forEach((item) => {
      text += `${item.day} (${item.date})\n`;
      text += `Task: ${item.task}\n`;
      text += `Hours: ${item.hours}\n`;
      text += "----------------------------------\n";
    });

    text += "\n💡 Motivation\n";
    text += data.motivation;

    navigator.clipboard.writeText(text);

    toast.success("Plan copied successfully!");
  };

  return (
    <div className="flex justify-end gap-4 mt-6 flex-wrap">

      <button
        onClick={copyPlan}
        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
      >
        📋 Copy Plan
      </button>

      <DownloadButton plan={plan} />

      <button
        onClick={resetPlanner}
        className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
      >
        🔄 New Plan
      </button>

    </div>
  );
}

export default ActionButtons;