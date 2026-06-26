import jsPDF from "jspdf";

function DownloadButton({ plan }) {
  if (!plan) return null;

  const downloadPDF = () => {
    const doc = new jsPDF();

    const data = typeof plan === "string" ? JSON.parse(plan) : plan;

    let y = 20;

    doc.setFontSize(20);
    doc.text("Deadline Pilot", 20, y);

    y += 10;

    doc.setFontSize(14);
    doc.text("AI Productivity Report", 20, y);

    y += 15;

    // Risk Analysis
    doc.setFontSize(16);
    doc.text("Risk Analysis", 20, y);

    y += 10;

    doc.setFontSize(12);
    doc.text(`Risk Level: ${data.risk.level}`, 20, y);

    y += 8;

    const reason = doc.splitTextToSize(
      `Reason: ${data.risk.reason}`,
      170
    );

    doc.text(reason, 20, y);

    y += reason.length * 7;

    const recommendation = doc.splitTextToSize(
      `Recommendation: ${data.risk.recommendation}`,
      170
    );

    doc.text(recommendation, 20, y);

    y += recommendation.length * 7 + 10;

    // Daily Plan
    doc.setFontSize(16);
    doc.text("Daily Action Plan", 20, y);

    y += 10;

    data.plan.forEach((item) => {

      if (y > 260) {
        doc.addPage();
        y = 20;
      }

      doc.setFontSize(14);
      doc.text(item.day, 20, y);

      y += 8;

      const task = doc.splitTextToSize(
        `Task: ${item.task}`,
        170
      );

      doc.setFontSize(12);
      doc.text(task, 20, y);

      y += task.length * 7;

      doc.text(`Hours: ${item.hours}`, 20, y);

      y += 12;
    });

    // Motivation
    if (y > 240) {
      doc.addPage();
      y = 20;
    }

    doc.setFontSize(16);
    doc.text("Motivation", 20, y);

    y += 10;

    const motivation = doc.splitTextToSize(
      data.motivation,
      170
    );

    doc.setFontSize(12);
    doc.text(motivation, 20, y);

    doc.save("DeadlinePilot-Plan.pdf");
  };

  return (
    <button
      onClick={downloadPDF}
      className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg transition"
    >
      📄 Download PDF
    </button>
  );
}

export default DownloadButton;