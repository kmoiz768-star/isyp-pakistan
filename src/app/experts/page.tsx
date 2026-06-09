export default function Experts() {
  const experts = [
    {
      name: "Kumail Ahmed",
      role: "Founder & Research Director",
      specialization: "Strategic Stability, AI and Security",
    },
    {
      name: "Research Fellow",
      role: "Research Fellow",
      specialization: "South Asian Security",
    },
    {
      name: "Research Associate",
      role: "Research Associate",
      specialization: "Maritime Security",
    },
    {
      name: "Research Associate",
      role: "Research Associate",
      specialization: "Cyber Security",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      <section className="bg-[#0e0524] text-white py-28">
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Experts
          </h1>

          <p className="text-xl text-[#DCD6F7] max-w-3xl">
            Researchers, fellows and contributors advancing peace,
            strategic stability and emerging security studies.
          </p>

        </div>
      </section>

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

            {experts.map((expert) => (
              <div
                key={expert.name}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition"
              >
                <div className="w-20 h-20 rounded-full bg-[#0e0524] mb-6"></div>

                <h2 className="text-2xl font-bold text-[#0e0524]">
                  {expert.name}
                </h2>

                <p className="text-purple-700 mt-2">
                  {expert.role}
                </p>

                <p className="text-gray-600 mt-4">
                  {expert.specialization}
                </p>
              </div>
            ))}

          </div>

        </div>

      </section>

    </main>
  );
}