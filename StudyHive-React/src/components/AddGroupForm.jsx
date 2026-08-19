import { useState } from "react";

export default function AddGroupForm({ onAdd }) {
  const [form, setForm] = useState({
    subject: "",
    code: "",
    topic: "",
    members: 1,
    nextSession: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.subject || !form.code || !form.topic || !form.nextSession) return;
    onAdd({ ...form, members: Number(form.members) || 1 });
    setForm({ subject: "", code: "", topic: "", members: 1, nextSession: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-8 grid grid-cols-1 gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:grid-cols-2"
    >
      <input
        type="text"
        name="subject"
        placeholder="Subject (e.g. Database Technologies)"
        value={form.subject}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
      <input
        type="text"
        name="code"
        placeholder="Course code (e.g. MCA411-1)"
        value={form.code}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
      <input
        type="text"
        name="topic"
        placeholder="Topic (e.g. Booth's Algorithm)"
        value={form.topic}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100 sm:col-span-2"
      />
      <input
        type="number"
        name="members"
        min="1"
        placeholder="Members"
        value={form.members}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />
      <input
        type="text"
        name="nextSession"
        placeholder="Next session (e.g. Today, 6:30 PM)"
        value={form.nextSession}
        onChange={handleChange}
        className="rounded-lg border border-slate-300 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
      />

      <button
        type="submit"
        className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 sm:col-span-2"
      >
        Add Study Group
      </button>
    </form>
  );
}
