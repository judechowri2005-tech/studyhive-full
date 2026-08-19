import { useEffect, useState } from "react";
import api from "../api";
import GroupCard from "../components/GroupCard";
import AddGroupForm from "../components/AddGroupForm";

export default function Dashboard() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchGroups = async () => {
    try {
      setLoading(true);
      const res = await api.get("/study-groups");
      setGroups(res.data);
      setError(null);
    } catch (err) {
      setError("Could not load study groups. Is the backend running?");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGroups();
  }, []);

  const handleAdd = async (group) => {
    try {
      const res = await api.post("/study-groups", group);
      setGroups((prev) => [res.data, ...prev]);
    } catch (err) {
      setError("Failed to add study group.");
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/study-groups/${id}`);
      setGroups((prev) => prev.filter((g) => g._id !== id));
    } catch (err) {
      setError("Failed to delete study group.");
    }
  };

  return (
    <div>
      <div className="bg-gradient-to-r from-indigo-500 to-purple-500 px-4 py-10 text-center text-white">
        <h1 className="text-2xl font-bold sm:text-3xl">Your Study Groups</h1>
        <p className="mx-auto mt-2 max-w-md text-sm text-indigo-100">
          Create a group below — it's saved straight to MongoDB.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-4 py-8">
        <AddGroupForm onAdd={handleAdd} />

        {error && (
          <p className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">{error}</p>
        )}

        {loading ? (
          <p className="text-sm text-slate-500">Loading study groups...</p>
        ) : groups.length === 0 ? (
          <div className="rounded-xl border border-dashed border-slate-300 bg-white p-10 text-center">
            <p className="text-sm text-slate-500">No study groups yet — add one above to get started.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {groups.map((group) => (
              <GroupCard key={group._id} group={group} onDelete={handleDelete} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
