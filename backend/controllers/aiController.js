import ai from "../config/gemini.js";

export const generatePlan = async (req, res) => {
    try {
        const {
            task,
            deadline,
            hoursPerDay,
            difficulty,
            priority,
        } = req.body;

        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const deadlineDate = new Date(deadline);
        deadlineDate.setHours(0, 0, 0, 0);

        const diffTime = deadlineDate - today;

        const daysRemaining = Math.max(
            1,
            Math.ceil(diffTime / (1000 * 60 * 60 * 24)) + 1
        );

        // Generate all dates between today and deadline
        const schedule = [];

        for (let i = 0; i < daysRemaining; i++) {
            const d = new Date(today);
            d.setDate(today.getDate() + i);

            schedule.push({
                day: `Day ${i + 1}`,
                date: d.toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                }),
            });
        }

        const prompt = `
You are Deadline Pilot, an expert AI productivity coach.

Your job is ONLY to create study/work tasks.

DO NOT calculate dates.

The schedule has already been prepared.

Task:
${task}

Difficulty:
${difficulty}

Priority:
${priority}

Hours Available Per Day:
${hoursPerDay}

Today's Date:
${schedule[0].date}

Deadline:
${schedule[schedule.length - 1].date}

Days Remaining:
${daysRemaining}

The user MUST study according to this schedule:

${JSON.stringify(schedule, null, 2)}

Generate exactly ONE task for EACH date.

Never remove or change any date.

Return ONLY this JSON:

{
  "risk": {
    "level":"Low | Medium | High",
    "reason":"...",
    "recommendation":"..."
  },

  "plan":[
    {
      "day":"Day 1",
      "date":"26 June 2026",
      "task":"...",
      "hours":"2"
    }
  ],

  "motivation":"..."
}

Return JSON only.
`;

        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash",
            contents: prompt,
        });

        // Remove markdown code fences if Gemini returns them
        const cleanedResponse = response.text
            .replace(/```json/g, "")
            .replace(/```/g, "")
            .trim();

        const parsedPlan = JSON.parse(cleanedResponse);

        parsedPlan.planId = Date.now().toString();

        res.json({
            success: true,
            plan: parsedPlan,
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Failed to generate AI plan.",
        });

    }
};