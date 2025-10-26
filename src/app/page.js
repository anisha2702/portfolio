'use client';
import Reveal from "@/components/Reveal";
import projects from "@/data/projects";
import Skills from "@/components/Skills";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="space-y-24">
      {/* ✅ Hero Section */}
      <Reveal>
        <section id="home">
          <Hero />
        </section>
      </Reveal>

      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500  rounded-full opacity-40" />




      {/* ✅ About Section */}
      <Reveal delay={0.1}>
        <section
          className="bg-white dark:bg-gray-900 px-4  max-w-3xl mx-auto text-center rounded-xl shadow-sm scroll-mt-20"
          id="about"
        >
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            About Me
          </h2>

          <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed">
            I specialize in frontend and full-stack web development. I love turning ideas into user-friendly experiences with clean UI, performant code, and a mobile-first approach.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            {[
              'HTML',
              'CSS',
              'JavaScript',
              'React',
              'Next.js',
              'Tailwind',
              'Git',
              'Python',
            ].map((tech) => (
              <span
                key={tech}
                className="px-4 py-1 text-sm font-medium rounded-full border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-200 bg-gray-100 dark:bg-gray-800"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </Reveal>


      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500 my-12 rounded-full opacity-40" />


      <Skills />

      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500 my-12 rounded-full opacity-40" />


      {/* ✅ Projects Section */}
      <Reveal delay={0.2}>
        <section className="px-4 max-w-4xl mx-auto scroll-mt-20 " id="projects" >
          <h2 className="text-3xl font-semibold text-center mb-8 text-gray-900 dark:text-white">Projects</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Fake News Detection System',
                desc: 'A full-stack web application built with the MERN stack and integrated with a Machine Learning model to detect fake news in real time.',
                link: '#',
                slug: "fake-news-detection-system",
              },
              {
                title: 'Library Chatbot App',
                desc: 'A chatbot-powered library system using HTML , CSS and JavaScript. Handles book queries and availability checks.',
                link: '#',
                slug: "chatbot",
              },
              {
                title: 'Thrift Store Platform',
                desc: 'A full-stack app with seller dashboard, product listings, and location-based filters built with Prisma & Next.js.',
                link: '#',
                slug: "thrift-store",
              },
            ].map((project, index) => (
              <Reveal key={project.slug} delay={index * 0.1}>
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-md transition">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                  <p className="text-gray-700 dark:text-gray-300 mb-3">{project.desc}</p>
                  <a href={`/projects/${project.slug}`} className="text-blue-600 dark:text-blue-400 hover:underline">
                    View Project →
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </Reveal>

      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500 my-12 rounded-full opacity-40" />


      <Reveal delay={0.3}>
        <section id="contact" className="px-4 max-w-2xl mx-auto  text-center scroll-mt-20">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Me</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I’m open to freelance work, collaboration, or just a friendly chat.
            <br />
            Reach out anytime at:
          </p>
          <a
            href="mailto:anishakumari270205@gmail.com"
            className="inline-block text-lg font-medium text-blue-600 dark:text-blue-400 hover:underline break-all"
          >
            anishakumari270205@gmail.com
          </a>
        </section>
      </Reveal>
      <div className="h-[2px] bg-gradient-to-r from-indigo-500 via-indigo-300 to-indigo-500  rounded-full opacity-40" />




    </div>
  );
}
