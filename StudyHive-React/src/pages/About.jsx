export default function About() {
  return (
    <div className="about-page mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <section className="about-hero grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="about-kicker">The place to learn together</span>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-slate-800 sm:text-6xl">
            Good ideas grow in good company.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            StudyHive brings the energy of a library table to one focused space.
            Find classmates who care about the same subjects, turn scattered
            plans into a real study session, and make progress that feels shared.
          </p>
        </div>

        <div className="about-image-frame">
          <img
            src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=85"
            alt="Students studying together around a table"
          />
          <div className="about-image-note">
            <strong>Learn together</strong>
            <span>Small steps. Shared momentum.</span>
          </div>
        </div>
      </section>

      <section className="mt-20 grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-center">
        <div className="about-secondary-image overflow-hidden rounded-2xl">
          <img
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=85"
            alt="A team collaborating during a study session"
          />
        </div>
        <div>
          <span className="about-kicker">Why StudyHive exists</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
            Studying should feel less isolated.
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            It is easy to save a dozen resources and still feel like you are
            studying alone. StudyHive is designed around the moments that make
            learning stick: explaining a difficult idea, asking a quick question,
            and showing up for the next session.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
            Create a group around a course or topic, keep the next meeting visible,
            and use conversation to turn passive revision into an active habit.
            The goal is simple: make it easier to start, easier to return, and more
            rewarding to learn with other people.
          </p>
        </div>
      </section>

      <section className="mt-20">
        <div className="max-w-2xl">
          <span className="about-kicker">Made for momentum</span>
          <h2 className="mt-3 text-3xl font-bold text-slate-800 sm:text-4xl">
            A calmer way to stay on track.
          </h2>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            {
              number: "01",
              title: "Find your study circle",
              text: "Bring the right people together around a subject, course code, or shared goal.",
            },
            {
              number: "02",
              title: "Keep the plan visible",
              text: "Give every group a clear topic and next session so good intentions become calendar-worthy plans.",
            },
            {
              number: "03",
              title: "Make questions welcome",
              text: "Use shared conversation to explain, compare notes, and make difficult concepts feel approachable.",
            },
          ].map((item) => (
            <article key={item.number} className="about-feature rounded-2xl border border-slate-200 bg-white p-6">
              <span className="about-number">{item.number}</span>
              <h3 className="mt-8 text-xl font-bold text-slate-800">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="about-quote mt-20 rounded-2xl px-6 py-10 text-center sm:px-12">
        <p className="mx-auto max-w-3xl text-2xl font-semibold leading-snug text-white sm:text-3xl">
          “The best study session is the one you actually look forward to joining.”
        </p>
        <p className="mt-4 text-sm text-emerald-100">That is the feeling we are building with StudyHive.</p>
      </section>
    </div>
  );
}
