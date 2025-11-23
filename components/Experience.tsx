'use client'
import { useState } from 'react'

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Website Developer",
      company: "Freelance",
      period: "Oct 2025 – Present",
      location: "Singapore · Remote",
      description: `
Developed modern, responsive websites using React, TypeScript, Tailwind CSS, and JavaScript. 
Integrated backend features with Supabase, implemented email handling with Resend, and deployed 
projects on Vercel for fast, reliable performance.

Delivered full-stack solutions for clients with clean UI, strong functionality, and smooth user experience.

This freelance journey taught me how to manage end-to-end development, solve real technical challenges, 
and work directly with clients. I learned how to structure scalable codebases, design polished UI with Tailwind, 
integrate backend logic using Supabase, handle email automation with Resend, and ship reliable production 
builds on Vercel. It also boosted my confidence in handling deadlines, debugging, and delivering 
high-quality work independently.
      `,
      skills: ["React.js", "Vercel", "Supabase", "Tailwind CSS"],
    },
    {
      role: "Retail Assistant",
      company: "KS Mobile Pte Ltd",
      period: "Apr 2024 – Present",
      location: "Singapore · On-site",
      description: `
As a Retail Assistant, I supported daily store operations by assisting customers, managing inventory, 
and maintaining a clean and organized retail environment. I handled transactions, restocked products, 
answered customer queries, and ensured a smooth and positive shopping experience. 
This role strengthened my communication skills, responsibility, and ability to work efficiently in fast-paced environments.

From this experience, I learned how to communicate confidently with customers, understand their needs, 
and recommend the right products. I also strengthened my teamwork, time management, and multitasking abilities. 
Working in a busy retail setting helped me develop discipline, responsibility, and the ability to stay calm when 
handling challenges or customer concerns.
      `,
      skills: ["Communication", "Sales & Product Knowledge", "Customer Service"],
    },
    {
      role: "Junior Application Engineer",
      company: "Efunity Pte Ltd",
      period: "Mar 2025 – Aug 2025",
      location: "Singapore · On-site",
      description: `
At Efunity, I contributed to engineering solutions aimed at improving energy efficiency and management. 
My role involved assisting in the design, integration, testing, and deployment of monitoring and automation 
systems such as SCADA/HMI, Energy Management Systems, and Power Quality Monitoring.

I helped prepare project documentation and drawings, debugged both hardware and software components, 
collaborated with cross-functional teams to ensure successful commissioning, and supported data capture 
and alerting functionalities.

This internship helped sharpen my skills in problem solving, real-world technical implementation, and 
understanding how energy systems and environmental monitoring operate.
      `,
      skills: [
        "Troubleshooting",
        "Debugging",
        "Basic server/VM setup",
        "Network communication",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-10">Experience</h2>

      <div className="space-y-10">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="rounded-xl border border-gray-200 dark:border-gray-700 p-6 bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600 dark:text-gray-300">
              {exp.company} • {exp.period}
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              {exp.location}
            </p>

            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2 mt-4">
              {exp.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
