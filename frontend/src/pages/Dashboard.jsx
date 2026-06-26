import DashboardHeader from "../components/Dashboard/DashboardHeader";
import WelcomeCard from "../components/Dashboard/WelcomeCard";
import TaskSummary from "../components/Dashboard/TaskSummary";
import AIInsightCard from "../components/Dashboard/AIInsightCard";
import QuickActions from "../components/Dashboard/QuickActions";
import LatestPlanCard from "../components/Dashboard/LatestPlanCard";
function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-100">
      <div className="max-w-7xl mx-auto p-6">

        <DashboardHeader />

        <div className="mt-8">
          <WelcomeCard />
        </div>

        <div className="mt-8">
          <TaskSummary />
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-8">

          <AIInsightCard />

          <QuickActions />

          <LatestPlanCard />

        </div>
      </div>
    </div>
  );
}

export default Dashboard;