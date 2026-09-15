"use client";

import { useLang } from "@/context/LanguageProvider";
import {
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "@/data/content";

const navKeys = [
  ["about", "about"],
  ["experience", "experience"],
  ["projects", "projects"],
  ["skills", "skills"],
  ["education", "education"],
  ["contact", "contact"],
] as const;

export function Portfolio() {
  const { lang, toggle, t } = useLang();

  return (
    <div className="relative min-h-full overflow-hidden bg-[#071018] text-zinc-100">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-400/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-teal-400 focus:px-3 focus:py-2 focus:text-slate-950"
      >
        {t.skip}
      </a>

      <header className="sticky top-0 z-40 border-b border-white/10 bg-[#071018]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3">
          <a href="#top" className="font-mono text-sm tracking-widest text-teal-300">
            LFH
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-400 md:flex">
            {navKeys.map(([id, key]) => (
              <a key={id} href={`#${id}`} className="transition hover:text-white">
                {t.nav[key]}
              </a>
            ))}
          </nav>
          <button
            type="button"
            onClick={toggle}
            aria-label={t.langLabel}
            className="rounded-full border border-teal-300/40 bg-teal-400/10 px-3 py-1.5 text-xs font-semibold tracking-wide text-teal-200 transition hover:bg-teal-400/20"
          >
            {t.langBtn}
          </button>
        </div>
      </header>

      <main id="top" className="relative mx-auto max-w-6xl px-5">
        <section className="grid gap-10 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center md:py-24">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-teal-300">
              {t.role}
            </p>
            <h1 className="mt-4 font-serif text-4xl leading-tight text-white sm:text-6xl">
              {profile.name}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">{t.headline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-teal-300 px-5 py-2.5 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
              >
                {t.ctaPrimary}
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="rounded-full border border-white/15 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-teal-300/50 hover:text-teal-200"
              >
                {t.ctaSecondary}
              </a>
            </div>
          </div>
          <aside className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_0_80px_rgba(45,212,191,0.08)]">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-zinc-500">E-mail</dt>
                <dd>
                  <a className="text-teal-200 hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">{lang === "en" ? "Phone" : "Telefone"}</dt>
                <dd>
                  <a className="hover:text-teal-200" href={profile.phoneHref}>
                    {profile.phone}
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-zinc-500">{lang === "en" ? "Location" : "Local"}</dt>
                <dd>{profile.location[lang]}</dd>
              </div>
              <div className="flex gap-4 pt-2">
                <a className="text-zinc-300 hover:text-white" href={profile.github} target="_blank" rel="noreferrer">
                  GitHub
                </a>
                <a className="text-zinc-300 hover:text-white" href={profile.linkedin} target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </div>
            </dl>
          </aside>
        </section>

        <section id="about" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.aboutTitle}</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {t.about.map((paragraph) => (
              <p key={paragraph} className="leading-7 text-zinc-400">
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section id="experience" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.experienceTitle}</h2>
          <ol className="mt-10 space-y-8">
            {experience[lang].map((job) => (
              <li
                key={job.company}
                className="grid gap-3 rounded-2xl border border-white/8 bg-white/[0.03] p-6 md:grid-cols-[220px_1fr]"
              >
                <div>
                  <p className="font-mono text-xs text-teal-300">{job.period}</p>
                  <h3 className="mt-2 font-semibold text-white">{job.role}</h3>
                  <p className="mt-1 text-sm text-zinc-500">{job.company}</p>
                </div>
                <ul className="space-y-2 text-sm leading-6 text-zinc-400">
                  {job.bullets.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-300" />
                      {item}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ol>
        </section>

        <section id="projects" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.projectsTitle}</h2>
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {projects[lang].map((project) => (
              <article
                key={project.title}
                className="flex flex-col rounded-2xl border border-white/10 bg-gradient-to-br from-white/6 to-transparent p-6"
              >
                <p className="font-mono text-[11px] uppercase tracking-widest text-teal-300">
                  {project.tag}
                </p>
                <h3 className="mt-3 text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-zinc-400">{project.description}</p>
                <div className="mt-5 flex gap-4 text-sm">
                  <a className="text-teal-200 hover:underline" href={project.href} target="_blank" rel="noreferrer">
                    {t.live}
                  </a>
                  <a className="text-zinc-400 hover:text-white" href={project.repo} target="_blank" rel="noreferrer">
                    {t.code}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.skillsTitle}</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {skillGroups[lang].map((group) => (
              <div key={group.title} className="rounded-2xl border border-white/10 p-6">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-zinc-400">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-teal-300/20 bg-teal-400/5 px-3 py-1 text-sm text-teal-100"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="education" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.educationTitle}</h2>
          <ul className="mt-8 space-y-4">
            {education[lang].map((item) => (
              <li
                key={item.title}
                className="flex flex-col justify-between gap-2 rounded-xl border border-white/8 px-5 py-4 sm:flex-row sm:items-center"
              >
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-zinc-500">{item.place}</p>
                </div>
                <p className="font-mono text-xs text-teal-300">{item.period}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="contact" className="scroll-mt-24 border-t border-white/10 py-16">
          <h2 className="font-serif text-3xl text-white">{t.contactTitle}</h2>
          <p className="mt-4 max-w-2xl text-zinc-400">{t.contactText}</p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-teal-200"
          >
            {profile.email}
          </a>
        </section>
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} {profile.name}. {t.footer}
      </footer>
    </div>
  );
}
