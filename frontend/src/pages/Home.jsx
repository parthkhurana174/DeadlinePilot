import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Footer from "../components/Footer/Footer";
import FeatureCard from "../components/FeatureCard/FeatureCard";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Why Choose Deadline Pilot?
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          <FeatureCard
            icon="📅"
            title="Smart Planning"
            description="AI creates step-by-step plans for every task."
          />

          <FeatureCard
            icon="⚡"
            title="Priority AI"
            description="Know which task needs your attention first."
          />

          <FeatureCard
            icon="🎯"
            title="Daily Focus"
            description="Focus only on today's most important work."
          />

          <FeatureCard
            icon="📊"
            title="Progress Tracking"
            description="Track completed and pending tasks easily."
          />

        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;