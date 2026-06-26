function DashboardHeader() {
  return (
    <header className="flex justify-between items-center p-6 bg-white shadow-sm rounded-xl">

      <div>
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back 👋
        </p>
      </div>

      <div className="bg-blue-600 text-white px-5 py-2 rounded-xl">
        Parth
      </div>

    </header>
  );
}

export default DashboardHeader;