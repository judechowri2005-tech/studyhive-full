import { useState } from "react";
import api from "../api";

export default function FileSystem() {
  const [data, setData] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const runOperation = async (operation) => {
    setLoading(true);
    setStatus("");

    try {
      if (operation === "read") {
        const response = await api.get("/file-system");
        setData(response.data);
        setStatus("File read successfully.");
      } else if (operation === "write") {
        await api.put("/file-system", { data });
        setStatus("File written successfully.");
      } else {
        await api.post("/file-system/append", { data });
        setStatus("Text appended successfully.");
      }
    } catch (error) {
      setStatus(error.response?.data?.message || "Could not connect to the backend.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-16">
      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-800">Text File Storage</h1>
        <p className="mt-2 text-sm text-slate-500">
          Read, replace, or add text to the backend details file.
        </p>

        <textarea
          value={data}
          onChange={(event) => setData(event.target.value)}
          rows={10}
          placeholder="Enter details here..."
          className="mt-6 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm text-slate-700 outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-100"
        />

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => runOperation("read")}
            disabled={loading}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-60"
          >
            Read
          </button>
          <button
            type="button"
            onClick={() => runOperation("write")}
            disabled={loading}
            className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
          >
            Write
          </button>
          <button
            type="button"
            onClick={() => runOperation("append")}
            disabled={loading}
            className="rounded-lg bg-emerald-600 px-4 py-2 text-sm font-semibold text-white hover:bg-emerald-700 disabled:opacity-60"
          >
            Append
          </button>
        </div>

        {status && <p className="mt-4 text-sm text-slate-600">{status}</p>}
      </div>
    </div>
  );
}