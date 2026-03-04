import Contact from "@/components/contact/Contact";
import Education from "@/components/education/Education";
import Hero from "@/components/hero/Hero";
import Projects from "@/components/projects/Projects";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-black transition-colors duration-300">
      <main className="relative z-10">
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="fade-in">
            <Education />
          </div>
          <div className="fade-in">
            <Projects />
          </div>
          <div className="fade-in">
            <Contact />
          </div>
        </div>
      </main>
    </div>
  );
}
