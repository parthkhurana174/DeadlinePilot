import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function History() {
    const allPlans = JSON.parse(localStorage.getItem("allPlans")) || [];

    const deletePlan = (planId) => {
        const updatedPlans = allPlans.filter(
            (plan) => plan.planId !== planId
        );

        localStorage.setItem(
            "allPlans",
            JSON.stringify(updatedPlans)
        );

        if (
            updatedPlans.length > 0 &&
            JSON.parse(localStorage.getItem("latestPlan"))?.planId === planId
        ) {
            localStorage.setItem(
                "latestPlan",
                JSON.stringify(updatedPlans[0])
            );
        } else if (updatedPlans.length === 0) {
            localStorage.removeItem("latestPlan");
        }

        toast.success("Plan deleted successfully!");

        window.location.reload();
    };

    const clearHistory = () => {
        const confirmDelete = window.confirm(
            "Are you sure you want to delete all AI plans?"
        );

        if (!confirmDelete) return;

        localStorage.removeItem("allPlans");
        localStorage.removeItem("latestPlan");

        toast.success("History cleared!");

        window.location.reload();
    };

    return (
        <div className="min-h-screen bg-slate-100 py-10">
            <div className="max-w-6xl mx-auto px-6">

                <div className="flex flex-col md:flex-row justify-between md:items-center gap-4 mb-8">

                    <h1 className="text-4xl font-bold">
                        📚 Previous AI Plans ({allPlans.length})
                    </h1>

                    <div className="flex gap-3">

                        <button
                            onClick={clearHistory}
                            className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg"
                        >
                            🗑 Clear History
                        </button>

                        <Link
                            to="/dashboard"
                            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                        >
                            ← Dashboard
                        </Link>

                    </div>

                </div>

                {allPlans.length === 0 ? (
                    <div className="bg-white rounded-xl shadow-lg p-8 text-center">

                        <h2 className="text-2xl font-bold">
                            No AI Plans Found
                        </h2>

                        <p className="text-gray-500 mt-3">
                            Generate your first AI plan.
                        </p>

                    </div>
                ) : (
                    <div className="space-y-6">

                        {allPlans.map((plan) => (
                            <div
                                key={plan.planId}
                                className="bg-white rounded-xl shadow-lg p-6"
                            >

                                <div className="flex justify-between items-start">

                                    <div>

                                        <h2 className="text-2xl font-bold text-blue-600">
                                            {plan.task}
                                        </h2>

                                        <p className="mt-3">
                                            <strong>Deadline:</strong> {plan.deadline}
                                        </p>

                                        <p>
                                            <strong>Difficulty:</strong> {plan.difficulty}
                                        </p>

                                        <p>
                                            <strong>Priority:</strong> {plan.priority}
                                        </p>

                                        <p>
                                            <strong>Hours/Day:</strong> {plan.hoursPerDay}
                                        </p>

                                        <p className="text-sm text-gray-500 mt-3">
                                            Generated on {plan.createdAt}
                                        </p>

                                    </div>

                                    <button
                                        onClick={() => deletePlan(plan.planId)}
                                        className="bg-red-100 hover:bg-red-200 text-red-600 px-4 py-2 rounded-lg"
                                    >
                                        🗑 Delete
                                    </button>

                                </div>

                            </div>
                        ))}

                    </div>
                )}

            </div>
        </div>
    );
}

export default History;