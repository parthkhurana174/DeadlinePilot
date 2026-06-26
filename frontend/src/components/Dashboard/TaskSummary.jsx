import { Link } from "react-router-dom";

function TaskSummary() {
  const latestPlan = JSON.parse(localStorage.getItem("latestPlan"));

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mt-8">

      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">

        <div>
          <h2 className="text-2xl font-bold text-gray-800">
            📋 Latest AI Plan
          </h2>

          <p className="text-gray-500 mt-1">
            Your most recently generated execution plan.
          </p>
        </div>

        <Link
          to="/planner"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold transition text-center"
        >
          ➕ Create New Plan
        </Link>

      </div>

      <div className="mt-6">

        {!latestPlan ? (

          <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center">

            <h3 className="text-xl font-semibold text-gray-700">
              No AI Plan Available
            </h3>

            <p className="text-gray-500 mt-2">
              Generate your first AI plan to start tracking deadlines.
            </p>

          </div>

        ) : (

          <div className="border rounded-xl p-6 bg-slate-50">

            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <p className="text-sm text-gray-500">Task</p>
                <h3 className="font-bold text-lg">
                  {latestPlan.task}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Deadline</p>
                <h3 className="font-bold text-lg">
                  {latestPlan.deadline}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Difficulty</p>
                <h3 className="font-semibold">
                  {latestPlan.difficulty}
                </h3>
              </div>

              <div>
                <p className="text-sm text-gray-500">Priority</p>
                <h3 className="font-semibold">
                  {latestPlan.priority}
                </h3>
              </div>

            </div>

          </div>

        )}

      </div>

    </div>
  );
}

export default TaskSummary;