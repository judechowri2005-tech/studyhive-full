export default function GroupCard({ group, onDelete }) {
  return (
    <div className="relative overflow-hidden rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-indigo-500 to-purple-500" />
      <div className="mb-2 flex items-start justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-indigo-500">{group.code}</p>
          <h3 className="text-lg font-semibold text-slate-800">{group.subject}</h3>
        </div>
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-sm font-bold text-white">
          {group.members}
        </span>
      </div>

      <p className="mb-4 text-sm text-slate-600">{group.topic}</p>

      <div className="flex items-center justify-between border-t border-slate-100 pt-3 text-sm">
        <span className="text-slate-500">{group.nextSession}</span>
        <button
          onClick={() => onDelete(group._id)}
          className="rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-600 hover:bg-red-100"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
