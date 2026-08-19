import { Link } from "react-router-dom";
import { useAuth } from "../components/AuthContext";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="mx-auto max-w-5xl px-4 py-16 text-center sm:py-24">
      <span className="mx-auto mb-5 inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-xs font-medium text-slate-500 shadow-sm">
        Group study, reimagined
      </span>

      <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-slate-800 sm:text-5xl">
        Study together.{" "}
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          Achieve more.
        </span>
      </h1>

      <p className="mx-auto mt-5 max-w-lg text-sm leading-relaxed text-slate-500 sm:text-base">
        StudyHive connects you with classmates, keeps your sessions organized,
        and turns solo cramming into collaborative learning.
      </p>

      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        {user ? (
          <Link
            to="/dashboard"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Go to Dashboard
          </Link>
        ) : (
          <Link
            to="/register"
            className="rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90"
          >
            Get Started
          </Link>
        )}
        <Link
          to="/about"
          className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"
        >
          Learn More
        </Link>
      </div>

      <div className="mx-auto mt-16 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          { title: "Study Groups", desc: "Create and join groups by subject." },
          { title: "Live Chat", desc: "Talk with classmates in real time." },
          { title: "Your Profile", desc: "Track your groups and activity." },
        ].map((f) => (
          <div key={f.title} className="rounded-xl border border-slate-200 bg-white p-5 text-left shadow-sm">
            <h3 className="mb-1 text-sm font-semibold text-slate-800">{f.title}</h3>
            <p className="text-xs text-slate-500">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
