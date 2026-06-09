export default function Events() {
  const events = [
    {
      title: "Annual Strategic Stability Conference",
      date: "September 2026",
      location: "Islamabad",
      description:
        "A flagship conference bringing together scholars, practitioners and students to discuss strategic stability and emerging security challenges.",
    },
    {
      title: "AI and Security Workshop",
      date: "August 2026",
      location: "Online",
      description:
        "A workshop exploring the implications of artificial intelligence for military affairs, deterrence and international security.",
    },
    {
      title: "South Asian Security Dialogue",
      date: "July 2026",
      location: "Lahore",
      description:
        "An academic dialogue examining regional security trends and strategic competition in South Asia.",
    },
    {
      title: "Young Scholars Research Forum",
      date: "June 2026",
      location: "Islamabad",
      description:
        "A platform for students and young researchers to present research papers and engage with experts.",
    },
  ];

  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}

      <section className="bg-[#0e0524] text-white py-28">

        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-6">
            Events
          </h1>

          <p className="text-xl text-[#DCD6F7] max-w-3xl">
            Conferences, workshops, seminars and dialogues organized by
            ISYP Pakistan to advance research, education and policy engagement.
          </p>

        </div>

      </section>

      {/* UPCOMING EVENTS */}

      <section className="py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0e0524] mb-12">
            Upcoming Events
          </h2>

          <div className="space-y-8">

            {events.map((event) => (
              <div
                key={event.title}
                className="border border-gray-200 rounded-xl p-8 hover:shadow-xl transition"
              >
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6">

                  <div>

                    <h3 className="text-3xl font-bold text-[#0e0524] mb-3">
                      {event.title}
                    </h3>

                    <p className="text-gray-600 leading-7">
                      {event.description}
                    </p>

                  </div>

                  <div className="lg:text-right">

                    <p className="font-semibold text-purple-700">
                      {event.date}
                    </p>

                    <p className="text-gray-500 mt-2">
                      {event.location}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>

      {/* PAST EVENTS */}

      <section className="bg-[#F8F7FC] py-24">

        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-4xl font-bold text-[#0e0524] mb-12">
            Past Events
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="font-bold text-xl text-[#0e0524]">
                Nuclear Stability Roundtable
              </h3>

              <p className="text-gray-500 mt-3">
                March 2026
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="font-bold text-xl text-[#0e0524]">
                Maritime Security Seminar
              </h3>

              <p className="text-gray-500 mt-3">
                January 2026
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200">
              <h3 className="font-bold text-xl text-[#0e0524]">
                Emerging Technologies Forum
              </h3>

              <p className="text-gray-500 mt-3">
                November 2025
              </p>
            </div>

          </div>

        </div>

      </section>

    </main>
  );
}