import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SMF Skills | 20 Free + Pro OpenClaw Skills",
  description:
    "20 productivity skills for OpenClaw: 10 free forever + 10 Pro with subscription. File organizers, PDF tools, lead capture, invoicing, booking, and more.",
  alternates: { canonical: "https://smfworks.com/skills" },
};

export default function SkillsPage() {
  const freeSkills = [
    { num: 1, name: "File Organizer", desc: "Organize files by date, type, find duplicates", cmd: "file-organizer" },
    { num: 2, name: "PDF Toolkit", desc: "Merge, split, extract, compress, rotate PDFs", cmd: "pdf-toolkit" },
    { num: 3, name: "Text Formatter", desc: "Case conversion, word count, clean whitespace", cmd: "text-formatter" },
    { num: 4, name: "QR Generator", desc: "Generate QR codes for URLs, WiFi, vCard, email", cmd: "qr-generator" },
    { num: 5, name: "System Monitor", desc: "Monitor disk, memory, CPU, find large files", cmd: "system-monitor" },
    { num: 6, name: "Website Checker", desc: "Check site status, SSL certificates, response time", cmd: "website-checker" },
    { num: 7, name: "CSV Converter", desc: "Convert between CSV, JSON, Excel formats", cmd: "csv-converter" },
    { num: 8, name: "Image Resizer", desc: "Resize, compress, convert, batch process images", cmd: "image-resizer" },
    { num: 9, name: "Password Generator", desc: "Strong passwords, passphrases, strength check", cmd: "password-generator" },
    { num: 10, name: "Markdown Converter", desc: "Convert Markdown to HTML, text, extract TOC", cmd: "markdown-converter" },
  ];

  const proSkills = [
    { num: 11, name: "Lead Capture", desc: "Capture, qualify, and manage sales leads", cmd: "lead-capture" },
    { num: 12, name: "Database Backup", desc: "Backup SQLite, PostgreSQL, MySQL with compression", cmd: "database-backup" },
    { num: 13, name: "Report Generator", desc: "Create business reports from CSV/JSON data", cmd: "report-generator" },
    { num: 14, name: "Email Campaign", desc: "Create and send email campaigns with tracking", cmd: "email-campaign" },
    { num: 15, name: "Task Manager", desc: "Kanban project management with deadlines", cmd: "task-manager" },
    { num: 16, name: "Self-Improvement", desc: "Log errors and learnings for continuous improvement", cmd: "self-improvement" },
    { num: 17, name: "Invoice Generator", desc: "Create professional invoices, track payments", cmd: "invoice-generator" },
    { num: 18, name: "Form Builder", desc: "Create forms, collect responses, export data", cmd: "form-builder" },
    { num: 19, name: "Booking Engine", desc: "Appointment scheduling with availability management", cmd: "booking-engine" },
    { num: 20, name: "OpenClaw Optimizer", desc: "Audit workspace for cost and performance optimization", cmd: "openclaw-optimizer" },
  ];

  return (
    <>
      {/* HEADER */}
      <section className="bg-[#001F3F] text-[#E2E8F0] py-20 px-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[300px] bg-[#007BFF] opacity-[0.05] blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10 text-center">
          <p className="text-[#00D4FF] text-sm font-semibold uppercase tracking-widest mb-3">OpenClaw Skills</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">20 Skills for Productivity</h1>
          <p className="text-[#94A3B8] text-lg max-w-2xl mx-auto leading-relaxed mb-6">
            A curated collection of skills for OpenClaw — from everyday utilities to business automation tools.
            Free skills forever. Pro skills for serious automation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="inline-flex items-center gap-2 bg-[#00D4FF]/10 text-[#00D4FF] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#00D4FF] rounded-full"></span>
              10 Free Forever
            </span>
            <span className="inline-flex items-center gap-2 bg-[#007BFF]/10 text-[#007BFF] px-4 py-2 rounded-full text-sm font-medium">
              <span className="w-2 h-2 bg-[#007BFF] rounded-full"></span>
              10 Pro ($19.99/mo)
            </span>
          </div>
        </div>
      </section>

      {/* QUICK START */}
      <section className="bg-[#0A1628] py-16 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-[#E2E8F0] mb-6 text-center">Quick Start</h2>
          <div className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 font-mono text-sm overflow-x-auto">
            <p className="text-[#64748B] mb-2"># Install SMF CLI (one-time setup)</p>
            <p className="text-[#00D4FF] mb-4">curl -fsSL https://raw.githubusercontent.com/smfworks/smfworks-skills/main/install.sh | bash</p>
            
            <p className="text-[#64748B] mb-2"># Install any skill</p>
            <p className="text-[#00D4FF] mb-2">smf install file-organizer</p>
            <p className="text-[#00D4FF] mb-4">smf install lead-capture</p>
            
            <p className="text-[#64748B] mb-2"># Run it</p>
            <p className="text-[#00D4FF]">smf run file-organizer organize-date ~/Downloads</p>
          </div>
          
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/smfworks/smfworks-skills"
              className="inline-flex items-center gap-2 bg-[#007BFF] hover:bg-[#0066CC] text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              View on GitHub
            </Link>
            <Link
              href="https://smf.works/subscribe"
              className="inline-flex items-center gap-2 bg-[#00D4FF] hover:bg-[#00B8DB] text-[#001F3F] px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Subscribe to Pro
            </Link>
          </div>
        </div>
      </section>

      {/* FREE SKILLS */}
      <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-10">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-[#00D4FF] text-[#001F3F] rounded-full font-bold">10</span>
            <h2 className="text-3xl font-bold text-[#E2E8F0]">Free Skills</h2>
            <span className="text-[#94A3B8] text-sm ml-auto">No subscription. No auth. Just works.</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {freeSkills.map((skill) => (
              <div key={skill.num} className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#00D4FF]/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#00D4FF] font-mono text-sm">#{skill.num.toString().padStart(2, '0')}</span>
                  <code className="text-[#64748B] text-xs">{skill.cmd}</code>
                </div>
                <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">{skill.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRO SKILLS */}
      <section className="bg-[#0A1628] py-16 px-6 border-t border-[#1e2a45]">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-6">
            <span className="inline-flex items-center justify-center w-10 h-10 bg-[#007BFF] text-white rounded-full font-bold">10</span>
            <h2 className="text-3xl font-bold text-[#E2E8F0]">Pro Skills</h2>
          </div>
          
          <div className="bg-[#007BFF]/10 border border-[#007BFF]/30 rounded-xl p-6 mb-10">
            <p className="text-[#E2E8F0] leading-relaxed">
              Premium skills for business automation. Requires SMF Works subscription ($19.99/mo, price locked at signup).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proSkills.map((skill) => (
              <div key={skill.num} className="bg-[#131B2E] border border-[#1e2a45] rounded-xl p-6 hover:border-[#007BFF]/50 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <span className="text-[#007BFF] font-mono text-sm">#{skill.num}</span>
                  <code className="text-[#64748B] text-xs">{skill.cmd}</code>
                </div>
                <h3 className="text-lg font-semibold text-[#E2E8F0] mb-2">{skill.name}</h3>
                <p className="text-[#94A3B8] text-sm leading-relaxed">{skill.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#001F3F] py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-[#E2E8F0] mb-4">Ready to Get Started?</h2>
          <p className="text-[#94A3B8] mb-8">Install the SMF CLI and start using skills in minutes.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="https://github.com/smfworks/smfworks-skills"
              className="inline-flex items-center gap-2 bg-[#007BFF] hover:bg-[#0066CC] text-white px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Get Started Free
            </Link>
            <Link
              href="https://smf.works/subscribe"
              className="inline-flex items-center gap-2 bg-[#00D4FF] hover:bg-[#00B8DB] text-[#001F3F] px-8 py-4 rounded-lg font-medium transition-colors"
            >
              Subscribe to Pro — $19.99/mo
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
