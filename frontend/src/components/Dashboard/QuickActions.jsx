import { Link } from "react-router-dom";
import { FaPlus, FaClipboardList, FaFilePdf } from "react-icons/fa";
import { downloadPlanPDF } from "../../utils/pdfGenerator";
function QuickActions() {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="flex flex-col gap-4">

        <Link
          to="/planner"
          className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaPlus />
          Create New AI Plan
        </Link>

        <Link
          to="/history"
          className="bg-gray-100 hover:bg-gray-200 text-gray-700 p-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaClipboardList />
          View Previous Plans
        </Link>

        <button
          onClick={() => {
            const latestPlan = JSON.parse(
              localStorage.getItem("latestPlan")
            );

            if (!latestPlan) {
              alert("No AI plan found.");
              return;
            }

            downloadPlanPDF(latestPlan);
          }}
          className="bg-red-100 hover:bg-red-200 text-red-600 p-3 rounded-lg flex items-center gap-3 transition"
        >
          <FaFilePdf />
          Download Latest Plan
        </button>

      </div>

    </div>
  );
}

export default QuickActions;