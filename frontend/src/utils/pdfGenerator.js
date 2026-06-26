import jsPDF from "jspdf";

export function downloadPlanPDF(planData) {
  if (!planData) return;

  const doc = new jsPDF();

  let y = 20;

  doc.setFontSize(20);
  doc.text("Deadline Pilot", 20, y);

  y += 10;

  doc.setFontSize(14);
  doc.text("AI Productivity Report", 20, y);

  y += 15;

  doc.setFontSize(16);
  doc.text("Task Information", 20, y);

  y += 10;

  doc.setFontSize(12);
  doc.text(`Task: ${planData.task}`, 20, y);

  y += 8;

  doc.text(`Deadline: ${planData.deadline}`, 20, y);

  y += 8;

  doc.text(`Difficulty: ${planData.difficulty}`, 20, y);

  y += 8;

  doc.text(`Priority: ${planData.priority}`, 20, y);

  y += 8;

  doc.text(`Hours/Day: ${planData.hoursPerDay}`, 20, y);

  y += 15;

  const aiPlan = planData.plan;

  doc.setFontSize(16);
  doc.text("Risk Analysis", 20, y);

  y += 10;

  doc.setFontSize(12);

  doc.text(`Risk Level: ${aiPlan.risk.level}`, 20, y);

  y += 8;

  const reason = doc.splitTextToSize(
    aiPlan.risk.reason,
    170
  );

  doc.text(reason, 20, y);

  y += reason.length * 7;

  const recommendation = doc.splitTextToSize(
    aiPlan.risk.recommendation,
    170
  );

  doc.text(recommendation, 20, y);

  y += recommendation.length * 7 + 10;

  doc.setFontSize(16);
  doc.text("Daily Plan", 20, y);

  y += 10;

  aiPlan.plan.forEach((item) => {

    if (y > 260) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(14);
    doc.text(`${item.day} (${item.date})`, 20, y);

    y += 8;

    const task = doc.splitTextToSize(item.task, 170);

    doc.setFontSize(12);

    doc.text(task, 20, y);

    y += task.length * 7;

    doc.text(`Hours: ${item.hours}`, 20, y);

    y += 12;

  });

  if (y > 240) {
    doc.addPage();
    y = 20;
  }

  doc.setFontSize(16);
  doc.text("Motivation", 20, y);

  y += 10;

  const motivation = doc.splitTextToSize(
    aiPlan.motivation,
    170
  );

  doc.setFontSize(12);

  doc.text(motivation, 20, y);

  doc.save("DeadlinePilot-Plan.pdf");
}