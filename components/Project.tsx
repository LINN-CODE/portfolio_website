'use client'
import { useState } from 'react'

export default function ProjectsSection() {
  const projects = [
    {
      title: "Smart IoT Dustbin System (Raspberry Pi • Python • Linux)",
      period: "Apr 2024 – Sep 2024",
      description: `
Developed an automated smart bin system using Raspberry Pi, Python, and Linux, designed to detect bin status, prevent misuse, and send real-time alerts. The system integrates ultrasonic sensors, RFID authentication, servo motor control, and a Flask-based web interface.`,
      features: [
        "Ultrasonic sensor auto-detection when bin is full",
        "IR + moisture sensors for presence detection",
        "RFID authentication using MFRC522",
        "Automatic servo-controlled lid",
        "Telegram API for real-time alerts",
        "LCD display for status messages",
        "Flask web server for monitoring",
        "Multithreading for smooth operation"
      ],
      tech: [
        "Python", "Raspberry Pi", "Flask", "RFID (MFRC522)",
        "Servo Motor PWM", "Ultrasonic Sensor", "Linux", "Telegram Bot"
      ],
      learned: `
Sensor integration on Raspberry Pi, Linux-based systems, HTTP API development, RFID reading, PWM control, hardware–software IoT integration.`
    },
    {
      title: "IoT Biometric Smart Security System",
      period: "Oct 2024 – Feb 2025",
      description: `
Developed a dual-authentication smart lock system integrating biometric security with remote mobile control. The system supports unlocking doors using fingerprints or mobile app commands.`,
      features: [
        "Fingerprint authentication module",
        "Servo-based locking system",
        "ESP8266 WiFi connectivity",
        "Local web server for HTTP requests",
        "Custom Android app using MIT App Inventor",
        "Cloud logging of intrusion attempts"
      ],
      tech: [
        "Arduino", "ESP8266", "Fingerprint Sensor",
        "Ultrasonic Sensor", "MIT App Inventor", "ThingSpeak"
      ],
      learned: `
Secure IoT design, REST API communication, cloud logging, biometric access control integration.`
    },
    {
      title: "Digital IoT Mailbox",
      period: "Apr 2024 – Sep 2024",
      description: `
Built a functional smart mailbox system using Raspberry Pi, STM32F103RB, and Arduino, integrating sensors and multiple authentication methods.`,
      features: [
        "Motion-activated mailbox using PIR",
        "Keypad + LCD room selection",
        "Servo-controlled mail delivery",
        "Fingerprint verification via Arduino",
        "Cooldown/lockout for security",
        "Notification alerts via Telegram"
      ],
      tech: [
        "C++ (mbed)", "Python", "Raspberry Pi",
        "STM32F103", "PIR Sensor", "Keypad", "LCD Module"
      ],
      learned: `
Embedded programming, timers/interrupts, multi-controller communication, hardware–software prototyping.`
    },
    {
      title: "HealthSync – Mobile Health & Fitness App",
      period: "Apr 2024 – Sep 2024",
      description: `
Built a mobile health application using Java and Firebase to integrate clinic appointment booking, fitness tracking, and mental wellness features into one system.`,
      features: [
        "Multi-user roles (Patients, Doctors, Clinics)",
        "Appointment booking & QR code attendance",
        "Fitness + mood logging & meditation videos",
        "QR code generator for appointments",
        "Real-time chat with clinics"
      ],
      tech: [
        "Java", "Android Studio", "XML UI",
        "Firebase Authentication", "Realtime DB", "Storage"
      ],
      learned: `
Mobile UI/UX design, Firebase data structuring, multi-user app design, authentication flow, real-time database logic.`
    },
    {
      title: "Myanmar Traditional Restaurant Website (Client-Server App)",
      period: "Apr 2024 – Sep 2024",
      description: `
Developed a full-stack restaurant management platform with clean UI and complete admin functionality.`,
      features: [
        "Reservation system using PHP + MySQL",
        "Interactive homepage + responsive UI",
        "Admin dashboard for managing reviews, dishes, and messages",
        "Stripe integration for payments"
      ],
      tech: ["HTML", "CSS", "PHP", "Bootstrap", "MySQL", "Stripe API"],
      learned: `
Full-stack web development, authentication, server-side rendering with PHP, payment gateway integration.`
    },
    {
      title: "Lumin Advisory Website",
      period: "Oct 2025 – Present",
      description: `
A full-stack web platform to facilitate client inquiries and showcase sustainability data models.`,
      features: [
        "Next.js 14 App Router structure",
        "Supabase + Resend integration",
        "Optimized SSR performance",
        "Custom responsive navigation & carousel"
      ],
      tech: [
        "Next.js", "TypeScript", "Tailwind CSS",
        "Supabase", "Resend", "Vercel"
      ],
      learned: `
Production-ready architecture, serverless backend integration, accessibility-focused UI design.`
    },
    {
      title: "Löyly Studio – Modern Sauna Experience Platform",
      period: "Sep 2025 – Oct 2025",
      description: `
Developed a high-performance digital platform for a Finnish sauna sanctuary in Singapore using React 18 + Tailwind.`,
      features: [
        "Auto-playing hero carousels",
        "Masonry image layout",
        "Interactive “Rituals” component",
        "Scroll-triggered animations using Framer Motion",
        "Hybrid integration with WordPress using Import Maps"
      ],
      tech: [
        "React 18", "TypeScript", "Tailwind CSS",
        "Framer Motion", "Import Maps", "WordPress"
      ],
      learned: `
Bridging modern frontend with legacy CMS systems, scroll-triggered animations, reusable component design.`
    }
  ];

  return (
    <section id="projects" className="py-24">
      <h2 className="text-3xl font-bold mb-12">Projects</h2>

      <div className="space-y-10">
        {projects.map((p, i) => (
          <div
            key={i}
            className="rounded-xl border border-gray-200 dark:border-gray-700 p-8 bg-white dark:bg-gray-900 shadow-sm hover:shadow-lg transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <h3 className="text-2xl font-semibold">{p.title}</h3>
              <p className="text-gray-500 dark:text-gray-400">{p.period}</p>
            </div>

            <p className="mt-4 text-gray-700 dark:text-gray-300 whitespace-pre-line leading-relaxed">
              {p.description}
            </p>

            <h4 className="mt-6 font-semibold">Key Features</h4>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-1">
              {p.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>

            <h4 className="mt-6 font-semibold">Technologies</h4>
            <div className="flex flex-wrap gap-2 mt-2">
              {p.tech.map((t, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>

            <h4 className="mt-6 font-semibold">What I learned</h4>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
              {p.learned}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
