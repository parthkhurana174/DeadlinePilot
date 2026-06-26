import { Oval } from "react-loader-spinner";

function LoadingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-10 mt-8 flex flex-col items-center">

      <Oval
        height={60}
        width={60}
        color="#2563eb"
        secondaryColor="#93c5fd"
        strokeWidth={5}
      />

      <h2 className="text-2xl font-bold mt-6">
        Deadline Pilot is thinking...
      </h2>

      <p className="text-gray-500 mt-3 text-center">
        Analyzing your deadline, workload and priority
        to generate the best execution plan.
      </p>

    </div>
  );
}

export default LoadingCard;