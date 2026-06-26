import { FaTasks, FaCalendarAlt, FaClock } from "react-icons/fa";

function PlannerForm({
  task,
  setTask,
  deadline,
  setDeadline,
  hoursPerDay,
  setHoursPerDay,
  difficulty,
  setDifficulty,
  priority,
  setPriority,
  loading,
  generatePlan,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-xl p-8">

      <h1 className="text-4xl font-bold text-center text-blue-600 mb-2">
        🤖 Deadline Pilot
      </h1>

      <p className="text-center text-gray-500 mb-8">
        Build a personalized AI action plan in seconds.
      </p>

      {/* Task */}
      <label className="font-semibold text-gray-700">
        Task Title
      </label>

      <div className="flex items-center border rounded-lg px-3 mt-2 mb-5">
        <FaTasks className="text-gray-400" />
        <input
          type="text"
          placeholder="e.g. Build React Portfolio"
          className="w-full p-3 outline-none"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
      </div>

      {/* Deadline */}
      <label className="font-semibold text-gray-700">
        Deadline
      </label>

      <div className="flex items-center border rounded-lg px-3 mt-2 mb-5">
        <FaCalendarAlt className="text-gray-400" />
        <input
          type="date"
          className="w-full p-3 outline-none"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </div>

      {/* Hours */}
      <label className="font-semibold text-gray-700">
        Available Hours Per Day
      </label>

      <div className="flex items-center border rounded-lg px-3 mt-2 mb-5">
        <FaClock className="text-gray-400" />
        <input
          type="number"
          min="1"
          max="24"
          placeholder="3"
          className="w-full p-3 outline-none"
          value={hoursPerDay}
          onChange={(e) => setHoursPerDay(e.target.value)}
        />
      </div>

      {/* Difficulty */}
      <label className="font-semibold text-gray-700">
        Difficulty
      </label>

      <select
        className="border rounded-lg p-3 w-full mb-5"
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option>Easy</option>
        <option>Medium</option>
        <option>Hard</option>
      </select>

      {/* Priority */}
      <label className="font-semibold text-gray-700">
        Priority
      </label>

      <select
        className="border rounded-lg p-3 w-full mb-8"
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
      >
        <option>Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>

      <button
        onClick={generatePlan}
        disabled={loading}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-70"
      >
        {loading ? "⏳ Generating..." : "🚀 Generate AI Plan"}
      </button>

    </div>
  );
}

export default PlannerForm;