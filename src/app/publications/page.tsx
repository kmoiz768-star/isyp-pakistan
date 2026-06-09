export default function Publications() {
  const publications = [
    {
      type: "Research Paper",
      title: "Artificial Intelligence and Strategic Stability in South Asia",
      date: "June 2026",
    },
    {
      type: "Policy Brief",
      title: "Maritime Competition in the Indian Ocean Region",
      date: "May 2026",
    },
    {
      type: "Strategic Assessment",
      title: "Emerging Technologies and Future Warfare",
      date: "April 2026",
    },
    {
      type: "Commentary",
      title: "Nuclear Deterrence in the Age of Autonomous Systems",
      date: "March 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#0e0524] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Publications
          </h1>

          <p className="text-xl text-[#DCD6F7] max-w-3xl">
            Research papers, policy briefs, strategic assessments and commentaries
            produced by ISYP Pakistan.
          </p>

        </div>
      </section>

      <section className="py-24">

        <div className="max-w-6xl mx-auto px-6 space-y-8">

          {publications.map((publication) => (
            <div
              key={publication.title}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition"
            >
              <p className="text-sm font-semibold text-purple-700">
                {publication.type}
              </p>

              <h2 className="text-3xl font-bold text-[#0e0524] mt-3">
                {publication.title}
              </h2>

              <p className="text-gray-500 mt-4">
                {publication.date}
              </p>
            </div>
          ))}

        </div>

      </section>

    </main>
  );
}