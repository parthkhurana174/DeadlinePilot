import { getGreeting } from "../../utils/greeting";

function WelcomeCard() {
  const allPlans =
    JSON.parse(localStorage.getItem("allPlans")) || [];

  // Total plans saved
  const activePlans = allPlans.length;

  // Count plans whose deadline is today or later
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingDeadlines = allPlans.filter((plan) => {
    const deadline = new Date(plan.deadline);
    deadline.setHours(0, 0, 0, 0);

    return deadline >= today;
  }).length;

  return (
    <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-8 text-white shadow-xl">

      <h2 className="text-4xl font-bold">
        {getGreeting()}, Parth 👋
      </h2>

      <p className="mt-3 text-blue-100 text-lg">
        Let's beat today's deadlines.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">

        <div className="bg-white/20 backdrop-blur-md rounded-xl p-5">
          <h3 className="text-4xl font-bold">
            {activePlans}
          </h3>

          <p className="mt-2 text-blue-100">
            📋 Active AI Plans
          </p>
        </div>

        <div className="bg-white/20 backdrop-blur-md rounded-xl p-5">
          <h3 className="text-4xl font-bold">
            {upcomingDeadlines}
          </h3>

          <p className="mt-2 text-blue-100">
            📅 Upcoming Deadlines
          </p>
        </div>

      </div>

    </div>
  );
}

export default WelcomeCard;