export default function Research() {
  const programs = [
    {
      title: "Strategic Stability",
      description:
        "Research on deterrence, crisis stability and regional security dynamics."
    },
    {
      title: "South Asian Security",
      description:
        "Analysis of evolving strategic and political developments in South Asia."
    },
    {
      title: "Artificial Intelligence",
      description:
        "Study of AI-enabled military systems, autonomy and strategic implications."
    },
    {
      title: "Arms Control",
      description:
        "Research on non-proliferation, arms control and risk reduction measures."
    },
    {
      title: "Cyber Security",
      description:
        "Examination of cyber threats, resilience and digital security."
    },
    {
      title: "Maritime Security",
      description:
        "Research on the Indian Ocean, naval competition and sea lines of communication."
    },
    {
      title: "Space Security",
      description:
        "Study of military space developments and emerging space governance issues."
    },
    {
      title: "Climate & Security",
      description:
        "Assessment of climate risks and their implications for peace and security."
    }
  ];

  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#0e0524] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Research Programs
          </h1>

          <p className="text-xl text-[#DCD6F7] max-w-3xl">
            ISYP Pakistan conducts interdisciplinary research on strategic,
            technological and security challenges shaping the contemporary world.
          </p>

        </div>
      </section>

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

            {programs.map((program) => (
              <div
                key={program.title}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-xl hover:-translate-y-1 transition"
              >
                <h2 className="text-2xl font-bold text-[#0e0524] mb-4">
                  {program.title}
                </h2>

                <p className="text-gray-600">
                  {program.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}