import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="min-h-[90vh] flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-blue-50 via-white to-purple-50">

      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-7xl font-extrabold text-gray-800 leading-tight"
      >
        Plan Smart.
        <br />
        <span className="text-blue-600">Finish Early.</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-lg md:text-xl text-gray-600 max-w-3xl leading-8"
      >
        Deadline Pilot uses <span className="font-semibold text-blue-600">Google Gemini AI</span>
        {" "}to transform deadlines into practical day-by-day execution plans,
        helping students and professionals stay productive with intelligent
        planning and risk analysis.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="flex flex-col sm:flex-row gap-4 mt-10"
      >
        <Link
          to="/planner"
          className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg transition duration-300"
        >
          🚀 Start Planning
        </Link>

        <Link
          to="/dashboard"
          className="border-2 border-blue-600 text-blue-600 hover:bg-blue-100 px-8 py-4 rounded-xl font-semibold transition duration-300"
        >
          📊 Open Dashboard
        </Link>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full max-w-5xl"
      >

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-3xl mb-2">🤖</h3>
          <h4 className="font-bold text-lg">AI Powered</h4>
          <p className="text-gray-500 mt-2">
            Smart execution plans generated using Google Gemini.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-3xl mb-2">🚦</h3>
          <h4 className="font-bold text-lg">Risk Analysis</h4>
          <p className="text-gray-500 mt-2">
            Know if your deadline is realistic before you begin.
          </p>
        </div>

        <div className="bg-white shadow-lg rounded-2xl p-6">
          <h3 className="text-3xl mb-2">📄</h3>
          <h4 className="font-bold text-lg">Export PDF</h4>
          <p className="text-gray-500 mt-2">
            Download your AI-generated execution plan instantly.
          </p>
        </div>

      </motion.div>

    </section>
  );
}

export default Hero;