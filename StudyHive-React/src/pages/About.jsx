export default function About() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="mb-4 text-2xl font-bold text-slate-800 sm:text-3xl">About StudyHive</h1>
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        StudyHive is a simple platform built to help students organize group
        study sessions, chat with classmates, and keep track of what's being
        covered across their courses.
      </p>
      <p className="mb-4 text-sm leading-relaxed text-slate-600 sm:text-base">
        This version is a demo MERN stack application — React on the
        frontend, Express and MongoDB on the backend — built to show how
        authentication, a live chat, and CRUD operations fit together in a
        single project.
      </p>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { label: "Frontend", value: "React + Vite + Tailwind CSS" },
          { label: "Backend", value: "Express.js + JWT Auth" },
          { label: "Database", value: "MongoDB (via Mongoose)" },
        ].map((item) => (
          <div key={item.label} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">{item.label}</p>
            <p className="mt-1 text-sm text-slate-700">{item.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
