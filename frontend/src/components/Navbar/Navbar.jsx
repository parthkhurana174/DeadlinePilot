import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();

  const navLink = (path, label) => (
    <Link
      to={path}
      className={`transition duration-300 hover:text-blue-600 ${
        location.pathname === path
          ? "text-blue-600 font-semibold"
          : "text-gray-700"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">

      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold text-blue-600 tracking-tight"
        >
          🤖 Deadline Pilot
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          {navLink("/", "Home")}

          {navLink("/dashboard", "Dashboard")}

          {navLink("/planner", "Planner")}

        </div>

        {/* CTA Button */}
        <Link
          to="/planner"
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-lg transition duration-300"
        >
          🚀 Get Started
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;