import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope
} from "react-icons/fa"

function App() {

  const skills = [
    "React",
    "JavaScript",
    "PHP",
    "MySQL",
    ".NET",
    "Cyber Security",
    "Technical Support",
    "HTML/CSS",
    "Project Management"
  ]

  return (
    <div className="bg-[#0f172a] text-white overflow-x-hidden">

      {/* BACKGROUND GLOW */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10">

        <div className="absolute top-20 left-20 w-[300px] h-[300px] bg-[#d4a373] opacity-20 blur-[120px] rounded-full"></div>

        <div className="absolute bottom-20 right-20 w-[300px] h-[300px] bg-blue-500 opacity-10 blur-[120px] rounded-full"></div>

      </div>

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full bg-black/20 backdrop-blur-md border-b border-white/10 z-50">

        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

          <h1 className="text-2xl font-bold tracking-wide">
            GALIB
          </h1>

          <div className="hidden md:flex gap-8 text-sm">

            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="min-h-screen flex items-center pt-24 px-6">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity:0, y:40 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:1 }}
          >

            <p className="text-[#d4a373] uppercase tracking-[4px] mb-4">
              State Rollout Manager
            </p>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              GALIBUDEEN MC
            </h1>

            <p className="text-gray-300 mt-6 text-lg leading-relaxed">
              Building reliable digital solutions, scalable web applications,
              and technology systems that improve operational efficiency.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="bg-[#d4a373] text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition"
              >
                View Projects
              </a>

              <a
                href="/cv.pdf"
                className="border border-white/30 px-6 py-3 rounded-full hover:bg-white hover:text-black transition"
              >
                Download CV
              </a>

            </div>

            {/* SOCIALS */}
            <div className="flex gap-6 mt-10 text-2xl">

              <a href="https://github.com/galibudeen" target="_blank" rel="noopener noreferrer">
                <FaGithub />
              </a>

              <a href="https://www.linkedin.com/in/galibudeenmc" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
              </a>

              <a href="mailto:galibudeen@gmail.com">
                <FaEnvelope />
              </a>

            </div>

          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity:0, scale:0.9 }}
            animate={{ opacity:1, scale:1 }}
            transition={{ duration:1 }}
            className="relative"
          >

            <div className="absolute inset-0 bg-[#d4a373] blur-[120px] opacity-20"></div>

            <img
              src="/profile-desktop.png"
              alt="profile"
              className="relative z-10 rounded-[30px] shadow-2xl hover:scale-[1.02] transition duration-500"
            />

          </motion.div>

        </div>

      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="py-24 px-6"
      >

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          transition={{ duration:0.8 }}
          className="max-w-6xl mx-auto glass rounded-[30px] p-10"
        >

          <h2 className="text-4xl font-bold mb-6">
            About Me
          </h2>

          <p className="text-gray-300 text-lg leading-relaxed">
            Passionate technology professional with proven expertise in
            web application development, IT infrastructure,
            digital governance projects, and stakeholder-driven
            technology solutions that create real-world impact.
          </p>

        </motion.div>

      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Skills
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {skills.map((skill,index)=>(

              <motion.div
                key={index}
                initial={{ opacity:0, y:40 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ delay:index * 0.1 }}
                className="glass rounded-2xl p-8 text-center hover:scale-105 transition duration-300"
              >

                <h3 className="text-xl font-semibold">
                  {skill}
                </h3>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* EXPERIENCE */}
      <section className="py-24 px-6">

        <div className="max-w-5xl mx-auto">

          <h2 className="text-4xl font-bold mb-16 text-center">
            Experience
          </h2>

          <div className="space-y-8">

            {[
              {
                role:"State Rollout Manager",
                company:"Nippon Data Systems LTD",
                year:"Dec 2021 - Present"
              },
              {
                role:"Junior Consultant (IT)",
                company:"GA Digital Web World",
                year:"Apr 2021 - Nov 2021"
              },
              {
                role:"Assistant Executive Programming",
                company:"LITSS",
                year:" Nov 2018 - Mar 2021"
              },
              {
                role:"ASSISTANT PROGRAMMER",
                company:"Nelito Solutions",
                year:"Feb 2017 – Oct 2018"
              }
            ].map((job,index)=>(

              <motion.div
                key={index}
                initial={{ opacity:0, x:-50 }}
                whileInView={{ opacity:1, x:0 }}
                transition={{ duration:0.6 }}
                className="glass rounded-[30px] p-8"
              >

                <h3 className="text-2xl font-bold">
                  {job.role}
                </h3>

                <p className="text-[#d4a373] mt-2">
                  {job.company}
                </p>

                <p className="text-gray-400 mt-2">
                  {job.year}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* PROJECTS */}
      <section
        id="projects"
        className="py-24 px-6"
      >

        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {[
              {
                title:"Content Based Filtering in Online Social Network",
                desc:"System enforcing content-based message filtering for secure communication and social network moderation."
              },

              {
                title:"Portfolio Website",
                desc:"Modern responsive portfolio website designed to showcase projects, experience and professional profile."
              },

              {
                title:"Website for Job Seekers",
                desc:"Platform to collect and manage job seeker education qualifications, profiles and experience details."
              },

              {
                title:"Billing Software for Optical Shop",
                desc:"Inventory and billing system for managing stock, product sales and shortage tracking efficiently."
              }

            ].map((project,index)=>(

              <motion.div
                key={index}
                initial={{ opacity:0, y:50 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6 }}
                className="glass rounded-[30px] p-8 hover:scale-[1.02] transition"
              >

                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed">
                  {project.desc}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="py-24 px-6"
      >

        <motion.div
          initial={{ opacity:0, y:50 }}
          whileInView={{ opacity:1, y:0 }}
          className="max-w-4xl mx-auto glass rounded-[30px] p-12 text-center"
        >

          <h2 className="text-4xl font-bold mb-6">
            Contact Me
          </h2>

          <p className="text-gray-300 text-lg">
            Let’s build something amazing together.
          </p>

          <div className="mt-8 space-y-4 text-gray-300">

            <p>
              galibudeen@gmail.com
            </p>

            <p>
              Lakshadweep, India
            </p>

          </div>

        </motion.div>

      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-gray-500 border-t border-white/10">

        © 2026 Galibudeen MC — All Rights Reserved

      </footer>

    </div>
  )
}

export default App