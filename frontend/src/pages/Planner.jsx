import { useState } from "react";
import API from "../services/aiService";
import toast from "react-hot-toast";
import PlannerForm from "../components/Planner/PlannerForm";
import PlanResult from "../components/Planner/PlanResult";
import ActionButtons from "../components/Planner/ActionButtons";
import LoadingCard from "../components/Planner/LoadingCard";
function Planner() {
  const [task, setTask] = useState("");
  const [deadline, setDeadline] = useState("");
  const [hoursPerDay, setHoursPerDay] = useState("");
  const [difficulty, setDifficulty] = useState("Medium");
  const [priority, setPriority] = useState("Medium");

  const [plan, setPlan] = useState("");
  const [loading, setLoading] = useState(false);

  const generatePlan = async () => {
    if (!task || !deadline || !hoursPerDay) {
      toast.error("Please fill all the fields.");
      return;
    }

    try {
      setLoading(true);

      const response = await API.post("/ai/generate-plan", {
        task,
        deadline,
        hoursPerDay,
        difficulty,
        priority,
      });

      const generatedPlan = response.data.plan;

      setPlan(generatedPlan);

      const planData = {
        planId: generatedPlan.planId,
        task,
        deadline,
        hoursPerDay,
        difficulty,
        priority,
        plan: generatedPlan,
        createdAt: new Date().toLocaleString(),
      };

      // Save latest plan
      localStorage.setItem(
        "latestPlan",
        JSON.stringify(planData)
      );

      // Save plan history
      const allPlans = JSON.parse(
        localStorage.getItem("allPlans")
      ) || [];

      allPlans.unshift(planData);

      localStorage.setItem(
        "allPlans",
        JSON.stringify(allPlans)
      );

      setPlan(generatedPlan);
      
    } catch (error) {
      console.error(error);
      toast.error("Failed to generate AI plan.");
    } finally {
      setLoading(false);
    }
  };

  const resetPlanner = () => {
    setTask("");
    setDeadline("");
    setHoursPerDay("");
    setDifficulty("Medium");
    setPriority("Medium");
    setPlan("");
  };

  return (
    <div className="min-h-screen bg-slate-100 py-10">
      <div className="max-w-5xl mx-auto px-5">

        <PlannerForm
          task={task}
          setTask={setTask}
          deadline={deadline}
          setDeadline={setDeadline}
          hoursPerDay={hoursPerDay}
          setHoursPerDay={setHoursPerDay}
          difficulty={difficulty}
          setDifficulty={setDifficulty}
          priority={priority}
          setPriority={setPriority}
          loading={loading}
          generatePlan={generatePlan}
        />
        {loading && <LoadingCard />}
        <PlanResult plan={plan} />

        <ActionButtons
          plan={plan}
          resetPlanner={resetPlanner}
        />

      </div>
    </div>
  );
}

export default Planner;